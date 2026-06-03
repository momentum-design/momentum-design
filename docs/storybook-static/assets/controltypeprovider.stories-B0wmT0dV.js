import{C as l}from"./ControlTypeMixin-Cs3IBwAn.js";import{C as d,k as i}from"./iframe-CWop6vmJ.js";import{p as a}from"./index-CENdKjzB.js";import"./index-ChY42lWo.js";import"./index-Cgdp7DIV.js";import"./preload-helper-C1FmrZbK.js";import"./index-CgKZfptj.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BHeR1qYx.js";import"./listitem.component-BpyMh69l.js";import"./query-assigned-elements-DFXcCDd7.js";import"./DisabledMixin-DHRFWeSP.js";import"./KeyDownHandledMixin-BAjN28Su.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-6ngkizUz.js";import"./index-DU1sI5Vl.js";import"./formfieldwrapper.constants-DwMgFPnZ.js";import"./popover.constants-eVE2hyUN.js";import"./toggle.constants-CaJCN9aX.js";import"./index-Dps_d_pH.js";import"./popover.component-BzrVhga7.js";import"./if-defined-z4oxgOfa.js";import"./BackdropMixin-0j6R75Iw.js";import"./v4-CmTdKEVZ.js";import"./class-map-DruKgBAu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cr7QqhJx.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
