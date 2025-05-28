import{i as Z,D as f,k as o}from"./lit-element-D5KKan5q.js";import{u as q,n as z}from"./index-C9z9WAEj.js";import{a as W}from"./index-CcXofQbA.js";import{D as Q}from"./DisabledMixin-BZruwOeC.js";import{T as J}from"./TabIndexMixin-CsrHswKP.js";import{C as x}from"./card.component-BbEuZO0l.js";import{R as ee}from"./roles-DMFGbP5t.js";import"./index-DsWpJOK1.js";import"./index-D3DhXfcW.js";import"./index-CbiMaach.js";import{Q as te}from"./repeat-CNQ7t7Vw.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as ae,s as oe}from"./commonArgTypes-BluK8w5L.js";import{h as re,d as ie}from"./utils-CO8B6ZcN.js";import{V as le,O as T,D as t}from"./CardAndDialogFooterMixin-COm20Ox1.js";import{V as y}from"./text.constants-ZF0jM5wn.js";import"./index-wDJvQURF.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./iframe-CMsK3GsR.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./v4-CQkTLCs1.js";import"./link.constants-CqyNsepP.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./formfieldwrapper.component-DGQBm8Ze.js";const ce=Z`
  :host {
    cursor: pointer;
    user-select: none;
  }

  :host(:dir(ltr))::part(check){
    margin-left: auto;
  }

  :host(:dir(rtl))::part(check){
    margin-right: auto;
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]){
    border: 1px solid var(--mds-color-theme-outline-input-active);
    box-shadow: 0 0 0 1px var(--mds-color-theme-outline-input-active);
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]:hover){
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host([checked]:active){
    background-color: var(--mds-color-theme-background-primary-ghost);
  }

  :host::part(check-icon){
    color: var(--mds-color-theme-text-secondary-normal);
  }

  :host([checked])::part(check-icon){
    color: var(--mds-color-theme-text-accent-normal);
  }

  :host([disabled]) {
    background-color: var(--mds-color-theme-background-primary-ghost);
    color: var(--mds-color-theme-text-primary-disabled);
    border-color: var(--mds-color-theme-outline-primary-disabled);
  }

  :host([disabled])::part(image){
    opacity: 0.5;
  }
  
  :host([disabled])::part(check-icon){
    color: var(--mds-color-theme-text-primary-disabled);
  }
`,se=[ce,...W()],ne=q.constructTagName("cardcheckbox"),k={DEFAULT:"check-circle-bold",CHECKED:"check-circle-filled"},r={CHECK:"check",CHECKBOX:"checkbox"},A={SELECTION_TYPE:r.CHECK,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem"};var de=Object.defineProperty,j=(e,a,C,pe)=>{for(var i=void 0,g=e.length-1,I;g>=0;g--)(I=e[g])&&(i=I(a,C,i)||i);return i&&de(a,C,i),i};const E=class E extends Q(J(x)){constructor(){super(),this.checked=!1,this.selectionType=A.SELECTION_TYPE,this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",this.toggleOnEnter),this.addEventListener("keyup",this.toggleOnSpace)}connectedCallback(){super.connectedCallback(),this.role=ee.CHECKBOX}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&(this.setAttribute("aria-disabled",`${this.disabled}`),this.tabIndex=this.disabled?-1:0)}toggleChecked(){this.disabled||(this.checked=!this.checked)}toggleOnEnter(a){a.key==="Enter"&&this.toggleChecked()}toggleOnSpace(a){a.key===" "&&this.toggleChecked()}renderSelection(){const a=this.checked?k.CHECKED:k.DEFAULT;switch(this.selectionType){case r.CHECK:return o`<mdc-icon part="check check-icon" 
                   size="${A.ICON_SIZE}"
                   length-unit="${A.ICON_LENGTH_UNIT}" 
                   name="${a}"></mdc-icon>`;case r.CHECKBOX:return o`<mdc-staticcheckbox part="check" 
                   ?checked="${this.checked}" 
                   ?disabled="${this.disabled}"></mdc-staticcheckbox>`;default:return f}}renderHeader(){return this.cardTitle?o`<div part="header">
     ${this.renderIcon()}
     ${this.renderTitle()}
     ${this.renderSelection()}
   </div>`:f}render(){return o`
  ${this.renderImage()}
    <div part="body">
    ${this.renderHeader()}
      <slot name="before-body"></slot>
      <slot name="body"></slot>
      <slot name="after-body"></slot>
    </div>
  `}};E.styles=[...x.styles,...se];let s=E;j([z({type:Boolean,reflect:!0})],s.prototype,"checked");j([z({type:String,attribute:"selection-type",reflect:!0})],s.prototype,"selectionType");s.register(ne);const me=e=>o`
  <mdc-cardcheckbox
    @click="${c("onclick")}"
    @keydown="${c("onkeydown")}"
    @keyup="${c("onkeyup")}"
    @focus="${c("onfocus")}"
    @change="${c("onchange")}"
    variant="${e.variant}"
    orientation="${e.orientation}"
    card-title="${e["card-title"]}"
    subtitle="${e.subtitle}"
    image-src="${e["image-src"]}"
    image-alt="${e["image-alt"]}"
    icon-name="${e["icon-name"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    aria-label="${e["aria-label"]}"
    selection-type="${e["selection-type"]}"
    title-tag-name="${e["title-tag-name"]}"
    subtitle-tag-name="${e["subtitle-tag-name"]}"
    tabindex="${e.tabIndex}"
    class="${e.class}"
    style="${e.style}">${e.children}</mdc-cardcheckbox>`,ze={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:me,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(le)},orientation:{control:"select",options:Object.values(T)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"selection-type":{control:"select",options:Object.values(r)},"title-tag-name":{control:"select",options:Object.values(y)},"subtitle-tag-name":{control:"select",options:Object.values(y)},...re(["children"]),...ae,...oe}},l=o`<mdc-text slot='body' 
type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
Praesent gravida dui diam, non elementum risus laoreet vitae. 
Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
Vivamus mattis ligula eget imperdiet tempor. 
Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>`,n={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":r.CHECK,children:l}},d={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x280","image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:T.HORIZONTAL,children:l}},m={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label","selection-type":r.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:l}},p={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":r.CHECK,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:o`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    ${l}`}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x540","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:o`
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body"/>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    ${l}`}},u={render:()=>o`
  <mdc-formfieldgroup
  label="Checkbox Cards"
  help-text="Help Text"
  data-aria-label="Checkbox Cards">
  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
  ${te([1,2,3,4],e=>o`
    <mdc-cardcheckbox
    name="checkbox cards"
    variant="border"
    orientation="vertical"
    card-title="Title ${e}"
    subtitle="Subtitle"
    image-src="https://placehold.co/320x200"
    image-alt="Image Alt"
    icon-name="placeholder-bold"
    tabIndex="0"
    >
    ${l}
    </mdc-cardcheckbox>
  `)}
  </div>
  </mdc-formfieldgroup>
  `,argTypes:{...ie(["variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex","data-aria-label"])}};var N,v,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    'selection-type': SELECTION_TYPE.CHECK,
    children: defaultChildren
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var O,L,$;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x280',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...($=(L=d.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var D,H,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    'selection-type': SELECTION_TYPE.CHECK,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var G,U,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'selection-type': SELECTION_TYPE.CHECK,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(M=(U=p.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var F,_,B;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    \${defaultChildren}\`
  }
}`,...(B=(_=h.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var K,V,P;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x540',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body"/>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    \${defaultChildren}\`
  }
}`,...(P=(V=b.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var X,w,Y;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => html\`
  <mdc-formfieldgroup
  label="Checkbox Cards"
  help-text="Help Text"
  data-aria-label="Checkbox Cards">
  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
  \${repeat([1, 2, 3, 4], index => html\`
    <mdc-cardcheckbox
    name="checkbox cards"
    variant="border"
    orientation="vertical"
    card-title="Title \${index}"
    subtitle="Subtitle"
    image-src="https://placehold.co/320x200"
    image-alt="Image Alt"
    icon-name="placeholder-bold"
    tabIndex="0"
    >
    \${defaultChildren}
    </mdc-cardcheckbox>
  \`)}
  </div>
  </mdc-formfieldgroup>
  \`,
  argTypes: {
    ...disableControls(['variant', 'orientation', 'card-title', 'subtitle', 'image-src', 'image-alt', 'icon-name', 'checked', 'disabled', 'tabIndex', 'data-aria-label'])
  }
}`,...(Y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:Y.source}}};const je=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{p as CardWithoutBody,m as CardWithoutImage,u as CardsInCheckboxGroup,b as ContentAfterBody,h as ContentBeforeBody,n as Example,d as HorizontalCard,je as __namedExportsOrder,ze as default};
