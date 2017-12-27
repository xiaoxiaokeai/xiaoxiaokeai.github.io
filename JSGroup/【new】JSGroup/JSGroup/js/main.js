
$(document).ready(function () {
    $(".user").mouseenter(function () {
        $(".user_info").slideDown();
    })

    $(".user_info").mouseleave(function () {
        $(".user_info").slideUp();
    })

    var w=$(window).width();
    $("#myCarousel").height(w*570/1735);

    $("input.form-control").focus(function(){
        $(this).css("background-color","#FFFFCC");
    });
    $("input.form-control").blur(function(){
        $(this).css("background-color","white");
    });

    $("input.form-control").keypress(function(event){
        var keynum = (event.keyCode ? event.keyCode : event.which);
        if(keynum == '13'){
            $(this).css("background-color","white");
            var data=this.value;
            localStorage.setItem("search_data",data);
            window.location.href="search.html";

        }
    });

})

$(window).resize(function () {
    var w=$(window).width();
    $("#myCarousel").height(w*570/1735);
})

