import{C as i}from"./ControlTypeMixin-C2TNaA3I.js";import{E as d,k as l}from"./iframe-DR_X9QNR.js";import{p as a}from"./index-B-Ww-zDV.js";import"./index-C9A5S1MC.js";import"./index-B2EqLzFQ.js";import"./preload-helper-C1FmrZbK.js";import"./index-CSktb0jT.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B_AkIJ5r.js";import"./listitem.component-MbLMSsZ8.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Sc5Qb2oZ.js";import"./DisabledMixin-BHp9XfKA.js";import"./index-CfZqlucj.js";import"./formfieldwrapper.constants-BQArzYgl.js";import"./toggle.constants-BDN1lozk.js";import"./index-JhmKIyPJ.js";import"./popover.component-DnVWinqG.js";import"./if-defined-DVoAFy12.js";import"./BackdropMixin-DTp3s_o2.js";import"./v4-CmTdKEVZ.js";import"./class-map-D4ytrGUU.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D8GRLlDL.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
