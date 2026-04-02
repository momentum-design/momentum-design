import{C as l}from"./ControlTypeMixin-DCD8KcIp.js";import{C as d,k as i}from"./iframe-CMtBaVB4.js";import{p as a}from"./index-Ba3nA9Ie.js";import"./index-Dn6gPbvl.js";import"./index-B3HyQ0tU.js";import"./preload-helper-C1FmrZbK.js";import"./index-DbGUZBel.js";import"./index-DTrDRi1E.js";import"./menuitem.component-TsFP5pOz.js";import"./listitem.component-r5kZLBBp.js";import"./query-assigned-elements-DeRVrVmF.js";import"./DisabledMixin-DFHiMMgY.js";import"./KeyDownHandledMixin-BTU93T4D.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DrwRkZoX.js";import"./index-CwhM4avw.js";import"./formfieldwrapper.constants-DA7U9DJ1.js";import"./popover.constants-TOWqMjlJ.js";import"./toggle.constants-lnLB-ovk.js";import"./index-DvWwmAqE.js";import"./popover.component-DPH042y6.js";import"./if-defined-xNyft-gm.js";import"./BackdropMixin-DQIqsQk5.js";import"./v4-CmTdKEVZ.js";import"./class-map-DykoWSL4.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DdGzSs9l.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
