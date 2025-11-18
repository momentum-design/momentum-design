import{C as i}from"./ControlTypeMixin-CWWHto0E.js";import{E as d,k as l}from"./iframe-D0jeH_1V.js";import{p as a}from"./index-K1gnSoAO.js";import"./index-n5dnmW3D.js";import"./index-Ds-r6kCg.js";import"./preload-helper-C1FmrZbK.js";import"./index-DeFIgEEb.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CYKkKpU7.js";import"./listitem.component-BmmQFt2E.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DxZG6Klh.js";import"./DisabledMixin-CgF8PS8f.js";import"./index-dEZzaSdf.js";import"./formfieldwrapper.constants-CTURLOGg.js";import"./toggle.constants-Cbt6YLAS.js";import"./index-CzH_gc-F.js";import"./popover.component-DPWF8ikr.js";import"./if-defined-CfnkxC3R.js";import"./BackdropMixin-CVoxCdx-.js";import"./v4-CmTdKEVZ.js";import"./class-map-B7n3dgYr.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-B44FFCVS.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
