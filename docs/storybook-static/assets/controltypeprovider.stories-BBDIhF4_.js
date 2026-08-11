import{C as i}from"./ControlTypeMixin-DKFRcWOi.js";import{C as d,k as l}from"./iframe-BQGMC8oL.js";import{p as a}from"./index-DYZ0bkDC.js";import"./index-B9P8rsvX.js";import"./index-e6b248fU.js";import"./preload-helper-C1FmrZbK.js";import"./index-BMA4C4IF.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CrlcsnXu.js";import"./listitem.component-CTl9Q0XE.js";import"./DisabledMixin-B94U0yzj.js";import"./KeyDownHandledMixin-D92IkIKR.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CaZ6rVju.js";import"./index-CVbBKmZ-.js";import"./formfieldwrapper.constants-DWPbQzgb.js";import"./popover.constants-DqFxxFNF.js";import"./statusmessage.constants-Bue8bpYA.js";import"./toggle.constants-BMpmHAky.js";import"./index-CNfCHP82.js";import"./popover.component-BIyGGxEI.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-Dl6cxHJW.js";import"./menuitemcheckbox.constants-DOp9k-9_.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
