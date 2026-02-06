import{C as i}from"./ControlTypeMixin-kmvoQNLZ.js";import{C as d,k as l}from"./iframe-Dhby1e8T.js";import{p as a}from"./index-ctlFp6vW.js";import"./index-BmVHBhri.js";import"./index-DVn7Y5fc.js";import"./preload-helper-C1FmrZbK.js";import"./index-BmwK3B1Q.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ACe0sMIJ.js";import"./listitem.component-1X9rPhx3.js";import"./query-assigned-elements-CP9ZK6vw.js";import"./DisabledMixin-BBW84rBN.js";import"./KeyDownHandledMixin-DWH9e7-q.js";import"./index-d2h-XXub.js";import"./formfieldwrapper.constants-ZCQaIZZ_.js";import"./popover.constants-ctRpQKVZ.js";import"./toggle.constants-CisbGlDz.js";import"./index-wIC2cilQ.js";import"./popover.component-DhkfVx6V.js";import"./if-defined-7wnCbGQ7.js";import"./BackdropMixin-Da79r85B.js";import"./v4-CmTdKEVZ.js";import"./class-map-C-O6ZuYw.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Bjoo2ILv.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
