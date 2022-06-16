'use strict';
//tabs menus js 
const btn = document.querySelectorAll(".product-btn");
const content = document.querySelectorAll(".content-product");

btn.forEach((tabs,index)=>{
   tabs.addEventListener("click",()=>{
      content.forEach((c)=>c.classList.remove("product-is-active"));
      content[index].classList.add("product-is-active");
   })
});
//tabs menus js 