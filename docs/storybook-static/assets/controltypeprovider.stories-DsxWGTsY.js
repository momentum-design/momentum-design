import{C as l}from"./ControlTypeMixin-cXfxe4Vu.js";import{C as d,k as i}from"./iframe-CJ86bTna.js";import{p as a}from"./index-CH0PMzLh.js";import"./index-Cm_5p74n.js";import"./index-YVufoN91.js";import"./preload-helper-C1FmrZbK.js";import"./index-bcYgerky.js";import"./index-DTrDRi1E.js";import"./menuitem.component-COs0o6TW.js";import"./listitem.component-DGG_dz4O.js";import"./query-assigned-elements-BAA3281D.js";import"./DisabledMixin-DrN7r3Wp.js";import"./KeyDownHandledMixin-C8kKWPJI.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CKjyIc3l.js";import"./index-CCdhu_H4.js";import"./formfieldwrapper.constants-BgJ3XOYb.js";import"./popover.constants-Bhj3IDTv.js";import"./toggle.constants-BrtbNcM6.js";import"./index-DU9wrsHp.js";import"./popover.component-6DMLCom0.js";import"./if-defined-CPZ8iztr.js";import"./BackdropMixin-Dp6CD5NG.js";import"./v4-CmTdKEVZ.js";import"./class-map-NIjiy_E_.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BCox_9lI.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
