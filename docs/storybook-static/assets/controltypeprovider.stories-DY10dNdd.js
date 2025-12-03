import{C as l}from"./ControlTypeMixin-Bk_nVTrK.js";import{F as d,k as i}from"./iframe-C3odBbWY.js";import{p as a}from"./index-CaIliKjP.js";import"./index-BzLIJ9Ob.js";import"./index-DvrhQb5u.js";import"./preload-helper-C1FmrZbK.js";import"./index-BfpvsA11.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Bn0FjqyY.js";import"./listitem.component-DN8jwfTC.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-C9vb4D7c.js";import"./DisabledMixin-Cr88gAxL.js";import"./index-Dzotrh0k.js";import"./formfieldwrapper.constants-MnkqbtyM.js";import"./popover.constants-Dtn7iWzj.js";import"./toggle.constants-pVkvRPbQ.js";import"./index-CUG3ulEq.js";import"./popover.component-D5RF1dky.js";import"./if-defined-Dl1lZBmV.js";import"./BackdropMixin-CsWx8ZlU.js";import"./v4-CmTdKEVZ.js";import"./class-map-CBAL-aby.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CucLPR-m.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
