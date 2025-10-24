import{A as y,D as n}from"./index-K0-WMWff.js";import{k as p}from"./iframe-C0RekVwL.js";import"./index-DicW32L0.js";import"./v4-CmTdKEVZ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CDeY_lF4.js";import"./buttonsimple.component-BvLikHAW.js";import"./TabIndexMixin-Dfil6RAX.js";import"./DisabledMixin-Cb-9pm1f.js";import"./button.utils-rNW36Ji7.js";import"./index-CVmp_pYR.js";import"./index-BUH3rz2F.js";import"./index-DTrDRi1E.js";const r=e=>p`
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <mdc-text type="body-midsize-regular">
      Click following button for Screen Reader to announce '${e.announcement}'
    </mdc-text>
    <mdc-button
      @click="${()=>{const a=document.querySelector("mdc-screenreaderannouncer");a&&a.setAttribute("announcement",e.announcement)}}"
      >Announce</mdc-button
    >
  </div>
  <mdc-screenreaderannouncer
    data-aria-live="${e["data-aria-live"]}"
    delay="${e.delay}"
    identity="${e.identity}"
    timeout="${e.timeout}"
    debounce-time="${e["debounce-time"]}"
  >
  </mdc-screenreaderannouncer>
  <mdc-text type="body-midsize-regular"
    >Note: SR may read the announcement twice in storybook. Click on 'Open canvas in new tab' in Storybook, to read it
    once.</mdc-text
  >
`,b=e=>p`
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
  ${r(e)}
`,D={title:"Components/screenreaderannouncer",tags:["autodocs"],component:"mdc-screenreaderannouncer",render:r,argTypes:{announcement:{control:"text"},"data-aria-live":{control:"select",options:Object.values(y)},delay:{control:"number"},identity:{control:"text"},timeout:{control:"number"},"debounce-time":{control:"number"}}},l={announcement:"Momentum Design Components","data-aria-live":n.ARIA_LIVE,delay:n.DELAY,identity:"",timeout:n.TIMEOUT,"debounce-time":n.DEBOUNCE},t={render:r,args:{...l}},o={render:b,args:{...l,identity:"announcements-container"}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,s,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderWithIdentity,
  args: {
    ...defaultArgs,
    identity: 'announcements-container'
  }
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const L=["Example","WithIdentity"];export{t as Example,o as WithIdentity,L as __namedExportsOrder,D as default};
