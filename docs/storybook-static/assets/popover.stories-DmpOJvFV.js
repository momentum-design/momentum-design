import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as o}from"./lit-element-D5KKan5q.js";import{t as ae,a as se,h as ue}from"./utils-CFOyPOhY.js";import"./index-JsC8alK4.js";import"./index-B5DpTXBm.js";import"./index-ZYSHrcoI.js";import"./index-Dq35umVO.js";import"./index-BYzC3edI.js";import"./index-OsD065td.js";import"./index-Oxjc3MDn.js";import"./index-BYs9qdSO.js";import"./index-CDo3POFf.js";import"./index-CcyWGNLW.js";import"./index-BPyWq0_g.js";import{a as i,C as ge,D as t}from"./popover.component-DyV3vn3N.js";import"./v4-CQkTLCs1.js";import"./button.component-C0ZL9yys.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-Dydm3dt1.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./index-APTaIYMp.js";import"./iframe-DC2qJtBf.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-D2VIkDCb.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./listitem.component-B3497azE.js";import"./index-DXs9nl5T.js";import"./index-CRKOAWQB.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./formfieldwrapper.component-DfjqvCUn.js";import"./menuitemradio.constants-CB6EqhSm.js";import"./menupopover.constants-CpexIkMA.js";import"./badge.constants-C6WKiCnx.js";import"./menuitem.component-B6PRyjrF.js";import"./menuitemcheckbox.constants-dhHMuWzH.js";import"./FooterMixin-oJpTePmN.js";import"./link.constants-DNTydABS.js";import"./divider.constants-DXWnBz1m.js";const c=(e,d)=>o`
  <mdc-popover
    id="${e.id}"
    triggerID="${e.triggerID}"
    trigger="${e.trigger}"
    placement="${e.placement}"
    delay="${e.delay}"
    z-index="${e["z-index"]}"
    ?visible="${e.visible}"
    .offset="${e.offset??0}"
    ?interactive=${e.interactive}
    ?focus-trap=${e["focus-trap"]}
    ?should-focus-trap-wrap=${e["should-focus-trap-wrap"]}
    ?show-arrow=${e["show-arrow"]}
    color=${e.color}
    ?flip=${e.flip}
    ?size=${e.size}
    ?backdrop=${e.backdrop}
    ?close-button=${e["close-button"]}
    ?prevent-scroll=${e["prevent-scroll"]}
    ?hide-on-blur=${e["hide-on-blur"]}
    ?hide-on-escape=${e["hide-on-escape"]}
    ?hide-on-outside-click=${e["hide-on-outside-click"]}
    ?focus-back-to-trigger=${e["focus-back-to-trigger"]}
    append-to=${e["append-to"]}
    close-button-aria-label="${e["close-button-aria-label"]}"
    aria-label="${e["aria-label"]}"
    aria-labelledby="${e["aria-labelledby"]}"
    aria-describedby="${e["aria-describedby"]}"
    role="${e.role}"
    ?disable-aria-expanded="${e["disable-aria-expanded"]}"
    ?keep-connected-tooltip-closed="${e["keep-connected-tooltip-closed"]}"
    @shown="${a("onshown")}"
    @hidden="${a("onhidden")}"
    @created="${a("oncreated")}"
    @destroyed="${a("ondestroyed")}"
  >
    ${d}
  </mdc-popover>
`,n=(e,d)=>o`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${e}">${d}</mdc-button>
  </div>
`,ve=e=>o`
  ${n(e.triggerID,"Click me!")}
  ${c(e,o`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,be=e=>o`
  ${n("popover-trigger-interactive","Click me!")}
  ${c(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,he=e=>o`
  ${n("popover-trigger-interactive-hover","Hover me!")}
  ${c(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,fe=e=>o`
  ${n("popover-trigger-hide-on-blur","Click me!")}
  ${c(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,xe=e=>o`
  ${n("popover-trigger-multiple","Click/ Hover me!")}
  ${c(e,o`<mdc-text>Interactive content on click</mdc-text>`)}
  <mdc-tooltip id="popover2" triggerID="popover-trigger-multiple" show-arrow hide-on-escape>
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-tooltip>
`,Ee=e=>o`
  ${n("popover-trigger-nested","Click me!")}
  ${c(e,o`<mdc-text>Popover Level 1</mdc-text> <mdc-button id="popover-trigger-2">Click me!</mdc-button>`)}
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-2"
    trigger="click"
    placement="bottom"
    interactive
    z-index="20"
    focus-back-to-trigger
    focus-trap
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Popover Level 2</mdc-text>
    <mdc-button id="popover-trigger-3">Hover me!</mdc-button>
  </mdc-popover>

  <mdc-popover
    id="popover3"
    triggerID="popover-trigger-3"
    trigger="mouseenter"
    placement="bottom"
    z-index="30"
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`,Ie=e=>o`
  ${n("popover-trigger-backdrop","Click me!")}
  ${c(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button id="popover-trigger-2">Button 1</mdc-button>
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-2"
    trigger="click"
    placement="bottom"
    interactive
    z-index="20"
    focus-back-to-trigger
    focus-trap
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Popover 2</mdc-text>
  </mdc-popover>
`,Lt={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:ve,parameters:{badges:["stable"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(i)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(ge)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"should-focus-trap-wrap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},...ae(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3","--mdc-popover-max-width","--mdc-popover-max-height","--mdc-popover-width"]),...se(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},m={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:i.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"show-arrow":!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!0,interactive:t.INTERACTIVE}},s={render:be,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:i.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:t.FLIP,size:!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!1}},u={render:he,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:i.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,"focus-back-to-trigger":!0,role:t.ROLE,color:t.COLOR}},g={render:xe,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:i.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"focus-back-to-trigger":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,"show-arrow":!0,"close-button":!0,role:t.ROLE,color:t.COLOR}},v={render:Ee,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:i.TOP,offset:t.OFFSET,"z-index":10,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:t.ROLE,color:t.COLOR,"focus-back-to-trigger":!0,"hide-on-outside-click":!0}},b={render:fe,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:i.RIGHT,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:t.ROLE,color:t.COLOR}},h={render:Ie,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:i.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,"hide-on-outside-click":!0,"focus-trap":!0,role:t.ROLE,color:t.COLOR}},f={render:()=>o`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="select-button">Click me!</mdc-button>
      <mdc-popover
        triggerID="select-button"
        interactive
        hide-on-escape
        hide-on-outside-click
        focus-trap
        focus-back-to-trigger
      >
        <div style="width: 15rem;">
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 1" value="option-1"></mdc-option>
              <mdc-option label="Option 2" value="option-2"></mdc-option>
              <mdc-option label="Option 3" value="option-3"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 4" value="option-4"></mdc-option>
              <mdc-option label="Option 5" value="option-5"></mdc-option>
              <mdc-option label="Option 6" value="option-6"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 7" value="option-7"></mdc-option>
              <mdc-option label="Option 8" value="option-8"></mdc-option>
              <mdc-option label="Option 9" value="option-9"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
        </div>
      </mdc-popover>
    </div>
  `,...ue()},x={render:()=>o`
    <style>
      .container {
        display: flex;
        width: 150rem;
        height: 15rem;
        align-items: center;
      }
      .child {
        display: flex;
        width: 10rem;
        height: 2rem;
        justify-content: center;
      }
    </style>
    <div class="container">
      <div class="child">
        <mdc-button id="popover-trigger-1">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 1</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-2">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-2" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 2</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-3">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-3" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 3</mdc-text>
        </mdc-popover>
      </div>
    </div>
  `},E={args:{...m.args,placement:i.RIGHT_START,triggerID:"trigger-btn"},render:()=>o`
    ${n("popover-trigger-interactive","Click me!")}
    <mdc-popover
      id="popover"
      triggerID="popover-trigger-interactive"
      trigger="click"
      placement="bottom"
      interactive
      focus-back-to-trigger
      focus-trap
      show-arrow
      hide-on-escape
      hide-on-outside-click
    >
      <div id="menupopover-test-wrapper">
        <h2>Hello world</h2>
        <mdc-button id="menu-trigger-btn">Menu</mdc-button>
        <mdc-menupopover triggerID="menu-trigger-btn" show-arrow>
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
        </mdc-menupopover>
      </div>
    </mdc-popover>
  `},I={args:{...m.args,id:"popover",placement:i.RIGHT_START,triggerID:"trigger-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,"keep-connected-tooltip-closed":!0},render:e=>o`
    ${n(e.triggerID,"Click me!")}
    ${c(e,o`
        <mdc-button
          @click=${()=>{document.getElementById("popover").hide();const p=document.getElementById("popover-dialog");p.visible=!0}}
        >
          Open dialog
        </mdc-button>
      `)}
    <mdc-tooltip id="tooltip" triggerID="${e.triggerID}" placement="top"> Tooltip text </mdc-tooltip>
    <mdc-dialog
      id="popover-dialog"
      header-text="Dialog Title"
      @close=${()=>{const d=document.getElementById("popover-dialog");d.visible=!1}}
    >
      <mdc-text slot="dialog-body">Dialog content goes here.</mdc-text>
      <mdc-button slot="footer">Close</mdc-button>
    </mdc-dialog>
  `},k={args:{...m.args,id:"popover-scroll-overflow",triggerID:"trigger-scroll-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,size:!0},render:e=>o`
    <mdc-list style="height: 200px; width: 100%; overflow-y: auto;">
      <mdc-listitem label="Item 1"></mdc-listitem>
      <mdc-listitem label="Item 2"></mdc-listitem>
      <mdc-listitem label="Item 3">
        <div style="height: fit-content" slot="content">
          <mdc-button id="${e.triggerID}">Trigger</mdc-button>
          ${c(e,o`
              <div style="height: 300px; overflow-y: auto;">
                <mdc-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.</mdc-text
                >
                <mdc-text>More content...</mdc-text>
                <mdc-text>Even more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
              </div>
            `)}
        </div>
      </mdc-listitem>
      <mdc-listitem label="Item 4"></mdc-listitem>
      <mdc-listitem label="Item 5"></mdc-listitem>
      <mdc-listitem label="Item 6"></mdc-listitem>
      <mdc-listitem label="Item 7"></mdc-listitem>
      <mdc-listitem label="Item 8"></mdc-listitem>
      <mdc-listitem label="Item 9"></mdc-listitem>
      <mdc-listitem label="Item 10"></mdc-listitem>
      <mdc-listitem label="Item 11"></mdc-listitem>
      <mdc-listitem label="Item 12"></mdc-listitem>
    </mdc-list>
  `},D={args:{...m.args,id:"popover-scroll-overflow",triggerID:"trigger-scroll-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,size:!0},render:()=>{let e=1;const d=()=>{e+=1;const l=document.querySelector("#item-2"),O=l.parentElement;l.remove(),O.append(l);let r=document.querySelector("#item-3");const L=r.parentElement;r.remove(),r=document.createElement("mdc-button"),r.setAttribute("id","item-3"),r.setAttribute("prefix-icon","placeholder-bold"),r.innerHTML=`Open v${e}`,L.append(r)};let p=1;return o`
      <div>
        <template id="popover-tpl">
          <mdc-popover focus-back-to-trigger hide-on-escape hide-on-outside-click backdrop show-arrow triggerID="item-3"
            ><div></div
          ></mdc-popover>
        </template>
        <mdc-text tagname="p">
          Frameworks might detach and re-attach elements when list content change. <br />
          If it happens with the trigger but not the popover then it breaks the connection.
        </mdc-text>

        <mdc-text tagname="p"> "Open" popover buttons works before and after "Update" button pressed. </mdc-text>

        <mdc-buttongroup>
          <mdc-button @click="${d}">Update Open buttons</mdc-button>
          <mdc-button @click="${()=>{p+=1;const l=document.querySelector('[triggerID="item-2"]'),O=l.parentElement;l.remove(),O.append(l);let r=document.querySelector('[triggerID="item-3"]');const L=r.parentElement;r.remove(),r=document.getElementById("popover-tpl").content.cloneNode(!0),r.querySelector("div").innerHTML=`Item 3 v${p}`,L.append(r)}}">Update Popovers</mdc-button>
        </mdc-buttongroup>

        <mdc-divider style="margin-block: 1rem"></mdc-divider>

        <mdc-list style="height: 200px; width: 100%; overflow-y: auto;">
          <mdc-listitem label="No change after update">
            <div slot="trailing-controls">
              <mdc-button id="item-1" prefix-icon="placeholder-bold">Open v${e}</mdc-button>
              <mdc-popover
                focus-back-to-trigger
                hide-on-escape
                hide-on-outside-click
                backdrop
                show-arrow
                triggerID="item-1"
                >Item 1 v${p}</mdc-popover
              >
            </div>
          </mdc-listitem>
          <mdc-listitem label="Detach / Re-attach after update">
            <div slot="trailing-controls">
              <mdc-button id="item-2" prefix-icon="placeholder-bold">Open v${e}</mdc-button>
              <mdc-popover
                focus-back-to-trigger
                hide-on-escape
                hide-on-outside-click
                backdrop
                show-arrow
                triggerID="item-2"
                >Item 2 v${p}</mdc-popover
              >
            </div>
          </mdc-listitem>
          <mdc-listitem label="Replace with new one after update">
            <div slot="trailing-controls">
              <mdc-button id="item-3" prefix-icon="placeholder-bold">Open v${e}</mdc-button>
              <mdc-popover
                focus-back-to-trigger
                hide-on-escape
                hide-on-outside-click
                backdrop
                show-arrow
                triggerID="item-3"
                >Item 3 v${p}</mdc-popover
              >
            </div>
          </mdc-listitem>
        </mdc-list>
      </div>
    `}};var w,T,P;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'show-arrow': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': true,
    interactive: DEFAULTS.INTERACTIVE
  }
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var A,S,F;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: renderInteractive,
  args: {
    id: 'popover-interactive',
    triggerID: 'popover-trigger-interactive',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    flip: DEFAULTS.FLIP,
    size: true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': false
  }
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var $,y,C;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: renderInteractiveHover,
  args: {
    id: 'popover-interactive-hover',
    triggerID: 'popover-trigger-interactive-hover',
    trigger: 'mouseenter',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    'focus-back-to-trigger': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var B,R,U;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: renderMultiple,
  args: {
    id: 'popover-multiple',
    triggerID: 'popover-trigger-multiple',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'focus-back-to-trigger': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    'show-arrow': true,
    'close-button': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(U=(R=g.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var M,N,z;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: renderNested,
  args: {
    id: 'popover-nested',
    triggerID: 'popover-trigger-nested',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': 10,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'focus-back-to-trigger': true,
    'hide-on-outside-click': true
  }
}`,...(z=(N=v.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var _,V,H;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: renderHideOnBlur,
  args: {
    id: 'popover-hide-on-blur',
    triggerID: 'popover-trigger-hide-on-blur',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.RIGHT,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    'hide-on-blur': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var Y,q,X;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: renderBackdrop,
  args: {
    id: 'popover-backdrop',
    triggerID: 'popover-trigger-backdrop',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    backdrop: true,
    'hide-on-outside-click': true,
    'focus-trap': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(X=(q=h.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var Z,W,G;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="select-button">Click me!</mdc-button>
      <mdc-popover
        triggerID="select-button"
        interactive
        hide-on-escape
        hide-on-outside-click
        focus-trap
        focus-back-to-trigger
      >
        <div style="width: 15rem;">
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 1" value="option-1"></mdc-option>
              <mdc-option label="Option 2" value="option-2"></mdc-option>
              <mdc-option label="Option 3" value="option-3"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 4" value="option-4"></mdc-option>
              <mdc-option label="Option 5" value="option-5"></mdc-option>
              <mdc-option label="Option 6" value="option-6"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select>
            <mdc-selectlistbox>
              <mdc-option label="Option 7" value="option-7"></mdc-option>
              <mdc-option label="Option 8" value="option-8"></mdc-option>
              <mdc-option label="Option 9" value="option-9"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
        </div>
      </mdc-popover>
    </div>
  \`,
  ...hideAllControls()
}`,...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var j,K,J;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .container {
        display: flex;
        width: 150rem;
        height: 15rem;
        align-items: center;
      }
      .child {
        display: flex;
        width: 10rem;
        height: 2rem;
        justify-content: center;
      }
    </style>
    <div class="container">
      <div class="child">
        <mdc-button id="popover-trigger-1">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 1</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-2">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-2" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 2</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-3">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-3" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 3</mdc-text>
        </mdc-popover>
      </div>
    </div>
  \`
}`,...(J=(K=x.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,ee,te;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    placement: POPOVER_PLACEMENT.RIGHT_START,
    triggerID: 'trigger-btn'
  },
  render: () => html\`
    \${createTrigger('popover-trigger-interactive', 'Click me!')}
    <mdc-popover
      id="popover"
      triggerID="popover-trigger-interactive"
      trigger="click"
      placement="bottom"
      interactive
      focus-back-to-trigger
      focus-trap
      show-arrow
      hide-on-escape
      hide-on-outside-click
    >
      <div id="menupopover-test-wrapper">
        <h2>Hello world</h2>
        <mdc-button id="menu-trigger-btn">Menu</mdc-button>
        <mdc-menupopover triggerID="menu-trigger-btn" show-arrow>
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
        </mdc-menupopover>
      </div>
    </mdc-popover>
  \`
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ie;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    id: 'popover',
    placement: POPOVER_PLACEMENT.RIGHT_START,
    triggerID: 'trigger-btn',
    interactive: true,
    'focus-trap': true,
    'focus-back-to-trigger': true,
    'show-arrow': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    'keep-connected-tooltip-closed': true
  },
  render: args => html\`
    \${createTrigger(args.triggerID, 'Click me!')}
    \${createPopover(args, html\`
        <mdc-button
          @click=\${() => {
    const popover = document.getElementById('popover') as Popover;
    popover.hide();
    const dialog = document.getElementById('popover-dialog') as Dialog;
    dialog.visible = true;
  }}
        >
          Open dialog
        </mdc-button>
      \`)}
    <mdc-tooltip id="tooltip" triggerID="\${args.triggerID}" placement="top"> Tooltip text </mdc-tooltip>
    <mdc-dialog
      id="popover-dialog"
      header-text="Dialog Title"
      @close=\${() => {
    const dialog = document.getElementById('popover-dialog') as Dialog;
    dialog.visible = false;
  }}
    >
      <mdc-text slot="dialog-body">Dialog content goes here.</mdc-text>
      <mdc-button slot="footer">Close</mdc-button>
    </mdc-dialog>
  \`
}`,...(ie=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,ne,de;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    id: 'popover-scroll-overflow',
    triggerID: 'trigger-scroll-btn',
    interactive: true,
    'focus-trap': true,
    'focus-back-to-trigger': true,
    'show-arrow': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    size: true
  },
  render: args => html\`
    <mdc-list style="height: 200px; width: 100%; overflow-y: auto;">
      <mdc-listitem label="Item 1"></mdc-listitem>
      <mdc-listitem label="Item 2"></mdc-listitem>
      <mdc-listitem label="Item 3">
        <div style="height: fit-content" slot="content">
          <mdc-button id="\${args.triggerID}">Trigger</mdc-button>
          \${createPopover(args, html\`
              <div style="height: 300px; overflow-y: auto;">
                <mdc-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.</mdc-text
                >
                <mdc-text>More content...</mdc-text>
                <mdc-text>Even more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
                <mdc-text>And some more content...</mdc-text>
              </div>
            \`)}
        </div>
      </mdc-listitem>
      <mdc-listitem label="Item 4"></mdc-listitem>
      <mdc-listitem label="Item 5"></mdc-listitem>
      <mdc-listitem label="Item 6"></mdc-listitem>
      <mdc-listitem label="Item 7"></mdc-listitem>
      <mdc-listitem label="Item 8"></mdc-listitem>
      <mdc-listitem label="Item 9"></mdc-listitem>
      <mdc-listitem label="Item 10"></mdc-listitem>
      <mdc-listitem label="Item 11"></mdc-listitem>
      <mdc-listitem label="Item 12"></mdc-listitem>
    </mdc-list>
  \`
}`,...(de=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var me,pe,le;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    id: 'popover-scroll-overflow',
    triggerID: 'trigger-scroll-btn',
    interactive: true,
    'focus-trap': true,
    'focus-back-to-trigger': true,
    'show-arrow': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    size: true
  },
  render: () => {
    let btnVersion = 1;
    const updateButton = () => {
      btnVersion += 1;
      const item2 = document.querySelector('#item-2')!;
      const item2Parent = item2.parentElement!;
      item2.remove();
      item2Parent.append(item2);
      let item3 = document.querySelector('#item-3')!;
      const item3Parent = item3.parentElement!;
      item3.remove();
      item3 = document.createElement('mdc-button');
      item3.setAttribute('id', 'item-3');
      item3.setAttribute('prefix-icon', 'placeholder-bold');
      item3.innerHTML = \`Open v\${btnVersion}\`;
      item3Parent.append(item3);
    };
    let popVersion = 1;
    const updatePopover = () => {
      popVersion += 1;
      const popover2 = document.querySelector('[triggerID="item-2"]')!;
      const popover2Parent = popover2.parentElement!;
      popover2.remove();
      popover2Parent.append(popover2);
      let popover3 = document.querySelector('[triggerID="item-3"]')!;
      const popover3Parent = popover3.parentElement!;
      popover3.remove();
      popover3 = (document.getElementById('popover-tpl')! as HTMLTemplateElement).content.cloneNode(true) as HTMLElement;
      popover3.querySelector('div')!.innerHTML = \`Item 3 v\${popVersion}\`;
      popover3Parent.append(popover3);
    };
    return html\`
      <div>
        <template id="popover-tpl">
          <mdc-popover focus-back-to-trigger hide-on-escape hide-on-outside-click backdrop show-arrow triggerID="item-3"
            ><div></div
          ></mdc-popover>
        </template>
        <mdc-text tagname="p">
          Frameworks might detach and re-attach elements when list content change. <br />
          If it happens with the trigger but not the popover then it breaks the connection.
        </mdc-text>

        <mdc-text tagname="p"> "Open" popover buttons works before and after "Update" button pressed. </mdc-text>

        <mdc-buttongroup>
          <mdc-button @click="\${updateButton}">Update Open buttons</mdc-button>
          <mdc-button @click="\${updatePopover}">Update Popovers</mdc-button>
        </mdc-buttongroup>

        <mdc-divider style="margin-block: 1rem"></mdc-divider>

        <mdc-list style="height: 200px; width: 100%; overflow-y: auto;">
          <mdc-listitem label="No change after update">
            <div slot="trailing-controls">
              <mdc-button id="item-1" prefix-icon="placeholder-bold">Open v\${btnVersion}</mdc-button>
              <mdc-popover
                focus-back-to-trigger
                hide-on-escape
                hide-on-outside-click
                backdrop
                show-arrow
                triggerID="item-1"
                >Item 1 v\${popVersion}</mdc-popover
              >
            </div>
          </mdc-listitem>
          <mdc-listitem label="Detach / Re-attach after update">
            <div slot="trailing-controls">
              <mdc-button id="item-2" prefix-icon="placeholder-bold">Open v\${btnVersion}</mdc-button>
              <mdc-popover
                focus-back-to-trigger
                hide-on-escape
                hide-on-outside-click
                backdrop
                show-arrow
                triggerID="item-2"
                >Item 2 v\${popVersion}</mdc-popover
              >
            </div>
          </mdc-listitem>
          <mdc-listitem label="Replace with new one after update">
            <div slot="trailing-controls">
              <mdc-button id="item-3" prefix-icon="placeholder-bold">Open v\${btnVersion}</mdc-button>
              <mdc-popover
                focus-back-to-trigger
                hide-on-escape
                hide-on-outside-click
                backdrop
                show-arrow
                triggerID="item-3"
                >Item 3 v\${popVersion}</mdc-popover
              >
            </div>
          </mdc-listitem>
        </mdc-list>
      </div>
    \`;
  }
}`,...(le=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const wt=["Example","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop","popoverWithSelect","MultipleSingleLevelPopovers","NestedMenu","PopoverWithTooltipAndDialog","PopoverScrollOverflow","PopoverInChangingList"];export{m as Example,x as MultipleSingleLevelPopovers,E as NestedMenu,D as PopoverInChangingList,k as PopoverScrollOverflow,I as PopoverWithTooltipAndDialog,wt as __namedExportsOrder,Lt as default,b as hideOnBlur,s as interactiveContent,u as interactiveHover,g as interactiveMultiple,v as nestedPopover,h as popoverWithBackdrop,f as popoverWithSelect};
