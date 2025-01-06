[21:58, 6/1/2025] Sidhant Pande: import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/home")
public class HomeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html lang='en'>");
        out.println("<head>");
        out.println("<meta charset='UTF-8'>");
        out.println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.println("<title>BJP Home Page</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<div class='header' style='background-color: #f44336; color: white; padding: 10px 20px; text-align: center;'>");
        out.println("<h1>Welcome to BJP Citizen Assistance Portal</h1>");
        out.println("</div>");
        out.println("<div class='container' style='max-width: 900px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);'>");
        out.println("<h2>About Us</h2>");
        out.println("<p>This portal is designed to connect citizens with BJP leaders to facilitate the delivery of government schemes and services.</p>");
        out.println("<h2>Quick Links</h2>");
        out.println("<a href='survey.html'><button style='background-color: #f44336; color: white; padding: 10px 15px; border: none; border-radius: 5px;'>Fill Survey Form</button></a>");
        out.println("<a href='/dashboard'><button style='background-color: #f44336; color: white; padding: 10px 15px; border: none; border-radius: 5px;'>Leader Dashboard</button></a>");
        out.println("</div>");
        out.println("<div class='footer' style='text-align: center; padding: 10px; margin-top: 20px; background-color: #ddd;'>");
        out.println("<p>&copy; 2025 BJP Citizen Assistance System. All Rights Reserved.</p>");
        out.println("</div>");
        out.println("</body>");
        out.println("</html>");
    }
}
[21:58, 6/1/2025] Sidhant Pande: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BJP Home Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .header {
            background-color: #f44336;
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .button {
            background-color: #f44336;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #d32f2f;
        }
        .footer {
            text-align: center;
            padding: 10px;
            margin-top: 20px;
            background-color: #ddd;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to BJP Citizen Assistance Portal</h1>
    </div>

    <div class="container">
        <h2>About Us</h2>
        <p>
            This portal is designed to connect citizens with BJP leaders to facilitate the delivery of government schemes and services. 
            Our goal is to empower citizens and enhance transparency in governance.
        </p>

        <h2>Quick Links</h2>
        <a href="survey.html"><button class="button">Fill Survey Form</button></a>
        <a href="/dashboard"><button class="button">Leader Dashboard</button></a>
    </div>

    <div class="footer">
        <p>&copy; 2025 BJP Citizen Assistance System. All Rights Reserved.</p>
    </div>
</body>
</html>
