import{C as l}from"./ControlTypeMixin-BCHZsAf1.js";import{C as d,k as i}from"./iframe-DJ5UPLED.js";import{p as a}from"./index-DLz7mNzh.js";import"./index-CSYgc8rY.js";import"./index-J-rUCFCy.js";import"./preload-helper-C1FmrZbK.js";import"./index-CryCLZ7k.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BFCyHip1.js";import"./listitem.component-DtuNUWVn.js";import"./query-assigned-elements-fyBqjumW.js";import"./DisabledMixin-CfNlg7hc.js";import"./KeyDownHandledMixin-B2k6SFGH.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-C6ccNkbG.js";import"./index-OnH7yAyQ.js";import"./formfieldwrapper.constants-D7-8vPlE.js";import"./popover.constants-CTmp0KIb.js";import"./toggle.constants-CVZIHT_Y.js";import"./index-wwiukTSo.js";import"./popover.component-Dytlq9qF.js";import"./if-defined-CyaRW62x.js";import"./BackdropMixin-CjBgvgG6.js";import"./v4-CmTdKEVZ.js";import"./class-map-D1DO8Y1E.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DJ3fQH24.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
