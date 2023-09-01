
/***
 * add Eventlictioner on multipule elements
 */


const addEventonelements =function(element,eventtyle,callback){

for(let i=0;i<element.length;i++){
    element[i].addEventListener(eventtyle,callback)
}

}




/**
 * show the loader until the page load
 */

const preloader=document.querySelector("[data-preloader]");



window.addEventListener("load",()=>{
    preloader.classList.add("loaded");
    document.body.classList.add("loaded")
})




/****
 * 
 * close and active overlay in close  menu btn
 * 
 */

const navbar=document.querySelector("[data-navbar]");
const togglers=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector("[data-overlay]");

const togglernav=function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

}

addEventonelements(togglers,"click",togglernav)