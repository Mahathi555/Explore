function NameValidation(){
let a=document.getElementById("fn");
let b=document.getElementById("phno");
if(a.value == ""){
alert(" Please Enter your Name Before Submition");
}
if(!(isNaN(a.value))){
alert("Name folder won't allow digits");
}
if(b.value == ""){
alert(" Please Enter your Name Before Submition");
}
if(isNaN(b.value)){
alert("Number folder won't allow alphabets");
}
document.write("Name: "+a.value);
document.write("<br />");
document.write("PhNo: "+b.value);
}
function mycheck(){
let c=document.getElementsByName("cb");
let c1=0;
for(let i=0;i<c.length;i++){
if(c[i].checked==true)
{
c1++;
 }
}

if(c1<0){
document.getElementById('not valid').innerHTML="Please Select Atlest one checkbox" ;
return false;
}

}