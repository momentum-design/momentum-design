const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-g1djAheZ.js","./jsx-runtime-N83kn9-W.js","./_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-DG-vnFJU.js";import{r as s,R as n}from"./jsx-runtime-N83kn9-W.js";import{ai as E,aj as d,ak as R,al as v,am as w}from"./index-BaLBldfP.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";var l,c=E;l=c.createRoot,c.hydrateRoot;var a=new Map;function _(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var x=async(e,t,r)=>{let o=await g(t,r);if(_()){o.render(e);return}let{promise:i,resolve:m}=Promise.withResolvers();return o.render(s.createElement(f,{callback:m},e)),i},y=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},g=async(e,t)=>{let r=a.get(e);return r||(r=l(e,t),a.set(e,r)),r},D={code:d,a:R,...v},C=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},j=class{constructor(){this.render=async(e,t,r)=>{let o={...D,...t==null?void 0:t.components},i=w;return new Promise((m,p)=>{h(async()=>{const{MDXProvider:u}=await import("./index-g1djAheZ.js");return{MDXProvider:u}},__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:u})=>x(n.createElement(C,{showException:p,key:Math.random()},n.createElement(u,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{y(e)}}};export{j as DocsRenderer,D as defaultComponents};
