import{i,a as u,S as d}from"./assets/vendor-u8rapaCG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="YOUR_API_KEY",m="https://pixabay.com/api/",p=document.querySelector("#search-form"),c=document.querySelector("#gallery"),y=document.querySelector("#loader");let g;p.addEventListener("submit",h);async function h(s){s.preventDefault();const o=s.target.querySelector("#query").value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search term!"});return}L(),l();try{const{data:r}=await u.get(`${m}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);r.hits.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(r.hits),g=new d(".gallery a",{captionsData:"alt",captionDelay:250}))}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{l()}}function b(s){const o=s.map(r=>`
    <a href="${r.largeImageURL}" class="gallery__item">
      <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Comments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </a>
  `).join("");c.innerHTML=o}function L(){c.innerHTML=""}function l(){y.classList.toggle("hidden")}
//# sourceMappingURL=index.js.map
