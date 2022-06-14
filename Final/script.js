'use strict';
const productTabs = document.querySelectorAll(".product-tabs");
const productBtn = document.querySelectorAll(".product-btn");

productBtn.forEach((s)=>{
    s.addEventListener("click",(tabs)=>{
        const product = productTabs.document.querySelectorAll('[data-product]');
        console.log(product);
    })
})
b