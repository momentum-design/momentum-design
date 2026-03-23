import{C as l}from"./ControlTypeMixin-Ckw5atHl.js";import{C as d,k as i}from"./iframe-CbA3RTA5.js";import{p as a}from"./index-DDupZhO4.js";import"./index-CD8KzSqs.js";import"./index-BDefEx8a.js";import"./preload-helper-C1FmrZbK.js";import"./index-BCAQih3L.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DmnUREk9.js";import"./listitem.component-DxsPZTdo.js";import"./query-assigned-elements-DE5VjcWZ.js";import"./DisabledMixin-CskIXyhy.js";import"./KeyDownHandledMixin-BHI-gVh4.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-hxs8p_DA.js";import"./index-Be6GpUgJ.js";import"./formfieldwrapper.constants-CggyZ1sY.js";import"./popover.constants-Mt5--7t6.js";import"./toggle.constants-B8LVZZ_Y.js";import"./index-B3ITLblX.js";import"./popover.component-BBkWYOTz.js";import"./if-defined-DQqZroQk.js";import"./BackdropMixin-DrHVGm26.js";import"./v4-CmTdKEVZ.js";import"./class-map-815kcix5.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-SBaiXYL6.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
