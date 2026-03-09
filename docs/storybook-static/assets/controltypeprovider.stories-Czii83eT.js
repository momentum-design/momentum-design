import{C as l}from"./ControlTypeMixin-CdLwjENl.js";import{C as d,k as i}from"./iframe-poZqDqjY.js";import{p as a}from"./index-LrKBDY0R.js";import"./index-DTjrECrG.js";import"./index-9LSRHql6.js";import"./preload-helper-C1FmrZbK.js";import"./index-DzIWYZCa.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BLNiqwtY.js";import"./listitem.component-Du6JGyFx.js";import"./query-assigned-elements-BdzU_kcy.js";import"./DisabledMixin-CHAoifzE.js";import"./KeyDownHandledMixin-B9NVAJR6.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-C7nxaYLg.js";import"./index-C3tZ3BT1.js";import"./formfieldwrapper.constants-C0gCM7e1.js";import"./popover.constants-D5C6drF6.js";import"./toggle.constants-DpKklO--.js";import"./index-B8YdyaY1.js";import"./popover.component-DL0KuEDk.js";import"./if-defined-Bk6xV7nx.js";import"./BackdropMixin-naUCTvnZ.js";import"./v4-CmTdKEVZ.js";import"./class-map-BX1FQgTx.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D8KCh8-h.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
