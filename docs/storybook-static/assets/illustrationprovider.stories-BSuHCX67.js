import"./index-CqaqFNqB.js";import{k as m}from"./lit-element-D5KKan5q.js";import{C as d,n as v}from"./provider.component-BaQC7CJH.js";import{t as h}from"./if-defined-D5BV9-c0.js";import{p as x}from"./index-CbmtUAjA.js";import{I as f,A as y}from"./illustrationprovider.component-0uY3lvrC.js";import{a as C}from"./utils-CFOyPOhY.js";import"./create-context-89xeped_.js";var g=Object.defineProperty,P=(t,r,n,a)=>{for(var e=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=s(r,n,e)||e);return e&&g(r,n,e),e};class p extends d{constructor(){super(...arguments),this.illustrationProviderContext=x.consume({host:this,context:f.Context})}render(){var r,n,a,e,o;return m`
      <p>Illustration Set: ${(r=this.illustrationProviderContext.value)==null?void 0:r.illustrationSet}</p>
      <p>URL: ${(n=this.illustrationProviderContext.value)==null?void 0:n.url}</p>
      <p>File Extension: ${(a=this.illustrationProviderContext.value)==null?void 0:a.fileExtension}</p>
      <p>Cache strategy: ${((e=this.illustrationProviderContext.value)==null?void 0:e.cacheStrategy)||"undefined"}</p>
      <p>Cache name: ${(o=this.illustrationProviderContext.value)==null?void 0:o.cacheName}</p>
      <mdc-illustration name="${h(this.illustrationName)}"></mdc-illustration>
    `}}P([v({type:String,attribute:"illustration-name"})],p.prototype,"illustrationName");p.register("mdc-subcomponent-illustration");const $=t=>m`
  <mdc-illustrationprovider
    url=${t.url}
    illustration-set=${t["illustration-set"]}
    file-extension=${t["file-extension"]}
    cache-strategy=${t["cache-strategy"]}
    cache-name=${t["cache-name"]}
  >
    <mdc-subcomponent-illustration illustration-name=${t["illustration-name"]}></mdc-subcomponent-illustration>
  </mdc-illustrationprovider>
`,w={title:"Components/illustrationprovider",tags:["autodocs"],component:"mdc-illustrationprovider",render:$,parameters:{badges:["stable"]},argTypes:{"illustration-set":{control:"select",options:["momentum-illustrations","custom-illustrations"]},"file-extension":{options:y,control:{type:"radio"}},"cache-strategy":{control:"select",options:["in-memory-cache","web-cache-api"]},"cache-name":{control:{type:"text"}},"illustration-name":{control:{type:"text"},description:"Name of the illustration to be rendered underneath IllustrationProvider (not part of IllustrationProvider component)"},...C(["Context"])}},i={args:{"illustration-set":"momentum-illustrations",url:"./illustrations/svg","file-extension":"svg","cache-strategy":void 0,"cache-name":"my-illustration-cache","illustration-name":"astronaut-avatar-onetwozero-empty-secondary"}};var l,u,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'illustration-set': 'momentum-illustrations',
    url: './illustrations/svg',
    'file-extension': 'svg',
    'cache-strategy': undefined,
    'cache-name': 'my-illustration-cache',
    'illustration-name': 'astronaut-avatar-onetwozero-empty-secondary'
  }
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const k=["Example"];export{i as Example,k as __namedExportsOrder,w as default};
