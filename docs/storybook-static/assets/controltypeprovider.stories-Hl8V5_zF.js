import{C as l}from"./ControlTypeMixin-DNQlLxWw.js";import{C as d,k as i}from"./iframe-Blm0znWq.js";import{p as a}from"./index-FaRgHqjy.js";import"./index-1IM-WNbo.js";import"./index-Ahjn2L0q.js";import"./preload-helper-C1FmrZbK.js";import"./index-EnwH1DlS.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C9oLw7hR.js";import"./listitem.component-BOr8Qw4A.js";import"./query-assigned-elements-VE50CxDz.js";import"./DisabledMixin-DVN6Phj-.js";import"./KeyDownHandledMixin-BrT5qgbT.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BwG8LIaT.js";import"./index-B8o5twx0.js";import"./formfieldwrapper.constants-JvQ59m-a.js";import"./popover.constants-CNmtLWS3.js";import"./toggle.constants-B1ygbjqL.js";import"./index-D7R0YC4Y.js";import"./popover.component-CUbK0pb1.js";import"./if-defined-xlESv7-T.js";import"./BackdropMixin-9IUqwHtY.js";import"./v4-CmTdKEVZ.js";import"./class-map-ta40Rt67.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-17Kuvx0U.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
