<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /*

        var myval=alert("this is alert example");

        document.write("<h1>"+myval+"</h1>");
        document.write("<h1>",myval,"</h1>");

        */

   /*

        var myval=confirm("this is confirm example");
        if(myval==true)
        {
            alert("you click on ok button");
            document.write("you click on ok button ");
        }
        else
        {
            alert("you click on cancel button");
            document.write("you click on cancel button ");
        }

        */

        var age=prompt("Enter your age : ",18);
        if(age>=18)
        {
            alert("you can vote your age is : "+age);
        }
        else 
        {
            alert("sorry! you can not vote your age is : "+age);
        }
    </script>
</body>
</html>
