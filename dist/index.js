(()=>{var n="wb-date",r="year";document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelectorAll(`[${n}]`);if(!t)return;let o=new Date;t.forEach(e=>{e.getAttribute(n)===r&&(e.textContent=o.getFullYear().toString())})});})();
//# sourceMappingURL=index.js.map
