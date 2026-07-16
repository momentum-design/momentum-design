import{C as i}from"./ControlTypeMixin-Cm-pP7ww.js";import{C as d,k as l}from"./iframe-0HVjsxx2.js";import{p as a}from"./index-DEZAMiau.js";import"./index-D1jkxBF9.js";import"./index-1JjDtrD3.js";import"./preload-helper-C1FmrZbK.js";import"./index-BjAK6fzr.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CEKOvuY0.js";import"./listitem.component-Cbz2eJ27.js";import"./DisabledMixin-DmXZKRQb.js";import"./KeyDownHandledMixin-TMs2ITqw.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-B5DQR4fS.js";import"./index-AT75GEQW.js";import"./formfieldwrapper.constants-DqIZVwSn.js";import"./popover.constants-C0Zq9_Tm.js";import"./statusmessage.constants-CENKFbWN.js";import"./toggle.constants-CoT3H2F4.js";import"./index-aznniXHb.js";import"./popover.component-HD8-GG2P.js";import"./BackdropMixin-CJCU5qMH.js";import"./menuitemcheckbox.constants-w8k6TuqU.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
