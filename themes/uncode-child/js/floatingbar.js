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