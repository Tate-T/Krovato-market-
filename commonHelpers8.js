import"./assets/index-650d9fec.js";document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("searchResults");document.getElementById("headerFind").addEventListener("input",function(){var t=this.value.trim().toLowerCase();if(e.innerHTML="",t.length>=3&&t!==""){var a=document.querySelectorAll(".catalog__name"),r=new Set;a.forEach(function(o){var n=o.textContent.toLowerCase();n.includes(t)&&r.add(o.textContent)});var d=Array.from(r);d.forEach(function(o){var n=document.createElement("div");n.textContent=o,n.addEventListener("click",function(){this.textContent,window.location.href="./card-catalog-page.html"}),e.appendChild(n)}),e.classList.remove("hidden")}else e.classList.add("hidden")})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("myRange");document.querySelector(".reviews__list");const t=document.querySelectorAll(".reviews__item"),a=t[0].offsetWidth,r=t.length,d=a*(r-1);e.max=d,e.addEventListener("input",function(){const o=parseInt(e.value);t.forEach((n,s)=>{let i=-(o/a)*100;i=Math.max(i,-160.398),n.style.transform=`translateX(${i}%)`})})});
//# sourceMappingURL=commonHelpers8.js.map