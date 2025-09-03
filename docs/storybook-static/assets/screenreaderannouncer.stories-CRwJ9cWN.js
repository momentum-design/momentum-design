import{A as y,D as r}from"./index-CnFwjDgi.js";import{k as u}from"./lit-element-D5KKan5q.js";import"./index-Con8Z9nn.js";import"./index-D2VIkDCb.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./v4-CmTdKEVZ.js";import"./button.component-DXfxhmBS.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-jROCF6tv.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-DuD0cY4i.js";import"./iframe-DE5vf-rx.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";const o=e=>u`
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <mdc-text type="body-midsize-regular">
      Click following button for Screen Reader to announce '${e.announcement}'
    </mdc-text>
    <mdc-button
      @click="${()=>{const i=document.querySelector("mdc-screenreaderannouncer");i&&i.setAttribute("announcement",e.announcement)}}"
      >Announce</mdc-button
    >
  </div>
  <mdc-screenreaderannouncer
    data-aria-live="${e["data-aria-live"]}"
    delay="${e.delay}"
    identity="${e.identity}"
    timeout="${e.timeout}"
  >
  </mdc-screenreaderannouncer>
  <mdc-text type="body-midsize-regular"
    >Note: SR may read the announcement twice in storybook. Click on 'Open canvas in new tab' in Storybook, to read it
    once.</mdc-text
  >
`,b=e=>u`
  <div
    id="announcements-container"
    style="
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  "
  ></div>
  ${o(e)}
`,j={title:"Components/screenreaderannouncer",tags:["autodocs"],component:"mdc-screenreaderannouncer",render:o,parameters:{badges:["stable"]},argTypes:{announcement:{control:"text"},"data-aria-live":{control:"select",options:Object.values(y)},delay:{control:"number"},identity:{control:"text"},timeout:{control:"number"}}},l={announcement:"Momentum Design Components","data-aria-live":r.ARIA_LIVE,delay:r.DELAY,identity:"",timeout:r.TIMEOUT},t={render:o,args:{...l}},n={render:b,args:{...l,identity:"announcements-container"}};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,s,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderWithIdentity,
  args: {
    ...defaultArgs,
    identity: 'announcements-container'
  }
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const q=["Example","WithIdentity"];export{t as Example,n as WithIdentity,q as __namedExportsOrder,j as default};
