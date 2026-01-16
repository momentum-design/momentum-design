import{C as l}from"./ControlTypeMixin-tVGj22Gb.js";import{F as d,k as i}from"./iframe-B7bS_Rc1.js";import{p as a}from"./index-BeSsrQSZ.js";import"./index-D18Kpy0A.js";import"./index-JyZJrnEU.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bk2gUKGo.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cdp7jPYf.js";import"./listitem.component-B1Ya4Ch_.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-C4f_ZdSf.js";import"./DisabledMixin-fEKYSTzR.js";import"./index-CdUGP6R9.js";import"./formfieldwrapper.constants-DcMblaxW.js";import"./popover.constants-BPk-51YU.js";import"./toggle.constants-Ch_FN3in.js";import"./index-jGEYtLVu.js";import"./popover.component-CSvAI602.js";import"./if-defined-i8aYRTth.js";import"./BackdropMixin-BDk9x3p8.js";import"./v4-CmTdKEVZ.js";import"./class-map-BOnbJkGp.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BaWK5eIE.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
