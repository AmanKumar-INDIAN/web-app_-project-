
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

const preloader=document.querySelector(".preloader");



window.addEventListener("load",()=>{
    preloader.classList.add("loaded");
    document.body.classList.add("loaded")
})