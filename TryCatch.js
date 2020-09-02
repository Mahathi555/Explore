function NumberCheck(){
let mes;

mes=document.getElementById("txt1");
mes.innerHTML="";
let a=document.getElementById("num1").value;

let b=parseInt(a);
try
{
if(b=="") throw "empty";
if(isNaN(b)) throw "not a number";
if(b<0) throw "-ve number";
if(b<10) throw "below 10 "
if(b>100) throw "above 100 "
}
catch(err)
{
mes.innerHTML="Entered data is "+err;
}
if(b>10 && b<100){
document.getElementById("txt1").innerHTML= "Entered Number is between 10-100";
}


}
function Fibb()

{
let mes1;
mes=document.getElementById("txt2");
mes.innerHTML="";

let n1=document.getElementById("num2").value;

let n2=parseInt(n1);
try
{
if(n2=="") throw "empty";
if(isNaN(n2)) throw "not a number";
if(n2<0) throw "-ve number";
if(n2<2) throw "below 10 "
if(n2>=100) throw "above 100 "
}
catch(err)
{
mes.innerHTML="Entered data is "+err;
}
let temp;

let m=0;
let n=1;


for(let i=0;i<n2;i++)
{

temp=m+n;
m=n;
n=temp;


document.getElementById("txt2").innerHTML=temp+"";
}
}