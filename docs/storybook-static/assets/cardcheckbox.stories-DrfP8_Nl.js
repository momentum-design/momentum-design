import{i as q,D as x,k as o}from"./lit-element-D5KKan5q.js";import{n as j}from"./property-Bj3TGwkg.js";import{D as W}from"./DisabledMixin-B-Cnza7-.js";import{T as Q}from"./TabIndexMixin-DEwGeIeI.js";import{C as f}from"./card.component-eIYH7VK1.js";import{R as J}from"./roles-CJI3JVG-.js";import{K as k}from"./keys-hFXe221I.js";import{u as ee}from"./provider.component-DrWB4byV.js";import{a as te}from"./index-B-GnYs90.js";import"./index-Dzs0WMS-.js";import{V as y}from"./index-DeEenWCE.js";import"./index-Dk8m2Vgt.js";import{Q as ae}from"./repeat-CNQ7t7Vw.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as oe,s as ie}from"./commonArgTypes-BluK8w5L.js";import{a as re,t as le,d as ce}from"./utils-CFOyPOhY.js";import{V as se,O as T,D as t}from"./FooterMixin-BQCuuCJE.js";import"./index--z27hQ17.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./iframe-CxpxMbZi.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./v4-CQkTLCs1.js";import"./link.constants-DNTydABS.js";import"./index-DBt424X_.js";import"./button.component-AY6DUPps.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./button.utils-rNW36Ji7.js";import"./index-CWIoG0BG.js";import"./popover.component-BXNlzYwZ.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./formfieldwrapper.component-BeqiOSNt.js";const ne=ee.constructTagName("cardcheckbox"),N={DEFAULT:"check-circle-bold",CHECKED:"check-circle-filled"},i={CHECK:"check",CHECKBOX:"checkbox"},A={SELECTION_TYPE:i.CHECK,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem"},de=q`
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
`,me=[de,...te()];var pe=Object.defineProperty,Z=(e,a,C,be)=>{for(var r=void 0,g=e.length-1,I;g>=0;g--)(I=e[g])&&(r=I(a,C,r)||r);return r&&pe(a,C,r),r};const E=class E extends W(Q(f)){constructor(){super(),this.checked=!1,this.selectionType=A.SELECTION_TYPE,this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.toggleOnEnter.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=J.CHECKBOX}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&(this.setAttribute("aria-disabled",`${this.disabled}`),this.tabIndex=this.disabled?-1:0)}toggleChecked(){this.disabled||(this.checked=!this.checked)}toggleOnEnter(a){a.key===k.ENTER&&this.toggleChecked()}toggleOnSpace(a){a.key===k.SPACE&&this.toggleChecked()}renderSelection(){const a=this.checked?N.CHECKED:N.DEFAULT;switch(this.selectionType){case i.CHECK:return o`<mdc-icon
          part="check check-icon"
          size="${A.ICON_SIZE}"
          length-unit="${A.ICON_LENGTH_UNIT}"
          name="${a}"
        ></mdc-icon>`;case i.CHECKBOX:return o`<mdc-staticcheckbox
          part="check"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>`;default:return x}}renderHeader(){return this.cardTitle?o`<div part="header">${this.renderIcon()} ${this.renderTitle()} ${this.renderSelection()}</div>`:x}render(){return o`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};E.styles=[...f.styles,...me];let c=E;Z([j({type:Boolean,reflect:!0})],c.prototype,"checked");Z([j({type:String,attribute:"selection-type",reflect:!0})],c.prototype,"selectionType");c.register(ne);const he=e=>o` <mdc-cardcheckbox
    @click="${s("onclick")}"
    @keydown="${s("onkeydown")}"
    @keyup="${s("onkeyup")}"
    @focus="${s("onfocus")}"
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
    style="${e.style}"
    >${e.children}</mdc-cardcheckbox
  >`,it={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:he,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(se)},orientation:{control:"select",options:Object.values(T)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"selection-type":{control:"select",options:Object.values(i)},"title-tag-name":{control:"select",options:Object.values(y)},"subtitle-tag-name":{control:"select",options:Object.values(y)},...re(["children"]),...le(["--mdc-card-width"]),...oe,...ie}},l=o`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,n={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":i.CHECK,children:l}},d={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"selection-type":i.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:T.HORIZONTAL,children:l}},m={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label","selection-type":i.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:l}},p={args:{"image-src":"https://placehold.co/100x100","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":i.CHECK,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,"selection-type":i.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:o`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${l}`}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/100x100","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,"selection-type":i.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:o`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      ${l}`}},u={render:()=>o`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${ae([1,2,3,4],e=>o`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="https://placehold.co/100x100"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${l}
            </mdc-cardcheckbox>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,argTypes:{...ce(["variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex","data-aria-label"])}};var v,S,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
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
    'selection-type': SELECTION_TYPE.CHECK,
    children: defaultChildren
  }
}`,...(O=(S=n.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var L,$,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/100x100',
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
}`,...(D=($=d.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var H,R,G;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(R=m.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var U,M,F;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/100x100',
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
}`,...(F=(M=p.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var _,B,K;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(K=(B=h.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var V,P,w;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="https://placehold.co/100x100" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(w=(P=b.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var X,Y,z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
              image-src="https://placehold.co/100x100"
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
}`,...(z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const rt=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{p as CardWithoutBody,m as CardWithoutImage,u as CardsInCheckboxGroup,b as ContentAfterBody,h as ContentBeforeBody,n as Example,d as HorizontalCard,rt as __namedExportsOrder,it as default};
