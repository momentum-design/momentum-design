import{C as i}from"./ControlTypeMixin-B1cWMQXv.js";import{C as d,k as l}from"./iframe-Ckh9e4At.js";import{p as a}from"./index-CsitbVGN.js";import"./index-BQuqhVKc.js";import"./index-BsDgWErQ.js";import"./preload-helper-C1FmrZbK.js";import"./index-CjtIbAH_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BVqim16J.js";import"./listitem.component-XCEiYBKy.js";import"./DisabledMixin-iesT_1WC.js";import"./KeyDownHandledMixin-DdkMwtj7.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DiPQ5z2G.js";import"./index-8jREt5Pe.js";import"./formfieldwrapper.constants-CeNmKobS.js";import"./popover.constants-TUWgROoJ.js";import"./statusmessage.constants-Demx4hCY.js";import"./toggle.constants-CjvJDo9N.js";import"./index-Dh85vevO.js";import"./popover.component-DHv30t0m.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-CWADEV9d.js";import"./menuitemcheckbox.constants-C1b1A3Lh.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
