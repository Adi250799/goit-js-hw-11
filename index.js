import{S as l,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p="46331793-9cec4180ce0cddf1fbb8fc669",u=document.getElementById("search-form"),f=document.getElementById("search-input"),i=document.getElementById("gallery"),n=document.getElementById("loader");let m=new l(".gallery a");const h=async o=>{const t=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;function r(){n.style.display="block"}function a(){n.style.display="none"}n.hidden=!0;try{r();const s=await(await fetch(t)).json();a(),g(),n.hidden=!1,s.hits.length===0?d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(s.hits),m.refresh())}catch(e){n.hidden=!0,console.error("Error fetching images from Pixabay:",e)}},y=o=>{o.forEach(t=>{const r=document.createElement("div");r.classList.add("card"),r.innerHTML=`
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}">
            </a>
            <div class="stats">
                <span class="span">Likes
                ${t.likes}</span>
                <span class="span">Views 
                ${t.views}</span>
                <span class="span">Comments 
                ${t.comments}</span>
                <span class="span">Downloads 
                ${t.downloads}</span>
            </div>
        `,i.appendChild(r)})},g=()=>{i.innerHTML=""};u.addEventListener("submit",o=>{o.preventDefault();const t=f.value.trim();t!==""&&h(t)});
//# sourceMappingURL=index.js.map
