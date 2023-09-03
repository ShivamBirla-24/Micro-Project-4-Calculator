const input=document.getElementById("input");
const buttons= document.querySelectorAll(".btn")
const reset=document.getElementById("reset")
const del=document.getElementById("delete")
const calculate=document.getElementById("equal")

reset.addEventListener('click',()=>{
    input.value="";
})

del.addEventListener('click',()=>{
    var str=input.value;
    str=str.substring(0,str.length-1);
    input.value=str;
})

buttons.forEach((button)=>{
       button.addEventListener('click',(e)=>{
             if(input.value===0){
                input.value=e.target.innerText;
             }
             else{
                input.value=input.value+e.target.innerText;
             }
       })
})

function index(string){
        if(string.includes("+")){
            return string.indexOf("+",1);
        }
        else if(string.includes("-")){
            return string.indexOf("-",1);
        }
        else if(string.includes("*")){
            return string.indexOf("*",1);
        }
        else if(string.includes("/")){
            return string.indexOf("/",1);
        }
        else{
            return ;
        }
}

calculate.addEventListener('click',function Calculate(){
    var string=input.value;
    var lastindex=string.length-1;
    var positionindex=index(string);
    var num1= +(string.substring(0,positionindex));
    var num2= +(string.substring(positionindex+1,lastindex+1));
    if(string.includes("+")){
        input.value=num1+num2;
    }
    else if(string.includes("-")){
        input.value = num1-num2;
    }
    else if(string.includes("*")){
        input.value=num1*num2;
    }
    else if(string.includes("/")){
        if(num1,num2===0){
            input.value="Infinity";
        }
        else{
            input.value = num1/num2;
        }
    }
    else if(!string){
           input.value=0;
    }
    else{
        input.value = "Invalid";
    }
})



