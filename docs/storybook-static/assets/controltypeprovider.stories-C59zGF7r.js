import{C as i}from"./ControlTypeMixin-D-dsqdXp.js";import{C as d,k as l}from"./iframe-CfqIV4SZ.js";import{p as a}from"./index-At6cFAL_.js";import"./index-DN83CvJn.js";import"./index-Cl3xTccM.js";import"./preload-helper-C1FmrZbK.js";import"./index-Cp5pBF37.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ssOd4KG2.js";import"./listitem.component-CwMb91TW.js";import"./DisabledMixin-CkfGSezk.js";import"./KeyDownHandledMixin-D2pESj_U.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BX8fWobi.js";import"./index-Bk_1fDvL.js";import"./formfieldwrapper.constants-C06B5g95.js";import"./popover.constants-B5dJ7W8v.js";import"./statusmessage.constants-EF8kOIHY.js";import"./toggle.constants-B6_F4sco.js";import"./index-D2d_qjSV.js";import"./popover.component-94gWWMV6.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-gN7h5H5c.js";import"./menuitemcheckbox.constants-CjOUfbhA.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
