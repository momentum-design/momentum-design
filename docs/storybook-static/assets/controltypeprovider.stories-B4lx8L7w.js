import{C as l}from"./ControlTypeMixin-mkbVrNcV.js";import{C as d,k as i}from"./iframe-CxOLRwjE.js";import{p as a}from"./index-msye3Naj.js";import"./index-CbRylAIB.js";import"./index-DASLEkBT.js";import"./preload-helper-C1FmrZbK.js";import"./index-DQOGcFkZ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B4ZAdTSS.js";import"./listitem.component-UUXfY02Z.js";import"./query-assigned-elements-DnPBrJAA.js";import"./DisabledMixin-CTujsFFo.js";import"./KeyDownHandledMixin-B_iBWvi4.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BIe9BMEB.js";import"./index-APZF6vdz.js";import"./formfieldwrapper.constants-gLnSkm5Q.js";import"./popover.constants-ByGgMQN_.js";import"./toggle.constants-D2xUzDre.js";import"./index-BxF7nMyC.js";import"./popover.component-D8Djk57i.js";import"./if-defined-CL9DC8XJ.js";import"./BackdropMixin-DRCjvpq2.js";import"./v4-CmTdKEVZ.js";import"./class-map-C5zlOvvC.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D2e-jLmR.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
