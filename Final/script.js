'use strict';
//tabs menus js 
const btn = document.querySelectorAll(".product-btn");
const content = document.querySelectorAll(".content-product");

btn.forEach((tabs,index)=>{
   tabs.addEventListener("click",()=>{
      //add background color and remove class
      btn.forEach((e)=> e.classList.remove("banner-active"));
      btn[index].classList.add("banner-active");
     
      //add product active class and remove this class
      content.forEach((c)=>c.classList.remove("product-is-active"));
      content[index].classList.add("product-is-active");
   })
});
//tabs menus js 

//cookies toggle
const cookie_btn = document.querySelector("#cookie-btn");
const cookie_content = document.querySelector(".cookies-toggle");

document.addEventListener("DOMContentLoaded",()=>{
    cookie_content.style.display = "none";
    setTimeout(()=>{
      cookie_content.style.display = "block";
  },3500);
})
cookie_btn.addEventListener("click",()=>{
   cookie_content.style.display = "none";
});

//cookies toggle


// popup background image
const popup = document.querySelector(".popup-background");
const popupBtn = document.querySelector(".popup-btn-active");

document.addEventListener("DOMContentLoaded",()=>{
      //set time out popup
      setTimeout(()=>{popup.classList.remove("popup-active");},
      5000);
      //set time out popup

      //when user close popup panel
      popupBtn.addEventListener("click",()=>{
         popup.classList.add("popup-active");
      });
})

//product slider button

const sliderMenu = document.querySelector(".product-slider");
const sliderItem = document.getElementsByClassName("product-slider-item");

//next button slider
function nextButton(){
   sliderMenu.append(sliderItem[0]);
}
//prev button slider
function prevButton(){
   sliderMenu.prepend(sliderItem[sliderItem.length-1]);
}
//product slider button
//tooltips
$(function () {
   $('[data-toggle="tooltip"]').tooltip()
 })
 //tooltips

 //shop categories bars 
 const shopMenu = document.querySelector(".shop-bars-active");
 const shopBars = document.querySelector(".menu-bar-active");
 const bars     = document.querySelector(".bar-active");
document.addEventListener("DOMContentLoaded",()=>{
   shopMenu.addEventListener("click",()=>{
      //when user click menu bar and close btn
      shopBars.classList.remove("menu-bar-active");
      document.querySelector(".bar-active").addEventListener("click",(s)=>{
             if(s!==undefined || s!==null){
                shopBars.classList.add("menu-bar-active");
             }
      });  
 });
});