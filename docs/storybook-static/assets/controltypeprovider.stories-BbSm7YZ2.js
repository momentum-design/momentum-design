import{C as i}from"./ControlTypeMixin-DhAL88tZ.js";import{E as d,k as l}from"./iframe-BCanoCRe.js";import{p as a}from"./index-CMEhrORJ.js";import"./index-DT9coUkd.js";import"./index-B8SGuATQ.js";import"./preload-helper-C1FmrZbK.js";import"./index-jw-wyglp.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BUYrv8Wf.js";import"./listitem.component-D1FnNj5r.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Dq2oczWO.js";import"./DisabledMixin-BApzXNWy.js";import"./index-CrZJhw_P.js";import"./formfieldwrapper.constants-CQWGpnDo.js";import"./toggle.constants-C4auUzi4.js";import"./index-SsYqHSOv.js";import"./popover.component-DoM1jhNA.js";import"./if-defined-BKKfBTgX.js";import"./BackdropMixin-irboKES9.js";import"./v4-CmTdKEVZ.js";import"./class-map-BKKU3M27.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-nri-jYKj.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
