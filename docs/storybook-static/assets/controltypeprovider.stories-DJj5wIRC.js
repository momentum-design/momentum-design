import{C as l}from"./ControlTypeMixin-Cj6FSW1w.js";import{C as d,k as i}from"./iframe-Cw3hWe9-.js";import{p as a}from"./index-aG5WixC3.js";import"./index-g8Vle-aB.js";import"./index-D6-UMZmd.js";import"./preload-helper-C1FmrZbK.js";import"./index-D27HkEz6.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BqaWbZI0.js";import"./listitem.component-jsGktKJ_.js";import"./query-assigned-elements-IIwFEuFy.js";import"./DisabledMixin-CLuiJxRs.js";import"./KeyDownHandledMixin-CjJRInCW.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BQ3h_7x9.js";import"./index-DtjaD_4i.js";import"./formfieldwrapper.constants-C6FyC3aq.js";import"./popover.constants-dm2CvP71.js";import"./toggle.constants-DvI_BMAp.js";import"./index-DjCebfT5.js";import"./popover.component-BmLZZY3r.js";import"./if-defined-_ax9bU8M.js";import"./BackdropMixin-DuSRThUy.js";import"./v4-CmTdKEVZ.js";import"./class-map-7-MW9LRd.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-1xJz9EI-.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
