import{k as n,B as r,a as b,T as B,V as C}from"./iframe-Dxl5JR04.js";import{t as m}from"./if-defined-C0_rihGE.js";import{B as a}from"./index-DJLYsPhL.js";import"./index-A4-hMiqu.js";import"./index-BW7z8kIE.js";import"./index-D2fN-bpL.js";import{i as _}from"./imageFixtures-CD4avj2q.js";import{c as L,s as U}from"./commonArgTypes-BG7EqI50.js";import{h as D,a as x}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CjD-zRkO.js";import"./buttonsimple.component-IBnNJfn4.js";import"./DisabledMixin-CidSUaWv.js";import"./KeyToActionMixin-C-lGXqvj.js";import"./button.utils-rNW36Ji7.js";import"./index-D7Hd0FkL.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-D83RjdhH.js";import"./linksimple.component-DBXb3ps3.js";import"./DataAriaLabelMixin-DbDPbvRw.js";import"./link.constants-DYgnf30x.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,E=e=>n`
  <mdc-banner
    variant="${m(e.variant)}"
    label="${m(e.label)}"
    secondary-label="${m(e["secondary-label"])}"
    class="${e.class}"
    style="${e.style}"
  >
    ${e.children}
  </mdc-banner>
`,ne={title:"Components/banner",tags:["autodocs"],component:"mdc-banner",render:E,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(a)},label:{control:"text"},"secondary-label":{control:"text"},...L,...U,...D(["children"])}},t=n`
  <div slot="trailing-actions">
    <mdc-button variant="${r.TERTIARY}" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="${r.SECONDARY}" aria-label="Perform primary action">Action</mdc-button>
    <mdc-button
      variant="${r.TERTIARY}"
      prefix-icon="cancel-bold"
      size="${b[20]}"
      aria-label="Dismiss banner"
      @click="${o("dismiss")}"
    ></mdc-button>
  </div>
`,i={args:{variant:a.INFORMATIONAL,label:"System Update Available","secondary-label":"A new version is ready to install. Please save your work before proceeding.",children:t}},l={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${[{variant:a.CUSTOM,label:"Custom Banner with Slot Icon","secondary-label":"This banner uses a custom icon via slot instead of variant-based icon.",children:n`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
            ${t}
          `},{variant:a.INFORMATIONAL,label:"System Update Available","secondary-label":"A new version is ready to install.",children:t},{variant:a.WARNING,label:"Storage Almost Full","secondary-label":"Your storage is 95% full. Consider removing some files.",children:t},{variant:a.ERROR,label:"Connection Failed","secondary-label":"Unable to connect to the server. Please try again.",children:n`
            ${t}
            <mdc-button
              slot="trailing-actions"
              variant="${r.TERTIARY}"
              prefix-icon="reset-bold"
              size="${b[20]}"
              aria-label="Retry connection"
              @click="${o("retry")}"
            ></mdc-button>
          `},{variant:a.SUCCESS,label:"Changes Saved","secondary-label":"Your changes have been successfully saved.",children:t}].map(e=>E(e))}
    </div>
  `,...x()},s={args:{variant:a.INFORMATIONAL,label:"System Update Available",children:t}},c={args:{variant:a.INFORMATIONAL,label:"Information Message","secondary-label":"This banner has no action buttons."}},d={render:()=>{const e=n`<img
      src=${_.card}
      alt="Promotional image"
      style="width: 120px; height: 100%; object-fit: cover;"
    />`;return n`
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
            variant="${r.TERTIARY}"
            prefix-icon="cancel-bold"
            size="${b[20]}"
            aria-label="Close promotional banner"
            @click="${o("close")}"
            style="position: absolute; right: 1rem;"
          ></mdc-button>

          <!-- Left Image -->
          ${e}

          <!-- Center Content Area -->
          <div style="flex: 1; min-width: 0;">
            <!-- Label -->
            <mdc-text type="${B.HEADING_LARGE_BOLD}" tagname="${C.H3}">Label text</mdc-text>

            <!-- Secondary label text -->
            <mdc-text>
              Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
              <mdc-link>Learn more</mdc-link>
            </mdc-text>

            <!-- Action buttons -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
              <mdc-button
                variant="${r.TERTIARY}"
                aria-label="Tertiary action"
                @click="${o("tertiary-action")}"
                >Label</mdc-button
              >
              <mdc-button
                variant="${r.SECONDARY}"
                aria-label="Secondary action"
                @click="${o("secondary-action")}"
                >Label</mdc-button
              >
            </div>
          </div>

          <!-- Right Image -->
          ${e}
        </div>
      </mdc-banner>
    `},...x()};var u,p,A;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install. Please save your work before proceeding.',
    children: DefaultButtons
  }
}`,...(A=(p=i.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};var y,v,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      \${[{
    variant: BANNER_VARIANT.CUSTOM,
    label: 'Custom Banner with Slot Icon',
    'secondary-label': 'This banner uses a custom icon via slot instead of variant-based icon.',
    children: html\`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
            \${DefaultButtons}
          \`
  }, {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install.',
    children: DefaultButtons
  }, {
    variant: BANNER_VARIANT.WARNING,
    label: 'Storage Almost Full',
    'secondary-label': 'Your storage is 95% full. Consider removing some files.',
    children: DefaultButtons
  }, {
    variant: BANNER_VARIANT.ERROR,
    label: 'Connection Failed',
    'secondary-label': 'Unable to connect to the server. Please try again.',
    children: html\`
            \${DefaultButtons}
            <mdc-button
              slot="trailing-actions"
              variant="\${BUTTON_VARIANTS.TERTIARY}"
              prefix-icon="reset-bold"
              size="\${BUTTON_SIZES[20]}"
              aria-label="Retry connection"
              @click="\${action('retry')}"
            ></mdc-button>
          \`
  }, {
    variant: BANNER_VARIANT.SUCCESS,
    label: 'Changes Saved',
    'secondary-label': 'Your changes have been successfully saved.',
    children: DefaultButtons
  }].map(args => render(args))}
    </div>
  \`,
  ...hideAllControls()
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var T,h,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    children: DefaultButtons
  }
}`,...(N=(h=s.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var R,I,f;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'Information Message',
    'secondary-label': 'This banner has no action buttons.'
  }
}`,...(f=(I=c.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var S,$,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const image = html\`<img
      src=\${imageFixtures.card}
      alt="Promotional image"
      style="width: 120px; height: 100%; object-fit: cover;"
    />\`;
    return html\`
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
            variant="\${BUTTON_VARIANTS.TERTIARY}"
            prefix-icon="cancel-bold"
            size="\${BUTTON_SIZES[20]}"
            aria-label="Close promotional banner"
            @click="\${action('close')}"
            style="position: absolute; right: 1rem;"
          ></mdc-button>

          <!-- Left Image -->
          \${image}

          <!-- Center Content Area -->
          <div style="flex: 1; min-width: 0;">
            <!-- Label -->
            <mdc-text type="\${TYPE.HEADING_LARGE_BOLD}" tagname="\${VALID_TEXT_TAGS.H3}">Label text</mdc-text>

            <!-- Secondary label text -->
            <mdc-text>
              Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
              <mdc-link>Learn more</mdc-link>
            </mdc-text>

            <!-- Action buttons -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
              <mdc-button
                variant="\${BUTTON_VARIANTS.TERTIARY}"
                aria-label="Tertiary action"
                @click="\${action('tertiary-action')}"
                >Label</mdc-button
              >
              <mdc-button
                variant="\${BUTTON_VARIANTS.SECONDARY}"
                aria-label="Secondary action"
                @click="\${action('secondary-action')}"
                >Label</mdc-button
              >
            </div>
          </div>

          <!-- Right Image -->
          \${image}
        </div>
      </mdc-banner>
    \`;
  },
  ...hideAllControls()
}`,...(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const re=["Example","AllVariants","LabelOnly","WithoutActions","PromotionalBanner"];export{l as AllVariants,i as Example,s as LabelOnly,d as PromotionalBanner,c as WithoutActions,re as __namedExportsOrder,ne as default};
