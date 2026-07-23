import{u as S,S as g,k as A,C as m,n as l}from"./iframe-BJBhCjFe.js";import{F as _}from"./FocusTrapMixin-DYc95HfF.js";import{c as C,s as O}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const B=S.constructTagName("focustrap"),i={TRAP_DISABLED:!1,RESTORE_FOCUS_DISABLED:!1,AUTO_FOCUS:!1},k=g`
  :host {
    display: contents;
  }
`,x=[k];var R=Object.defineProperty,n=(e,s,p,L)=>{for(var t=void 0,c=e.length-1,f;c>=0;c--)(f=e[c])&&(t=f(s,p,t)||t);return t&&R(s,p,t),t};const d=class d extends _(m){constructor(){super(...arguments),this.trapDisabled=i.TRAP_DISABLED,this.focusTrap=!0,this.restoreFocusDisabled=i.RESTORE_FOCUS_DISABLED,this.autoFocus=i.AUTO_FOCUS,this.previouslyFocusedElement=null}disconnectedCallback(){const s=!this.trapDisabled;this.deactivateFocusTrap(),s&&this.restorePreviousFocus(),super.disconnectedCallback()}updated(s){super.updated(s),s.has("trapDisabled")&&(this.focusTrap=!this.trapDisabled,this.trapDisabled?(this.deactivateFocusTrap(),this.restorePreviousFocus(),this.dispatchEvent(new CustomEvent("focus-trap-deactivated",{bubbles:!0,composed:!0}))):(this.previouslyFocusedElement=document.activeElement??null,this.activateFocusTrap(),this.autoFocus&&requestAnimationFrame(()=>{this.autoFocus&&!this.trapDisabled&&this.setInitialFocus()}),this.dispatchEvent(new CustomEvent("focus-trap-activated",{bubbles:!0,composed:!0}))))}restorePreviousFocus(){!this.restoreFocusDisabled&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus({preventScroll:!0}),this.previouslyFocusedElement=null}render(){return A`<slot></slot>`}};d.styles=[...m.styles,...x];let o=d;n([l({type:Boolean,reflect:!0,attribute:"trap-disabled"})],o.prototype,"trapDisabled");n([l({type:Boolean,reflect:!0,attribute:"restore-focus-disabled"})],o.prototype,"restoreFocusDisabled");n([l({type:Boolean,reflect:!0,attribute:"auto-focus"})],o.prototype,"autoFocus");o.register(B);const U=e=>A`
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
`,N={title:"Components/focustrap",tags:["autodocs"],component:"mdc-focustrap",render:U,argTypes:{trapDisabled:{control:"boolean",description:"When true, focus trapping is disabled. When false (default), keyboard focus is trapped."},restoreFocusDisabled:{control:"boolean",description:"When true, focus is NOT restored to the previously focused element when the trap is deactivated. When false (default), focus is restored."},autoFocus:{control:"boolean",description:"When true, the first focusable element receives focus automatically when the trap is activated."},shouldFocusTrapWrap:{control:"boolean",description:"When true (default), Tab wraps from the last focusable element back to the first and vice versa."},...C,...O}},a={args:{trapDisabled:!1,restoreFocusDisabled:!1,autoFocus:!1,shouldFocusTrapWrap:!0}},r={args:{trapDisabled:!1,restoreFocusDisabled:!1,autoFocus:!0,shouldFocusTrapWrap:!0}},u={args:{trapDisabled:!1,restoreFocusDisabled:!1,autoFocus:!1,shouldFocusTrapWrap:!1}};var b,h,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: false,
    shouldFocusTrapWrap: true
  }
}`,...(F=(h=a.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var D,v,y;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: true,
    shouldFocusTrapWrap: true
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,E,W;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: false,
    shouldFocusTrapWrap: false
  }
}`,...(W=(E=u.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const M=["Example","WithAutoFocus","WithoutWrap"];export{a as Example,r as WithAutoFocus,u as WithoutWrap,M as __namedExportsOrder,N as default};
