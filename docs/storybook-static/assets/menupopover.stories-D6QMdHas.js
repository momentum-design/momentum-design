import{k as i}from"./lit-element-D5KKan5q.js";import"./index-CUIzKe2_.js";import{c as t,s as d}from"./commonArgTypes-BluK8w5L.js";import{d as p,h as n,a as c}from"./utils-CO8B6ZcN.js";import"./index-BKk1AD_8.js";import"./index-D8W8fjOs.js";import"./index-CHOPQpZ2.js";import"./index-C9z9WAEj.js";import"./roles-DMFGbP5t.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./menu.constants-Bt64zAlX.js";import"./menuitem.component-udQZuTYl.js";import"./listitem.component-Dr50tOw7.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./text.constants-ZF0jM5wn.js";import"./index-w8B2CBxb.js";import"./popover.component-BTxIb0E7.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./v4-CmTdKEVZ.js";import"./index-CcXofQbA.js";import"./menuitemcheckbox.constants-Cja4JgF_.js";import"./menusection.constants-CectB7Mc.js";import"./menuitemradio.constants-DzN5_ujm.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./iframe-DlRfNKIZ.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";const a=()=>i`
  <div style="width: 50rem; height: 25rem;">
    <mdc-menubar>
      <mdc-menuitem id="menu-button-trigger" label="File"></mdc-menuitem>
      <mdc-menupopover triggerid="menu-button-trigger">
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
    </mdc-menubar>
  </div>
`,J={title:"Work In Progress/menu/menupopover",tags:["autodocs"],component:"mdc-menupopover",render:a,parameters:{badges:["wip"],docs:{source:{format:"html",code:`
          <mdc-menubar>
            <mdc-menuitem id="menu-id" label="..."></mdc-menuitem>
            <mdc-menupopover triggerid="menu-id">
              <mdc-menuitem label="..."></mdc-menuitem>
              <mdc-menuitem id="sub-menu-id" label="..." arrow-position="trailing"></mdc-menuitem>
              <mdc-menupopover triggerid="sub-menu-id">
                <mdc-menuitem label="..."></mdc-menuitem>
                <mdc-menuitem label="..."></mdc-menuitem>
              </mdc-menupopover>
              <mdc-menuitem label="..."></mdc-menuitem>
            </mdc-menupopover>
          <mdc-menubar>
        `}}},argTypes:{...t,...d,...p(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...n(["aria-orientation","arrowElement","cancelCloseDelay","enabledFocusTrap","enabledPreventScroll","hidePopover","onEscapeKeydown","onOutsidePopoverClick","onPopoverFocusOut","shouldWrapFocus","showPopover","startCloseDelay","togglePopoverVisible","triggerElement","utils"])}},e={...c()};var m,r,o;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...hideAllControls()
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const L=["Example"];export{e as Example,L as __namedExportsOrder,J as default};
