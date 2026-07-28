import{C as i}from"./ControlTypeMixin-tJWi1sM8.js";import{C as d,k as l}from"./iframe-vPjlp732.js";import{p as a}from"./index-vK631QPL.js";import"./index-CWHP1_4F.js";import"./index-B4h-yCtT.js";import"./preload-helper-C1FmrZbK.js";import"./index-BtoRk3J9.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DBC3aOZe.js";import"./listitem.component-DhKPzxlk.js";import"./DisabledMixin-1gpg0PKK.js";import"./KeyDownHandledMixin-Cmshr58x.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-21mtg2AY.js";import"./index-B5Z023LE.js";import"./formfieldwrapper.constants-CJ4Iwgfe.js";import"./popover.constants-taYJJbjc.js";import"./statusmessage.constants-t6C0g16X.js";import"./toggle.constants-B1eiomGd.js";import"./index-CPEv-NRz.js";import"./popover.component-C2BXMS9u.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-B3LhPCnc.js";import"./menuitemcheckbox.constants-DjhVfOUz.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
