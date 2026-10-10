import{b9 as $,ba as E,bb as k,k as S,t as _,bc as w,bd as B}from"./iframe-Da2Y08WD.js";import{h as N}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var T=Object.defineProperty,L=(e,s,t,d)=>{for(var a=void 0,n=e.length-1,l;n>=0;n--)(l=e[n])&&(a=l(s,t,a)||a);return a&&T(s,t,a),a};class V extends ${constructor(){super(...arguments),this.brandVisualProviderContext=E.consume({host:this,context:k.Context})}render(){var s,t,d,a,n;return S`
      <p>Brand Visual Set: ${(s=this.brandVisualProviderContext.value)==null?void 0:s.brandVisualSet}</p>
      <p>URL: ${(t=this.brandVisualProviderContext.value)==null?void 0:t.url}</p>
      <p>File Extension: ${(d=this.brandVisualProviderContext.value)==null?void 0:d.fileExtension}</p>
      <p>Cache strategy: ${((a=this.brandVisualProviderContext.value)==null?void 0:a.cacheStrategy)||"undefined"}</p>
      <p>Cache name: ${(n=this.brandVisualProviderContext.value)==null?void 0:n.cacheName}</p>
      <mdc-brandvisual
        style="width: 10rem;"
        name="${_(this.brandVisualName)}"
        alt-text="Brand visual resolved through the provider"
      ></mdc-brandvisual>
    `}}L([w({type:String,attribute:"brand-visual-name"})],V.prototype,"brandVisualName");V.register("mdc-subcomponent-brandvisual");const O=e=>S`
  <mdc-brandvisualprovider
    url=${e.url}
    brand-visual-set=${e["brand-visual-set"]}
    file-extension=${e["file-extension"]}
    cache-strategy=${e["cache-strategy"]}
    cache-name=${e["cache-name"]}
  >
    <mdc-subcomponent-brandvisual brand-visual-name=${e["brand-visual-name"]}></mdc-subcomponent-brandvisual>
  </mdc-brandvisualprovider>
`,j={title:"Providers/Brand Visual Provider",tags:["autodocs"],component:"mdc-brandvisualprovider",render:O,argTypes:{"brand-visual-set":{control:"select",options:["momentum-brand-visuals","custom-brand-visuals"]},"file-extension":{options:B,control:{type:"radio"}},"cache-strategy":{control:"select",options:["in-memory-cache","web-cache-api"]},"cache-name":{control:{type:"text"}},"brand-visual-name":{control:{type:"text"},description:"Name of the brand visual to be rendered underneath BrandVisualProvider (not part of BrandVisualProvider component)"},...N(["Context"])}},r={args:{"brand-visual-set":"momentum-brand-visuals",url:"./brandvisuals/svg","file-extension":"svg","cache-strategy":void 0,"cache-name":"my-brand-visual-cache","brand-visual-name":"cisco-logo-light-color"}},o={args:{...r.args,"brand-visual-set":"custom-brand-visuals",url:"./brandvisuals/svg","file-extension":"svg","brand-visual-name":"webex-app-icon-color-container"}},i={args:{...r.args,"brand-visual-set":"custom-brand-visuals",url:"./brandvisuals/png","file-extension":"png","brand-visual-name":"device-deskphone-eighteightsevenfour"}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'brand-visual-set': 'momentum-brand-visuals',
    url: './brandvisuals/svg',
    'file-extension': 'svg',
    'cache-strategy': undefined,
    'cache-name': 'my-brand-visual-cache',
    'brand-visual-name': 'cisco-logo-light-color'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var v,p,b,h,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'brand-visual-set': 'custom-brand-visuals',
    url: './brandvisuals/svg',
    'file-extension': 'svg',
    'brand-visual-name': 'webex-app-icon-color-container'
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source},description:{story:"Vector visuals are fetched over HTTP and inlined, so nothing from the\n`@momentum-design/brand-visuals` package has to be bundled by the consumer.",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var x,f,y,C,P;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'brand-visual-set': 'custom-brand-visuals',
    url: './brandvisuals/png',
    'file-extension': 'png',
    'brand-visual-name': 'device-deskphone-eighteightsevenfour'
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Some brand visuals exist only as raster artwork — these device renders and the background images\nship in the `png` folder and render through an `img` element rather than being inlined.\n\nThe `svg` and `png` folders do not overlap and a provider points at one of them, so a page using\nartwork from both folders needs two providers, one per folder.",...(P=(C=i.parameters)==null?void 0:C.docs)==null?void 0:P.description}}};const A=["Example","CustomSetSvg","CustomSetPng"];export{i as CustomSetPng,o as CustomSetSvg,r as Example,A as __namedExportsOrder,j as default};
