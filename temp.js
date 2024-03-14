
let temp;
document.getElementById("submitbtn").onclick=function(){
   
    if(document.getElementById("cbtn").checked){
        temp=document.getElementById("textbox").value;
        temp=Number(temp);
        temp=toCelsius(temp);
        document.getElementById("ans").innerHTML=temp+" celsius";
    }
    else if(document.getElementById("fbtn").checked){
        temp=document.getElementById("textbox").value;
        temp=Number(temp);
        temp=toFahrenheit(temp);
        document.getElementById("ans").innerHTML=temp+" fahrenheit";
    }
    else{
        document.getElementById("ans").innerHTML="select the unit";
    }
}

function toCelsius(){
    return (temp-32)*(5/9);
}

function toFahrenheit(){
    return temp * (9/5)+32;
}