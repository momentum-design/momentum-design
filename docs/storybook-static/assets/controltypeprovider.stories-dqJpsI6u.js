import{C as i}from"./ControlTypeMixin-DKJZ31mB.js";import{C as d,k as l}from"./iframe-DCndRm4c.js";import{p as a}from"./index-CfbbDa_7.js";import"./index-CG1zH-rW.js";import"./index-DmMMQbK-.js";import"./preload-helper-C1FmrZbK.js";import"./index-BwyM4VST.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cfh0l1EF.js";import"./listitem.component-jElENspQ.js";import"./query-assigned-elements-BXG2j4_L.js";import"./DisabledMixin-DGZKeuiK.js";import"./KeyDownHandledMixin-EPoEozDE.js";import"./index-HP1RY-rY.js";import"./formfieldwrapper.constants-D2hNYuHi.js";import"./popover.constants-CIvO1I4i.js";import"./toggle.constants-HBFyDfPP.js";import"./index-BdYO0ECf.js";import"./popover.component-CSu56WNk.js";import"./if-defined-C7LBiDOf.js";import"./BackdropMixin-TvlmdNJJ.js";import"./v4-CmTdKEVZ.js";import"./class-map-YLg-DrEM.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants--tUihk6r.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
