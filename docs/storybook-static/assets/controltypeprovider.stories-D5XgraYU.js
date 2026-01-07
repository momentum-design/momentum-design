import{C as l}from"./ControlTypeMixin-Bbfu-6Iv.js";import{F as d,k as i}from"./iframe-sRPgz7Dy.js";import{p as a}from"./index-DD7q-BVW.js";import"./index-Dn10PI0A.js";import"./index-BZT7ievK.js";import"./preload-helper-C1FmrZbK.js";import"./index-W_UNrl-0.js";import"./index-DTrDRi1E.js";import"./menuitem.component-aazh9gdr.js";import"./listitem.component-DSZLdltB.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Bd3wWymV.js";import"./DisabledMixin-BHVblWhw.js";import"./index-y3dGqsLw.js";import"./formfieldwrapper.constants-DFtbzfVb.js";import"./popover.constants-C7biPtE5.js";import"./toggle.constants-BWdf6CXV.js";import"./index-Nm0CvcjI.js";import"./popover.component-2NJ-2HCi.js";import"./if-defined-DrlexgLD.js";import"./BackdropMixin-Id691A7s.js";import"./v4-CmTdKEVZ.js";import"./class-map-DBr_xKdj.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DOeOzQ9m.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
