let f=document.getElementsByName("fname");
let l=document.getElementsByName("lname");
let btn=document.getElementsByTagName("input");
btn[2].addEventListener("click",getFormvalue);
function getFormvalue() {
    //Write your code here
	alert(f[0].value+" "+l[0].value);

}
