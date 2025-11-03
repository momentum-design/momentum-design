import{C as i}from"./ControlTypeMixin-DP5mPZvb.js";import{E as d,k as l}from"./iframe-CJCvwo6Z.js";import{p as a}from"./index-BetunlCe.js";import"./index-D0_D2QjH.js";import"./index-BrOJWnHk.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dzk5p1Sb.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dg3X-tN5.js";import"./listitem.component-CQiti2nL.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-B2HqSGgQ.js";import"./DisabledMixin-B0Hwgwyf.js";import"./index-DkQdPYVk.js";import"./formfieldwrapper.constants-BAosTuYY.js";import"./toggle.constants-DivGjv1x.js";import"./index-BqNyqhxf.js";import"./popover.component-CRqA1uwW.js";import"./if-defined-5guDS18C.js";import"./BackdropMixin-9axqaStB.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dk95u2Fd.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-B9-iJPxA.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
