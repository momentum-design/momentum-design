import{C as l}from"./ControlTypeMixin-B5vhq_M_.js";import{F as d,k as i}from"./iframe-BP3AX2ct.js";import{p as a}from"./index-B1NKWUza.js";import"./index-DL9xmvO_.js";import"./index-DMRvvfgF.js";import"./preload-helper-C1FmrZbK.js";import"./index-BA-5qcsH.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BhpiBl0Y.js";import"./listitem.component-D8qVlF2M.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CSnhgxZt.js";import"./DisabledMixin-3kafPYYR.js";import"./index-Cjd_8gZU.js";import"./formfieldwrapper.constants-C-DcpMWh.js";import"./popover.constants-C3GCZ-0G.js";import"./toggle.constants-bPr9CCz6.js";import"./index-50si_WPU.js";import"./popover.component-detYsvQs.js";import"./if-defined-DcFDK1LV.js";import"./BackdropMixin-C8SGdbjB.js";import"./v4-CmTdKEVZ.js";import"./class-map-BH0rJ85O.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DbMLdG6u.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
