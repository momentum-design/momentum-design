import{u as W,S as Y,E as N,h as s,k as a,q as C,V as I,n as y}from"./iframe-Jn7RecH3.js";import{t as v}from"./if-defined-DcDceuTE.js";import"./index-r0xkQCBZ.js";import"./index-Ct9ahQwI.js";import"./index-Bt0QgDe4.js";import{i as _}from"./imageFixtures-CD4avj2q.js";import{c as j,s as X}from"./commonArgTypes-BluK8w5L.js";import{d as Z,h as G}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./index-CE7S_vkO.js";import"./index-DTrDRi1E.js";import"./button.component-CV58RRI2.js";import"./buttonsimple.component-F0YeC2Jz.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CGJfw_7W.js";import"./TabIndexMixin-Y1wIO-IA.js";import"./button.utils-rNW36Ji7.js";import"./IconNameMixin-Bj7oPHQD.js";import"./linksimple.component-B4UUYqHL.js";import"./DataAriaLabelMixin-mdjsGCeI.js";import"./link.constants-D9aLvh3q.js";const q=W.constructTagName("banner"),n={CUSTOM:"custom",INFORMATIONAL:"informational",WARNING:"warning",ERROR:"error",SUCCESS:"success"},c={INFORMATIONAL_ICON_NAME:"info-circle-bold",SUCCESS_ICON_NAME:"check-circle-bold",WARNING_ICON_NAME:"warning-bold",ERROR_ICON_NAME:"error-legacy-bold"},h={VARIANT:n.CUSTOM,PREFIX_ICON_SIZE:1.5},K=Y`
  :host {
    --mdc-banner-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-banner-icon-color: var(--mds-color-theme-text-primary-normal);
    --mdc-banner-elevation: var(--mds-elevation-3);
    --mdc-banner-padding: 0.75rem;
    --mdc-banner-gap: 0.5rem;

    display: flex;
    padding: var(--mdc-banner-padding);
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    width: 100%;
    background-color: var(--mdc-banner-background-color);
    border: 1px solid var(--mdc-banner-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-banner-elevation);
  }

  :host([variant='success']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-success-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-success-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-join-normal);
  }

  :host([variant='warning']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-warning-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-warning-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-warning-normal);
  }

  :host([variant='error']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-error-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-error-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-cancel-normal);
  }

  :host([variant='informational']) {
    --mdc-banner-icon-color: var(--mds-color-theme-text-accent-normal);
    --mdc-banner-background-color: var(--mds-color-theme-background-alert-theme-normal);
    --mdc-banner-border-color: var(--mds-color-theme-outline-theme-normal);
  }

  :host::part(leading) {
    display: flex;
    align-items: flex-start;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    flex: 1 0 0;
  }

  :host::part(leading-text) {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  :host(:not([secondary-label]))::part(leading) {
    align-items: center;
  }

  :host::part(leading-icon) {
    color: var(--mdc-banner-icon-color);
    padding: 0.25rem 0;
  }

  :host::part(trailing) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    align-self: stretch;
    flex-wrap: wrap;
  }

  ::slotted([slot='trailing-actions']) {
    display: flex;
    align-items: center;
    gap: var(--mdc-banner-gap);
    flex-wrap: wrap;
  }
