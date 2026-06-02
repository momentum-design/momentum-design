import{C as l}from"./ControlTypeMixin-ZkB4H6Zo.js";import{C as d,k as i}from"./iframe-CIeKDA7e.js";import{p as a}from"./index-B92FviFn.js";import"./index-GZeMcV1V.js";import"./index-DQhoNePf.js";import"./preload-helper-C1FmrZbK.js";import"./index-peG7s7nl.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BYKweNgn.js";import"./listitem.component-C5N_MGm_.js";import"./query-assigned-elements-C5Wh6zUA.js";import"./DisabledMixin-CbT3ZRUJ.js";import"./KeyDownHandledMixin-D_ZfzMUi.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BKuzmZZY.js";import"./index-lIVl0-dx.js";import"./formfieldwrapper.constants-BhG5gCx7.js";import"./popover.constants-BQsX0MA8.js";import"./toggle.constants-9fsYchR1.js";import"./index-DuHlfdXO.js";import"./popover.component-7H8zAIWG.js";import"./if-defined-CPfNo01X.js";import"./BackdropMixin-5gqLIriG.js";import"./v4-CmTdKEVZ.js";import"./class-map-B4CqledE.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D0mDnkJD.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
