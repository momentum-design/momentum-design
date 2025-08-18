import{i as Z,D as P,k as l}from"./lit-element-D5KKan5q.js";import{n as j}from"./property-Bj3TGwkg.js";import{D as Q}from"./DisabledMixin-B-Cnza7-.js";import{T as K}from"./TabIndexMixin-DEwGeIeI.js";import{C as x}from"./card.component-eIYH7VK1.js";import{R as X}from"./roles-CJI3JVG-.js";import{K as v}from"./keys-hFXe221I.js";import{a as Y}from"./index-B-GnYs90.js";import{T as J}from"./index-D1LU19-v.js";import"./index-S3PNIDkg.js";import{V as E}from"./index-DeEenWCE.js";import"./index-CY9PwAYn.js";import{Q as ee}from"./repeat-CNQ7t7Vw.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as te,s as ae}from"./commonArgTypes-BluK8w5L.js";import{a as re,t as ie,d as oe}from"./utils-CFOyPOhY.js";import{V as le,O as T,D as t}from"./FooterMixin-BQCuuCJE.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./provider.component-DrWB4byV.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./index-D0BaHLK6.js";import"./index-jqsjuHo7.js";import"./button.component-AY6DUPps.js";import"./state-CmYk530Z.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./button.utils-rNW36Ji7.js";import"./index-C8X24_bA.js";import"./popover.component-CWSuSUni.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./formfieldwrapper.component-BeqiOSNt.js";import"./radio.constants-CDGvXYPm.js";import"./iframe-BzlnvPy7.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./v4-CQkTLCs1.js";import"./link.constants-DNTydABS.js";const de=Z`
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
`,se=[de,...Y()];var ne=Object.defineProperty,q=(e,a,o,d)=>{for(var r=void 0,i=e.length-1,I;i>=0;i--)(I=e[i])&&(r=I(a,o,r)||r);return r&&ne(a,o,r),r};const f=class f extends Q(K(x)){constructor(){super(),this.checked=!1,this.name="",this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.toggleOnEnter.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=X.RADIO}getAllCardsWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-cardradio[name="${this.name}"]`))}toggleChecked(){if(this.disabled)return;this.getAllCardsWithinSameGroup().forEach(o=>{o.checked=!1}),this.checked=!0}setDisabled(a){this.setAttribute("aria-disabled",`${a}`),this.tabIndex=a?-1:0}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&this.setDisabled(this.disabled)}updateCardRadio(a,o){a[o].focus(),a[o].toggleChecked()}toggleOnEnter(a){if(this.disabled)return;const d=this.getAllCardsWithinSameGroup().filter(i=>!i.disabled),r=d.indexOf(this);if(["ArrowDown","ArrowRight"].includes(a.key)){const i=(r+1)%d.length;this.updateCardRadio(d,i)}else if(["ArrowUp","ArrowLeft"].includes(a.key)){const i=(r-1+d.length)%d.length;this.updateCardRadio(d,i)}a.key===v.ENTER&&this.toggleChecked()}toggleOnSpace(a){a.key===v.SPACE&&this.toggleChecked()}renderHeader(){return this.cardTitle?l`<div part="header">
      ${this.renderIcon()} ${this.renderTitle()}
      <mdc-staticradio part="check" ?checked="${this.checked}" ?disabled="${this.disabled}"></mdc-staticradio>
    </div>`:P}render(){return l`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};f.styles=[...x.styles,...se];let n=f;q([j({type:Boolean,reflect:!0})],n.prototype,"checked");q([j({type:String})],n.prototype,"name");n.register(J);const ce=e=>l` <mdc-cardradio
    @click="${c("onclick")}"
    @keydown="${c("onkeydown")}"
    @keyup="${c("onkeyup")}"
    @focus="${c("onfocus")}"
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
    style="${e.style}"
    >${e.children}</mdc-cardradio
  >`,at={title:"Components/card/cardradio",tags:["autodocs"],component:"mdc-cardradio",render:ce,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(le)},orientation:{control:"select",options:Object.values(T)},name:{control:"text"},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"title-tag-name":{control:"select",options:Object.values(E)},"subtitle-tag-name":{control:"select",options:Object.values(E)},...re(["children"]),...ie(["--mdc-card-width"]),...te,...ae}},s=l`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,m={args:{"card-title":"Title",name:"radio-card",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:s}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:T.HORIZONTAL,children:s}},h={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label",checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:s}},u={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${s}`}},g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${s}`}},A={render:()=>l`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${ee([1,2,3,4],e=>l`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="https://placehold.co/100x100"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${s}
            </mdc-cardradio>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,argTypes:{...oe(["aria-label","name","variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex"])}};var y,k,N;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    name: 'radio-card',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
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
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var S,C,O;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
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
}`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var R,$,L;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=($=h.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var D,G,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/100x100',
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
}`,...(M=(G=u.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var U,F,V;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
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
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(V=(F=b.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var B,w,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
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
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(H=(w=g.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var _,z,W;A.parameters={...A.parameters,docs:{...(_=A.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
              image-src="https://placehold.co/100x100"
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
}`,...(W=(z=A.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const rt=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInRadioGroup"];export{u as CardWithoutBody,h as CardWithoutImage,A as CardsInRadioGroup,g as ContentAfterBody,b as ContentBeforeBody,m as Example,p as HorizontalCard,rt as __namedExportsOrder,at as default};
