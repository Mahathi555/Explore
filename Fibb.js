function NumberCheck(){
let a=document.getElementById("num1").value;
let b=parseInt(a);

if(b>10 && b<100){
document.getElementById("txt1").innerHTML= "Entered Number is between 10-100";
}
else
{
if(b<10)
document.getElementById("txt1").innerHTML= "Entered Number is below 10";
else
document.getElementById("txt1").innerHTML= "Entered Number is above 100";

}

}
function Fibb()
{
let n1=document.getElementById("num2").value;

let n2=parseInt(n1);

let temp;

let m=0;
let n=1;



for(let i=0;i<n2;i++)
{

temp=m+n;
m=n;
n=temp;


document.getElementById("mynum").innerHTML=temp+" ";
}
}