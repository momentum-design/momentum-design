import{k as m}from"./iframe-DKmoi846.js";import{c as f,s as b}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const h=e=>m`
  <div>
    <mdc-button>Before 1</mdc-button>
    <mdc-button>Before 2</mdc-button>
    <mdc-focustrap
      ?trap-disabled="${e.trapDisabled}"
      ?restore-focus-disabled="${e.restoreFocusDisabled}"
      ?auto-focus="${e.autoFocus}"
      .shouldFocusTrapWrap="${e.shouldFocusTrapWrap}"
      class="${e.class}"
      style="
        margin: 1rem;
        padding: 1rem;
        border: 1px solid var(--mds-color-theme-outline-primary-normal);
        display: flex;
        flex-direction: column;
        gap: 1rem"
    >
      <p>Focus trap</p>
      <mdc-input placeholder="First input"></mdc-input>
      <mdc-input placeholder="Second input"></mdc-input>
      <mdc-button appearance="primary">Button</mdc-button>
      <mdc-linkbutton>Link</mdc-linkbutton>
    </mdc-focustrap>
    <mdc-button>After</mdc-button>
  </div>
`,T={title:"Components/focustrap",tags:["autodocs"],component:"mdc-focustrap",render:h,argTypes:{trapDisabled:{control:"boolean",description:"When true, focus trapping is disabled. When false (default), keyboard focus is trapped."},restoreFocusDisabled:{control:"boolean",description:"When true, focus is NOT restored to the previously focused element when the trap is deactivated. When false (default), focus is restored."},autoFocus:{control:"boolean",description:"When true, the first focusable element receives focus automatically when the trap is activated."},shouldFocusTrapWrap:{control:"boolean",description:"When true (default), Tab wraps from the last focusable element back to the first and vice versa."},...f,...b}},s={args:{trapDisabled:!1,restoreFocusDisabled:!1,autoFocus:!1,shouldFocusTrapWrap:!0}},a={args:{trapDisabled:!1,restoreFocusDisabled:!1,autoFocus:!0,shouldFocusTrapWrap:!0}},o={args:{trapDisabled:!1,restoreFocusDisabled:!1,autoFocus:!1,shouldFocusTrapWrap:!1}};var r,t,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: false,
    shouldFocusTrapWrap: true
  }
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var u,l,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: true,
    shouldFocusTrapWrap: true
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var n,p,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: false,
    shouldFocusTrapWrap: false
  }
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const g=["Example","WithAutoFocus","WithoutWrap"];export{s as Example,a as WithAutoFocus,o as WithoutWrap,g as __namedExportsOrder,T as default};
