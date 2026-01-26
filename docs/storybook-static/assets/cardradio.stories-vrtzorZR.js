import{X as Z,a0 as Q,R as X,h as Y,k as l,n as K,V as y}from"./iframe-DBGUNv4F.js";import{D as J}from"./DisabledMixin-toBsO7Rw.js";import{K as ee,T as te,A as s}from"./KeyToActionMixin-CyA1a_rM.js";import{C as x}from"./card.component-D2lJmgR4.js";import{T as ae}from"./index-C7OShgPo.js";import"./index-C-v37Hmt.js";import"./index-Vbt82wXk.js";import{t as i}from"./if-defined-ByroiDkB.js";import{Q as re}from"./repeat-BNoaB5yj.js";import{i as ie}from"./manifest-FrmGbvs6.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{c as oe,s as ne}from"./commonArgTypes-BG7EqI50.js";import{h as le,a as de}from"./utils-D6nie9pS.js";import{V as se,O as v,D as t}from"./FooterMixin-CpGVnDQI.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-CTOlvWWT.js";import"./index-B0w9BMdH.js";import"./index-C4Fa2Q6W.js";import"./button.component-DHSQJTRA.js";import"./buttonsimple.component-D4MYEviQ.js";import"./button.utils-rNW36Ji7.js";import"./index-DPycxoRr.js";import"./popover.component-BSR9kose.js";import"./BackdropMixin-pu4YriUi.js";import"./dom-BlZvhF8F.js";import"./popover.constants-CQwJjFEb.js";import"./index-BY9gZPFl.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-1_uyFcu6.js";import"./formfieldwrapper.component-7FRpi-mD.js";import"./formfieldwrapper.constants-CtuU3XED.js";import"./radio.constants-BMizd5Hg.js";import"./index-DYxC4i4C.js";import"./index-DTrDRi1E.js";import"./directive-Ctav8iJK.js";import"./link.constants-Dzjhk71S.js";const ce=Z`
  :host {
    cursor: pointer;
    user-select: none;
  }

  :host(:dir(ltr))::part(check) {
    margin-left: auto;
  }

  :host(:dir(rtl))::part(check) {
    margin-right: auto;
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]) {
    border: 1px solid var(--mds-color-theme-outline-input-active);
    box-shadow: 0 0 0 1px var(--mds-color-theme-outline-input-active);
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host([checked]:active) {
    background-color: var(--mds-color-theme-background-primary-ghost);
  }

  :host::part(check-icon) {
    color: var(--mds-color-theme-text-secondary-normal);
  }

  :host([checked])::part(check-icon) {
    color: var(--mds-color-theme-text-accent-normal);
  }

  :host([disabled]) {
    background-color: var(--mds-color-theme-background-primary-ghost);
    color: var(--mds-color-theme-text-primary-disabled);
    border-color: var(--mds-color-theme-outline-primary-disabled);
  }

  :host([disabled])::part(image) {
    opacity: 0.5;
  }
`,me=[ce,...Q()];var ue=Object.defineProperty,q=(e,a,r,P)=>{for(var o=void 0,c=e.length-1,n;c>=0;c--)(n=e[c])&&(o=n(a,r,o)||o);return o&&ue(a,r,o),o};const E=class E extends ee(J(te(x))){constructor(){super(),this.checked=!1,this.name="",this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=X.RADIO}getAllCardsWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-cardradio[name="${this.name}"]`))}toggleChecked(){if(this.disabled||this.checked)return;this.getAllCardsWithinSameGroup().forEach(r=>{r.checked=!1}),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}setDisabled(a){this.setAttribute("aria-disabled",`${a}`),this.tabIndex=a?-1:0}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&this.setDisabled(this.disabled)}updateCardRadio(a,r){a[r].focus(),a[r].toggleChecked()}handleKeyDown(a){const r=this.getActionForKeyEvent(a);if(r===s.SPACE){a.preventDefault();return}if(this.disabled)return;const o=this.getAllCardsWithinSameGroup().filter(n=>!n.disabled),c=o.indexOf(this);if(r===s.DOWN||s.RIGHT===r){const n=(c+1)%o.length;this.updateCardRadio(o,n)}else if(r===s.UP||s.LEFT===r){const n=(c-1+o.length)%o.length;this.updateCardRadio(o,n)}r===s.ENTER&&this.toggleChecked()}toggleOnSpace(a){this.getActionForKeyEvent(a)===s.SPACE&&this.toggleChecked()}renderHeader(){return this.cardTitle?l`<div part="header">
      ${this.renderIcon()} ${this.renderTitle()}
      <mdc-staticradio part="check" ?checked="${this.checked}" ?disabled="${this.disabled}"></mdc-staticradio>
    </div>`:Y}render(){return l`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};E.styles=[...x.styles,...me];let b=E;q([K({type:Boolean,reflect:!0})],b.prototype,"checked");q([K({type:String})],b.prototype,"name");b.register(ae);const{action:u}=__STORYBOOK_MODULE_ACTIONS__,be=e=>l`<div role="main">
    <mdc-cardradio
      @click="${u("onclick")}"
      @keydown="${u("onkeydown")}"
      @keyup="${u("onkeyup")}"
      @focus="${u("onfocus")}"
      @change="${u("onchange")}"
      name="${i(e.name)}"
      variant="${i(e.variant)}"
      orientation="${i(e.orientation)}"
      card-title="${i(e["card-title"])}"
      subtitle="${i(e.subtitle)}"
      image-src="${i(e["image-src"])}"
      image-alt="${i(e["image-alt"])}"
      icon-name="${i(e["icon-name"])}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      aria-label="${i(e["aria-label"])}"
      title-tag-name="${i(e["title-tag-name"])}"
      subtitle-tag-name="${i(e["subtitle-tag-name"])}"
      tabindex="${i(e.tabIndex)}"
      class="${i(e.class)}"
      style="${i(e.style)}"
      >${e.children}</mdc-cardradio
    >
  </div>`,Qe={title:"Components/card/cardradio",tags:["autodocs"],component:"mdc-cardradio",render:be,argTypes:{variant:{control:"select",options:Object.values(se)},orientation:{control:"select",options:Object.values(v)},name:{control:"text"},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(ie)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"title-tag-name":{control:"select",options:Object.values(y)},"subtitle-tag-name":{control:"select",options:Object.values(y)},...le(["children"]),...oe,...ne}},m=l`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,p={args:{"card-title":"Title",name:"radio-card",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:m}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:v.HORIZONTAL,children:m}},g={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label",checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:m}},A={args:{"image-src":d.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},T={args:{"card-title":"Title",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${d.card}" alt="Image Alt" />
      </div>
      ${m}`}},f={args:{"card-title":"Title",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:v.HORIZONTAL,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${d.card}" alt="Image Alt" />
      </div>
      ${m}`}},I={render:()=>l`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${re([1,2,3,4],e=>l`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="${d.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${m}
            </mdc-cardradio>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...de()};var N,k,S;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    name: 'radio-card',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
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
}`,...(S=(k=p.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,O,$;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
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
}`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var R,L,D;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(L=g.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var F,G,M;A.parameters={...A.parameters,docs:{...(F=A.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
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
}`,...(M=(G=A.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var U,V,B;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(B=(V=T.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var _,w,H;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(H=(w=f.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var W,j,z;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        \${repeat([1, 2, 3, 4], index => html\`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title \${index}"
              subtitle="Subtitle"
              image-src="\${imageFixtures.card}"
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
  ...hideAllControls()
}`,...(z=(j=I.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const Xe=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInRadioGroup"];export{A as CardWithoutBody,g as CardWithoutImage,I as CardsInRadioGroup,f as ContentAfterBody,T as ContentBeforeBody,p as Example,h as HorizontalCard,Xe as __namedExportsOrder,Qe as default};
