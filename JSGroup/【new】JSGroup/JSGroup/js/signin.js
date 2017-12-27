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

public class CookieServlet extends HttpServlet {  
    private static final long serialVersionUID = 1L;  
    int count = 0;  
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
        this.doPost(request, response);  
    }  
  
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {  
        res.setContentType("text/plain");  
        PrintWriter out = res.getWriter();  
        Cookie[] cookies = req.getCookies();  
        if(cookies != null){  
            for(int i = 0 ; i < cookies.length ; i++){  
                out.println("Cookie name:" + cookies[i].getName());  
                out.println("Cookie value:" + cookies[i].getValue());  
                out.println("Cookie maxAge:" + cookies[i].getMaxAge());  
            }  
        }else{  
            out.println("No cookie.");  
        }  
        res.addCookie(new Cookie("cookieName" + count , "cookieValue" + count));  
        count++;  
    }  
}  