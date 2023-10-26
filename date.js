let dateobj = new Date();
document.write(dateobj+"<br>");
let date = dateobj.toLocaleDateString();
document.write("Date:  "+date+"<br>");
let day = dateobj.getDay();
document.write("Day:  "+day+"<br>");
let time = dateobj.toLocaleTimeString();
document.write("Time:  "+time+"<br>");