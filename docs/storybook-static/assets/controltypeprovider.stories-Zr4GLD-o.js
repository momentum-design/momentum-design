import{C as l}from"./ControlTypeMixin-C3V1YGfY.js";import{C as d,k as i}from"./iframe-C6gz75uu.js";import{p as a}from"./index-Buz5Gdoh.js";import"./index-vhZ2xhn7.js";import"./index-BrAUyqMB.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bjb1ds6w.js";import"./index-DTrDRi1E.js";import"./menuitem.component-7v57pP6C.js";import"./listitem.component-iNQctW5Y.js";import"./query-assigned-elements-HCdOrY33.js";import"./DisabledMixin-B_w9ZmxY.js";import"./KeyDownHandledMixin-Dnjzip49.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-H85iPdNZ.js";import"./index-u-ne-Yo4.js";import"./formfieldwrapper.constants-DxhYJqmT.js";import"./popover.constants-C4uKivHV.js";import"./toggle.constants-kEqR5SE_.js";import"./index-CyY7LePq.js";import"./popover.component-V2556_qJ.js";import"./if-defined-C_NTEn5h.js";import"./BackdropMixin-Bk7p9vkY.js";import"./v4-CmTdKEVZ.js";import"./class-map-4lOMC_ri.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-wyTb9rKv.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
