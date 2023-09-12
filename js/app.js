const bar = document.querySelector('.bar');

const close = document.querySelector('.close');

const nav = document.querySelector('.navbar');

if(bar){
    bar.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}