`,H=[K],J=e=>{switch(e){case n.INFORMATIONAL:return c.INFORMATIONAL_ICON_NAME;case n.SUCCESS:return c.SUCCESS_ICON_NAME;case n.WARNING:return c.WARNING_ICON_NAME;case n.ERROR:return c.ERROR_ICON_NAME;default:return null}};var Q=Object.defineProperty,f=(e,l,x,ae)=>{for(var r=void 0,g=e.length-1,S;g>=0;g--)(S=e[g])&&(r=S(l,x,r)||r);return r&&Q(l,x,r),r};const A=class A extends N{constructor(){super(...arguments),this.variant=h.VARIANT,this.label=""}renderIcon(l){return l?a`
      <mdc-icon
        name="${l}"
        size="${h.PREFIX_ICON_SIZE}"
        part="leading-icon"
        length-unit="rem"
      ></mdc-icon>
    `:s}getTextLabel(){return this.label?a`
      <mdc-text part="leading-label" type="${C.BODY_LARGE_REGULAR}" tagname="${I.SPAN}"
        >${this.label}</mdc-text
      >
      ${this.secondaryLabel?a`<mdc-text part="leading-secondary-label" type="${C.BODY_MIDSIZE_REGULAR}" tagname="${I.SPAN}"
            >${this.secondaryLabel}</mdc-text
          >`:s}
    `:s}render(){return a`
      <slot name="content">
        <div part="leading">
          <slot name="leading-icon">
            ${this.variant!==h.VARIANT?this.renderIcon(J(this.variant)??""):s}
          </slot>
          <slot name="leading-text">
            <div part="leading-text">${this.getTextLabel()}</div>
          </slot>
        </div>
        <div part="trailing">
          <slot name="trailing-actions"></slot>
        </div>
      </slot>
    `}};A.styles=[...N.styles,...H];let o=A;f([y({type:String,reflect:!0})],o.prototype,"variant");f([y({type:String,reflect:!0})],o.prototype,"label");f([y({type:String,reflect:!0,attribute:"secondary-label"})],o.prototype,"secondaryLabel");o.register(q);const{action:i}=__STORYBOOK_MODULE_ACTIONS__,z=e=>a`
  <mdc-banner
    variant="${v(e.variant)}"
    label="${v(e.label)}"
    secondary-label="${v(e["secondary-label"])}"
    class="${e.class}"
    style="${e.style}"
  >
    ${e.children}
  </mdc-banner>
`,Ne={title:"Components/banner",tags:["autodocs"],component:"mdc-banner",render:z,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(n)},label:{control:"text"},"secondary-label":{control:"text"},...j,...X,...Z(["children","content","leading-icon","leading-text","trailing-actions"])}},ee={variant:"custom",label:"Banner Label","secondary-label":"This is the secondary label of the banner."},t=a`
  <div slot="trailing-actions">
    <mdc-button variant="tertiary" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="secondary" aria-label="Perform primary action">Action</mdc-button>
    <mdc-button
      variant="tertiary"
      prefix-icon="cancel-bold"
      size="20"
      aria-label="Dismiss banner"
      @click="${i("dismiss")}"
    ></mdc-button>
  </div>
