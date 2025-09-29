import{A as y,D as r}from"./index--K6VXkND.js";import{k as u}from"./iframe-BZzdMAZp.js";import"./index-DVr7PYE6.js";import"./index-BjB2ba7z.js";import"./v4-CmTdKEVZ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DoeRgBbi.js";import"./button.constants-XDh12voX.js";import"./buttonsimple.constants-CLFrJb8-.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CR61XUh9.js";import"./keys-hFXe221I.js";import"./DisabledMixin-FFwZPyaL.js";import"./TabIndexMixin-BZbJwgjr.js";import"./index-CWcLttKP.js";import"./button.utils-rNW36Ji7.js";import"./index-9-OsRZK_.js";import"./index-MnuDyUBt.js";import"./index-DTrDRi1E.js";const o=e=>u`
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
  >
  </mdc-screenreaderannouncer>
  <mdc-text type="body-midsize-regular"
    >Note: SR may read the announcement twice in storybook. Click on 'Open canvas in new tab' in Storybook, to read it
    once.</mdc-text
  >
`,x=e=>u`
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
`,W={title:"Components/screenreaderannouncer",tags:["autodocs"],component:"mdc-screenreaderannouncer",render:o,argTypes:{announcement:{control:"text"},"data-aria-live":{control:"select",options:Object.values(y)},delay:{control:"number"},identity:{control:"text"},timeout:{control:"number"}}},l={announcement:"Momentum Design Components","data-aria-live":r.ARIA_LIVE,delay:r.DELAY,identity:"",timeout:r.TIMEOUT},t={render:o,args:{...l}},n={render:x,args:{...l,identity:"announcements-container"}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,s,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderWithIdentity,
  args: {
    ...defaultArgs,
    identity: 'announcements-container'
  }
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const U=["Example","WithIdentity"];export{t as Example,n as WithIdentity,U as __namedExportsOrder,W as default};
