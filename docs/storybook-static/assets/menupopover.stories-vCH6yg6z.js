import{k as r}from"./lit-element-D5KKan5q.js";import"./index-DdUHVmAs.js";import{c as y,s as C}from"./commonArgTypes-BluK8w5L.js";import{d as T,h as f,a as n}from"./utils-CO8B6ZcN.js";import"./index-DIA0lsP8.js";import"./index-yx-2fZG3.js";import"./index-CWciZxqh.js";import"./index-2_CBxh1w.js";import"./index-BMMqrsP1.js";import"./index-Dag3Pph6.js";import"./menubar.component-BW7Fn6AM.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./menu.constants-Bt64zAlX.js";import"./menupopover.constants-D31hJpJi.js";import"./menusection.constants-CectB7Mc.js";import"./listitem.component-7b049Nhq.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./roles-Ch6n0tol.js";import"./index-D1yLszQ-.js";import"./index-BQIA-yjU.js";import"./popover.component-DqsEEw9E.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./v4-CmTdKEVZ.js";import"./index-MA1r3zrt.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./button.utils-rNW36Ji7.js";import"./divider.constants-DyEGqhgz.js";import"./iframe-DPyiK6K0.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./menuitem.component-BRf3IJAH.js";const i=P=>r`
  <mdc-menupopover triggerid="${P}">
    <mdc-menuitem label="New"></mdc-menuitem>
    <mdc-menuitem label="Open"></mdc-menuitem>
    <mdc-menuitem label="Save"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Share" id="share-id" arrow-position='trailing'></mdc-menuitem>
    <mdc-menupopover triggerid="share-id">
      <mdc-menuitem label="AirDrop"></mdc-menuitem>
      <mdc-menuitem label="Messages"></mdc-menuitem>
      <mdc-menuitem label="Notes"></mdc-menuitem>
      <mdc-menuitem label="Freeform"></mdc-menuitem>
      <mdc-menuitem label="Reminders"></mdc-menuitem>
    </mdc-menupopover>
  </mdc-menupopover>
`,x=()=>r`
  <mdc-menubar>
    <mdc-menuitem id="menu-button-trigger" label="File"></mdc-menuitem>
    ${i("menu-button-trigger")}
  </mdc-menubar>
`,sr={title:"Work In Progress/menu/menupopover",tags:["autodocs"],component:"mdc-menupopover",render:x,parameters:{badges:["wip"]},argTypes:{...y,...C,...T(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...f(["aria-orientation","arrowElement","cancelCloseDelay","enabledFocusTrap","enabledPreventScroll","hidePopover","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","shouldWrapFocus","showPopover","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},e={...n()},o={render:()=>r`
    <mdc-button id="button-trigger">Menu</mdc-button>
    ${i("button-trigger")}
  `,...n()},t={render:()=>r`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger"></mdc-button>
    ${i("icon-trigger")}
  `,...n()},m={render:()=>r`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger"></mdc-button>
    </mdc-buttongroup>
    ${i("button-group-trigger")}
  `,...n()};var d,p,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...hideAllControls()
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-button id="button-trigger">Menu</mdc-button>
    \${createPopover('button-trigger')}
  \`,
  ...hideAllControls()
}`,...(s=(u=o.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var l,g,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-button prefix-icon="placeholder-bold" id="icon-trigger"></mdc-button>
    \${createPopover('icon-trigger')}
  \`,
  ...hideAllControls()
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,h,w;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button id="popover-trigger-1">Open Menu</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="button-group-trigger"></mdc-button>
    </mdc-buttongroup>
    \${createPopover('button-group-trigger')}
  \`,
  ...hideAllControls()
}`,...(w=(h=m.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const lr=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger"];export{m as ButtonGroupTrigger,o as ButtonTrigger,e as Example,t as IconTrigger,lr as __namedExportsOrder,sr as default};
