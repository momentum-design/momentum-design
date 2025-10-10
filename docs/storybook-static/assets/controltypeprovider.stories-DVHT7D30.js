import{C as i}from"./index-BDbed4lb.js";import{E as d,k as l}from"./iframe-D59qSDLK.js";import{p as a}from"./index-xT-JkSuE.js";import"./index-CJk6f9Ih.js";import"./index-CwGSQ9Yn.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-B8prAcGk.js";import"./DisabledMixin-MuPyaYa1.js";import"./toggle.constants-DQktxk_8.js";import"./index-D_0tXJjY.js";import"./popover.component-DgpXvbs2.js";import"./base-DIkkzJ-c.js";import"./if-defined-olcxDW8P.js";import"./BackdropMixin-COtaol9r.js";import"./v4-CmTdKEVZ.js";import"./class-map-D9dGwWKp.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-m-yFwMRd.js";import"./listitem.component-C2G9DK_r.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-B1WUQql5.js";import"./menuitemcheckbox.constants-DqP4_peh.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
