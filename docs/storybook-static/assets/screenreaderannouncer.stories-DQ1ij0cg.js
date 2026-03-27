import{A as y,D as n}from"./index-S0j83kMi.js";import{k as l}from"./iframe-DBAXEeb_.js";import"./index-DEt5yFrI.js";import"./v4-CmTdKEVZ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-iWITCBo-.js";import"./buttonsimple.component-CCVl3Kje.js";import"./DisabledMixin-CJ5fJ_db.js";import"./KeyDownHandledMixin-CGg5F37x.js";import"./index-Bul3jdd3.js";import"./button.utils-rNW36Ji7.js";import"./index-CyqGq4J2.js";import"./index-DTrDRi1E.js";const r=e=>l`
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <mdc-text type="body-midsize-regular">
      Click following button for Screen Reader to announce '${e.announcement}'
    </mdc-text>
    <mdc-button
      @click="${()=>{const a=document.querySelector("mdc-screenreaderannouncer");a&&a.announce({announcement:e.announcement,ariaLive:e["data-aria-live"],delay:e.delay,timeout:e.timeout})}}"
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
`,b=e=>l`
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
`,C={title:"Components/screenreaderannouncer",tags:["autodocs"],component:"mdc-screenreaderannouncer",render:r,argTypes:{announcement:{control:"text"},"data-aria-live":{control:"select",options:Object.values(y)},delay:{control:"number"},identity:{control:"text"},timeout:{control:"number"},"debounce-time":{control:"number"}}},p={announcement:"Momentum Design Components","data-aria-live":n.ARIA_LIVE,delay:n.DELAY,identity:void 0,timeout:n.TIMEOUT,"debounce-time":n.DEBOUNCE},t={render:r,args:{...p}},o={render:b,args:{...p,identity:"announcements-container"}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const D=["Example","WithIdentity"];export{t as Example,o as WithIdentity,D as __namedExportsOrder,C as default};
