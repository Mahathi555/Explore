function Power()
{
let m=document.getElementById("num1").value;
let n=document.getElementById("num2").value;
let a=parseInt(m);
let b=parseInt(n);
let c=Math.pow(a,b);
form1.n1.value=c;

}
function SquareRoot()
{

let m=document.getElementById("num3").value;

let a=parseFloat(m);
let c=Math.sqrt(a);
form1.n2.value=c;
}
function AdsoValue()
{

let m=document.getElementById("num4").value;

let a=parseFloat(m);
let c=Math.abs(a);
form1.n3.value=c;
}
function CeliIt()
{

let m=document.getElementById("num5").value;

let a=parseFloat(m);
let c=Math.ceil(a);
form1.n4.value=c;
}
function Round()
{

let m=document.getElementById("num6").value;

let a=parseFloat(m);
let c=Math.round(a);
form1.n5.value=c;
}
function floorIt()
{

let m=document.getElementById("num7").value;

let a=parseFloat(m);
let c=Math.floor(a);
form1.n6.value=c;
}
function Random()
{
let c=Math.random();
form1.n9.value=c;
}
function Trigsin()
{

let m=document.getElementById("num8").value;

let a=parseFloat(m);
let c=Math.sin(a*Math.PI/180);
form1.n7.value=c;
}
function Trigcos()
{

let m=document.getElementById("num9").value;

let a=parseFloat(m);
let c=Math.cos(a*Math.PI/180);
form1.n8.value=c;
}