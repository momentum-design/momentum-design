import{i as A,k as e}from"./lit-element-D5KKan5q.js";import{u as E,C as l,n as H}from"./index-C9z9WAEj.js";import{a as C,h as F}from"./index-DoSuNddn.js";import{h as S}from"./utils-D1SE5bce.js";import"./jsx-runtime-N83kn9-W.js";import"./index-U8pYL6Lg.js";import"./index-CSjPs72j.js";import"./index-BFreYrym.js";import"./index-vaIJTC9z.js";import"./index-u-q1XvrA.js";import"./index-C4C4V4hd.js";import"./index-CbNcEVr2.js";import"./index--54z_-Eg.js";import"./index-K4hmfKc7.js";import"./index-C7dpcjCj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cn5BqrNK.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-C9FYjWVA.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-BIfGRN4W.js";import"./button.utils-BQ4i2NgT.js";import"./index-tQ21wCYM.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";import"./index-C2ZwCMhz.js";import"./IconNameMixin-CujGSn0t.js";import"./index-Bw9wl_Jn.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./input.component-D66_H5he.js";import"./index-RLDl5bLF.js";import"./formfieldwrapper.component-B9qpm-pj.js";import"./input.constants-wxv6-efV.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-Dg5j8Yib.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";const P=E.constructTagName("subcomponent-focusring"),T={SHAPE:"button"},R=["button","radio","checkbox"],_=[C,A`
    .button:focus, .radio:focus, .checkbox:focus {
      outline: none;
    }
  `,...F()];var M=Object.defineProperty,B=(o,m,p,L)=>{for(var t=void 0,c=o.length-1,d;c>=0;c--)(d=o[c])&&(t=d(m,p,t)||t);return t&&M(m,p,t),t};const n=class n extends l{constructor(){super(...arguments),this.shape=T.SHAPE}render(){switch(this.shape){case"button":return e`<button class="button">ClickMe</button>`;case"radio":return e`<input type="radio" id="radio" name="group" class="radio" /><label for="radio"
            >SelectMe</label
          >`;case"checkbox":return e`
          <input type="checkbox" id="checkbox" name="terms" class="checkbox" />
          <label for="checkbox">Accept Terms</label>
        `;default:return null}}};n.styles=[...l.styles,..._];let s=n;B([H({type:String})],s.prototype,"shape");s.register(P);const D=o=>e` <mdc-subcomponent-focusring shape="${o.shape}"></mdc-subcomponent-focusring> `,Pt={title:"Styling/Focus Ring",component:"mdc-subcomponent-focusring",render:D,parameters:{badges:["stable"]},argTypes:{shape:{options:R,control:{type:"radio"}}}},r={args:{shape:T.SHAPE}},a={argTypes:{...S(["shape"])},render:()=>e`
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
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const Rt=["Example","FocusRingOnHost","FocusRingWithinHost"];export{r as Example,a as FocusRingOnHost,i as FocusRingWithinHost,Rt as __namedExportsOrder,Pt as default};
