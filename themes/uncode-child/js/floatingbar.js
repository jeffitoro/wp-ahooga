(
    function($) {
        this.randomtip = function(){
            var length = $("#bar-fixed-bottom").length;
            var ran = Math.floor(Math.random()*length) + 1;
            $("#bar-fixed-bottom:nth-child(" + ran + ")").show();
    };
     
    $(document).ready(function(){   
        randomtip();
    });
})( jQuery );

jQuery(document).ready(function () {
    var woocommerce = $("article").html();

    // if i'm not in page woocommerce then action
    if(woocommerce==null){
        $("#bar-fixed-bottom").show();
    }
})