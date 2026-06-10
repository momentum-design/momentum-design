import{C as l}from"./ControlTypeMixin-CyRn-nvj.js";import{C as d,k as i}from"./iframe-UyXdqIeP.js";import{p as a}from"./index-BKC4TRk9.js";import"./index-DDNqPX-n.js";import"./index-D3N6xEdp.js";import"./preload-helper-C1FmrZbK.js";import"./index-19pUpU0B.js";import"./index-DTrDRi1E.js";import"./menuitem.component-6JqZUaYv.js";import"./listitem.component-DmxVb26z.js";import"./query-assigned-elements-DQfAstP-.js";import"./DisabledMixin-DsCse2Ad.js";import"./KeyDownHandledMixin-CJYH15gC.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-_ADs2-sf.js";import"./index-gHBqmpm_.js";import"./formfieldwrapper.constants-BXepdUeD.js";import"./popover.constants-rALwrhG0.js";import"./toggle.constants-BFDfu8Xw.js";import"./index-HoXOZlfE.js";import"./popover.component-Cdfctp_C.js";import"./if-defined-BXPbalLm.js";import"./BackdropMixin-AGiM4vq3.js";import"./v4-CmTdKEVZ.js";import"./class-map-DUrOUioH.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-COUSMj4J.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
