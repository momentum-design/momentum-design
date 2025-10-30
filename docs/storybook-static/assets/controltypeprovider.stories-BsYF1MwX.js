import{C as i}from"./ControlTypeMixin-DrR_93DH.js";import{E as d,k as l}from"./iframe-BV5DWP9v.js";import{p as a}from"./index-DVU4gHUE.js";import"./index-BKG0jtOV.js";import"./index-CVIlbXLG.js";import"./preload-helper-C1FmrZbK.js";import"./index-ZSNJZ3qa.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CrUZCzaa.js";import"./listitem.component-DvdYxTQT.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CzgsI75_.js";import"./DisabledMixin-4l6RL3Et.js";import"./index-Ctsmhk11.js";import"./formfieldwrapper.constants-DWC10nYc.js";import"./toggle.constants-AagfxmDa.js";import"./index-DWTClZG3.js";import"./popover.component-B4ffFb1U.js";import"./if-defined-D2_Zq9Ec.js";import"./BackdropMixin-DS-9bUP-.js";import"./v4-CmTdKEVZ.js";import"./class-map-Bz6zUOzR.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DGuuHCJc.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
