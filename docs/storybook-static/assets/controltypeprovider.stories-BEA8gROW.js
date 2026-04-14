import{C as l}from"./ControlTypeMixin-D5_X3i3j.js";import{C as d,k as i}from"./iframe-DbAt1rJM.js";import{p as a}from"./index-CPjR-Z1M.js";import"./index-Cqwz6WV1.js";import"./index--HzJo_ne.js";import"./preload-helper-C1FmrZbK.js";import"./index-DD5PxIC2.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B30fRyXG.js";import"./listitem.component-By5d1zpK.js";import"./query-assigned-elements-BwrX6cm4.js";import"./DisabledMixin-Bysad3Ja.js";import"./KeyDownHandledMixin-BoXqyLa4.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CHDFJ2SF.js";import"./index-BcrwZA8H.js";import"./formfieldwrapper.constants-BD-uCpP1.js";import"./popover.constants-ByKIR9Pq.js";import"./toggle.constants-g2xmsV6X.js";import"./index-CPPi6HGY.js";import"./popover.component-DMy1TLRs.js";import"./if-defined-DsNDmE3q.js";import"./BackdropMixin-s6PnTJg3.js";import"./v4-CmTdKEVZ.js";import"./class-map-Cdl6osS-.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DeJOddj6.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
