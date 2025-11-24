import{C as i}from"./ControlTypeMixin-jlBnhJCv.js";import{E as d,k as l}from"./iframe-C1Rm-ZyG.js";import{p as a}from"./index-BdqHAH0n.js";import"./index-RrviIdGQ.js";import"./index-DpCHAsTy.js";import"./preload-helper-C1FmrZbK.js";import"./index-CIWNyVoT.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CoGk7SWm.js";import"./listitem.component-Fy7q7nnb.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CHWXeSIH.js";import"./DisabledMixin-CpNZKoNP.js";import"./index-CSPfwD1w.js";import"./formfieldwrapper.constants-oZgESqtS.js";import"./toggle.constants-d6KQzvpE.js";import"./index-D3Rg1jAq.js";import"./popover.component-DnlDjIsj.js";import"./if-defined-CQYAGgbL.js";import"./BackdropMixin-BpNXNAF1.js";import"./v4-CmTdKEVZ.js";import"./class-map-BsPfrtqO.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cs4lsWCj.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
