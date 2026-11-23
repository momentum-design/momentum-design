import{J as a,Z as we,_ as ye,K as Ae,U as t,k as o,g as r,t as v}from"./iframe-ByEIys5m.js";import{h as Le,a as De,d as P}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,p=(e,i)=>o`
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
    element-index-to-receive-focus="${e["element-index-to-receive-focus"]}"
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
    backdrop-append-to="${v(e["backdrop-append-to"])}"
    ?is-backdrop-invisible="${e["is-backdrop-invisible"]}"
    boundary="${v(e.boundary)}"
    boundary-padding="${v(e["boundary-padding"])}"
    boundary-root="${v(e["boundary-root"])}"
    strategy="${v(e.strategy)}"
    @shown="${b("onshown")}"
    @hidden="${b("onhidden")}"
    @created="${b("oncreated")}"
    @destroyed="${b("ondestroyed")}"
  >
    ${i}
  </mdc-popover>
`,m=(e,i)=>o`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${e}">${i}</mdc-button>
  </div>
`,Se=e=>o`
  ${m(e.triggerID,"Click me!")}
  ${p(e,o`<mdc-text tagname=${r.SPAN}>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,Oe=e=>o`
  ${m("popover-trigger-interactive","Click me!")}
  ${p(e,o`
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
`,Pe=e=>o`
  ${m("popover-trigger-interactive-hover","Hover me!")}
  ${p(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,$e=e=>o`
  ${m("popover-trigger-hide-on-blur","Click me!")}
  ${p(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,Fe=e=>o`
  ${m("popover-trigger-multiple","Click/ Hover me!")}
  ${p(e,o`<mdc-text tagname=${r.SPAN} style="width: 13rem;">Interactive content on click</mdc-text>`)}
  <mdc-tooltip id="popover2" triggerID="popover-trigger-multiple" show-arrow hide-on-escape>
    <mdc-text tagname=${r.SPAN}>Description tooltip on mouseenter</mdc-text>
  </mdc-tooltip>
`,Be=e=>o`
  ${m("popover-trigger-nested","Click me!")}
  ${p(e,o`<mdc-text tagname=${r.SPAN}>Popover Level 1</mdc-text>
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
`,_e=e=>o`
  ${m("popover-trigger-backdrop","Click me!")}
  ${p(e,o`
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
`,Ue={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:Se,argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(a)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(we)},"disable-flip":{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"should-focus-trap-wrap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"element-index-to-receive-focus":{control:"number"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},"backdrop-append-to":{control:"text"},"is-backdrop-invisible":{control:"boolean"},boundary:{control:"text"},"boundary-padding":{control:"number"},"boundary-root":{control:"select",options:Object.values(ye)},strategy:{control:"select",options:Object.values(Ae)},...Le(["aria-label","arrowElement","hide","show","togglePopoverVisible","triggerElement","utils"])}},g={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:a.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"show-arrow":!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!0,interactive:t.INTERACTIVE}},h={render:Oe,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:a.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,"disable-flip":t.DISABLE_FLIP,size:!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!1,"element-index-to-receive-focus":5}},x={render:Pe,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:a.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,"focus-back-to-trigger":!0,role:t.ROLE,color:t.COLOR}},T={render:Fe,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:a.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"focus-trap":!0,interactive:!0,"focus-back-to-trigger":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,"show-arrow":!0,"close-button":!0,role:t.ROLE,color:t.COLOR,"keep-connected-tooltip-open":!1}},k={render:Be,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:a.TOP,offset:t.OFFSET,"z-index":10,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:t.ROLE,color:t.COLOR,"focus-back-to-trigger":!0,"hide-on-outside-click":!0}},f={render:$e,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:a.RIGHT,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:t.ROLE,color:t.COLOR}},E={render:_e,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:a.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"disable-flip":t.DISABLE_FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,"hide-on-outside-click":!0,"focus-trap":!0,role:t.ROLE,color:t.COLOR},parameters:{docs:{description:{story:o`This example shows how to use the \`backdrop\` property to create a modal popover.<br />
          The backdrop will cover the rest of the page and prevent interaction with other elements while the popover is
          open. Clicking outside the popover or pressing the escape key will close the popover.<br />
          Note that the popover attached to "Click Me!" button has the backdrop enabled, while the other popover does
          not have the backdrop enabled and can be interacted with while the modal popover is open.`}}}},D={render:()=>o`
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
  `,...De()},I={render:()=>o`
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
  `},w={parameters:{...P(o`
        <mdc-text> To breakout stacking context is necessary to use append to. </mdc-text>
        <mdc-text> Trigger and popover dynamically added to the DOM </mdc-text>
      `,!0)},render:()=>{const e=c=>{var l;const s=c.target;(l=s.querySelector(".hover-menu"))==null||l.appendChild(document.getElementById(s.dataset.tpl).content.cloneNode(!0))},i=c=>{const s=c.target.querySelector(".hover-menu");s.innerHTML=""};return o`
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
        <mdc-divider style="margin-block: 1rem"></mdc-divider>

        <div class="container" @mouseenter=${e} @mouseleave=${i} data-tpl="menu-without-append-to-tpl">
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
          @mouseleave=${i}
          data-tpl="menu-with-append-to-tpl"
        >
          <mdc-text>Popover rendered correctly with append to</mdc-text>
          <mdc-text style="color: var(--mds-color-theme-text-primary-disabled);"
            >Hover on to show the popover trigger</mdc-text
          >
          <div class="hover-menu"></div>
        </div>
      </div>
    `}},y={args:{...g.args,placement:a.RIGHT_START,triggerID:"trigger-btn"},render:()=>o`
    ${m("popover-trigger-interactive","Click me!")}
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
  `},A={args:{...g.args,id:"popover",placement:a.RIGHT_START,triggerID:"trigger-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,"keep-connected-tooltip-open":!0},render:e=>o`
    ${m(e.triggerID,"Click me!")}
    ${p(e,o`
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
      @close=${()=>{const i=document.getElementById("popover-dialog");i.visible=!1}}
    >
      <mdc-text tagname=${r.SPAN} slot="dialog-body">Dialog content goes here.</mdc-text>
      <mdc-button
        slot="footer"
        @click=${()=>{const i=document.getElementById("popover-dialog");i.visible=!1}}
        >Close</mdc-button
      >
    </mdc-dialog>
  `},L={parameters:{glassContainer:!1,...De(!0),...P(o`
        <p>The first two examples use separate stack groups. Use <b>Reset examples</b> between attempts.</p>
        <ol>
          <li>
            <b>Popover + Dialog:</b> The Dialog opens after 200 ms, partly behind the Popover. Press Escape from the
            Popover's trigger or button, or click its backdrop, to close the Popover. Use <b>Close Dialog</b> afterward
            to restore scrolling.
          </li>
          <li>
            <b>Popover + Tooltip:</b> The Tooltip opens after 200 ms without moving focus. The Popover's Escape and
            backdrop dismissal still work.
          </li>
          <li>
            <b>Hovered Tooltip:</b> Open the Popover, then hover the Tooltip trigger without clicking. Keep focus on the
            Popover's trigger and press Escape: both close.
          </li>
        </ol>
      `,!0)},render:()=>{let e;const i=()=>window.clearTimeout(e),c=(d,n)=>{i();const u=d.currentTarget,Ie=document.getElementById(n);e=window.setTimeout(()=>{u.isConnected&&u.visible&&(Ie.visible=!0)},200)},s=()=>{const d=document.getElementById("later-dialog");d.visible=!1};return o`
      <style>
        .backgroundGradient:has(#later-overlay-examples) {
          height: auto;
          min-height: 100%;
        }
        #later-dialog::part(dialog-close-btn) {
          display: none;
        }
      </style>
      <div id="later-overlay-examples" style="display: grid; gap: 2rem;">
        <section aria-labelledby="later-dialog-heading">
          <mdc-text id="later-dialog-heading" tagname="h3">1. Popover + Dialog</mdc-text>
          <div style="position: relative; min-height: 12rem;">
            <mdc-button id="later-dialog-trigger">Open Popover</mdc-button>
            <mdc-popover
              id="later-dialog-options"
              triggerID="later-dialog-trigger"
              stack-group-name="dialog-example-popover"
              placement="bottom-start"
              interactive
              backdrop
              hide-on-escape
              hide-on-outside-click
              @shown=${d=>c(d,"later-dialog")}
              @hidden=${i}
            >
              <mdc-button id="later-dialog-action">Popover button</mdc-button>
            </mdc-popover>
            <mdc-dialog
              id="later-dialog"
              stack-group-name="dialog-example-dialog"
              hide-backdrop
              .focusTrap=${!1}
              z-index="1"
              header-text="Dialog"
              close-button-aria-label="Close Dialog"
              style="inset: auto; inset-block-start: 2rem; inset-inline-start: 2rem; transform: none; --mdc-dialog-width: 18rem;"
              @close=${s}
            >
              <div slot="dialog-body">Dialog content.</div>
              <mdc-button id="later-dialog-close" slot="footer-button-primary" @click=${s}>
                Close Dialog
              </mdc-button>
            </mdc-dialog>
          </div>
        </section>

        <section aria-labelledby="later-tooltip-heading">
          <mdc-text id="later-tooltip-heading" tagname="h3">2. Popover + Tooltip</mdc-text>
          <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 2rem; min-height: 12rem;">
            <mdc-button id="later-tooltip-options-trigger">Open Popover</mdc-button>
            <mdc-popover
              id="later-tooltip-options"
              triggerID="later-tooltip-options-trigger"
              stack-group-name="tooltip-example-popover"
              placement="bottom-start"
              interactive
              backdrop
              hide-on-escape
              hide-on-outside-click
              @shown=${d=>c(d,"later-tooltip")}
              @hidden=${i}
            >
              <mdc-button id="later-tooltip-action">Popover button</mdc-button>
            </mdc-popover>
            <mdc-button id="later-tooltip-trigger">Tooltip trigger</mdc-button>
            <mdc-tooltip
              id="later-tooltip"
              triggerID="later-tooltip-trigger"
              stack-group-name="tooltip-example-tooltip"
              placement="bottom"
            >
              Tooltip content.
            </mdc-tooltip>
          </div>
        </section>

        <section aria-labelledby="later-hover-heading">
          <mdc-text id="later-hover-heading" tagname="h3">3. Hovered Tooltip</mdc-text>
          <div style="min-height: 12rem;">
            <mdc-button id="later-hover-options-trigger">Open Popover</mdc-button>
            <mdc-popover
              id="later-hover-options"
              triggerID="later-hover-options-trigger"
              stack-group-name="hover-focus-example"
              placement="bottom-start"
              interactive
              backdrop
              hide-on-escape
              hide-on-outside-click
            >
              <mdc-button id="later-hover-trigger">Tooltip trigger</mdc-button>
              <mdc-button id="later-hover-action">Popover button</mdc-button>
              <mdc-tooltip
                id="later-hover-tooltip"
                triggerID="later-hover-trigger"
                stack-group-name="hover-focus-example"
                placement="top"
                delay="200,0"
              >
                Tooltip content.
              </mdc-tooltip>
            </mdc-popover>
          </div>
        </section>

        <mdc-button
          style="position: fixed; inset-block-end: 1rem; inset-inline-end: 1rem; z-index: 2147483647;"
          @click=${()=>{i(),document.getElementById("later-overlay-examples").querySelectorAll("mdc-popover, mdc-tooltip, mdc-dialog").forEach(d=>d.removeAttribute("visible"))}}
        >
          Reset examples
        </mdc-button>
      </div>
    `}},S={args:{...g.args,id:"popover-scroll-overflow",triggerID:"trigger-scroll-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,size:!0},render:e=>o`
    <mdc-list style="height: 200px; width: 100%; overflow-y: auto;">
      <mdc-listitem label="Item 1"></mdc-listitem>
      <mdc-listitem label="Item 2"></mdc-listitem>
      <mdc-listitem label="Item 3">
        <div style="height: fit-content" slot="content">
          <mdc-button id="${e.triggerID}">Trigger</mdc-button>
          ${p(e,o`
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
  `},O={args:{...g.args,id:"popover-scroll-overflow",triggerID:"trigger-scroll-btn",interactive:!0,"focus-trap":!0,"focus-back-to-trigger":!0,"show-arrow":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,size:!0},parameters:{...P(o` <mdc-text>
          Frameworks might detach and re-attach elements when list content change. <br />
          If it happens with the trigger but not the popover then it breaks the connection.
        </mdc-text>

        <mdc-text> "Open" popover buttons works before and after "Update" button pressed. </mdc-text>`,!0)},render:()=>{let e=1;const i=()=>{e+=1;const l=document.querySelector("#item-2"),d=l.parentElement;l.remove(),d.append(l);let n=document.querySelector("#item-3");const u=n.parentElement;n.remove(),n=document.createElement("mdc-button"),n.setAttribute("id","item-3"),n.setAttribute("prefix-icon","placeholder-bold"),n.innerHTML=`Open v${e}`,u.append(n)};let c=1;return o`
      <div>
        <template id="popover-tpl">
          <mdc-popover focus-back-to-trigger hide-on-escape hide-on-outside-click backdrop show-arrow triggerID="item-3"
            ><div></div
          ></mdc-popover>
        </template>

        <mdc-buttongroup>
          <mdc-button @click="${i}">Update Open buttons</mdc-button>
          <mdc-button @click="${()=>{c+=1;const l=document.querySelector('[triggerID="item-2"]'),d=l.parentElement;l.remove(),d.append(l);let n=document.querySelector('[triggerID="item-3"]');const u=n.parentElement;n.remove(),n=document.getElementById("popover-tpl").content.cloneNode(!0),n.querySelector("div").innerHTML=`Item 3 v${c}`,u.append(n)}}">Update Popovers</mdc-button>
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
    `}};var $,F,B;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(B=(F=g.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var _,N,C;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    'disable-aria-expanded': false,
    'element-index-to-receive-focus': 5
  }
}`,...(C=(N=h.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var R,U,M;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(U=x.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var V,z,H;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(z=T.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var X,G,q;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var Y,Z,W;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(W=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:W.source}}};var j,K,J;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(K=E.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,ee,te;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ie;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ne,ce,de;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    ...describeStory(html\`
        <mdc-text> To breakout stacking context is necessary to use append to. </mdc-text>
        <mdc-text> Trigger and popover dynamically added to the DOM </mdc-text>
      \`, true)
  },
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
}`,...(de=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,ae,pe;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:pe.source}}};var me,se,ge;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ge.source}}};var ue,ve,be;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    // Keep Reset viewport-fixed rather than contained by the Fluid theme's glass backdrop filter.
    glassContainer: false,
    ...hideAllControls(true),
    ...describeStory(html\`
        <p>The first two examples use separate stack groups. Use <b>Reset examples</b> between attempts.</p>
        <ol>
          <li>
            <b>Popover + Dialog:</b> The Dialog opens after 200 ms, partly behind the Popover. Press Escape from the
            Popover's trigger or button, or click its backdrop, to close the Popover. Use <b>Close Dialog</b> afterward
            to restore scrolling.
          </li>
          <li>
            <b>Popover + Tooltip:</b> The Tooltip opens after 200 ms without moving focus. The Popover's Escape and
            backdrop dismissal still work.
          </li>
          <li>
            <b>Hovered Tooltip:</b> Open the Popover, then hover the Tooltip trigger without clicking. Keep focus on the
            Popover's trigger and press Escape: both close.
          </li>
        </ol>
      \`, true)
  },
  render: () => {
    let openingTimer: number | undefined;
    const cancelOpening = () => window.clearTimeout(openingTimer);
    const openLater = (event: Event, id: string) => {
      cancelOpening();
      const popover = event.currentTarget as Popover;
      const overlay = document.getElementById(id) as Popover | Dialog;
      openingTimer = window.setTimeout(() => {
        if (popover.isConnected && popover.visible) {
          overlay.visible = true;
        }
      }, 200);
    };
    const closeDialog = () => {
      const dialog = document.getElementById('later-dialog') as Dialog;
      dialog.visible = false;
    };
    const resetExamples = () => {
      cancelOpening();
      document.getElementById('later-overlay-examples')!.querySelectorAll('mdc-popover, mdc-tooltip, mdc-dialog').forEach(overlay => overlay.removeAttribute('visible'));
    };
    return html\`
      <style>
        .backgroundGradient:has(#later-overlay-examples) {
          height: auto;
          min-height: 100%;
        }
        #later-dialog::part(dialog-close-btn) {
          display: none;
        }
      </style>
      <div id="later-overlay-examples" style="display: grid; gap: 2rem;">
        <section aria-labelledby="later-dialog-heading">
          <mdc-text id="later-dialog-heading" tagname="h3">1. Popover + Dialog</mdc-text>
          <div style="position: relative; min-height: 12rem;">
            <mdc-button id="later-dialog-trigger">Open Popover</mdc-button>
            <mdc-popover
              id="later-dialog-options"
              triggerID="later-dialog-trigger"
              stack-group-name="dialog-example-popover"
              placement="bottom-start"
              interactive
              backdrop
              hide-on-escape
              hide-on-outside-click
              @shown=\${(event: Event) => openLater(event, 'later-dialog')}
              @hidden=\${cancelOpening}
            >
              <mdc-button id="later-dialog-action">Popover button</mdc-button>
            </mdc-popover>
            <mdc-dialog
              id="later-dialog"
              stack-group-name="dialog-example-dialog"
              hide-backdrop
              .focusTrap=\${false}
              z-index="1"
              header-text="Dialog"
              close-button-aria-label="Close Dialog"
              style="inset: auto; inset-block-start: 2rem; inset-inline-start: 2rem; transform: none; --mdc-dialog-width: 18rem;"
              @close=\${closeDialog}
            >
              <div slot="dialog-body">Dialog content.</div>
              <mdc-button id="later-dialog-close" slot="footer-button-primary" @click=\${closeDialog}>
                Close Dialog
              </mdc-button>
            </mdc-dialog>
          </div>
        </section>

        <section aria-labelledby="later-tooltip-heading">
          <mdc-text id="later-tooltip-heading" tagname="h3">2. Popover + Tooltip</mdc-text>
          <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 2rem; min-height: 12rem;">
            <mdc-button id="later-tooltip-options-trigger">Open Popover</mdc-button>
            <mdc-popover
              id="later-tooltip-options"
              triggerID="later-tooltip-options-trigger"
              stack-group-name="tooltip-example-popover"
              placement="bottom-start"
              interactive
              backdrop
              hide-on-escape
              hide-on-outside-click
              @shown=\${(event: Event) => openLater(event, 'later-tooltip')}
              @hidden=\${cancelOpening}
            >
              <mdc-button id="later-tooltip-action">Popover button</mdc-button>
            </mdc-popover>
            <mdc-button id="later-tooltip-trigger">Tooltip trigger</mdc-button>
            <mdc-tooltip
              id="later-tooltip"
              triggerID="later-tooltip-trigger"
              stack-group-name="tooltip-example-tooltip"
              placement="bottom"
            >
              Tooltip content.
            </mdc-tooltip>
          </div>
        </section>

        <section aria-labelledby="later-hover-heading">
          <mdc-text id="later-hover-heading" tagname="h3">3. Hovered Tooltip</mdc-text>
          <div style="min-height: 12rem;">
            <mdc-button id="later-hover-options-trigger">Open Popover</mdc-button>
            <mdc-popover
              id="later-hover-options"
              triggerID="later-hover-options-trigger"
              stack-group-name="hover-focus-example"
              placement="bottom-start"
              interactive
              backdrop
              hide-on-escape
              hide-on-outside-click
            >
              <mdc-button id="later-hover-trigger">Tooltip trigger</mdc-button>
              <mdc-button id="later-hover-action">Popover button</mdc-button>
              <mdc-tooltip
                id="later-hover-tooltip"
                triggerID="later-hover-trigger"
                stack-group-name="hover-focus-example"
                placement="top"
                delay="200,0"
              >
                Tooltip content.
              </mdc-tooltip>
            </mdc-popover>
          </div>
        </section>

        <mdc-button
          style="position: fixed; inset-block-end: 1rem; inset-inline-end: 1rem; z-index: 2147483647;"
          @click=\${resetExamples}
        >
          Reset examples
        </mdc-button>
      </div>
    \`;
  }
}`,...(be=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var he,xe,Te;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var ke,fe,Ee;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
  parameters: {
    ...describeStory(html\` <mdc-text>
          Frameworks might detach and re-attach elements when list content change. <br />
          If it happens with the trigger but not the popover then it breaks the connection.
        </mdc-text>

        <mdc-text> "Open" popover buttons works before and after "Update" button pressed. </mdc-text>\`, true)
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
}`,...(Ee=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};const Me=["Example","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop","popoverWithSelect","MultipleSingleLevelPopovers","AppendTo","NestedMenu","PopoverWithTooltipAndDialog","DismissalWithLaterOverlays","PopoverScrollOverflow","PopoverInChangingList"];export{w as AppendTo,L as DismissalWithLaterOverlays,g as Example,I as MultipleSingleLevelPopovers,y as NestedMenu,O as PopoverInChangingList,S as PopoverScrollOverflow,A as PopoverWithTooltipAndDialog,Me as __namedExportsOrder,Ue as default,f as hideOnBlur,h as interactiveContent,x as interactiveHover,T as interactiveMultiple,k as nestedPopover,E as popoverWithBackdrop,D as popoverWithSelect};
