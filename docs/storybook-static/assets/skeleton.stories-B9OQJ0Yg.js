import{az as o,aA as P,k as g}from"./iframe-DKmoi846.js";import{c as q,s as J}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";let r=0;const a=e=>{r+=1;const t=document.getElementById("normal-content-dynamic"),y=document.getElementById("skeleton-content-dynamic");if(!t||!y)return;t.children.length===1&&t.children[0].tagName==="P"&&(t.innerHTML="",y.innerHTML="");let n;switch(e){case"button":n=document.createElement("button"),n.textContent=`Button ${r}`,n.style.cssText=`
        padding: 10px 20px; margin: 5px; background: #007bff;
        color: white; border: none; border-radius: 4px; cursor: pointer;
      `;break;case"text":n=document.createElement("p"),n.textContent=`Sample text paragraph ${r}.
        This is some content that the skeleton will wrap around.`,n.style.cssText=`
        margin: 5px 0; padding: 10px; background: #f8f9fa;
        border-radius: 4px; cursor: pointer;
      `;break;case"image":n=document.createElement("div"),n.textContent=`🖼️ Image ${r}`,n.style.cssText=`
        width: 100px; height: 80px;
        background: linear-gradient(45deg, #e9ecef, #dee2e6);
        display: flex; align-items: center; justify-content: center;
        margin: 5px; border-radius: 4px; cursor: pointer; font-size: 12px;
      `;break;case"card":n=document.createElement("div"),n.innerHTML=`
        <div style="padding: 15px; background: white; border: 1px solid #dee2e6;
                    border-radius: 8px; margin: 5px; cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h5 style="margin: 0 0 10px 0;">Card ${r}</h5>
          <p style="margin: 0; color: #666; font-size: 14px;">
            This is a card with some content that demonstrates how the skeleton
            adapts to different content sizes.
          </p>
        </div>
      `;break;default:return}const b=n.cloneNode(!0),v=n.cloneNode(!0),k=()=>{b.remove(),v.remove()};b.onclick=k,v.onclick=k,t.appendChild(b),y.appendChild(v)},Q=()=>{const e=document.getElementById("normal-content-dynamic"),t=document.getElementById("skeleton-content-dynamic");e&&t&&(e.innerHTML=`
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `,t.innerHTML=`
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `,r=0)},X=e=>g`
  <mdc-skeleton
    ?motion=${e.motion}
    variant="${e.variant}"
    class="${e.class}"
    style="--mdc-skeleton-height: 100px; --mdc-skeleton-width: 100px; ${e.style}"
  ></mdc-skeleton>
`,Y=e=>g`
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
`,Z=e=>g`
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
`,oe={title:"Components/skeleton",tags:["autodocs"],component:"mdc-skeleton",render:X,argTypes:{variant:{control:"select",options:Object.values(o)},motion:{control:"boolean"},...q,...J}},s={args:{variant:P.VARIANT}},i={args:{variant:o.RECTANGULAR}},d={args:{variant:o.ROUNDED}},c={args:{variant:o.CIRCULAR}},l={args:{variant:o.BUTTON}},p={args:{motion:!0,variant:P.VARIANT}},m={render:Y,args:{variant:o.RECTANGULAR}},u={render:e=>g`
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px;">
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button
          @click=${()=>a("button")}
          style="padding: 8px 16px; background: #007bff; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Button
        </button>
        <button
          @click=${()=>a("text")}
          style="padding: 8px 16px; background: #28a745; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Text
        </button>
        <button
          @click=${()=>a("image")}
          style="padding: 8px 16px; background: #6f42c1; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Image
        </button>
        <button
          @click=${()=>a("card")}
          style="padding: 8px 16px; background: #fd7e14; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Card
        </button>
        <button
          @click=${()=>Q()}
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
  `,args:{variant:o.RECTANGULAR}},x={render:Z,args:{variant:o.RECTANGULAR}};var h,A,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: DEFAULTS.VARIANT
  }
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var T,f,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(E=(f=i.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var R,N,$;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.ROUNDED
  }
}`,...($=(N=d.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var S,w,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.CIRCULAR
  }
}`,...(L=(w=c.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var I,U,D;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: SKELETON_VARIANTS.BUTTON
  }
}`,...(D=(U=l.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var O,V,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    motion: true,
    variant: DEFAULTS.VARIANT
  }
}`,...(B=(V=p.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var _,G,K;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: renderWithContent,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var M,W,z;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var H,F,j;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: renderResponsive,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR
  }
}`,...(j=(F=x.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const re=["Example","Rectangular","Rounded","Circular","Button","Motion","WithContent","DynamicContent","ResponsiveContainer"];export{l as Button,c as Circular,u as DynamicContent,s as Example,p as Motion,i as Rectangular,x as ResponsiveContainer,d as Rounded,m as WithContent,re as __namedExportsOrder,oe as default};
