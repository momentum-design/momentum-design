import{u as Z,N as ee,C as f,k as l,n as X}from"./iframe-BYyr5gNp.js";import{c as te,s as ne}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const oe=Z.constructTagName("skeleton"),a={BUTTON:"button",CIRCULAR:"circular",RECTANGULAR:"rectangular",ROUNDED:"rounded"},C={MOTION:!1,VARIANT:a.RECTANGULAR},re=ee`
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

  :host([motion]) {
    background-image: linear-gradient(
      90deg,
      var(--mds-color-theme-background-skeleton-shimmer-0) 0%,
      var(--mds-color-theme-background-skeleton-shimmer-1) 50%,
      var(--mds-color-theme-background-skeleton-shimmer-2) 100%
    );
    background-repeat: no-repeat;
    background-size: 200% 100%;
    animation: skeleton-shimmer 2s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    :host([motion]) {
      animation: none;
      background-position: 50% 0;
    }
  }

  @keyframes skeleton-shimmer {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
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
`;var ae=Object.defineProperty,Y=(e,t,r,n)=>{for(var o=void 0,s=e.length-1,d;s>=0;s--)(d=e[s])&&(o=d(t,r,o)||o);return o&&ae(t,r,o),o};const A=class A extends f{constructor(){super(...arguments),this.motion=C.MOTION,this.variant=C.VARIANT}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}firstUpdated(t){super.firstUpdated(t),this.checkSlotContent()}checkSlotContent(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");t&&(t.assignedNodes().length>0?this.setAttribute("has-content",""):this.removeAttribute("has-content"))}render(){return l`<slot @slotchange=${this.checkSlotContent}></slot>`}};A.styles=[...f.styles,re];let c=A;Y([X({type:Boolean,reflect:!0})],c.prototype,"motion");Y([X({type:String,reflect:!0})],c.prototype,"variant");c.register(oe);let i=0;const p=e=>{i+=1;const t=document.getElementById("normal-content-dynamic"),r=document.getElementById("skeleton-content-dynamic");if(!t||!r)return;t.children.length===1&&t.children[0].tagName==="P"&&(t.innerHTML="",r.innerHTML="");let n;switch(e){case"button":n=document.createElement("button"),n.textContent=`Button ${i}`,n.style.cssText=`
        padding: 10px 20px; margin: 5px; background: #007bff;
        color: white; border: none; border-radius: 4px; cursor: pointer;
      `;break;case"text":n=document.createElement("p"),n.textContent=`Sample text paragraph ${i}.
        This is some content that the skeleton will wrap around.`,n.style.cssText=`
        margin: 5px 0; padding: 10px; background: #f8f9fa;
        border-radius: 4px; cursor: pointer;
      `;break;case"image":n=document.createElement("div"),n.textContent=`🖼️ Image ${i}`,n.style.cssText=`
        width: 100px; height: 80px;
        background: linear-gradient(45deg, #e9ecef, #dee2e6);
        display: flex; align-items: center; justify-content: center;
        margin: 5px; border-radius: 4px; cursor: pointer; font-size: 12px;
      `;break;case"card":n=document.createElement("div"),n.innerHTML=`
        <div style="padding: 15px; background: white; border: 1px solid #dee2e6;
                    border-radius: 8px; margin: 5px; cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h5 style="margin: 0 0 10px 0;">Card ${i}</h5>
          <p style="margin: 0; color: #666; font-size: 14px;">
            This is a card with some content that demonstrates how the skeleton
            adapts to different content sizes.
          </p>
        </div>
      `;break;default:return}const o=n.cloneNode(!0),s=n.cloneNode(!0),d=()=>{o.remove(),s.remove()};o.onclick=d,s.onclick=d,t.appendChild(o),r.appendChild(s)},se=()=>{const e=document.getElementById("normal-content-dynamic"),t=document.getElementById("skeleton-content-dynamic");e&&t&&(e.innerHTML=`
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `,t.innerHTML=`
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `,i=0)},ie=e=>l`
  <mdc-skeleton
    ?motion=${e.motion}
    variant="${e.variant}"
    class="${e.class}"
    style="--mdc-skeleton-height: 100px; --mdc-skeleton-width: 100px; ${e.style}"
  ></mdc-skeleton>
`,de=e=>l`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div style="display: flex; gap: 20px;">
      <div>
        <p>Normal content:</p>
        <button style="padding: 10px 20px;">Click me</button>
      </div>
      <div>
        <p>Skeleton wrapping content:</p>
        <mdc-skeleton
          ?motion=${e.motion}
          variant="${e.variant}"
          class="${e.class}"
          style="${e.style}"
        >
          <button style="padding: 10px 20px;">Click me</button>
        </mdc-skeleton>
      </div>
    </div>
  </div>
`,ce=e=>l`
  <div style="width: 100%; max-width: 400px; height: 200px; border: 2px dashed #ccc; position: relative;">
    <p style="position: absolute; top: -20px; left: 0; margin: 0; font-size: 12px;">
      Container (400px max-width, 200px height)
    </p>
    <mdc-skeleton
      ?motion=${e.motion}
      variant="${e.variant}"
      class="${e.class}"
      style="${e.style}"
    ></mdc-skeleton>
  </div>
`,ue={title:"Components/skeleton",tags:["autodocs"],component:"mdc-skeleton",render:ie,argTypes:{variant:{control:"select",options:Object.values(a)},motion:{control:"boolean"},...te,...ne}},m={args:{variant:C.VARIANT}},u={args:{variant:a.RECTANGULAR}},g={args:{variant:a.ROUNDED}},b={args:{variant:a.CIRCULAR}},x={args:{variant:a.BUTTON}},h={args:{motion:!0,variant:C.VARIANT}},y={render:de,args:{variant:a.RECTANGULAR}},v={render:e=>l`
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px;">
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button
          @click=${()=>p("button")}
          style="padding: 8px 16px; background: #007bff; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Button
        </button>
        <button
          @click=${()=>p("text")}
          style="padding: 8px 16px; background: #28a745; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Text
        </button>
        <button
          @click=${()=>p("image")}
          style="padding: 8px 16px; background: #6f42c1; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Image
        </button>
        <button
          @click=${()=>p("card")}
          style="padding: 8px 16px; background: #fd7e14; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Card
        </button>
        <button
          @click=${()=>se()}
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
            ?motion=${e.motion}
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
  `,args:{variant:a.RECTANGULAR}},k={render:ce,args:{variant:a.RECTANGULAR}};var T,R,N;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: DEFAULTS.VARIANT
  }
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var E,w,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(S=(w=u.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var $,L,I;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.ROUNDED
  }
}`,...(I=(L=g.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var U,O,D;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.CIRCULAR
  }
}`,...(D=(O=b.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var V,_,B;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.BUTTON
  }
}`,...(B=(_=x.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,M,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    motion: true,
    variant: DEFAULTS.VARIANT
  }
}`,...(K=(M=h.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var W,z,H;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: renderWithContent,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(H=(z=y.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var j,F,P;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
            ?motion=\${args.motion}
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
}`,...(P=(F=v.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var q,J,Q;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: renderResponsive,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ge=["Example","Rectangular","Rounded","Circular","Button","Motion","WithContent","DynamicContent","ResponsiveContainer"];export{x as Button,b as Circular,v as DynamicContent,m as Example,h as Motion,u as Rectangular,k as ResponsiveContainer,g as Rounded,y as WithContent,ge as __namedExportsOrder,ue as default};
