(
    function ($) {
        this.randomtip = function () {
            var length = $("#bar-fixed-bottom").length;
            var ran = Math.floor(Math.random() * length) + 1;
            $("#bar-fixed-bottom:nth-child(" + ran + ")").show();
        };

        $(document).ready(function () {
            randomtip();
        });
    })(jQuery);

jQuery(document).ready(function () {
    var pageShop = $("article").html();

    // if i'm not in page shop woocommerce then action
    if (pageShop == null) {
        // show bar bottom
        $("#bar-fixed-bottom").show();

        // table with elements of product

        // title of product
        var title = $(".uncont>.product_title.entry-title").html();

        //get desciption
        var description = document.querySelector("#description");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(title));
        description.appendChild(li);

        var produits = document.querySelectorAll("input[id^='choice_']");
        produits.forEach(function (produit) {
            produit.addEventListener("click", function (event) {
                var tabElementsProduct = [];
                tabElementsProduct.push(title);
                produits.forEach(function (self) {
                    if (self.checked) {
                        var label = self.parentElement.parentElement.parentElement.parentElement.querySelector("label").innerHTML;
                        label += ": ";
                        let doc = new DOMParser().parseFromString(self.parentElement.querySelector("label").innerHTML, 'text/html');
                        label += doc.body.firstChild.textContent;
                        tabElementsProduct.push(label);
                    }
                });
                var parentdescription = document.querySelector("#description").parentElement;
                parentdescription.removeChild(parentdescription.lastElementChild);
                var ul = document.createElement("ul");
                ul.setAttribute("id", "description");
                parentdescription.appendChild(ul);
                tabElementsProduct.forEach(function (ele) {
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(ele));
                    document.querySelector("#description").appendChild(li);
                })
                setTimeout(() => {
                    var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
                    var parentdescription = document.querySelector("#total").parentElement;
                    parentdescription.removeChild(parentdescription.lastElementChild);
                    var p = document.createElement("p");
                    p.setAttribute("id", "total");
                    p.style.textAlign = "center";
                    parentdescription.appendChild(p);
                    var q = document.querySelectorAll("input[id^='quantity_']")[0].value;
                    document.querySelector("#total").appendChild(document.createTextNode(parseInt(fields)*parseInt(q)+",00 €"));
                }, 2000);
            })
        });

        setTimeout(() => {
            var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
            document.querySelector("#total").appendChild(document.createTextNode(fields));
        }, 2000);


        var btnDefault = document.querySelector("button[name^='add-to-cart']");
        btnDefault.setAttribute('style','display:none');
        var btnPerso = document.querySelector("#btn-add");
        var form = document.querySelectorAll("form")[1];

        btnPerso.addEventListener("click", function () {
            var mEvent = document.createEvent("MouseEvent");
            mEvent.initMouseEvent("click", true, true, window, 0,
                0, 0, 0, 0,
                false, false, false, false,
                0, null);
            btnDefault.dispatchEvent(mEvent);
        })

        var produits2 = document.querySelectorAll("input[id^='ginput_quantity_']");
        var produits3 = document.querySelectorAll("input[id^='quantity_']");
        ["keyup","click"].forEach(function (event) {
            produits3[0].addEventListener(event,function (e) {
                var quantity = e.srcElement.value;
                var quantityCurrent = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;;
                var parentdescription = document.querySelector("#total").parentElement;
                parentdescription.removeChild(parentdescription.lastElementChild);
                var p = document.createElement("p");
                p.setAttribute("id", "total");
                p.style.textAlign = "center";
                parentdescription.appendChild(p);
                document.querySelector("#total").appendChild(document.createTextNode(parseInt(quantity)*parseInt(quantityCurrent)+",00 €"));
            })
        })
    }
})