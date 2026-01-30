import{C as l}from"./ControlTypeMixin-BsOEy-PX.js";import{H as d,k as i}from"./iframe-C2GM4z_-.js";import{p as a}from"./index-OPhLQNUs.js";import"./index-DvFlM2kb.js";import"./index-xhFCZKrH.js";import"./preload-helper-C1FmrZbK.js";import"./index-EiWAZQ2W.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Css0Kigw.js";import"./listitem.component-CwmMzCTx.js";import"./query-assigned-elements-Dsr8tkmE.js";import"./DisabledMixin-CaMNUysA.js";import"./KeyToActionMixin-CWAxPGPA.js";import"./index-CBxl-y8t.js";import"./formfieldwrapper.constants-CNozHpaY.js";import"./popover.constants-4CPcFDrY.js";import"./toggle.constants-CIhnXMbL.js";import"./index-CQyrZXrJ.js";import"./popover.component-DIw5MWM4.js";import"./if-defined-zqg5dXF4.js";import"./BackdropMixin-w4WbXy0U.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-UQINVwLz.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BaH2WpTt.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
