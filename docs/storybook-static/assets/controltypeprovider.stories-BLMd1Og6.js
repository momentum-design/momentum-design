import{C as i}from"./ControlTypeMixin-CmAS2dtu.js";import{C as d,k as l}from"./iframe-s8ycpuW1.js";import{p as a}from"./index-9Qb7JEa_.js";import"./index-DMtDwdY6.js";import"./index-D7l5SCbS.js";import"./preload-helper-C1FmrZbK.js";import"./index-B55Vh1NP.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B7dL1PRO.js";import"./listitem.component-C9-Ay2Rs.js";import"./DisabledMixin-0HlGAHwB.js";import"./KeyDownHandledMixin-CMPZ7zzp.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-D1IgBi7L.js";import"./index-CegEqj-Z.js";import"./formfieldwrapper.constants-Cac0nGOQ.js";import"./popover.constants-P7BTvb40.js";import"./statusmessage.constants-BZDWx3uB.js";import"./toggle.constants-CvIqiDDJ.js";import"./index-CqvBBIbw.js";import"./popover.component-dxMOYXV1.js";import"./BackdropMixin-jlKX81O-.js";import"./menuitemcheckbox.constants-Dbt7zGlp.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
