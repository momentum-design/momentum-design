import{C as i}from"./ControlTypeMixin-DaixrIAo.js";import{E as d,k as l}from"./iframe-UcjUCg8u.js";import{p as a}from"./index-DrBQT6Ba.js";import"./index-DyvVx5tD.js";import"./index-Df8Zehfd.js";import"./preload-helper-C1FmrZbK.js";import"./index-VXLksRWJ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DIudhsTp.js";import"./listitem.component-B8ebbIer.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CtH_Eu6i.js";import"./DisabledMixin-2bH6HotN.js";import"./index-C2s-qnal.js";import"./formfieldwrapper.constants-Dv1l1uuK.js";import"./toggle.constants-C8Jfj4lm.js";import"./index-gZU-9nk8.js";import"./popover.component-X5urVUlD.js";import"./if-defined-B9sygMTp.js";import"./BackdropMixin-DNP66hoT.js";import"./v4-CmTdKEVZ.js";import"./class-map-BkgjZfxH.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-C9UNuvGh.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
