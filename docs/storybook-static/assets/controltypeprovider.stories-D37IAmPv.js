import{C as l}from"./ControlTypeMixin-CqCh1swN.js";import{F as d,k as i}from"./iframe-C_HbRYVK.js";import{p as a}from"./index-Gp1MG_Yr.js";import"./index-DIKYBJ5O.js";import"./index-qMXB1HbV.js";import"./preload-helper-C1FmrZbK.js";import"./index-aLQ3cro_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-3dLTqsFw.js";import"./listitem.component-B9_TTRL3.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-J3NjxR3v.js";import"./DisabledMixin-BVUoG_L5.js";import"./index-Da6Yky7v.js";import"./formfieldwrapper.constants-Can8FmAa.js";import"./popover.constants-DYu0R6PJ.js";import"./toggle.constants-QACJiDbJ.js";import"./index-Cu0GudqY.js";import"./popover.component-CI9WLYq4.js";import"./if-defined-CJwtqgn3.js";import"./BackdropMixin-DcAnIb1V.js";import"./v4-CmTdKEVZ.js";import"./class-map-fSLZ6YLc.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D43amODj.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
