import{C as l}from"./ControlTypeMixin-exIoapIA.js";import{C as d,k as i}from"./iframe-CYZ064vw.js";import{p as a}from"./index-Cm4DuzN6.js";import"./index-wBn8TcpB.js";import"./index-BnVRhX8g.js";import"./preload-helper-C1FmrZbK.js";import"./index-C-a6jsM_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CEMs2qRx.js";import"./listitem.component-Db8W56sD.js";import"./query-assigned-elements-D2XoKueq.js";import"./DisabledMixin-CjuLaMSD.js";import"./KeyDownHandledMixin-DGzJ0rYO.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CBNLPVQ0.js";import"./index-BPbaFssc.js";import"./formfieldwrapper.constants-pFvOs8lW.js";import"./popover.constants-gNuL8rzb.js";import"./toggle.constants-B3PJkBWY.js";import"./index-B1RCHNN3.js";import"./popover.component-BIUkn_Yc.js";import"./BackdropMixin-DDg7Q_Id.js";import"./v4-CmTdKEVZ.js";import"./class-map-NhK100-6.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cy-h6jCK.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
