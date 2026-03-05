import{C as l}from"./ControlTypeMixin-C0IIfMcJ.js";import{C as d,k as i}from"./iframe-CehLMjCz.js";import{p as a}from"./index-JRKfQdde.js";import"./index-1XT0Nt0S.js";import"./index-XQNnfnds.js";import"./preload-helper-C1FmrZbK.js";import"./index-JXFkB7jR.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DMNhk10D.js";import"./listitem.component-CBpkGAud.js";import"./query-assigned-elements-2tWz9xSH.js";import"./DisabledMixin-CwKLT7nn.js";import"./KeyDownHandledMixin-DiCavKdr.js";import"./index-D86P1mDx.js";import"./formfieldwrapper.constants-CUjjiJwX.js";import"./popover.constants-TG3BSni_.js";import"./toggle.constants-yc0jOHdh.js";import"./index-D-r7Y3c1.js";import"./popover.component-CxqUY6QP.js";import"./if-defined-B2NB1HuU.js";import"./BackdropMixin-BdwhZBmn.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dhic_Gs_.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-C1ASbapG.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
