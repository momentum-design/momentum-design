import{k as d}from"./lit-element-D5KKan5q.js";import"./index-BQHpR8ua.js";import"./index-D3DhXfcW.js";import"./listitem.component-CoWrg7da.js";import{u as x,n as A}from"./index-C9z9WAEj.js";import{R as I}from"./roles-DCpIf2k8.js";import{M as u}from"./menuitem.component-B_I0twuD.js";import{T as b}from"./text.constants-ZF0jM5wn.js";import{c as M,s as T}from"./commonArgTypes-BluK8w5L.js";import{h as v,d as L,a as C}from"./utils-CO8B6ZcN.js";import{P as f}from"./popover.component-Dx75vo8o.js";import"./DisabledMixin-BZruwOeC.js";import"./v4-CmTdKEVZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";const _=x.constructTagName("menuitemradio"),i={TRUE:"true",FALSE:"false"};var O=Object.defineProperty,D=(e,n,m,R)=>{for(var t=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(t=s(n,m,t)||t);return t&&O(n,m,t),t};const c=class c extends u{constructor(){super(...arguments),this.ariaChecked=i.FALSE}connectedCallback(){super.connectedCallback(),this.role=I.MENUITEMRADIO}render(){return d`
      <div part="leading-controls">
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.ariaChecked===i.TRUE}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      </div>
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",b.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",b.BODY_MIDSIZE_REGULAR,this.secondaryLabel)}
      </div>
    `}};c.styles=[...u.styles];let l=c;D([A({type:String,reflect:!0,attribute:"aria-checked"})],l.prototype,"ariaChecked");l.register(_);const S=e=>d`<div role="menu" style="width: 25rem;">${e}</div>`,P=e=>S(d`
  <mdc-menuitemradio
    aria-checked="${e["aria-checked"]}"
    ?disabled="${e.disabled}"
    label="${e.label}"
    secondary-label="${e["secondary-label"]}"
    tooltip-text="${e["tooltip-text"]}"
    tooltip-placement="${e["tooltip-placement"]}"
  ></mdc-menuitemradio>`),ee={title:"Work In Progress/menu/menuitemradio",tags:["autodocs"],component:"mdc-menuitemradio",render:P,parameters:{badges:["wip"]},argTypes:{"aria-checked":{control:"select",options:Object.values(i)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(f)},...v(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","keydown","keyup","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...L(["change","click","focus"]),...M,...T}},a={args:{"aria-checked":i.FALSE,disabled:!1,label:"Menu Item","secondary-label":"","tooltip-text":"","tooltip-placement":f.TOP}},r={render:()=>S(d`
    <mdc-menuitemradio aria-checked="true" label="Selected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio disabled aria-checked="true" label="Disabled Selected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio aria-checked="false" label="Unselected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio disabled aria-checked="false" label="Disabled Unselected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemradio>
    <mdc-menuitemradio
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemradio>
  `),...C()};var p,h,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.FALSE,
    disabled: false,
    label: 'Menu Item',
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,g,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitemradio aria-checked="true" label="Selected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio disabled aria-checked="true" label="Disabled Selected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio aria-checked="false" label="Unselected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio disabled aria-checked="false" label="Disabled Unselected Menu Item"></mdc-menuitemradio>
    <mdc-menuitemradio
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemradio>
    <mdc-menuitemradio
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemradio>
  \`),
  ...hideAllControls()
}`,...(E=(g=r.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const te=["Example","AllVariants"];export{r as AllVariants,a as Example,te as __namedExportsOrder,ee as default};
