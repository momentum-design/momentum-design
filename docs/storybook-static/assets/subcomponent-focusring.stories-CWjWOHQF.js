import{i as A,k as e}from"./lit-element-D5KKan5q.js";import{u as E,C as l,n as H}from"./index-C9z9WAEj.js";import{h as C,a as F}from"./index-BX3Tn-Br.js";import{h as S}from"./utils-D1SE5bce.js";import"./jsx-runtime-N83kn9-W.js";import"./index-DejrwR-f.js";import"./index-CmyI0d_4.js";import"./index-DbYEh_Mc.js";import"./index-D5HSTcR7.js";import"./index-DWpqSziA.js";import"./index-ymq47LXd.js";import"./index-DMDbwnyb.js";import"./index-CzOQDoO2.js";import"./index-BqtfAmOy.js";import"./index-CrDXKtew.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D1NX3Rv8.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-D3lNAbe_.js";import"./button.utils-idYASaaz.js";import"./index-D2XReIUf.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";import"./index-BoTpj4Sv.js";import"./IconNameMixin-CujGSn0t.js";import"./index-CvOcXg99.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./index-JRySxdCK.js";import"./formfieldwrapper.component-DKn4fQEK.js";import"./input.constants-SdAiAjzS.js";import"./FormInternalsMixin-BezuNa1f.js";import"./v4-BnQ50LvX.js";const P=E.constructTagName("subcomponent-focusring"),T={SHAPE:"button"},R=["button","radio","checkbox"],_=[C,A`
    .button:focus, .radio:focus, .checkbox:focus {
      outline: none;
    }
  `,...F()];var M=Object.defineProperty,B=(o,m,p,L)=>{for(var t=void 0,c=o.length-1,d;c>=0;c--)(d=o[c])&&(t=d(m,p,t)||t);return t&&M(m,p,t),t};const n=class n extends l{constructor(){super(...arguments),this.shape=T.SHAPE}render(){switch(this.shape){case"button":return e`<button class="button">ClickMe</button>`;case"radio":return e`<input type="radio" id="radio" name="group" class="radio" /><label for="radio"
            >SelectMe</label
          >`;case"checkbox":return e`
          <input type="checkbox" id="checkbox" name="terms" class="checkbox" />
          <label for="checkbox">Accept Terms</label>
        `;default:return null}}};n.styles=[...l.styles,..._];let s=n;B([H({type:String})],s.prototype,"shape");s.register(P);const D=o=>e` <mdc-subcomponent-focusring shape="${o.shape}"></mdc-subcomponent-focusring> `,Ht={title:"Styling/Focus Ring",component:"mdc-subcomponent-focusring",render:D,parameters:{badges:["stable"]},argTypes:{shape:{options:R,control:{type:"radio"}}}},r={args:{shape:T.SHAPE}},a={argTypes:{...S(["shape"])},render:()=>e`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-button>Button</mdc-button>
    <mdc-avatarbutton
      initials="MD"
      size="48"
      src="https://picsum.photos/id/63/256"
      aria-label="Avatar Button"
    ></mdc-avatarbutton>
    <mdc-tab 
      icon-name="placeholder-bold" 
      tabindex="0" 
      text="Tab 1" 
      variant="pill"
    >
      <mdc-badge 
        slot="badge" 
        type="counter" 
        counter="1"
      ></mdc-badge>
    </mdc-tab>
  </div>
  `},i={argTypes:{...S(["shape"])},render:()=>e`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
    <mdc-input value="Input" trailing-button></mdc-input>
    <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
    <mdc-checkbox label="Checkbox"></mdc-checkbox>
    <mdc-toggle label="Toggle"></mdc-toggle>
  </div>`};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    shape: DEFAULTS.SHAPE
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-button>Button</mdc-button>
    <mdc-avatarbutton
      initials="MD"
      size="48"
      src="https://picsum.photos/id/63/256"
      aria-label="Avatar Button"
    ></mdc-avatarbutton>
    <mdc-tab 
      icon-name="placeholder-bold" 
      tabindex="0" 
      text="Tab 1" 
      variant="pill"
    >
      <mdc-badge 
        slot="badge" 
        type="counter" 
        counter="1"
      ></mdc-badge>
    </mdc-tab>
  </div>
  \`
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,v,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
    <mdc-input value="Input" trailing-button></mdc-input>
    <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
    <mdc-checkbox label="Checkbox"></mdc-checkbox>
    <mdc-toggle label="Toggle"></mdc-toggle>
  </div>\`
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const Ct=["Example","FocusRingOnHost","FocusRingWithinHost"];export{r as Example,a as FocusRingOnHost,i as FocusRingWithinHost,Ct as __namedExportsOrder,Ht as default};
