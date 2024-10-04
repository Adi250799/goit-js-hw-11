import{i,a as u,S as f}from"./assets/vendor-u8rapaCG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="46331793-9cec4180ce0cddf1fbb8fc669",p="https://pixabay.com/api/",m=document.querySelector("#search-form"),c=document.querySelector("#gallery"),y=document.querySelector("#loader");let g;m.addEventListener("submit",h);async function h(s){s.preventDefault();const o=s.target.querySelector("#search-input").value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search term!"});return}L(),l();try{const{data:t}=await u.get(`${p}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);t.hits.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(t.hits),g=new f(".gallery a",{captionsData:"alt",captionDelay:250}))}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{l()}}function b(s){const o=s.map(t=>`
    <a href="${t.largeImageURL}" class="gallery__item">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </a>
  `).join("");c.innerHTML=o}function L(){c.innerHTML=""}function l(){y.classList.toggle("hidden")}
//# sourceMappingURL=index.js.map
