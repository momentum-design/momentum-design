import{C as l}from"./ControlTypeMixin-B5Tyi5eI.js";import{C as d,k as i}from"./iframe-BCdSJdD4.js";import{p as a}from"./index-o2tsQtMC.js";import"./index-CBqYAR-S.js";import"./index-BFTYxzuq.js";import"./preload-helper-C1FmrZbK.js";import"./index-gx25Rgqu.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BV61lmgN.js";import"./listitem.component-DhJbZl5W.js";import"./query-assigned-elements-CY4plt86.js";import"./DisabledMixin-8GB5GwzM.js";import"./KeyDownHandledMixin-D9ThXIq0.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-i-_lows1.js";import"./index-DoOjgLKS.js";import"./formfieldwrapper.constants-CxnbrMWr.js";import"./popover.constants-B_tbHHWM.js";import"./toggle.constants-DnTHxeqM.js";import"./index-Bhv7L89v.js";import"./popover.component-DLdy5gH5.js";import"./if-defined-DQb3B5M8.js";import"./BackdropMixin-Bh2tQTV0.js";import"./v4-CmTdKEVZ.js";import"./class-map-JLoVNPXE.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cs7V0-Ox.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
