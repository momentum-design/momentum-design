import{k as o,V as r}from"./iframe-BsSOvdiI.js";import{h as Ee,a as xe}from"./utils-D6nie9pS.js";import"./index-CDpY4Xpy.js";import"./index-DRAwYJEu.js";import"./index-C-00kBOW.js";import"./index-_pM-1cxH.js";import"./index-xg62zq90.js";import"./index-B2yA4N7l.js";import"./index-BKHyuKhM.js";import"./index-BKwz-iCd.js";import"./index-Bq-Vn7wJ.js";import"./index-CKo2dFLX.js";import{P as p,C as Te,B as Ie,S as ke,D as t}from"./popover.constants-BSWNBOE7.js";import{t as u}from"./if-defined-Cv7J1nAi.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-lOqoOFxR.js";import"./buttonsimple.component-DIoIQKM2.js";import"./DisabledMixin-fjLCGnVB.js";import"./KeyToActionMixin-NJAwsg8D.js";import"./button.utils-rNW36Ji7.js";import"./index-D5ySaiVt.js";import"./index-BD9j_4IV.js";import"./index-DTrDRi1E.js";import"./query-assigned-elements-7ys-p9AB.js";import"./FormInternalsMixin-BuhlSliP.js";import"./listitem.component-DUC6yD03.js";import"./index-BUKMGCTl.js";import"./popover.component-D6Eqefys.js";import"./BackdropMixin-DzXuwf05.js";import"./dom-BlZvhF8F.js";import"./index-BcO7BA_0.js";import"./index-CyshhQF0.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-B95rVmGy.js";import"./DataAriaLabelMixin-Bdk731Yz.js";import"./ListNavigationMixin-BiY5qK4v.js";import"./formfieldwrapper.component-4yFeXsB_.js";import"./formfieldwrapper.constants-D9evYn07.js";import"./menuitemradio.constants-DjgMF16A.js";import"./menupopover.constants-5TZPKIyw.js";import"./badge.constants-B0GfG8W4.js";import"./menuitem.component-ydPKDn8J.js";import"./menuitemcheckbox.constants-BnmUXwdt.js";import"./dialog.component-CFxLNSyE.js";import"./FooterMixin-Db_MoKNE.js";import"./link.constants-Tv0Ple2n.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,m=(e,n)=>o`
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
    ?disable-flip=${e["disable-flip"]}
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
    ?keep-connected-tooltip-open="${e["keep-connected-tooltip-open"]}"
    backdrop-append-to="${u(e["backdrop-append-to"])}"
    ?is-backdrop-invisible="${e["is-backdrop-invisible"]}"
    boundary="${u(e.boundary)}"
    boundary-padding="${u(e["boundary-padding"])}"
    boundary-root="${u(e["boundary-root"])}"
    strategy="${u(e.strategy)}"
    @shown="${g("onshown")}"
    @hidden="${g("onhidden")}"
    @created="${g("oncreated")}"
    @destroyed="${g("ondestroyed")}"
  >
    ${n}
  </mdc-popover>
`,l=(e,n)=>o`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${e}">${n}</mdc-button>
  </div>
