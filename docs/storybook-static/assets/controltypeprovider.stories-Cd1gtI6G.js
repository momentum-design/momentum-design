import{C as i}from"./ControlTypeMixin-C9GHifQj.js";import{C as d,k as l}from"./iframe-1qtKO-Lg.js";import{p as a}from"./index-BO4dBBLN.js";import"./index-Dlk9R8aO.js";import"./index-CY428xlD.js";import"./preload-helper-C1FmrZbK.js";import"./index-DLG2Bts2.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BBpnu2ec.js";import"./listitem.component-DfF0_nRx.js";import"./DisabledMixin-EZ3FaG-P.js";import"./KeyDownHandledMixin-PeN-ExeF.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-bhC2Mmq0.js";import"./index-DGk6W4ya.js";import"./formfieldwrapper.constants-BOQ57ywo.js";import"./popover.constants-Dt14UCyo.js";import"./statusmessage.constants-2R5eb7Yt.js";import"./toggle.constants-BfB2PAEd.js";import"./index-BT7Y2-Np.js";import"./popover.component-DAOGcM_b.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-C1IlKQwV.js";import"./menuitemcheckbox.constants-j0g9kpnM.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
