//Первое задание
document.querySelector("h1").innerHTML="My name is Diar , i'm from CS-2122 group";
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
const today = new Date();

//Вывод второго задания
document.write('Year:' + today.getFullYear() + '<br/>' +
'Today is:' + days[today.getDay()] + '<br/>' +
'Date:' + today.getDate() + '<br/>' +
'Month:' + months[(today.getMonth())] + '<br/>' +
'Time:' + today.toLocaleString('en-US' , { hour: 'numeric', hour12: true }) + ':' + today.getMinutes() + ':' + today.getSeconds());

//Третье задание
document.write('<br/>')
var grad=new Date(2024, 7, 20);
var one_day=1000*60*60*24;
document.write(Math.ceil((grad.getTime()-today.getTime())/(one_day))+
" days left until the freedom!");

//Четверттое задание
function myfun()
{
  var a=document.getElementById('number').value;
  var b=document.getElementById('numbers').value;
  document.getElementById('result').innerHTML=(a*b)
}
function myfun2()
{
  var a=document.getElementById('number').value;
  var b=document.getElementById('numbers').value;
  document.getElementById('result').innerHTML=(a/b)
}
