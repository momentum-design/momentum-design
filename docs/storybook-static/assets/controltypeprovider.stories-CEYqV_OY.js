import{C as l}from"./ControlTypeMixin-BOkRawkV.js";import{C as d,k as i}from"./iframe-CWZHLpSW.js";import{p as a}from"./index-BTHDyICb.js";import"./index-Dqj44ktC.js";import"./index-DnqPOqd2.js";import"./preload-helper-C1FmrZbK.js";import"./index-gcvzhn-G.js";import"./index-DTrDRi1E.js";import"./menuitem.component-iD4ieJTg.js";import"./listitem.component-jBp39c4F.js";import"./query-assigned-elements-Ds5A1fPi.js";import"./DisabledMixin-C-G1XPVm.js";import"./KeyDownHandledMixin-e2YdyScp.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DEPgrM_T.js";import"./index-hAC2WWr2.js";import"./formfieldwrapper.constants-BPP3OG5h.js";import"./popover.constants-Dbh1flcN.js";import"./toggle.constants-DysbdJJ0.js";import"./index-D_nb7hvo.js";import"./popover.component-3-Wjd7rt.js";import"./if-defined-BHKaK788.js";import"./BackdropMixin-D8jWkK2i.js";import"./v4-CmTdKEVZ.js";import"./class-map-DPg00L9o.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CPCb28_T.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
