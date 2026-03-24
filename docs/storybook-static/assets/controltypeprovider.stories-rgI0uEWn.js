import{C as l}from"./ControlTypeMixin-B6BVW9Pn.js";import{C as d,k as i}from"./iframe-D1GWnnRD.js";import{p as a}from"./index-DMltubGo.js";import"./index-B7wXbcGT.js";import"./index-nKD6N_c4.js";import"./preload-helper-C1FmrZbK.js";import"./index-DaGRSfvX.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DQ187eJx.js";import"./listitem.component-C0sDzHMS.js";import"./query-assigned-elements-DUhU34vz.js";import"./DisabledMixin-BeF7ANP5.js";import"./KeyDownHandledMixin-DsG1iV1V.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-B0lv7soH.js";import"./index-DCS2Eu22.js";import"./formfieldwrapper.constants-CXR0LAyb.js";import"./popover.constants-be-r48ud.js";import"./toggle.constants-C1NXs8fD.js";import"./index-Cyh_5LD7.js";import"./popover.component-DnvMhLY6.js";import"./if-defined-aIZVvHMc.js";import"./BackdropMixin-CbKajO9O.js";import"./v4-CmTdKEVZ.js";import"./class-map-DfIlEC1w.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-t0kJdNSO.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
