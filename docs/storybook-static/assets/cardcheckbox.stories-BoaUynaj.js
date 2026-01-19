import{u as Q,U as J,X as ee,R as te,h as N,k as r,n as q,V as x}from"./iframe-BCMIj5Hm.js";import{D as ae}from"./DisabledMixin-B4Oykn5Q.js";import{T as ie,K as E}from"./TabIndexMixin-BsqTLWiT.js";import{C as v}from"./card.component-DT4ngYwj.js";import"./index-DawcDNdR.js";import"./index-BJ_Y-rkE.js";import{t as i}from"./if-defined-laA4nR5u.js";import{Q as re}from"./repeat-C9w26mDL.js";import{i as oe}from"./manifest-DRrdiy54.js";import{i as l}from"./imageFixtures-CD4avj2q.js";import{c as le,s as ne}from"./commonArgTypes-BG7EqI50.js";import{h as ce,a as se}from"./utils-D6nie9pS.js";import{V as de,O as I,D as t}from"./FooterMixin-B3CkpAyT.js";import"./index-D04HWQT8.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-DAg8esi8.js";import"./index-DTrDRi1E.js";import"./formfieldwrapper.constants-BL-6j9WN.js";import"./popover.constants-D_bJir7D.js";import"./directive-Ctav8iJK.js";import"./link.constants-YDT1rkRy.js";import"./index-DxXNhewu.js";import"./button.component-DcTyC9Rv.js";import"./buttonsimple.component-lMFqpsZa.js";import"./button.utils-rNW36Ji7.js";import"./index-HkF_GrEw.js";import"./popover.component-n9qdTPww.js";import"./BackdropMixin-D4A0uhXR.js";import"./index-C-4VGxA9.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-DVWx9CSx.js";import"./formfieldwrapper.component-BVQ-ACDW.js";const me=Q.constructTagName("cardcheckbox"),S={DEFAULT:"check-circle-bold",CHECKED:"check-circle-filled"},o={CHECK:"check",CHECKBOX:"checkbox"},C={SELECTION_TYPE:o.CHECK,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem"},be=J`
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

  :host([disabled])::part(check-icon) {
    color: var(--mds-color-theme-text-primary-disabled);
  }
`,ue=[be,...ee()];var pe=Object.defineProperty,W=(e,a,y,ge)=>{for(var n=void 0,T=e.length-1,k;T>=0;T--)(k=e[T])&&(n=k(a,y,n)||n);return n&&pe(a,y,n),n};const f=class f extends ae(ie(v)){constructor(){super(),this.checked=!1,this.selectionType=C.SELECTION_TYPE,this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=te.CHECKBOX}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&(this.setAttribute("aria-disabled",`${this.disabled}`),this.tabIndex=this.disabled?-1:0)}toggleChecked(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}handleKeyDown(a){a.key===E.ENTER?this.toggleChecked():a.key===E.SPACE&&a.preventDefault()}toggleOnSpace(a){a.key===E.SPACE&&(a.preventDefault(),this.toggleChecked())}renderSelection(){const a=this.checked?S.CHECKED:S.DEFAULT;switch(this.selectionType){case o.CHECK:return r`<mdc-icon
          part="check check-icon"
          size="${C.ICON_SIZE}"
          length-unit="${C.ICON_LENGTH_UNIT}"
          name="${a}"
        ></mdc-icon>`;case o.CHECKBOX:return r`<mdc-staticcheckbox
          part="check"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>`;default:return N}}renderHeader(){return this.cardTitle?r`<div part="header">${this.renderIcon()} ${this.renderTitle()} ${this.renderSelection()}</div>`:N}render(){return r`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};f.styles=[...v.styles,...ue];let d=f;W([q({type:Boolean,reflect:!0})],d.prototype,"checked");W([q({type:String,attribute:"selection-type",reflect:!0})],d.prototype,"selectionType");d.register(me);const{action:s}=__STORYBOOK_MODULE_ACTIONS__,he=e=>r`<div role="main">
    <mdc-cardcheckbox
      @click="${s("onclick")}"
      @keydown="${s("onkeydown")}"
      @keyup="${s("onkeyup")}"
      @focus="${s("onfocus")}"
      @change="${s("onchange")}"
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
      selection-type="${i(e["selection-type"])}"
      title-tag-name="${i(e["title-tag-name"])}"
      subtitle-tag-name="${i(e["subtitle-tag-name"])}"
      tabindex="${i(e.tabIndex)}"
      class="${i(e.class)}"
      style="${i(e.style)}"
      >${e.children}</mdc-cardcheckbox
    >
  </div>`,We={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:he,argTypes:{variant:{control:"select",options:Object.values(de)},orientation:{control:"select",options:Object.values(I)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(oe)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"selection-type":{control:"select",options:Object.values(o)},"title-tag-name":{control:"select",options:Object.values(x)},"subtitle-tag-name":{control:"select",options:Object.values(x)},...ce(["children"]),...le,...ne}},c=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":o.CHECK,children:c}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:I.HORIZONTAL,children:c}},u={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label","selection-type":o.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:c}},p={args:{"image-src":l.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":o.CHECK,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${l.card}" alt="Image Alt" />
      </div>
      ${c}`}},g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:I.HORIZONTAL,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${l.card}" alt="Image Alt" />
      </div>
      ${c}`}},A={render:()=>r`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${re([1,2,3,4],e=>r`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="${l.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${c}
            </mdc-cardcheckbox>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...se()};var O,L,$;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
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
    'selection-type': SELECTION_TYPE.CHECK,
    children: defaultChildren
  }
}`,...($=(L=m.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var D,F,R;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
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
}`,...(R=(F=b.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var H,U,M;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(U=u.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var _,G,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
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
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var B,V,w;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(w=(V=h.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var P,X,Y;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var j,z,Z;A.parameters={...A.parameters,docs:{...(j=A.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        \${repeat([1, 2, 3, 4], index => html\`
            <mdc-cardcheckbox
              name="checkbox cards"
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
            </mdc-cardcheckbox>
          \`)}
      </div>
    </mdc-formfieldgroup>
  \`,
  ...hideAllControls()
}`,...(Z=(z=A.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};const Qe=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{p as CardWithoutBody,u as CardWithoutImage,A as CardsInCheckboxGroup,g as ContentAfterBody,h as ContentBeforeBody,m as Example,b as HorizontalCard,Qe as __namedExportsOrder,We as default};
