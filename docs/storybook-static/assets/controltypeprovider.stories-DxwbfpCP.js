import{C as l}from"./ControlTypeMixin-DcOMMwOW.js";import{C as d,k as i}from"./iframe-BPbifbZ6.js";import{p as a}from"./index-D9IMk-9a.js";import"./index-B47vpyy5.js";import"./index-Cy_ZK2Pz.js";import"./preload-helper-C1FmrZbK.js";import"./index-DD6e1RlO.js";import"./index-DTrDRi1E.js";import"./menuitem.component--fTOlt9I.js";import"./listitem.component-D66V_M9z.js";import"./query-assigned-elements-Brm7fRas.js";import"./DisabledMixin-DXVt4omm.js";import"./KeyDownHandledMixin-DC3-fTWE.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CrzzfZaL.js";import"./index-dX1ltdlF.js";import"./formfieldwrapper.constants-BNzCVXEY.js";import"./popover.constants-DNr2_g2Z.js";import"./toggle.constants-zkCSvTYh.js";import"./index-0eMIICrp.js";import"./popover.component-CCt9muab.js";import"./if-defined-BPb3-yOa.js";import"./BackdropMixin-Bw0wmUrb.js";import"./v4-CmTdKEVZ.js";import"./class-map-MZfGoR12.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DRdJnjLA.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
