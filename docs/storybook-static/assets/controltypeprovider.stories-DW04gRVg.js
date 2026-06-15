import{C as l}from"./ControlTypeMixin-qY1Q2o_2.js";import{C as d,k as i}from"./iframe-K3793TQ_.js";import{p as a}from"./index-CjzTMaKK.js";import"./index-BiiqrA9U.js";import"./index-CS_FX0Qb.js";import"./preload-helper-C1FmrZbK.js";import"./index-B9Hx66pQ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C24j7Duj.js";import"./listitem.component-DbDvaljN.js";import"./query-assigned-elements-BbwW7vRu.js";import"./DisabledMixin-BC25uM5G.js";import"./KeyDownHandledMixin-acswgJOJ.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-VJsZMi61.js";import"./index-tBU2qV3j.js";import"./formfieldwrapper.constants-Bb5xZEZv.js";import"./popover.constants-VdJzSeM1.js";import"./toggle.constants-23UOgzO_.js";import"./index-BRAocQfF.js";import"./popover.component-Bof5cLB0.js";import"./if-defined-D-9eRdag.js";import"./BackdropMixin-C087wFST.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dg60UViz.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-C2HaNWdL.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
