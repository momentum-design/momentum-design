import{C as l}from"./ControlTypeMixin-pYlK6YSw.js";import{C as d,k as i}from"./iframe-CwHTiZJN.js";import{p as a}from"./index-C4lrFjaQ.js";import"./index-UdJUPPOa.js";import"./index-uFOsp8Ty.js";import"./preload-helper-C1FmrZbK.js";import"./index-C25PLri4.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BCJw4d-E.js";import"./listitem.component-DSjGe5dj.js";import"./query-assigned-elements-COV3vGvP.js";import"./DisabledMixin-DQyYsE82.js";import"./KeyDownHandledMixin-Bi1OpRtF.js";import"./index-DqEDHtQ_.js";import"./formfieldwrapper.constants-DtQHVjJp.js";import"./popover.constants-BfA1Xze9.js";import"./toggle.constants-BkILPjhY.js";import"./index-Q1rlZkQa.js";import"./popover.component-D4Y1Pkpc.js";import"./if-defined-cR5VEbI-.js";import"./BackdropMixin-BHavjDL8.js";import"./v4-CmTdKEVZ.js";import"./class-map-D2OI3dvL.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BLLyiscr.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
