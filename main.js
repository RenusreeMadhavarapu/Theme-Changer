const toggle = document.getElementById("button");
const body = document.querySelector("body");
const desp = document.querySelector(".desc")
let bg =true;

toggle.addEventListener("click" ,function(){

    if(bg){

        body.style.backgroundColor="black";
        desp.style.color="white";
        toggle.style.backgroundColor="white";
        toggle.style.color="black";
        toggle.innerText="Light mode";
        bg=false;
        
    }

    else{
        body.style.backgroundColor="white";
        desp.style.color="black";
        toggle.style.backgroundColor="black";
        toggle.style.color="white";
        toggle.innerText="Dark mode";
        bg=true;


    }
})