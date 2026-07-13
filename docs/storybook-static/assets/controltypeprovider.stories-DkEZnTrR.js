import{C as i}from"./ControlTypeMixin-mHh8G7JD.js";import{C as d,k as l}from"./iframe-BhffW2JT.js";import{p as a}from"./index-BLrXt48w.js";import"./index-C0G76Xqw.js";import"./index-CLk7tOH7.js";import"./preload-helper-C1FmrZbK.js";import"./index-0G_NhWFj.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DP06mdPk.js";import"./listitem.component-BcyuifAA.js";import"./DisabledMixin-B82ZiNpk.js";import"./KeyDownHandledMixin-Cqv8dAEz.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-mzRvPFT3.js";import"./index-BGBZ2JQF.js";import"./formfieldwrapper.constants-BF0g0vFy.js";import"./popover.constants-DYTHd7Dq.js";import"./statusmessage.constants-S3WH8vn9.js";import"./toggle.constants-Cs8e1d41.js";import"./index-B4_BNy4Q.js";import"./popover.component-D34niYn3.js";import"./BackdropMixin-B2dNgU18.js";import"./menuitemcheckbox.constants-BRe2JkeZ.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
