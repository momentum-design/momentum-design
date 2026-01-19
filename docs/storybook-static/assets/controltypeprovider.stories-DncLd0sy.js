import{C as l}from"./ControlTypeMixin-Bqx5C-sp.js";import{F as d,k as i}from"./iframe-LsDyd5eA.js";import{p as a}from"./index-vEOUe4_P.js";import"./index-VUk1hcSf.js";import"./index-CCDyRAbG.js";import"./preload-helper-C1FmrZbK.js";import"./index-ig4UHez8.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B5Rr3eJq.js";import"./listitem.component-DZQu-qJw.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-D4fKto6W.js";import"./KeyToActionMixin-CoSo1tIm.js";import"./index-DA_XVRP7.js";import"./formfieldwrapper.constants-BT2UGxVP.js";import"./popover.constants-B0afLGWX.js";import"./toggle.constants-xVW08g2w.js";import"./index-CKOMEwfd.js";import"./popover.component-Ckj_5iiF.js";import"./if-defined-qZQu8y_k.js";import"./BackdropMixin-BOgv5Gp9.js";import"./v4-CmTdKEVZ.js";import"./class-map-CtaPNnFV.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-GY6irOCH.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
