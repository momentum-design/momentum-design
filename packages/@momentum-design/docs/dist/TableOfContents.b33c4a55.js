import{_ as u,p as g,h}from"./chunks/hooks.module.bdddee8d.js";import{o as n}from"./chunks/jsxRuntime.module.ac173098.js";import{p as v}from"./chunks/preact.module.9d6f4735.js";const{replace:w}="",O=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,b={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},k=t=>b[t],C=t=>w.call(t,O,k),A=({headings:t=[]})=>{const o=u(),l="on-this-page-heading",d=u([]),[p,a]=g("overview");h(()=>{const e=()=>{const s=document.querySelectorAll("article :is(h1, h2, h3, h4)");d.current=Array.from(s).map(r=>({id:r.id,topOffset:r.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),h(()=>{if(!o.current)return;const e=c=>{for(const i of c)if(i.isIntersecting){const{id:m}=i.target;if(m===l)continue;a(i.target.id);break}},s={rootMargin:"-100px 0% -66%",threshold:1},r=new IntersectionObserver(e,s);return document.querySelectorAll("article :is(h1,h2,h3)").forEach(c=>r.observe(c)),()=>r.disconnect()},[o.current]);const f=e=>{a(e.target.getAttribute("href").replace("#",""))};return n(v,{children:[n("h2",{id:l,className:"heading",children:"On this page"}),n("ul",{ref:o,children:t.filter(({depth:e})=>e>1&&e<4).map(e=>n("li",{className:`header-link depth-${e.depth} ${p===e.slug?"current-header-link":""}`.trim(),children:n("a",{href:`#${e.slug}`,onClick:f,children:C(e.text)})}))})]})};export{A as default};
