import{k as t}from"./iframe-D0jeH_1V.js";import{t as c}from"./if-defined-CfnkxC3R.js";import{B as k}from"./index-Dr8DfnBV.js";import"./index-oeagNrHD.js";import"./index-DeFIgEEb.js";import"./index-_xOtrtXh.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{c as P,s as T}from"./commonArgTypes-BluK8w5L.js";import{d as D,h as L}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BKk_ehtl.js";import"./buttonsimple.component-4OH0KaON.js";import"./TabIndexMixin-DxZG6Klh.js";import"./DisabledMixin-CgF8PS8f.js";import"./button.utils-rNW36Ji7.js";import"./index-K1gnSoAO.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-DGtVCn6t.js";import"./linksimple.component-Cfe8jAh8.js";import"./DataAriaLabelMixin-DV5KNmKs.js";import"./link.constants-BICxwFnr.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,B=e=>t`
  <mdc-banner
    variant="${c(e.variant)}"
    label="${c(e.label)}"
    secondary-label="${c(e["secondary-label"])}"
    class="${e.class}"
    style="${e.style}"
  >
    ${e.children}
  </mdc-banner>
`,ee={title:"Components/banner",tags:["autodocs"],component:"mdc-banner",render:B,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(k)},label:{control:"text"},"secondary-label":{control:"text"},...P,...T,...D(["children","content","leading-icon","leading-text","trailing-actions"])}},O={variant:"custom",label:"Banner Label","secondary-label":"This is the secondary label of the banner."},a=t`
  <div slot="trailing-actions">
    <mdc-button variant="tertiary" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="secondary" aria-label="Perform primary action">Action</mdc-button>
    <mdc-button
      variant="tertiary"
      prefix-icon="cancel-bold"
      size="20"
      aria-label="Dismiss banner"
      @click="${n("dismiss")}"
    ></mdc-button>
  </div>
`,r={args:{...O,variant:"informational",label:"System Update Available","secondary-label":"A new version is ready to install. Please save your work before proceeding.",children:a}},o={name:"All Variants",render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${[{variant:"custom",label:"Custom Banner with Slot Icon","secondary-label":"This banner uses a custom icon via slot instead of variant-based icon.",children:t`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
            ${a}
          `},{variant:"informational",label:"System Update Available","secondary-label":"A new version is ready to install.",children:a},{variant:"warning",label:"Storage Almost Full","secondary-label":"Your storage is 95% full. Consider removing some files.",children:a},{variant:"error",label:"Connection Failed","secondary-label":"Unable to connect to the server. Please try again.",children:t`
            ${a}
            <mdc-button
              slot="trailing-actions"
              variant="tertiary"
              prefix-icon="reset-bold"
              size="20"
              aria-label="Retry connection"
              @click="${n("retry")}"
            ></mdc-button>
          `},{variant:"success",label:"Changes Saved","secondary-label":"Your changes have been successfully saved.",children:a}].map(e=>B(e))}
    </div>
  `,...L()},i={name:"Label Only",args:{variant:"informational",label:"System Update Available",children:a}},l={name:"Without Actions",args:{variant:"informational",label:"Information Message","secondary-label":"This banner has no action buttons."}},s={name:"Promotional Banner",render:()=>t`
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
          @click="${n("close")}"
          style="
          position: absolute;
          right: 1rem;
        "
        ></mdc-button>

        <!-- Left Image -->
        <img
          src=${d.card}
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
            <mdc-button variant="tertiary" aria-label="Tertiary action" @click="${n("tertiary-action")}"
              >Label</mdc-button
            >
            <mdc-button variant="secondary" aria-label="Secondary action" @click="${n("secondary-action")}"
              >Label</mdc-button
            >
          </div>
        </div>

        <!-- Right Image -->
        <img
          src=${d.card}
          alt="Promotional image"
          style="
          width: 120px;
          height: 100%;
          object-fit: cover;
        "
        />
      </div>
    </mdc-banner>
  `,...L()};var m,b,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...DefaultArgs,
    variant: 'informational',
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install. Please save your work before proceeding.',
    children: DefaultButtons
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,y,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      \${[{
    variant: 'custom',
    label: 'Custom Banner with Slot Icon',
    'secondary-label': 'This banner uses a custom icon via slot instead of variant-based icon.',
    children: html\`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
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
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,h,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Label Only',
  args: {
    variant: 'informational',
    label: 'System Update Available',
    children: DefaultButtons
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,A,$;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Without Actions',
  args: {
    variant: 'informational',
    label: 'Information Message',
    'secondary-label': 'This banner has no action buttons.'
  }
}`,...($=(A=l.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var C,S,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ae=["Example","AllVariants","LabelOnly","WithoutActions","PromotionalBanner"];export{o as AllVariants,r as Example,i as LabelOnly,s as PromotionalBanner,l as WithoutActions,ae as __namedExportsOrder,ee as default};
