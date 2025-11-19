import{C as i}from"./ControlTypeMixin-Cdln9mnQ.js";import{E as d,k as l}from"./iframe-DeHYjt5R.js";import{p as a}from"./index-Dz5BAUG3.js";import"./index-BIkP9ScZ.js";import"./index-63PWggUe.js";import"./preload-helper-C1FmrZbK.js";import"./index-DxEcjU2b.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BoE1UDKT.js";import"./listitem.component-3tFoCXCz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DKBvHyhT.js";import"./DisabledMixin-DZhNlmAd.js";import"./index-DTZ6Mk2O.js";import"./formfieldwrapper.constants-CxtYIyci.js";import"./toggle.constants-sLxuKWVZ.js";import"./index-DUJZE4C9.js";import"./popover.component-BbLotHna.js";import"./if-defined-CaS8K-at.js";import"./BackdropMixin-D-NkQTWn.js";import"./v4-CmTdKEVZ.js";import"./class-map-c9rVQsbD.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DVy0Yrzg.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