`,De=e=>o`
  ${l(e.triggerID,"Click me!")}
  ${m(e,o`<mdc-text tagname=${r.SPAN}>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,fe=e=>o`
  ${l("popover-trigger-interactive","Click me!")}
  ${m(e,o`
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
`,Ae=e=>o`
  ${l("popover-trigger-interactive-hover","Hover me!")}
  ${m(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,Le=e=>o`
  ${l("popover-trigger-hide-on-blur","Click me!")}
  ${m(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,Se=e=>o`
  ${l("popover-trigger-multiple","Click/ Hover me!")}
  ${m(e,o`<mdc-text tagname=${r.SPAN} style="width: 13rem;">Interactive content on click</mdc-text>`)}
  <mdc-tooltip id="popover2" triggerID="popover-trigger-multiple" show-arrow hide-on-escape>
    <mdc-text tagname=${r.SPAN}>Description tooltip on mouseenter</mdc-text>
  </mdc-tooltip>
`,we=e=>o`
  ${l("popover-trigger-nested","Click me!")}
  ${m(e,o`<mdc-text tagname=${r.SPAN}>Popover Level 1</mdc-text>
      <mdc-button id="popover-trigger-2">Click me!</mdc-button>`)}
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
    <mdc-text tagname=${r.SPAN}>Popover Level 2</mdc-text>
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
    <mdc-text tagname=${r.SPAN}>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`,Oe=e=>o`
  ${l("popover-trigger-backdrop","Click me!")}
  ${m(e,o`
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
    <mdc-text tagname=${r.SPAN}>Popover 2</mdc-text>
  </mdc-popover>
`,kt={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:De,argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(p)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(Te)},"disable-flip":{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"should-focus-trap-wrap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},"backdrop-append-to":{control:"text"},"is-backdrop-invisible":{control:"boolean"},boundary:{control:"text"},"boundary-padding":{control:"number"},"boundary-root":{control:"select",options:Object.values(Ie)},strategy:{control:"select",options:Object.values(ke)},...Ee(["aria-label","arrowElement","hide","show","togglePopoverVisible","triggerElement","utils"])}},a={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:p.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"show-arrow":!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!0,interactive:t.INTERACTIVE}},v={render:fe,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:p.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,"disable-flip":t.DISABLE_FLIP,size:!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!1}},b={render:Ae,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:p.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,"focus-back-to-trigger":!0,role:t.ROLE,color:t.COLOR}},h={render:Se,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:p.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"focus-trap":!0,interactive:!0,"focus-back-to-trigger":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,"show-arrow":!0,"close-button":!0,role:t.ROLE,color:t.COLOR,"keep-connected-tooltip-open":!1}},E={render:we,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:p.TOP,offset:t.OFFSET,"z-index":10,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:t.ROLE,color:t.COLOR,"focus-back-to-trigger":!0,"hide-on-outside-click":!0}},x={render:Le,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:p.RIGHT,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:t.ROLE,color:t.COLOR}},T={render:Oe,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:p.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,"hide-on-outside-click":!0,"focus-trap":!0,role:t.ROLE,color:t.COLOR},parameters:{docs:{description:{story:o`This example shows how to use the \`backdrop\` property to create a modal popover.<br />
          The backdrop will cover the rest of the page and prevent interaction with other elements while the popover is
          open. Clicking outside the popover or pressing the escape key will close the popover.<br />
          Note that the popover attached to "Click Me!" button has the backdrop enabled, while the other popover does
          not have the backdrop enabled and can be interacted with while the modal popover is open.`}}}},I={render:()=>o`
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
  `,...xe()},k={render:()=>o`
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
          <mdc-text tagname=${r.SPAN}>Popover Level 1 Trigger 1</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-2">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-2" hide-on-outside-click>
          <mdc-text tagname=${r.SPAN}>Popover Level 1 Trigger 2</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-3">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-3" hide-on-outside-click>
          <mdc-text tagname=${r.SPAN}>Popover Level 1 Trigger 3</mdc-text>
        </mdc-popover>
      </div>
    </div>
  `},D={render:()=>{const e=c=>{var d;const s=c.target;(d=s.querySelector(".hover-menu"))==null||d.appendChild(document.getElementById(s.dataset.tpl).content.cloneNode(!0))},n=c=>{const s=c.target.querySelector(".hover-menu");s.innerHTML=""};return o`
      <style>
        .container {
          width: 25rem;
          height: 10rem;
          margin-block-end: 2rem;
          padding-inline: 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--mds-color-theme-outline-button-normal);
          background: var(--mdc-chip-background-color);
          overflow: hidden;
          position: relative;
        }
        .hover-menu {
          display: flex;
        }
        .hover-menu > * {
          flex: 1 1 50%;
        }
      </style>
      <template id="menu-without-append-to-tpl">
        <mdc-button id="popover-trigger-1">Open popover in the #root</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click>
          <mdc-icon name="placeholder-bold" size="5"></mdc-icon>
        </mdc-popover>
      </template>

      <template id="menu-with-append-to-tpl">
        <mdc-button id="popover-trigger-1">Open popover in the #root</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click append-to="root">
          <mdc-icon name="placeholder-bold" size="5"></mdc-icon>
        </mdc-popover>
      </template>

      <div class="root" id="root">
        <mdc-text> To breakout stacking context is necessary to use append to. </mdc-text>
        <mdc-text> Trigger and popover dynamically added to the DOM </mdc-text>

        <mdc-divider style="margin-block: 1rem"></mdc-divider>

        <div class="container" @mouseenter=${e} @mouseleave=${n} data-tpl="menu-without-append-to-tpl">
          <mdc-text>Append-to not used, popover clipped</mdc-text>
          <mdc-text style="color: var(--mds-color-theme-text-primary-disabled);"
            >Hover on to show the popover trigger</mdc-text
          >
          <div class="hover-menu"></div>
        </div>

        <div
          class="container"
          id="container"
          @mouseenter=${e}
          @mouseleave=${n}
          data-tpl="menu-with-append-to-tpl"
        >
          <mdc-text>Popover rendered correctly with append to</mdc-text>
          <mdc-text style="color: var(--mds-color-theme-text-primary-disabled);"
            >Hover on to show the popover trigger</mdc-text
          >
          <div class="hover-menu"></div>
        </div>
      </div>
    `}},f={args:{...a.args,placement:p.RIGHT_START,triggerID:"trigger-btn"},render:()=>o`
    ${l("popover-trigger-interactive","Click me!")}
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
  `},A={args:{...a.args,id:"popover",placement:p.RIGHT_START,triggerID:"trigger-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,"keep-connected-tooltip-open":!0},render:e=>o`
    ${l(e.triggerID,"Click me!")}
    ${m(e,o`
        <mdc-button
          @click=${()=>{document.getElementById("popover").hide();const c=document.getElementById("popover-dialog");c.visible=!0}}
        >
          Open dialog
        </mdc-button>
      `)}
    <mdc-tooltip id="tooltip" triggerID="${e.triggerID}" placement="top"> Tooltip text </mdc-tooltip>
    <mdc-dialog
      id="popover-dialog"
      header-text="Dialog Title"
      @close=${()=>{const n=document.getElementById("popover-dialog");n.visible=!1}}
    >
      <mdc-text tagname=${r.SPAN} slot="dialog-body">Dialog content goes here.</mdc-text>
      <mdc-button
        slot="footer"
        @click=${()=>{const n=document.getElementById("popover-dialog");n.visible=!1}}
        >Close</mdc-button
      >
    </mdc-dialog>
  `},L={args:{...a.args,id:"popover-scroll-overflow",triggerID:"trigger-scroll-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,size:!0},render:e=>o`
    <mdc-list style="height: 200px; width: 100%; overflow-y: auto;">
      <mdc-listitem label="Item 1"></mdc-listitem>
      <mdc-listitem label="Item 2"></mdc-listitem>
      <mdc-listitem label="Item 3">
        <div style="height: fit-content" slot="content">
          <mdc-button id="${e.triggerID}">Trigger</mdc-button>
          ${m(e,o`
              <div style="height: 300px; overflow-y: auto;">
                <mdc-text tagname=${r.SPAN}
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.</mdc-text
                >
                <mdc-text tagname=${r.SPAN}>More content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>Even more content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=${r.SPAN}>And some more content...</mdc-text>
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
  `},S={args:{...a.args,id:"popover-scroll-overflow",triggerID:"trigger-scroll-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,size:!0},render:()=>{let e=1;const n=()=>{e+=1;const d=document.querySelector("#item-2"),w=d.parentElement;d.remove(),w.append(d);let i=document.querySelector("#item-3");const O=i.parentElement;i.remove(),i=document.createElement("mdc-button"),i.setAttribute("id","item-3"),i.setAttribute("prefix-icon","placeholder-bold"),i.innerHTML=`Open v${e}`,O.append(i)};let c=1;return o`
      <div>
        <template id="popover-tpl">
          <mdc-popover focus-back-to-trigger hide-on-escape hide-on-outside-click backdrop show-arrow triggerID="item-3"
            ><div></div
          ></mdc-popover>
        </template>
        <mdc-text>
          Frameworks might detach and re-attach elements when list content change. <br />
          If it happens with the trigger but not the popover then it breaks the connection.
        </mdc-text>

        <mdc-text> "Open" popover buttons works before and after "Update" button pressed. </mdc-text>

        <mdc-buttongroup>
          <mdc-button @click="${n}">Update Open buttons</mdc-button>
          <mdc-button @click="${()=>{c+=1;const d=document.querySelector('[triggerID="item-2"]'),w=d.parentElement;d.remove(),w.append(d);let i=document.querySelector('[triggerID="item-3"]');const O=i.parentElement;i.remove(),i=document.getElementById("popover-tpl").content.cloneNode(!0),i.querySelector("div").innerHTML=`Item 3 v${c}`,O.append(i)}}">Update Popovers</mdc-button>
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
                >Item 1 v${c}</mdc-popover
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
                >Item 2 v${c}</mdc-popover
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
                >Item 3 v${c}</mdc-popover
              >
            </div>
          </mdc-listitem>
        </mdc-list>
      </div>
    `}};var $,P,y;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    'show-arrow': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': true,
    interactive: DEFAULTS.INTERACTIVE
  }
}`,...(y=(P=a.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var F,_,B;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    size: true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': false
  }
}`,...(B=(_=v.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var N,C,R;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: renderInteractiveHover,
  args: {
    id: 'popover-interactive-hover',
    triggerID: 'popover-trigger-interactive-hover',
    trigger: 'mouseenter',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    'focus-back-to-trigger': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(R=(C=b.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var U,M,V;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: renderMultiple,
  args: {
    id: 'popover-multiple',
    triggerID: 'popover-trigger-multiple',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    'focus-trap': true,
    interactive: true,
    'focus-back-to-trigger': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    'show-arrow': true,
    'close-button': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'keep-connected-tooltip-open': false
  }
}`,...(V=(M=h.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var z,H,X;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: renderNested,
  args: {
    id: 'popover-nested',
    triggerID: 'popover-trigger-nested',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': 10,
    delay: DEFAULTS.DELAY,
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'focus-back-to-trigger': true,
    'hide-on-outside-click': true
  }
}`,...(X=(H=E.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var G,Y,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: renderHideOnBlur,
  args: {
    id: 'popover-hide-on-blur',
    triggerID: 'popover-trigger-hide-on-blur',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.RIGHT,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    interactive: true,
    'show-arrow': true,
    'hide-on-blur': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var Z,j,W;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: renderBackdrop,
  args: {
    id: 'popover-backdrop',
    triggerID: 'popover-trigger-backdrop',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'disable-flip': DEFAULTS.DISABLE_FLIP,
    interactive: true,
    'show-arrow': true,
    backdrop: true,
    'hide-on-outside-click': true,
    'focus-trap': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  },
  parameters: {
    docs: {
      description: {
        story: html\`This example shows how to use the \\\`backdrop\\\` property to create a modal popover.<br />
          The backdrop will cover the rest of the page and prevent interaction with other elements while the popover is
          open. Clicking outside the popover or pressing the escape key will close the popover.<br />
          Note that the popover attached to "Click Me!" button has the backdrop enabled, while the other popover does
          not have the backdrop enabled and can be interacted with while the modal popover is open.\`
      }
    }
  }
}`,...(W=(j=T.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var K,J,Q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,oe;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
          <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>Popover Level 1 Trigger 1</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-2">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-2" hide-on-outside-click>
          <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>Popover Level 1 Trigger 2</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-3">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-3" hide-on-outside-click>
          <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>Popover Level 1 Trigger 3</mdc-text>
        </mdc-popover>
      </div>
    </div>
  \`
}`,...(oe=(te=k.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,ie;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const hover = (event: Event) => {
      const target = event.target as HTMLElement;
      target.querySelector('.hover-menu')?.appendChild((document.getElementById(target.dataset.tpl!)! as HTMLTemplateElement).content.cloneNode(true) as HTMLElement);
    };
    const leave = (event: Event) => {
      const menu = (event.target as HTMLElement).querySelector('.hover-menu');
      menu!.innerHTML = '';
    };
    return html\`
      <style>
        .container {
          width: 25rem;
          height: 10rem;
          margin-block-end: 2rem;
          padding-inline: 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--mds-color-theme-outline-button-normal);
          background: var(--mdc-chip-background-color);
          overflow: hidden;
          position: relative;
        }
        .hover-menu {
          display: flex;
        }
        .hover-menu > * {
          flex: 1 1 50%;
        }
      </style>
      <template id="menu-without-append-to-tpl">
        <mdc-button id="popover-trigger-1">Open popover in the #root</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click>
          <mdc-icon name="placeholder-bold" size="5"></mdc-icon>
        </mdc-popover>
      </template>

      <template id="menu-with-append-to-tpl">
        <mdc-button id="popover-trigger-1">Open popover in the #root</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click append-to="root">
          <mdc-icon name="placeholder-bold" size="5"></mdc-icon>
        </mdc-popover>
      </template>

      <div class="root" id="root">
        <mdc-text> To breakout stacking context is necessary to use append to. </mdc-text>
        <mdc-text> Trigger and popover dynamically added to the DOM </mdc-text>

        <mdc-divider style="margin-block: 1rem"></mdc-divider>

        <div class="container" @mouseenter=\${hover} @mouseleave=\${leave} data-tpl="menu-without-append-to-tpl">
          <mdc-text>Append-to not used, popover clipped</mdc-text>
          <mdc-text style="color: var(--mds-color-theme-text-primary-disabled);"
            >Hover on to show the popover trigger</mdc-text
          >
          <div class="hover-menu"></div>
        </div>

        <div
          class="container"
          id="container"
          @mouseenter=\${hover}
          @mouseleave=\${leave}
          data-tpl="menu-with-append-to-tpl"
        >
          <mdc-text>Popover rendered correctly with append to</mdc-text>
          <mdc-text style="color: var(--mds-color-theme-text-primary-disabled);"
            >Hover on to show the popover trigger</mdc-text
          >
          <div class="hover-menu"></div>
        </div>
      </div>
    \`;
  }
}`,...(ie=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,de,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(de=f.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,le,ae;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
    'keep-connected-tooltip-open': true
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
      <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN} slot="dialog-body">Dialog content goes here.</mdc-text>
      <mdc-button
        slot="footer"
        @click=\${() => {
    const dialog = document.getElementById('popover-dialog') as Dialog;
    dialog.visible = false;
  }}
        >Close</mdc-button
      >
    </mdc-dialog>
  \`
}`,...(ae=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,ue,ge;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.</mdc-text
                >
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>More content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>Even more content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>And some more content...</mdc-text>
                <mdc-text tagname=\${VALID_TEXT_TAGS.SPAN}>And some more content...</mdc-text>
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
}`,...(ge=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ve,be,he;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
        <mdc-text>
          Frameworks might detach and re-attach elements when list content change. <br />
          If it happens with the trigger but not the popover then it breaks the connection.
        </mdc-text>

        <mdc-text> "Open" popover buttons works before and after "Update" button pressed. </mdc-text>

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
}`,...(he=(be=S.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const Dt=["Example","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop","popoverWithSelect","MultipleSingleLevelPopovers","AppendTo","NestedMenu","PopoverWithTooltipAndDialog","PopoverScrollOverflow","PopoverInChangingList"];export{D as AppendTo,a as Example,k as MultipleSingleLevelPopovers,f as NestedMenu,S as PopoverInChangingList,L as PopoverScrollOverflow,A as PopoverWithTooltipAndDialog,Dt as __namedExportsOrder,kt as default,x as hideOnBlur,v as interactiveContent,b as interactiveHover,h as interactiveMultiple,E as nestedPopover,T as popoverWithBackdrop,I as popoverWithSelect};
