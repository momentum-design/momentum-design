import{A as u,h as g,y as h}from"./chunks/hooks.module.25c96f60.js";import{u as n}from"./chunks/jsxRuntime.module.e963217d.js";import{k as v}from"./chunks/preact.module.23b63fea.js";const{replace:w}="",O=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,b={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},k=t=>b[t],C=t=>w.call(t,O,k),q=({headings:t=[]})=>{const o=u(),l="on-this-page-heading",d=u([]),[f,a]=g("overview");h(()=>{const e=()=>{const s=document.querySelectorAll("article :is(h1, h2, h3, h4)");d.current=Array.from(s).map(r=>({id:r.id,topOffset:r.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),h(()=>{if(!o.current)return;const e=c=>{for(const i of c)if(i.isIntersecting){const{id:m}=i.target;if(m===l)continue;a(i.target.id);break}},s={rootMargin:"-100px 0% -66%",threshold:1},r=new IntersectionObserver(e,s);return document.querySelectorAll("article :is(h1,h2,h3)").forEach(c=>r.observe(c)),()=>r.disconnect()},[o.current]);const p=e=>{a(e.target.getAttribute("href").replace("#",""))};return n(v,{children:[n("h2",{id:l,className:"heading",children:"On this page"}),n("ul",{ref:o,children:t.filter(({depth:e})=>e>1&&e<4).map(e=>n("li",{className:`header-link depth-${e.depth} ${f===e.slug?"current-header-link":""}`.trim(),children:n("a",{href:`#${e.slug}`,onClick:p,children:C(e.text)})}))})]})};export{q as default};