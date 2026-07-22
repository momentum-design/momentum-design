import{C as i}from"./ControlTypeMixin-B9h3zr20.js";import{C as d,k as l}from"./iframe-BYyr5gNp.js";import{p as a}from"./index-C5nfEzuL.js";import"./index-DxBc4hy0.js";import"./index-346Mx1JE.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bcr4ur2A.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C6BBa9Rg.js";import"./listitem.component-DVzpZPC_.js";import"./DisabledMixin-DZUS_xf8.js";import"./KeyDownHandledMixin-BMQ2cMPK.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CMI3xlmS.js";import"./index-DB1P2g9l.js";import"./formfieldwrapper.constants-CueJun4P.js";import"./popover.constants-0gP1D5zx.js";import"./statusmessage.constants-Db7Uwmrl.js";import"./toggle.constants-B6Skbu-T.js";import"./index-DhIzWYP3.js";import"./popover.component-CQ_b2JRM.js";import"./BackdropMixin-BQNyMO99.js";import"./menuitemcheckbox.constants-DquX4tbL.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,F={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const G=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,G as __namedExportsOrder,F as default};
