import{i as j,D as q,k as r}from"./lit-element-D5KKan5q.js";import{n as z}from"./index-C9z9WAEj.js";import{a as Z}from"./index-CcXofQbA.js";import{D as P}from"./DisabledMixin-BZruwOeC.js";import{T as Q}from"./TabIndexMixin-CsrHswKP.js";import{C as I,O as A,D as t}from"./card.component-BImqwbSY.js";import{T as X}from"./index-DmQsz46S.js";import"./index-I1JyLtQW.js";import"./index-D3DhXfcW.js";import"./index-BQHpR8ua.js";import{Q as J}from"./repeat-CNQ7t7Vw.js";import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as K,s as Y}from"./commonArgTypes-BluK8w5L.js";import{h as ee,d as te}from"./utils-CO8B6ZcN.js";import{V as x}from"./text.constants-ZF0jM5wn.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./link.constants-CqyNsepP.js";import"./index-B_EqOnoU.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-DCpIf2k8.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./radio.constants-DXoIHWZL.js";import"./iframe-C0Vt6-TV.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./v4-CQkTLCs1.js";const ae=j`
  :host {
    cursor: pointer;
    user-select: none;
  }

  :host::part(check){
    margin-left: auto;
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
`,re=[ae,...Z()];var oe=Object.defineProperty,W=(e,a,n,le)=>{for(var o=void 0,g=e.length-1,f;g>=0;g--)(f=e[g])&&(o=f(a,n,o)||o);return o&&oe(a,n,o),o};const T=class T extends P(Q(I)){constructor(){super(),this.checked=!1,this.name="",this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",this.toggleOnEnter),this.addEventListener("keyup",this.toggleOnSpace)}connectedCallback(){super.connectedCallback(),this.role="radio"}getAllCardsWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-cardradio[name="${this.name}"]`))}toggleChecked(){if(this.disabled)return;this.getAllCardsWithinSameGroup().forEach(n=>{n.checked=!1}),this.checked=!0}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}toggleOnEnter(a){a.key==="Enter"&&this.toggleChecked()}toggleOnSpace(a){a.key===" "&&this.toggleChecked()}renderHeader(){return this.cardTitle?r`<div part="header">
     ${this.renderIcon()}
     ${this.renderTitle()}
     <mdc-staticradio part="check" 
        ?checked="${this.checked}" 
        ?disabled="${this.disabled}"></mdc-staticradio>
   </div>`:q}render(){return r`
  ${this.renderImage()}
    <div part="body">
    ${this.renderHeader()}
      <slot name="before-body"></slot>
      <slot name="body"></slot>
      <slot name="after-body"></slot>
    </div>
  `}};T.styles=[...I.styles,...re];let d=T;W([z({type:Boolean,reflect:!0})],d.prototype,"checked");W([z({type:String})],d.prototype,"name");d.register(X);const ie=e=>r`
  <mdc-cardradio
    @click="${l("onclick")}"
    @keydown="${l("onkeydown")}"
    @keyup="${l("onkeyup")}"
    @focus="${l("onfocus")}"
    @change="${l("onchange")}"
    name="${e.name}"
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
    title-tag-name="${e["title-tag-name"]}"
    subtitle-tag-name="${e["subtitle-tag-name"]}"
    tabindex="${e.tabIndex}"
    class="${e.class}"
    style="${e.style}">${e.children}</mdc-cardradio>`,_e={title:"Work In Progress/card/cardradio",tags:["autodocs"],component:"mdc-cardradio",render:ie,parameters:{badges:["wip"]},argTypes:{variant:{control:"select",options:["border","ghost"]},orientation:{control:"select",options:Object.values(A)},name:{control:"text"},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"title-tag-name":{control:"select",options:Object.values(x)},"subtitle-tag-name":{control:"select",options:Object.values(x)},...ee(["children"]),...K,...Y}},i=r`<mdc-text slot='body' 
type="body-midsize-medium" tagname="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam vulputate aliquet risus, eget auctor ante egestas facilisis. Curabitur malesuada tempor pulvinar. 
Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at. 
Praesent gravida dui diam, non elementum risus laoreet vitae. 
Sed sed nunc ullamcorper, porttitor dui id, posuere justo. Curabitur laoreet sem ut pharetra hendrerit. 
Vivamus mattis ligula eget imperdiet tempor. 
Ut in massa luctus lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text>`,s={args:{"card-title":"Title",name:"radio-card",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:i}},c={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x280","image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:A.HORIZONTAL,children:i}},m={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label",checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:i}},p={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:r`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    ${i}`}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x540","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:A.HORIZONTAL,checked:!1,disabled:!1,tabIndex:0,children:r`
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body"/>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    ${i}`}},u={render:()=>r`
    <mdc-formfieldgroup
    label="Radio Cards"
    name="radio-cards"
    help-text="Help Text"
    data-aria-label="Radio Cards">
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
    ${J([1,2,3,4],e=>r`
      <mdc-cardradio
      name="radio-cards"
      variant="border"
      orientation="vertical"
      card-title="Title ${e}"
      subtitle="Subtitle"
      image-src="https://placehold.co/320x200"
      image-alt="Image Alt"
      icon-name="placeholder-bold"
      tabIndex="0"
      >
      ${i}
      </mdc-cardradio>
    `)}
    </div>
    </mdc-formfieldgroup>
    `,argTypes:{...te(["aria-label","name","variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex"])}};var y,E,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    name: 'radio-card',
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
    children: defaultChildren
  }
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var k,N,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x280',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var $,C,O;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(O=(C=m.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var L,R,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(G=(R=p.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var D,M,U;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`
    <mdc-text slot='before-body' type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body"/>
    \${defaultChildren}\`
  }
}`,...(U=(M=b.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var F,B,V;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`
    <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body"/>
    <mdc-text slot='after-body' type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
    \${defaultChildren}\`
  }
}`,...(V=(B=h.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var H,w,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup
    label="Radio Cards"
    name="radio-cards"
    help-text="Help Text"
    data-aria-label="Radio Cards">
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
    \${repeat([1, 2, 3, 4], index => html\`
      <mdc-cardradio
      name="radio-cards"
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
      </mdc-cardradio>
    \`)}
    </div>
    </mdc-formfieldgroup>
    \`,
  argTypes: {
    ...disableControls(['aria-label', 'name', 'variant', 'orientation', 'card-title', 'subtitle', 'image-src', 'image-alt', 'icon-name', 'checked', 'disabled', 'tabIndex'])
  }
}`,...(_=(w=u.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const ze=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInRadioGroup"];export{p as CardWithoutBody,m as CardWithoutImage,u as CardsInRadioGroup,h as ContentAfterBody,b as ContentBeforeBody,s as Example,c as HorizontalCard,ze as __namedExportsOrder,_e as default};
