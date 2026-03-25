import{C as l}from"./ControlTypeMixin-xyEaQgTB.js";import{C as d,k as i}from"./iframe-eduPLbBc.js";import{p as a}from"./index-ByNZ0Tb5.js";import"./index-0qYfPTQw.js";import"./index-CvEaGgMd.js";import"./preload-helper-C1FmrZbK.js";import"./index-NqmhigYf.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B6GuGbe6.js";import"./listitem.component-N2t_9JcK.js";import"./query-assigned-elements-BUBJ0xwP.js";import"./DisabledMixin-xnjcZ0fX.js";import"./KeyDownHandledMixin-CTBSN6yg.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-D47XfGBl.js";import"./index-BN3I1Myy.js";import"./formfieldwrapper.constants-Bmdl4TXi.js";import"./popover.constants-Cws9S4jg.js";import"./toggle.constants-C9ZlbnbY.js";import"./index-DFSbjR7Q.js";import"./popover.component-Dm3UWkbP.js";import"./if-defined-DF1BNp8W.js";import"./BackdropMixin-C6ckmUxp.js";import"./v4-CmTdKEVZ.js";import"./class-map-C3KMyPae.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Ccmr5kJO.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
