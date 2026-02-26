import{C as l}from"./ControlTypeMixin-BZrBCImz.js";import{C as d,k as i}from"./iframe-B0GLZx71.js";import{p as a}from"./index-BOeCKDkX.js";import"./index-BPk62vtT.js";import"./index-Ca4RdgZj.js";import"./preload-helper-C1FmrZbK.js";import"./index-CX3WNM4k.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BpH9fv9n.js";import"./listitem.component-YXibZSf1.js";import"./query-assigned-elements-DvqSkHQA.js";import"./DisabledMixin-DDkP--Xd.js";import"./KeyDownHandledMixin-DggBWhai.js";import"./index-wAl9HJdm.js";import"./formfieldwrapper.constants-C64nU1od.js";import"./popover.constants-R0T_vP8J.js";import"./toggle.constants-BFHjU7Po.js";import"./index-0scu5c9F.js";import"./popover.component-B9GqNTPM.js";import"./if-defined-CLQPwvwC.js";import"./BackdropMixin-IEg3y-JH.js";import"./v4-CmTdKEVZ.js";import"./class-map-BiUF_Bgd.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DkoIVNIQ.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
