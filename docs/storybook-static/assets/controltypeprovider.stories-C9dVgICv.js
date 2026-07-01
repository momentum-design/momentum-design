import{C as i}from"./ControlTypeMixin-CaLTWc5n.js";import{C as d,k as l}from"./iframe-BrN8x_Z0.js";import{p as a}from"./index-CuaFIEeJ.js";import"./index-BE5jN9gz.js";import"./index-Cp1Sc9Vt.js";import"./preload-helper-C1FmrZbK.js";import"./index-D5lPBL37.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BGjv92S_.js";import"./listitem.component-BoZaS87A.js";import"./DisabledMixin-DjI3Wyw_.js";import"./KeyDownHandledMixin-lEQrVlT7.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CI-fhSvv.js";import"./index-BnS0mkQP.js";import"./formfieldwrapper.constants-OU-UvGf4.js";import"./popover.constants-DWapbakJ.js";import"./statusmessage.constants-DjH5p_-2.js";import"./toggle.constants-V1VzrJ30.js";import"./index-Cv5QeTSf.js";import"./popover.component-BtH5R005.js";import"./BackdropMixin-C1JBgKdc.js";import"./menuitemcheckbox.constants-BIyJtJcY.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