`,d={args:{...ee,variant:"informational",label:"System Update Available","secondary-label":"A new version is ready to install. Please save your work before proceeding.",children:t}},m={name:"All Variants",render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${[{variant:"custom",label:"Custom Banner with Slot Icon","secondary-label":"This banner uses a custom icon via slot instead of variant-based icon.",children:a`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.5" style="padding: 0.25rem 0;"></mdc-icon>
            ${t}
          `},{variant:"informational",label:"System Update Available","secondary-label":"A new version is ready to install.",children:t},{variant:"warning",label:"Storage Almost Full","secondary-label":"Your storage is 95% full. Consider removing some files.",children:t},{variant:"error",label:"Connection Failed","secondary-label":"Unable to connect to the server. Please try again.",children:a`
            ${t}
            <mdc-button
              slot="trailing-actions"
              variant="tertiary"
              prefix-icon="reset-bold"
              size="20"
              aria-label="Retry connection"
              @click="${i("retry")}"
            ></mdc-button>
          `},{variant:"success",label:"Changes Saved","secondary-label":"Your changes have been successfully saved.",children:t}].map(e=>z(e))}
    </div>
  `,...G()},b={name:"Label Only",args:{variant:"informational",label:"System Update Available",children:t}},u={name:"Without Actions",args:{variant:"informational",label:"Information Message","secondary-label":"This banner has no action buttons."}},p={name:"Promotional Banner",render:()=>a`
    <mdc-banner>
      <!-- Using the content slot to completely override the default banner structure -->
      <div
        slot="content"
        style="
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1.5rem;
        align-items: flex-start;
        width: 100%;
        padding: 0 2rem;
      "
      >
        <!-- Close button positioned absolutely in top-right corner -->
        <mdc-button
          variant="tertiary"
          prefix-icon="cancel-bold"
          size="20"
          aria-label="Close promotional banner"
          @click="${i("close")}"
          style="
          position: absolute;
          right: 1rem;
        "
        ></mdc-button>

        <!-- Left Image -->
        <img
          src=${_.card}
          alt="Promotional image"
          style="
          width: 120px;
          height: 100%;
          object-fit: cover;
        "
        />

        <!-- Center Content Area -->
        <div style="flex: 1; min-width: 0;">
          <!-- Label -->
          <mdc-text type="heading-large-bold" tagname="h3">Label text</mdc-text>

          <!-- Secondary label text -->
          <mdc-text>
            Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
            <mdc-link>Learn more</mdc-link>
          </mdc-text>

          <!-- Action buttons -->
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <mdc-button variant="tertiary" aria-label="Tertiary action" @click="${i("tertiary-action")}"
              >Label</mdc-button
            >
            <mdc-button variant="secondary" aria-label="Secondary action" @click="${i("secondary-action")}"
              >Label</mdc-button
            >
          </div>
        </div>

        <!-- Right Image -->
        <img
          src=${_.card}
          alt="Promotional image"
          style="
          width: 120px;
          height: 100%;
          object-fit: cover;
        "
        />
      </div>
    </mdc-banner>
  `,...G()};var O,R,$;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...DefaultArgs,
    variant: 'informational',
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install. Please save your work before proceeding.',
    children: DefaultButtons
  }
}`,...($=(R=d.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var E,w,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      \${[{
    variant: 'custom',
    label: 'Custom Banner with Slot Icon',
    'secondary-label': 'This banner uses a custom icon via slot instead of variant-based icon.',
    children: html\`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.5" style="padding: 0.25rem 0;"></mdc-icon>
            \${DefaultButtons}
          \`
  }, {
    variant: 'informational',
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install.',
    children: DefaultButtons
  }, {
    variant: 'warning',
    label: 'Storage Almost Full',
    'secondary-label': 'Your storage is 95% full. Consider removing some files.',
    children: DefaultButtons
  }, {
    variant: 'error',
    label: 'Connection Failed',
    'secondary-label': 'Unable to connect to the server. Please try again.',
    children: html\`
            \${DefaultButtons}
            <mdc-button
              slot="trailing-actions"
              variant="tertiary"
              prefix-icon="reset-bold"
              size="20"
              aria-label="Retry connection"
              @click="\${action('retry')}"
            ></mdc-button>
          \`
  }, {
    variant: 'success',
    label: 'Changes Saved',
    'secondary-label': 'Your changes have been successfully saved.',
    children: DefaultButtons
  }].map(args => render(args))}
    </div>
  \`,
  ...hideAllControls()
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var T,k,M;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Label Only',
  args: {
    variant: 'informational',
    label: 'System Update Available',
    children: DefaultButtons
  }
}`,...(M=(k=b.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var P,U,D;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Without Actions',
  args: {
    variant: 'informational',
    label: 'Information Message',
    'secondary-label': 'This banner has no action buttons.'
  }
}`,...(D=(U=u.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var B,F,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Promotional Banner',
  render: () => html\`
    <mdc-banner>
      <!-- Using the content slot to completely override the default banner structure -->
      <div
        slot="content"
        style="
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1.5rem;
        align-items: flex-start;
        width: 100%;
        padding: 0 2rem;
      "
      >
        <!-- Close button positioned absolutely in top-right corner -->
        <mdc-button
          variant="tertiary"
          prefix-icon="cancel-bold"
          size="20"
          aria-label="Close promotional banner"
          @click="\${action('close')}"
          style="
          position: absolute;
          right: 1rem;
        "
        ></mdc-button>

        <!-- Left Image -->
        <img
          src=\${imageFixtures.card}
          alt="Promotional image"
          style="
          width: 120px;
          height: 100%;
          object-fit: cover;
        "
        />

        <!-- Center Content Area -->
        <div style="flex: 1; min-width: 0;">
          <!-- Label -->
          <mdc-text type="heading-large-bold" tagname="h3">Label text</mdc-text>

          <!-- Secondary label text -->
          <mdc-text>
            Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
            <mdc-link>Learn more</mdc-link>
          </mdc-text>

          <!-- Action buttons -->
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <mdc-button variant="tertiary" aria-label="Tertiary action" @click="\${action('tertiary-action')}"
              >Label</mdc-button
            >
            <mdc-button variant="secondary" aria-label="Secondary action" @click="\${action('secondary-action')}"
              >Label</mdc-button
            >
          </div>
        </div>

        <!-- Right Image -->
        <img
          src=\${imageFixtures.card}
          alt="Promotional image"
          style="
          width: 120px;
          height: 100%;
          object-fit: cover;
        "
        />
      </div>
    </mdc-banner>
  \`,
  ...hideAllControls()
}`,...(V=(F=p.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const Ce=["Example","AllVariants","LabelOnly","WithoutActions","PromotionalBanner"];export{m as AllVariants,d as Example,b as LabelOnly,p as PromotionalBanner,u as WithoutActions,Ce as __namedExportsOrder,Ne as default};
