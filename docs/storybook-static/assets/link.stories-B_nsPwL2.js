import{i as A,k as v}from"./lit-element-CHllvULs.js";import{u as W,C as E,n as g}from"./index-HW6KrQZO.js";import{h as j,a as P}from"./index-BNZgxKMr.js";import{D as V,a as i}from"./chunk-D5ZWXAHU-Cy56BkwE.js";import"./index-BOBIh5Rr.js";import{d as q,h as k,r as z}from"./utils-D1SE5bce.js";import"./v4-CQkTLCs1.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";const U=W.constructTagName("link"),h={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},y={LARGE:1,MIDSIZE:.875,SMALL:.75},x={INLINE:!1,INVERTED:!1,LINK_SIZE:h.LARGE},H=[j,A`

  :host {

    --mdc-link-border-radius: 0.25rem;
    --mdc-link-color-active: var(--mds-color-theme-text-accent-active);
    --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-link-color-hover: var(--mds-color-theme-text-accent-hover);
    --mdc-link-color-normal: var(--mds-color-theme-text-accent-normal);
    --mdc-link-icon-margin-left: 0.25rem;
    --mdc-link-inverted-color-active: var(--mds-color-theme-inverted-text-accent-active);
    --mdc-link-inverted-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);
    --mdc-link-inverted-color-hover: var(--mds-color-theme-inverted-text-accent-hover);
    --mdc-link-inverted-color-normal: var(--mds-color-theme-inverted-text-accent-normal);
    --mdc-link-text-decoration-disabled: underline;

    border-radius: var(--mdc-link-border-radius);
    color: var(--mdc-link-color-normal);
  }

  ::slotted(a) {
    outline: none;
    align-items: center;
    color: inherit;
    display: flex;
    gap: var(--mdc-link-icon-margin-left);
    text-decoration: inherit;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  :host(:hover) {
    color: var(--mdc-link-color-hover);
  }

  :host(:active) {
    color: var(--mdc-link-color-active);
  }

  :host([inline]) {
    display: inline-flex;
  }

  :host([inverted]) {
    color: var(--mdc-link-inverted-color-normal);
  }

  :host([inverted]:hover) {
    color: var(--mdc-link-inverted-color-hover);
  }

  :host([inverted]:active) {
    color: var(--mdc-link-inverted-color-active);
  }

  :host([size="large"]) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size="midsize"]) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size="small"]) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size="large"]:hover), :host([size="large"]:active), :host([size="large"][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size="midsize"]:hover), :host([size="midsize"]:active), :host([size="midsize"][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size="small"]:hover), :host([size="small"]:active), :host([size="small"][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }

  :host([disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
  }

  :host([inverted][disabled]) {
    color: var(--mdc-link-inverted-color-disabled);
  }
`,...P(),A`
  :host(:active) {
    box-shadow: none;
  }
`];var J=Object.defineProperty,f=(r,e,l,b)=>{for(var n=void 0,t=r.length-1,S;t>=0;t--)(S=r[t])&&(n=S(e,l,n)||n);return n&&J(e,l,n),n};const I=class I extends V(E){constructor(){super(...arguments),this.inline=x.INLINE,this.inverted=x.INVERTED,this.size=x.LINK_SIZE,this.prevTabindex=null}getIconSize(){switch(this.size){case h.SMALL:return y.SMALL;case h.MIDSIZE:return y.MIDSIZE;default:return y.LARGE}}setDisabled(e){e?(this.prevTabindex=this.hasAttribute("tabindex")?this.tabIndex:null,this.tabIndex=-1,this.setAttribute("aria-disabled","true")):this.prevTabindex===null?(this.removeAttribute("tabindex"),this.removeAttribute("aria-disabled")):(this.tabIndex=this.prevTabindex,this.removeAttribute("aria-disabled"))}updateTrailingIcon(){var b,n;const e=(n=(b=this.shadowRoot)==null?void 0:b.querySelector("slot"))==null?void 0:n.assignedElements({flatten:!0}).find(t=>t.tagName==="A"),l=this.getIconSize();if(this.iconName&&e){const t=document.createElement("mdc-icon");t.setAttribute("name",this.iconName),t.setAttribute("size",`${l}`),t.setAttribute("length-unit","rem"),e.appendChild(t)}}update(e){super.update(e),e.has("disabled")&&this.setDisabled(this.disabled)}render(){return v`<slot @slotchange=${this.updateTrailingIcon}></slot>`}};I.styles=[...E.styles,...H];let o=I;f([g({type:String,attribute:"icon-name"})],o.prototype,"iconName");f([g({type:Boolean,reflect:!0})],o.prototype,"inline");f([g({type:Boolean,reflect:!0})],o.prototype,"inverted");f([g({type:String,reflect:!0})],o.prototype,"size");o.register(U);const a=r=>{const e=v`${new DOMParser().parseFromString(r.children,"text/html").body.firstChild}`;return v`<mdc-link
    @click="${i("onclick")}"
    @keydown="${i("onkeydown")}"
    @keyup="${i("onkeyup")}"
    @focusin="${i("onfocusin")}"
    @focusout="${i("onfocusout")}"
    ?disabled="${r.disabled}"
    icon-name="${r["icon-name"]}"
    ?inline="${r.inline}"
    ?inverted="${r.inverted}"
    size="${r.size}"
    >${e}</mdc-link>`},K=r=>v`
    <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
      ${a(r)}
    </div>`,le={title:"Components/link",tags:["autodocs"],component:"mdc-link",render:a,parameters:{badges:["stable"]},argTypes:{children:{description:"Anchor tag to be displayed as link.",control:"text"},disabled:{control:"boolean"},"icon-name":{control:"text"},inline:{control:"boolean"},inverted:{control:"boolean"},size:{control:"select",options:Object.values(h)},...q(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-icon-margin-left","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal","--mdc-link-text-decoration-disabled"])}},s={children:'<a href="https://www.webex.com" target="_blank" rel="noopener noreferrer">Link</a>',disabled:!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:"large"},d={render:a,args:{...s}},c={render:a,args:{...s},argTypes:{...k(["inline","inverted"])}},m={render:K,args:{...s,inverted:!0},argTypes:{...k(["inline"]),...z(["inverted"])}},p={render:a,args:{...s,inline:!0},argTypes:{...k(["inverted"]),...z(["inline"])}},u={render:K,args:{...s,inline:!0,inverted:!0},argTypes:{...z(["inline","inverted"])}};var L,w,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var C,N,$;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...($=(N=c.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var D,_,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,R,Z;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(Z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var B,G,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(F=(G=u.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};const de=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{d as Example,p as InlineLink,u as InlineLinkInverted,c as StandaloneLink,m as StandaloneLinkInverted,de as __namedExportsOrder,le as default};
