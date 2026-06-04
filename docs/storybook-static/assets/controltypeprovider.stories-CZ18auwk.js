import{C as l}from"./ControlTypeMixin-7TZ9GSK9.js";import{C as d,k as i}from"./iframe-D0yPktIr.js";import{p as a}from"./index-BHN0bjuT.js";import"./index-Dyuk6zH2.js";import"./index-BTktD8me.js";import"./preload-helper-C1FmrZbK.js";import"./index-C2ikfZSH.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B60-MBKu.js";import"./listitem.component-Dsq55TK3.js";import"./query-assigned-elements-BoZZG4Fd.js";import"./DisabledMixin-BQzZeYPM.js";import"./KeyDownHandledMixin-BZZQUmsN.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CsABjs9L.js";import"./index-VPp4HlaC.js";import"./formfieldwrapper.constants-Bj-aq5_G.js";import"./popover.constants-B8BCLxgL.js";import"./toggle.constants-_cWakYDw.js";import"./index-DvYqzKH8.js";import"./popover.component-sGhtH1Hh.js";import"./if-defined-BQWKbkiE.js";import"./BackdropMixin-LppfRq51.js";import"./v4-CmTdKEVZ.js";import"./class-map-FWxYxrGQ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DwCiP0CD.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
