import{C as l}from"./ControlTypeMixin-DakG43-W.js";import{C as d,k as i}from"./iframe-BW4UmAgY.js";import{p as a}from"./index-NIe0uuEb.js";import"./index-JVeddUea.js";import"./index-BE7c05Lk.js";import"./preload-helper-C1FmrZbK.js";import"./index-vmvGAwgO.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BvGyvZAB.js";import"./listitem.component-baaaKOje.js";import"./query-assigned-elements-C1KtNakq.js";import"./DisabledMixin-XtsmlmBf.js";import"./KeyDownHandledMixin-XcCAz2Ph.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-Bn3sQBKs.js";import"./index-DLgU5JH9.js";import"./formfieldwrapper.constants-BousYEk9.js";import"./popover.constants-B6EWQTcd.js";import"./toggle.constants-BmLgoTI7.js";import"./index-B4Slc8_H.js";import"./popover.component-DNI6mjdI.js";import"./if-defined-BjnxAPOE.js";import"./BackdropMixin-DK8BpFJ5.js";import"./v4-CmTdKEVZ.js";import"./class-map-CctIvGMZ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-0yCuUvr2.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
