import{C as l}from"./ControlTypeMixin-BW_3-oTK.js";import{C as d,k as i}from"./iframe-DMYLoWds.js";import{p as a}from"./index-DDBXYio9.js";import"./index-DlypuWOB.js";import"./index-C5HYp6IT.js";import"./preload-helper-C1FmrZbK.js";import"./index-qHrRLwgI.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BR4x2QHA.js";import"./listitem.component-Crj_KBfm.js";import"./query-assigned-elements-C5Xnc_v5.js";import"./DisabledMixin-DD63dPWn.js";import"./KeyDownHandledMixin-BvulCVPK.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BycwfoSh.js";import"./index-CHh6UTsk.js";import"./formfieldwrapper.constants-rz_yvIjK.js";import"./popover.constants-MrTC24JQ.js";import"./toggle.constants-CWM9nj27.js";import"./index-DfDothMT.js";import"./popover.component-axNNUED7.js";import"./if-defined-CgKtHWDr.js";import"./BackdropMixin-UvDQd0JP.js";import"./v4-CmTdKEVZ.js";import"./class-map-SZFDHZqf.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DJKWv5BS.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
