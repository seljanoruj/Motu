const button=document.querySelector(".button");
const menyu=document.querySelector(".menyu");
const button1=document.querySelector(".button1");
const openmenyu=()=>{
    if( menyu.style.transform="translateX(500px)")
    {
       menyu.style.transform="translateX(0)" ;
    }
    else{
        menyu.style.transform="translateX(500px)" ;
    }
}
button.addEventListener("click",openmenyu);

const closemenyu=()=>{
    if( menyu.style.transform="translateX(0)")
    {
        menyu.style.transform="translateX(500px)" ;
    }
    else{
        menyu.style.transform="translateX(0)"
    }
}
button1.addEventListener("click",closemenyu);

 
    // $('.button').click(function(){ 
    //     $('.menyu').toggleClass("left");
    // });
