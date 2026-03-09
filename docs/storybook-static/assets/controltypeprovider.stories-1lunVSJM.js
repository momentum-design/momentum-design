import{C as l}from"./ControlTypeMixin-CLZ8Hz7G.js";import{C as d,k as i}from"./iframe-C252fD8g.js";import{p as a}from"./index-YE1ol78E.js";import"./index-DsrQrsQt.js";import"./index-Ds9PHW8E.js";import"./preload-helper-C1FmrZbK.js";import"./index-DlsJDHpW.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DgWI4n7B.js";import"./listitem.component-CINL3m5b.js";import"./query-assigned-elements-DQqxUq8u.js";import"./DisabledMixin-DVtDJQvO.js";import"./KeyDownHandledMixin-DzpgmDKR.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CmnW_yOz.js";import"./index-Bm0X7mQk.js";import"./formfieldwrapper.constants-CjTwgvqw.js";import"./popover.constants-RYfYgu80.js";import"./toggle.constants-rIgr8saw.js";import"./index-BFRAsZ3k.js";import"./popover.component-pHXCH2yn.js";import"./if-defined-JuF83bhN.js";import"./BackdropMixin-GHaayvZg.js";import"./v4-CmTdKEVZ.js";import"./class-map-B234yuOr.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-B47AtYIu.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
