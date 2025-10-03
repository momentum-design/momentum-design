import"./index-DvJEFrSG.js";import{k as t}from"./iframe-Bmqk5ncS.js";import{c as g,s as y}from"./commonArgTypes-BluK8w5L.js";import{t as C,a as A}from"./utils-CFOyPOhY.js";import{C as e}from"./staticchip.component-CbjF9bAm.js";import"./chip.component-CyBpZhTU.js";import"./IconNameMixin-BxH3CgDw.js";import"./buttonsimple.component-DJ5naDiX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CJC0_YR8.js";import"./TabIndexMixin-CoFbKfFN.js";import"./index-BMN--PIx.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bo7GamiG.js";import"./index-DTrDRi1E.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T=o=>t` <mdc-chip
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
    color="${o.color}"
    label="${o.label}"
    icon-name="${o["icon-name"]}"
    ?disabled="${o.disabled}"
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
  ></mdc-chip>`,B={title:"Components/chip/label",tags:["autodocs"],component:"mdc-chip",render:T,argTypes:{color:{control:"select",options:Object.values(e)},label:{control:"text"},"icon-name":{control:"text"},disabled:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...g,...y,...C(["--mdc-chip-color","--mdc-chip-border-color","--mdc-chip-background-color"]),...A(["soft-disabled","size","role","type","active"])}},a={args:{color:e.DEFAULT,label:"Label",disabled:!1}},l={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},c={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},s={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(e).map(o=>t` <mdc-chip color="${o}" label="${o}"></mdc-chip> `)}
    </div>`};var n,d,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: false
  }
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,h,O;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true
  }
}`,...(O=(h=c.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var L,f,$;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}\n    </div>`\n}',...($=(f=s.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};const K=["Example","WithIcon","Disabled","AllColors"];export{s as AllColors,c as Disabled,a as Example,l as WithIcon,K as __namedExportsOrder,B as default};
