import{C as l}from"./ControlTypeMixin-DbgydXlL.js";import{C as d,k as i}from"./iframe-KnaVjCuf.js";import{p as a}from"./index-B7GN18Tn.js";import"./index-B9uVHwx7.js";import"./index-GAjkiC3B.js";import"./preload-helper-C1FmrZbK.js";import"./index-Cq6EcB1X.js";import"./index-DTrDRi1E.js";import"./menuitem.component-AQLLs0wt.js";import"./listitem.component-CQ_XGz12.js";import"./query-assigned-elements-BQNrH6J1.js";import"./DisabledMixin-BP8YdHVe.js";import"./KeyDownHandledMixin-Calua7Uh.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-D1nHFRTQ.js";import"./index-D7stXJ7l.js";import"./formfieldwrapper.constants-CsTTG-_P.js";import"./popover.constants-C4Lot-37.js";import"./toggle.constants-DIQ9eqX3.js";import"./index-CQI6_Oyj.js";import"./popover.component-DfGPAfBC.js";import"./if-defined-Bt26HpWq.js";import"./BackdropMixin-BGkdEqz4.js";import"./v4-CmTdKEVZ.js";import"./class-map-D_W-FW4H.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CVgCGXXI.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
