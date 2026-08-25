import{k as _}from"./iframe-DKmoi846.js";import{c as x,s as A}from"./commonArgTypes-BG7EqI50.js";import{h as D}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,$=t=>_` <mdc-filterchip
    @click="${e("onclick")}"
    @keydown="${e("onkeydown")}"
    @keyup="${e("onkeyup")}"
    @focus="${e("onfocus")}"
    label="${t.label}"
    ?selected="${t.selected}"
    ?disabled="${t.disabled}"
  ></mdc-filterchip>`,C={title:"Components/chip/filterchip",tags:["autodocs"],component:"mdc-filterchip",render:$,argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},...x,...A,...D(["soft-disabled","size","role","type","active","icon-name","color"])}},l={args:{label:"Filterchip",selected:!1,disabled:!1}},r={args:{label:"Filterchip",selected:!0,disabled:!1}},s={args:{label:"Filterchip",selected:!1,disabled:!0}},a={args:{label:"Filterchip",selected:!0,disabled:!0}},c={render:()=>_` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>`};var d,i,o;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: false
  }
}`,...(o=(i=l.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: false
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: true
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var u,g,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: true
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,F,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>\`
}`,...(k=(F=c.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const w=["Example","Selected","Disabled","SelectedAndDisabled","StatesAndVariants"];export{s as Disabled,l as Example,r as Selected,a as SelectedAndDisabled,c as StatesAndVariants,w as __namedExportsOrder,C as default};
