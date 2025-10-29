import{C as l}from"./ControlTypeMixin-h2z64OTb.js";import{E as d,k as i}from"./iframe-CeK4lsRG.js";import{p as a}from"./index-DBPc6w47.js";import"./index-CeLB_i_J.js";import"./index-bdM_7fi1.js";import"./preload-helper-C1FmrZbK.js";import"./index-DGUdAI4Q.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CYgy28WY.js";import"./listitem.component-CqeegD03.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-WyJrwR-3.js";import"./DisabledMixin-S32os9Wv.js";import"./index-tFA_TIzW.js";import"./formfieldwrapper.constants-w5oXduRx.js";import"./toggle.constants-atOkocIZ.js";import"./index-BqYLnxCh.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-Dd4OsJNb.js";import"./if-defined-BRN9yNKl.js";import"./BackdropMixin-DVfy17uA.js";import"./v4-CmTdKEVZ.js";import"./class-map-B-bfhkcw.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-vwAhwHOa.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
