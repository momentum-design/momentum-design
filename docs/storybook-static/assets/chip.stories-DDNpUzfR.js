import"./index-caGgSDMD.js";import{k as t}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as $,s as y}from"./commonArgTypes-BluK8w5L.js";import{t as A,a as C}from"./utils-CFOyPOhY.js";import{a as e}from"./chip.component-CTrjuKjX.js";import"./index-DeEenWCE.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./index-4mcLjOzG.js";import"./iframe-DXPkVZ5h.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";const k=o=>t` <mdc-chip
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
    color="${o.color}"
    label="${o.label}"
    icon-name="${o["icon-name"]}"
    ?disabled="${o.disabled}"
  ></mdc-chip>`,V={title:"Components/chip/label",tags:["autodocs"],component:"mdc-chip",render:k,parameters:{badges:["stable"]},argTypes:{color:{control:"select",options:Object.values(e)},label:{control:"text"},"icon-name":{control:"text"},disabled:{control:"boolean"},...$,...y,...A(["--mdc-chip-color","--mdc-chip-border-color","--mdc-chip-background-color"]),...C(["soft-disabled","size","role","type","active"])}},a={args:{color:e.DEFAULT,label:"Label",disabled:!1}},l={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},c={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},s={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(e).map(o=>t` <mdc-chip color="${o}" label="${o}"></mdc-chip> `)}
    </div>`};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,d,b;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: false
  }
}`,...(b=(d=l.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var u,h,L;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true
  }
}`,...(L=(h=c.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var f,g,O;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}\n    </div>`\n}',...(O=(g=s.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};const X=["Example","WithIcon","Disabled","AllColors"];export{s as AllColors,c as Disabled,a as Example,l as WithIcon,X as __namedExportsOrder,V as default};
