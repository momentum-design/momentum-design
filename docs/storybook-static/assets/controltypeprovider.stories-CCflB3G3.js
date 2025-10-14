import{C as i}from"./index-C1oEDpWb.js";import{E as d,k as l}from"./iframe-CZp7GZ56.js";import{p as a}from"./index-caAjh5dE.js";import"./index-vYOvMuPM.js";import"./index-DiXljgf2.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-9Xd0qcv5.js";import"./DisabledMixin-DHpM1y9t.js";import"./toggle.constants-8HVPqGqv.js";import"./index-BmMz5bub.js";import"./popover.component-DiknLMhL.js";import"./base-DIkkzJ-c.js";import"./if-defined-lk-75_Ux.js";import"./BackdropMixin-DvCgBs9L.js";import"./v4-CmTdKEVZ.js";import"./class-map-CvtrpGEz.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-BBMgWVZE.js";import"./listitem.component-C8MQRi5N.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-Dv9-xBmB.js";import"./menuitemcheckbox.constants-DA1fX6Ri.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
