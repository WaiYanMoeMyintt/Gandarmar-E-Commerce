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