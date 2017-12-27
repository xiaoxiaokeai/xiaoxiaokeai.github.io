 $(document).ready(function () {
        var w=($(window).height());
        w=w-130;
        $("#all").height(w);
        $("#sub").click(function (){
            var user=$("#username").value;
            var pas=$("#password").value;
            localStorage.setItem("username",user);
            window.location.href="sy.html";
            $.ajax({
                type: "GET",
                url: "",
                data: {username:user, password:pas},
                dataType: "json",
                success: function (message) {

                },
                error: function (message) {

                }
            });



        })

    })
    $(window).resize(function() {
        var w=($(window).height());
        w=w-130;
        $("#all").height(w);

    });