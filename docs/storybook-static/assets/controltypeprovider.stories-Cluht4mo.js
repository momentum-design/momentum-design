import{C as l}from"./ControlTypeMixin-CGtXbBmF.js";import{C as d,k as i}from"./iframe-Bh94Y8e_.js";import{p as a}from"./index-B41KwG2V.js";import"./index-inPMpyse.js";import"./index-Cmaxc0S9.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dd-1mXtm.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DGxoBF1q.js";import"./listitem.component-xhax99NQ.js";import"./query-assigned-elements-BqoAY1xm.js";import"./DisabledMixin-B3aljkDD.js";import"./KeyDownHandledMixin-FpcqYAeI.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-6PHYeGyr.js";import"./index-Dzlq9PQd.js";import"./formfieldwrapper.constants-Cf3FNus8.js";import"./popover.constants-rDFa6XC5.js";import"./toggle.constants-DHKSi0ZW.js";import"./index-BIL5liCa.js";import"./popover.component-Dih5jeiu.js";import"./if-defined-CQwAQ_Nn.js";import"./BackdropMixin-B5eIbOpG.js";import"./v4-CmTdKEVZ.js";import"./class-map-wIx-bLIq.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CDQNfFbw.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
