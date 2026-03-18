import{C as l}from"./ControlTypeMixin-DgCqVvlA.js";import{C as d,k as i}from"./iframe-XWsxOvFK.js";import{p as a}from"./index-Bi8v92hK.js";import"./index-BFJYuYMD.js";import"./index-DUFWDtT8.js";import"./preload-helper-C1FmrZbK.js";import"./index-C4pU2kcn.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CYiGb_T5.js";import"./listitem.component-D9Q98Bhe.js";import"./query-assigned-elements-BbTu6B6t.js";import"./DisabledMixin-ChexUNpd.js";import"./KeyDownHandledMixin-D8wZ24Zf.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DiuqMF5v.js";import"./index-D1HNSmhZ.js";import"./formfieldwrapper.constants-CafgdQ5g.js";import"./popover.constants-Bf0xwOfr.js";import"./toggle.constants-CD_oDVuM.js";import"./index-DjuUYLAy.js";import"./popover.component-NpFfedEQ.js";import"./if-defined-DU1Fw2i1.js";import"./BackdropMixin-q2kIVIns.js";import"./v4-CmTdKEVZ.js";import"./class-map-C_WoOg0o.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CJkN8rw8.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,J={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,K as __namedExportsOrder,J as default};
