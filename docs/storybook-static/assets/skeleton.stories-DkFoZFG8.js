import{u as F,S as q,E as C,k as c,n as J}from"./iframe-Dc28Xrb1.js";import{c as Q,s as X}from"./commonArgTypes-BluK8w5L.js";import"./preload-helper-C1FmrZbK.js";const Y=F.constructTagName("skeleton"),a={BUTTON:"button",CIRCULAR:"circular",RECTANGULAR:"rectangular",ROUNDED:"rounded"},P={VARIANT:a.RECTANGULAR},Z=q`
  :host {
    --mdc-skeleton-background-color: var(--mds-color-theme-background-skeleton-normal);
    --mdc-skeleton-height: 100%;
    --mdc-skeleton-width: 100%;
    display: block;
    overflow: hidden;
    background-color: var(--mdc-skeleton-background-color);
    height: var(--mdc-skeleton-height);
    width: var(--mdc-skeleton-width);
  }

  :host([variant='rectangular']) {
    border-radius: 0.25rem;
  }

  :host([variant='rounded']) {
    border-radius: 0.5rem;
  }

  :host([variant='circular']) {
    border-radius: 50%;
  }

  :host([variant='button']) {
    border-radius: 1.25rem;
  }

  /* When there's slotted content, fit to content size */
  :host([has-content]) {
    width: fit-content;
    height: fit-content;
  }

  ::slotted(*) {
    visibility: hidden;
  }
`;var ee=Object.defineProperty,te=(e,t,o,n)=>{for(var r=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(r=i(t,o,r)||r);return r&&ee(t,o,r),r};const k=class k extends C{constructor(){super(...arguments),this.variant=P.VARIANT}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}firstUpdated(t){super.firstUpdated(t),this.checkSlotContent()}checkSlotContent(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("slot");t&&(t.assignedNodes().length>0?this.setAttribute("has-content",""):this.removeAttribute("has-content"))}render(){return c`<slot @slotchange=${this.checkSlotContent}></slot>`}};k.styles=[...C.styles,Z];let v=k;te([J({type:String,reflect:!0})],v.prototype,"variant");v.register(Y);let d=0;const l=e=>{d+=1;const t=document.getElementById("normal-content-dynamic"),o=document.getElementById("skeleton-content-dynamic");if(!t||!o)return;t.children.length===1&&t.children[0].tagName==="P"&&(t.innerHTML="",o.innerHTML="");let n;switch(e){case"button":n=document.createElement("button"),n.textContent=`Button ${d}`,n.style.cssText=`
        padding: 10px 20px; margin: 5px; background: #007bff;
        color: white; border: none; border-radius: 4px; cursor: pointer;
      `;break;case"text":n=document.createElement("p"),n.textContent=`Sample text paragraph ${d}.
        This is some content that the skeleton will wrap around.`,n.style.cssText=`
        margin: 5px 0; padding: 10px; background: #f8f9fa;
        border-radius: 4px; cursor: pointer;
      `;break;case"image":n=document.createElement("div"),n.textContent=`🖼️ Image ${d}`,n.style.cssText=`
        width: 100px; height: 80px;
        background: linear-gradient(45deg, #e9ecef, #dee2e6);
        display: flex; align-items: center; justify-content: center;
        margin: 5px; border-radius: 4px; cursor: pointer; font-size: 12px;
      `;break;case"card":n=document.createElement("div"),n.innerHTML=`
        <div style="padding: 15px; background: white; border: 1px solid #dee2e6;
                    border-radius: 8px; margin: 5px; cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h5 style="margin: 0 0 10px 0;">Card ${d}</h5>
          <p style="margin: 0; color: #666; font-size: 14px;">
            This is a card with some content that demonstrates how the skeleton
            adapts to different content sizes.
          </p>
        </div>
      `;break;default:return}const r=n.cloneNode(!0),s=n.cloneNode(!0),i=()=>{r.remove(),s.remove()};r.onclick=i,s.onclick=i,t.appendChild(r),o.appendChild(s)},ne=()=>{const e=document.getElementById("normal-content-dynamic"),t=document.getElementById("skeleton-content-dynamic");e&&t&&(e.innerHTML=`
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `,t.innerHTML=`
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `,d=0)},re=e=>c`
  <mdc-skeleton
    variant="${e.variant}"
    class="${e.class}"
    style="--mdc-skeleton-height: 100px; --mdc-skeleton-width: 100px; ${e.style}"
  ></mdc-skeleton>
`,oe=e=>c`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div style="display: flex; gap: 20px;">
      <div>
        <p>Normal content:</p>
        <button style="padding: 10px 20px;">Click me</button>
      </div>
      <div>
        <p>Skeleton wrapping content:</p>
        <mdc-skeleton variant="${e.variant}" class="${e.class}" style="${e.style}">
          <button style="padding: 10px 20px;">Click me</button>
        </mdc-skeleton>
      </div>
    </div>
  </div>
`,ae=e=>c`
  <div style="width: 100%; max-width: 400px; height: 200px; border: 2px dashed #ccc; position: relative;">
    <p style="position: absolute; top: -20px; left: 0; margin: 0; font-size: 12px;">
      Container (400px max-width, 200px height)
    </p>
    <mdc-skeleton variant="${e.variant}" class="${e.class}" style="${e.style}"></mdc-skeleton>
  </div>
`,ce={title:"Components/skeleton",tags:["autodocs"],component:"mdc-skeleton",render:re,argTypes:{variant:{control:"select",options:Object.values(a)},...Q,...X}},p={args:{variant:P.VARIANT}},u={args:{variant:a.RECTANGULAR}},m={args:{variant:a.ROUNDED}},x={args:{variant:a.CIRCULAR}},g={args:{variant:a.BUTTON}},b={render:oe,args:{variant:a.RECTANGULAR}},h={render:e=>c`
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px;">
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button
          @click=${()=>l("button")}
          style="padding: 8px 16px; background: #007bff; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Button
        </button>
        <button
          @click=${()=>l("text")}
          style="padding: 8px 16px; background: #28a745; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Text
        </button>
        <button
          @click=${()=>l("image")}
          style="padding: 8px 16px; background: #6f42c1; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Image
        </button>
        <button
          @click=${()=>l("card")}
          style="padding: 8px 16px; background: #fd7e14; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Card
        </button>
        <button
          @click=${()=>ne()}
          style="padding: 8px 16px; background: #dc3545; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Clear All
        </button>
      </div>

      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h4 style="margin: 0 0 10px 0;">Normal Content:</h4>
          <div
            id="normal-content-dynamic"
            style="border: 2px dashed #ccc; min-height: 100px;
                   border-radius: 4px;"
          >
            <p style="margin: 0; color: #666; font-style: italic;">Click buttons above to add content</p>
          </div>
        </div>

        <div style="flex: 1;">
          <h4 style="margin: 0 0 10px 0;">Skeleton Wrapped Content:</h4>
          <mdc-skeleton
            id="dynamic-skeleton-story"
            variant="${e.variant}"
            class="${e.class}"
            style="${e.style}; border: 2px dashed #999;"
          >
            <div id="skeleton-content-dynamic">
              <p style="margin: 0; color: #666; font-style: italic;">Click buttons above to add content</p>
            </div>
          </mdc-skeleton>
        </div>
      </div>
    </div>
  `,args:{variant:a.RECTANGULAR}},y={render:ae,args:{variant:a.RECTANGULAR}};var A,f,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: DEFAULTS.VARIANT
  }
}`,...(T=(f=p.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var R,E,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var w,S,$;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.ROUNDED
  }
}`,...($=(S=m.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var L,U,I;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.CIRCULAR
  }
}`,...(I=(U=x.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var D,O,_;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.BUTTON
  }
}`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,V,G;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: renderWithContent,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(G=(V=b.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,W,M;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px;">
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button
          @click=\${() => addContentToDynamic('button')}
          style="padding: 8px 16px; background: #007bff; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Button
        </button>
        <button
          @click=\${() => addContentToDynamic('text')}
          style="padding: 8px 16px; background: #28a745; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Text
        </button>
        <button
          @click=\${() => addContentToDynamic('image')}
          style="padding: 8px 16px; background: #6f42c1; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Image
        </button>
        <button
          @click=\${() => addContentToDynamic('card')}
          style="padding: 8px 16px; background: #fd7e14; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Card
        </button>
        <button
          @click=\${() => clearDynamicContent()}
          style="padding: 8px 16px; background: #dc3545; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Clear All
        </button>
      </div>

      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h4 style="margin: 0 0 10px 0;">Normal Content:</h4>
          <div
            id="normal-content-dynamic"
            style="border: 2px dashed #ccc; min-height: 100px;
                   border-radius: 4px;"
          >
            <p style="margin: 0; color: #666; font-style: italic;">Click buttons above to add content</p>
          </div>
        </div>

        <div style="flex: 1;">
          <h4 style="margin: 0 0 10px 0;">Skeleton Wrapped Content:</h4>
          <mdc-skeleton
            id="dynamic-skeleton-story"
            variant="\${args.variant}"
            class="\${args.class}"
            style="\${args.style}; border: 2px dashed #999;"
          >
            <div id="skeleton-content-dynamic">
              <p style="margin: 0; color: #666; font-style: italic;">Click buttons above to add content</p>
            </div>
          </mdc-skeleton>
        </div>
      </div>
    </div>
  \`,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(M=(W=h.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var z,H,j;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: renderResponsive,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(j=(H=y.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const le=["Example","Rectangular","Rounded","Circular","Button","WithContent","DynamicContent","ResponsiveContainer"];export{g as Button,x as Circular,h as DynamicContent,p as Example,u as Rectangular,y as ResponsiveContainer,m as Rounded,b as WithContent,le as __namedExportsOrder,ce as default};
