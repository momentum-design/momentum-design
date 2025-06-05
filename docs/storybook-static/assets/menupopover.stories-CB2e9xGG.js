import{k as r}from"./lit-element-D5KKan5q.js";import"./index-CVlQDU4z.js";import{c as y,s as C}from"./commonArgTypes-BluK8w5L.js";import{d as T,h as f,a as n}from"./utils-CO8B6ZcN.js";import"./index-Cxh0xett.js";import"./index-yx-2fZG3.js";import"./index-CnD07u88.js";import"./index-aPwXzGEb.js";import"./index-etvpBDHN.js";import"./index-C9z9WAEj.js";import"./roles-DMFGbP5t.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./menu.constants-Bt64zAlX.js";import"./menuitem.component-DXg6aWC3.js";import"./listitem.component-PsU6agzW.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-D1yLszQ-.js";import"./index-DlY34wWO.js";import"./popover.component-DqsEEw9E.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./v4-CmTdKEVZ.js";import"./index-MA1r3zrt.js";import"./menuitemcheckbox.constants-Cja4JgF_.js";import"./menusection.constants-CectB7Mc.js";import"./menuitemradio.constants-DzN5_ujm.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./button.utils-rNW36Ji7.js";import"./iframe-Csv_MwQb.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const i=P=>r`
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
`,ar={title:"Work In Progress/menu/menupopover",tags:["autodocs"],component:"mdc-menupopover",render:x,parameters:{badges:["wip"]},argTypes:{...y,...C,...T(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...f(["aria-orientation","arrowElement","cancelCloseDelay","enabledFocusTrap","enabledPreventScroll","hidePopover","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","shouldWrapFocus","showPopover","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},e={...n()},o={render:()=>r`
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
}`,...(w=(h=m.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const ur=["Example","ButtonTrigger","IconTrigger","ButtonGroupTrigger"];export{m as ButtonGroupTrigger,o as ButtonTrigger,e as Example,t as IconTrigger,ur as __namedExportsOrder,ar as default};
