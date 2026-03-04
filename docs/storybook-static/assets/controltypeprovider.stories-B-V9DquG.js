import{C as l}from"./ControlTypeMixin-BNI0cYpA.js";import{C as d,k as i}from"./iframe-K492KDtv.js";import{p as a}from"./index-DIE-7ueB.js";import"./index-v1b7v2gr.js";import"./index-BGGr1X6i.js";import"./preload-helper-C1FmrZbK.js";import"./index-DnMgKUBi.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C4upg9n_.js";import"./listitem.component-CjOzuww5.js";import"./query-assigned-elements-Pk86qSXT.js";import"./DisabledMixin-DwlOflt-.js";import"./KeyDownHandledMixin-yBPTBq5Z.js";import"./index-DyKGig1A.js";import"./formfieldwrapper.constants-B-YNYjfS.js";import"./popover.constants-MfCYhu_l.js";import"./toggle.constants-CHbL-Q69.js";import"./index-BRTjjHhW.js";import"./popover.component-DXEYtwxd.js";import"./if-defined-BPfPqs2E.js";import"./BackdropMixin-BSJJ7v5d.js";import"./v4-CmTdKEVZ.js";import"./class-map-BQ3zqIaT.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Dp8lK7c9.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
