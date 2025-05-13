import{i as G,D as h,k as a}from"./lit-element-D5KKan5q.js";import"./index-BQmnd5ax.js";import"./index-Sq7Ki8AB.js";import{T as P}from"./toggle.constants-DfSbBUTl.js";import"./index-D3DhXfcW.js";import"./listitem.component-C6iupxrL.js";import{u as B,n as K}from"./index-C9z9WAEj.js";import{R as N}from"./roles-DCpIf2k8.js";import{M as p}from"./menuitem.component-D7gz9VR9.js";import{T as l}from"./text.constants-ZF0jM5wn.js";import{c as X,s as F}from"./commonArgTypes-BluK8w5L.js";import{h as Y,d as w,a as j}from"./utils-CO8B6ZcN.js";import{P as W}from"./popover.component-C1P6Ph4q.js";import"./iframe-BFvqgBhr.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-CcXofQbA.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./DisabledMixin-BZruwOeC.js";import"./v4-CmTdKEVZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CsrHswKP.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";const V=B.constructTagName("menuitemcheckbox"),c={FALSE:"false",TRUE:"true"},t={CHECKBOX:"checkbox",CHECKMARK:"checkmark",TOGGLE:"toggle"},C={ARIA_CHECKED:c.FALSE,INDICATOR:t.CHECKBOX},Z=G`
  :host {
    --mdc-checkmark-indicator-color: var(--mds-color-theme-control-active-normal);
  }
  :host::part(checkmark-icon) {
    --mdc-icon-fill-color: var(--mdc-checkmark-indicator-color);
  }
  :host([disabled])::part(checkmark-icon) {
    --mdc-icon-fill-color: currentColor;
  }
`,z=[Z];var q=Object.defineProperty,$=(e,u,x,Q)=>{for(var i=void 0,b=e.length-1,g;b>=0;b--)(g=e[b])&&(i=g(u,x,i)||i);return i&&q(u,x,i),i};const k=class k extends p{constructor(){super(...arguments),this.ariaChecked=C.ARIA_CHECKED,this.indicator=C.INDICATOR}connectedCallback(){super.connectedCallback(),this.role=N.MENUITEMCHECKBOX}staticCheckbox(){return this.indicator!==t.CHECKBOX?h:a`
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.ariaChecked===c.TRUE}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
  `}staticToggle(){return this.indicator!==t.TOGGLE?h:a`
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.ariaChecked===c.TRUE}"
        ?disabled="${this.disabled}"
        size="${P.COMPACT}"
      ></mdc-statictoggle>
    `}getCheckmarkIcon(){return this.indicator!==t.CHECKMARK||this.ariaChecked===c.FALSE?h:a`
      <mdc-icon
        slot="trailing-controls"
        name="check-bold"
        part="checkmark-icon"
      ></mdc-icon>
    `}render(){return a`
      <div part="leading">
        ${this.staticCheckbox()}
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",l.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",l.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",l.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",l.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",l.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
        ${this.staticToggle()}
        ${this.getCheckmarkIcon()}
      </div>
    `}};k.styles=[...p.styles,...z];let o=k;$([K({type:String,reflect:!0,attribute:"aria-checked"})],o.prototype,"ariaChecked");$([K({type:String,reflect:!0})],o.prototype,"indicator");o.register(V);const H=e=>a`<div role="menu" style="width: 25rem;">${e}</div>`,J=e=>H(a`
  <mdc-menuitemcheckbox
    ?disabled="${e.disabled}"
    aria-checked="${e["aria-checked"]}"
    label="${e.label}"
    indicator="${e.indicator}"
    secondary-label="${e["secondary-label"]}"
    tooltip-text="${e["tooltip-text"]}"
    tooltip-placement="${e["tooltip-placement"]}"
  >
    ${e.children}
  </mdc-menuitemcheckbox>`),Le={title:"Work In Progress/menu/menuitemcheckbox",tags:["autodocs"],component:"mdc-menuitemcheckbox",render:J,parameters:{badges:["wip"]},argTypes:{"aria-checked":{control:"select",options:Object.values(c)},indicator:{control:"select",options:Object.values(t)},disabled:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(W)},...Y(["data-aria-label","variant","tertiary-label","side-header-text","subline-text","keydown","keyup","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right"]),...w(["change","click","focus","--mdc-checkmark-indicator-color"]),...X,...F}},r={args:{indicator:t.CHECKBOX,"aria-checked":c.FALSE,label:"Menu Item",disabled:!1,"secondary-label":"","tooltip-text":"","tooltip-placement":W.TOP,children:a`<mdc-icon name="alert-muted-bold" slot="leading-controls"></mdc-icon>`}},d={args:{"aria-checked":c.TRUE,indicator:t.TOGGLE,label:"Menu Item With Toggle",disabled:!1,"secondary-label":""}},n={args:{"aria-checked":c.TRUE,indicator:t.CHECKBOX,label:"Menu Item With Checkbox",disabled:!1,"secondary-label":""}},m={args:{"aria-checked":c.TRUE,indicator:t.CHECKMARK,label:"Menu Item With Checkmark",disabled:!1,"secondary-label":""}},s={render:()=>H(a`
    <mdc-menuitemcheckbox aria-checked="true" label="Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" label="Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="toggle" label="Disabled Selected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="toggle" label="Disabled Unselected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="checkmark" label="Disabled Selected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="checkmark" label="Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="checkmark" label="Disabled Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" indicator="toggle"
      label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" indicator="toggle"
      label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
  `),...j()};var E,T,y;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    indicator: INDICATOR.CHECKBOX,
    'aria-checked': ARIA_CHECKED_STATES.FALSE,
    label: 'Menu Item',
    disabled: false,
    'secondary-label': '',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP,
    children: html\`<mdc-icon name="alert-muted-bold" slot="leading-controls"></mdc-icon>\`
  }
}`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var S,A,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.TOGGLE,
    label: 'Menu Item With Toggle',
    disabled: false,
    'secondary-label': ''
  }
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var f,L,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.CHECKBOX,
    label: 'Menu Item With Checkbox',
    disabled: false,
    'secondary-label': ''
  }
}`,...(R=(L=n.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var O,D,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'aria-checked': ARIA_CHECKED_STATES.TRUE,
    indicator: INDICATOR.CHECKMARK,
    label: 'Menu Item With Checkmark',
    disabled: false,
    'secondary-label': ''
  }
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var U,_,v;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitemcheckbox aria-checked="true" label="Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" label="Disabled Selected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" label="Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" label="Disabled Unselected Checkbox"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="toggle" label="Selected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="toggle" label="Disabled Selected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="toggle" label="Unselected Toggle"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="toggle" label="Disabled Unselected Toggle">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="true" indicator="checkmark" label="Selected Checkmark"></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="true" indicator="checkmark" label="Disabled Selected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox aria-checked="false" indicator="checkmark" label="Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox disabled aria-checked="false" indicator="checkmark" label="Disabled Unselected Checkmark">
    </mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="true" indicator="toggle"
      label="Selected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
    <mdc-menuitemcheckbox
      aria-checked="false" indicator="toggle"
      label="Unselected Menu Item With Secondary Label" secondary-label="Secondary Label"
    ></mdc-menuitemcheckbox>
  \`),
  ...hideAllControls()
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const Re=["Example","ToggleWithMenuItem","CheckboxWithMenuItem","CheckmarkWithMenuItem","AllVariants"];export{s as AllVariants,n as CheckboxWithMenuItem,m as CheckmarkWithMenuItem,r as Example,d as ToggleWithMenuItem,Re as __namedExportsOrder,Le as default};
