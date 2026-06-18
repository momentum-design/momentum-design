import{al as q,a4 as U,u as H,k as s,R as $,t as j,C as y,n as K,v as N,U as W,z as G}from"./iframe-CYZ064vw.js";import{c as Z,b as m,a as Y,T as I}from"./index-CUm9Kpvk.js";import{B as J}from"./button.component-DTdegw5n.js";import{K as Q,a as X}from"./KeyDownHandledMixin-DGzJ0rYO.js";import{L as tt}from"./ListNavigationMixin-CFRyGBG9.js";import{C as at,E as et}from"./CaptureDestroyEventForChildElement-Dg8hazqV.js";import{T as nt,g as E,a as T,b as it}from"./TabListComponentMixin-D08NyKUG.js";import"./index-DM419G9w.js";import{h as ot,d as B}from"./utils-B5QUENNQ.js";import"./index-CbK4qKYb.js";import"./index-DDpx0sV2.js";import"./index-BzXIsb3j.js";import"./preload-helper-C1FmrZbK.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./IconNameMixin-DeWqQ5kO.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./index-C-a6jsM_.js";import"./index-Cm4DuzN6.js";import"./index-DTrDRi1E.js";import"./badge.constants-BGT540PQ.js";import"./dialog.component-DGnZrsWM.js";import"./BackdropMixin-DDg7Q_Id.js";import"./FooterMixin-Wb1Q8IMF.js";import"./query-assigned-elements-D2XoKueq.js";import"./link.constants-fYMsMwCW.js";import"./popover.component-BIUkn_Yc.js";import"./popover.constants-gNuL8rzb.js";const st=[q,U`
    :host {
      --mdc-tablist-focus-ring-outer-width: var(--mdc-focus-ring-outer-width);
      --mdc-tablist-gap: 0.5rem;
      --mdc-tablist-width: 100%;
      --mdc-tablist-arrow-button-margin: 0.75rem;

      width: var(--mdc-tablist-width);
      display: flex;
      align-items: center;
    }

    :host ::slotted(mdc-tab) {
      width: initial;
    }

    :host::part(container) {
      display: flex;
      overflow-x: hidden;
      gap: var(--mdc-tablist-gap);
      padding: var(--mdc-tablist-focus-ring-outer-width);
    }

    :host mdc-button[prefix-icon='arrow-left-regular'] {
      margin-right: var(--mdc-tablist-arrow-button-margin);
    }

    :host mdc-button[prefix-icon='arrow-right-regular'] {
      margin-left: var(--mdc-tablist-arrow-button-margin);
    }
  `],dt=[...st],lt=H.constructTagName("tablist"),p={FORWARD:"forward",BACKWARD:"backward"};var rt=Object.defineProperty,u=(e,t,n,i)=>{for(var a=void 0,o=e.length-1,d;o>=0;o--)(d=e[o])&&(a=d(t,n,a)||a);return a&&rt(t,n,a),a};const w=class w extends tt(at(Q(X(nt(y))))){constructor(){super(),this.orientation="horizontal",this.showForwardArrowButton=!1,this.showBackwardArrowButton=!1,this.itemsStore=new et(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onElementStoreUpdate.bind(this)})}get navItems(){return this.itemsStore.items}isRtl(){var t;return((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"||window.getComputedStyle(this).direction==="rtl"}isValidItem(t){return t.matches(`${Z}:not([disabled])`)}onElementStoreUpdate(t,n,i){if(n==="added")t.tabIndex=-1,this.navItems.length===0&&(t.tabIndex=0);else if(n==="removed"&&t.tabIndex===0){let a=i+1;a>=this.navItems.length&&(a=i-1);const o=this.navItems.at(a);o instanceof m&&o.focus(),this.resetTabIndexes(a,!1)}}resetTabIndexAndSetFocus(t,n){var o;const i=super.resetTabIndexAndSetFocus(t,n,!1,!1),a=(o=this.navItems)==null?void 0:o.at(t);return a instanceof m&&a.focus(),this.handleArrowButtonVisibility(),i}async firstUpdated(){var i,a;if(!this.navItems)return;if(Array.isArray(this.navItems)&&this.navItems.length===0){this.onerror&&this.onerror("The tablist component must have at least one child tab");return}const t=this.navItems.map(o=>o.tabId);new Set(t).size!==this.navItems.length&&this.onerror&&this.onerror("The tabs inside the tab list must have unique tab ids"),new ResizeObserver(async()=>{this.handleArrowButtonVisibility()}).observe(this),this.activeTabId||(this.activeTabId=(i=E(this.navItems))==null?void 0:i.tabId),(a=this.tabsContainer)==null||a.addEventListener("focusin",this.handleFocus.bind(this))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.tabsContainer)==null||t.removeEventListener("focusin",this.handleFocus)}focus(t){const n=T(this.navItems);n?n.focus(t):super.focus(t)}async handleFocus(t){if(t.relatedTarget instanceof m||!(t.target instanceof m))return;const n=T(this.navItems||[]);if(!(n instanceof m))return;const i=this.navItems.findIndex(a=>a===n);this.resetTabIndexAndSetFocus(i,void 0)}shouldShowArrowButton(t){return t===p.FORWARD?this.showForwardArrowButton:this.showBackwardArrowButton}switchFocus(){var t,n;!this.showBackwardArrowButton&&!this.showForwardArrowButton?(t=T(this.navItems||[]))==null||t.focus():(this.showBackwardArrowButton&&!this.showForwardArrowButton||this.showForwardArrowButton&&!this.showBackwardArrowButton)&&((n=this.notFocusedArrowButton)==null||n.focus())}handleArrowButtonVisibility(){var b,x,C;if(!this.navItems||!this.tabsContainer)return;let t=!1;((b=this.shadowRoot)==null?void 0:b.activeElement)instanceof J&&(t=!0);const n=E(this.navItems),i=it(this.navItems);if(!n||!i)return;const a=n.getBoundingClientRect().left,o=(x=this.tabsContainer)==null?void 0:x.getBoundingClientRect().left,d=i.getBoundingClientRect().right,r=(C=this.tabsContainer)==null?void 0:C.getBoundingClientRect().right,c=n.getBoundingClientRect().right,A=i.getBoundingClientRect().left;if(!this.isRtl()){a<=o?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,d>r?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus();return}c>r?this.showBackwardArrowButton=!0:this.showBackwardArrowButton=!1,A<o?this.showForwardArrowButton=!0:this.showForwardArrowButton=!1,t&&this.switchFocus()}async scrollTabs(t){var a;const n=this.isRtl()?-1:1,i=this.isRtl()?1:-1;(a=this.tabsContainer)==null||a.scrollBy({left:this.tabsContainer.clientWidth*(t===p.FORWARD?n:i),behavior:"instant"}),this.handleArrowButtonVisibility()}render(){const t=this.isRtl()?"left":"right",n=this.isRtl()?"right":"left",i=a=>s` ${this.shouldShowArrowButton(a)?s`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${a===p.FORWARD?t:n}-regular"
            aria-label="Scroll tabs ${a===p.FORWARD?t:n}"
            @click="${()=>this.scrollTabs(a)}"
          ></mdc-button>`:G}`;return s` ${i("backward")}
      <div part="container" role="${$.TABLIST}" tabindex="-1" aria-label="${j(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${i(p.FORWARD)}`}};w.styles=[...y.styles,...dt],w.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};let l=w;u([K({type:String,attribute:"data-aria-label"})],l.prototype,"dataAriaLabel");u([N('[part="container"]')],l.prototype,"tabsContainer");u([N("mdc-button:not(:focus-visible)")],l.prototype,"notFocusedArrowButton");u([W()],l.prototype,"showForwardArrowButton");u([W()],l.prototype,"showBackwardArrowButton");l.register(lt);const{action:ct}=__STORYBOOK_MODULE_ACTIONS__,bt=e=>s` <mdc-tablist
      @change="${ct("onchange")}"
      active-tab-id="${e["active-tab-id"]}"
      data-aria-label=${e["data-aria-label"]}
    >
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Calls"
        icon-name="audio-call-bold"
        tab-id="calls-tab"
        aria-controls="calls-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Videos"
        icon-name="video-bold"
        tab-id="videos-tab"
        aria-controls="videos-panel"
      >
        <mdc-badge slot="postfix" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Music"
        icon-name="file-music-bold"
        tab-id="music-tab"
        aria-controls="music-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Documents"
        icon-name="document-bold"
        tab-id="documents-tab"
        aria-controls="documents-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${e.tabsize}
        variant=${e.tabvariant}
        text="Meetings"
        icon-name="calendar-month-bold"
        tab-id="meetings-tab"
        aria-controls="meetings-panel"
      >
      </mdc-tab>
    </mdc-tablist>

    <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
    <div id="calls-panel" role="tabpanel" hidden>
      <p>Calls panel</p>
    </div>
    <div id="videos-panel" role="tabpanel" hidden>
      <p>Videos panel</p>
    </div>
    <div id="music-panel" role="tabpanel" hidden>
      <p>Music panel</p>
    </div>
    <div id="documents-panel" role="tabpanel" hidden>
      <p>Documents panel</p>
    </div>
    <div id="meetings-panel" role="tabpanel" hidden>
      <p>Meetings panel</p>
    </div>
    <!-- End of example markup for the tab panels -->`,Nt={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:bt,argTypes:{"active-tab-id":{control:"select",description:"ID of the active tab. Defaults to the first tab if not provided.",options:["calls-tab","videos-tab","music-tab","documents-tab","meetings-tab"]},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(Y)},tabsize:{control:"select",description:"Set the size of tabs inside the tablist",options:Object.values(I)},...ot(["itemsStore"])}},h={args:{"active-tab-id":"documents-tab","data-aria-label":"Media types",tabsize:I[32],tabvariant:"line"}},v={parameters:{...B(s` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side`,!0)},render:e=>s` <mdc-tablist
        @change="${n=>{const i=document.querySelector(`mdc-tab[tab-id="${n.detail.tabId}"]`),a=i==null?void 0:i.getAttribute("aria-controls");document.querySelectorAll('[role="tabpanel"]').forEach(d=>{const r=d;r.hidden=r.id!==a})}}"
        active-tab-id="${e["active-tab-id"]}"
        data-aria-label=${e["data-aria-label"]}
      >
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${e.tabsize}
          variant=${e.tabvariant}
          text="Meetings"
          icon-name="calendar-month-bold"
          tab-id="meetings-tab"
          aria-controls="meetings-panel"
        >
        </mdc-tab>
      </mdc-tablist>

      <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
      <div id="calls-panel" role="tabpanel" hidden>
        <p>Calls panel</p>
      </div>
      <div id="videos-panel" role="tabpanel" hidden>
        <p>Videos panel</p>
      </div>
      <div id="music-panel" role="tabpanel" hidden>
        <p>Music panel</p>
      </div>
      <div id="documents-panel" role="tabpanel">
        <p>Documents panel</p>
      </div>
      <div id="meetings-panel" role="tabpanel" hidden>
        <p>Meetings panel</p>
      </div>
      <!-- End of example markup for the tab panels -->`,args:{tabvariant:"glass",tabsize:I[32],"active-tab-id":"documents-tab","data-aria-label":"Media types"}},g={render:()=>s`
    <div role="${$.MAIN}">
      <mdc-tablist active-tab-id="tab-2" data-aria-label="Tablist with a lot of tabs">
        ${new Array(100).fill(void 0).map((e,t)=>s`<mdc-tab text="Tab #${t+1}" tab-id="tab-${t+1}"></mdc-tab>`)}
      </mdc-tablist>
    </div>
  `,...B(s`<p role="${$.REGION}">
      When the tabs overflow the available space, arrow buttons appear at the left and right ends of the tablist. These
      buttons allow users to scroll through the tabs horizontally. The arrow buttons are automatically shown or hidden
      based on the scroll position.
    </p>`)},f={parameters:{...B(s`<p>
        A <code>mdc-tablist</code> inside an <code>mdc-dialog</code> with <code>focus-trap</code> enabled. Use
        <kbd>Tab</kbd> to navigate between the tabs and interactive elements inside the dialog.
      </p>`,!0)},render:()=>{const e="tablist-dialog",t=()=>{const a=document.getElementById(e);a==null||a.toggleAttribute("visible")},n=()=>{const a=document.getElementById(e);a==null||a.removeAttribute("visible")};return s`
      <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
        <mdc-button @click="${t}" id="tablist-dialog-trigger">Open Dialog</mdc-button>
      </div>

      <mdc-dialog
        id="${e}"
        header-text="Tabbed Dialog"
        close-button-aria-label="Close dialog"
        triggerId="tablist-dialog-trigger"
        focus-trap
        @close="${n}"
      >
        <div slot="dialog-body">
          <mdc-tablist @change="${a=>{const o=document.getElementById(e),d=o==null?void 0:o.querySelector(`mdc-tab[tab-id="${a.detail.tabId}"]`),r=d==null?void 0:d.getAttribute("aria-controls"),c=o==null?void 0:o.querySelectorAll('[role="tabpanel"]');c==null||c.forEach(A=>{const b=A;b.hidden=b.id!==r})}}" active-tab-id="calls-tab" data-aria-label="Media types">
            <mdc-tab text="Calls" icon-name="audio-call-bold" tab-id="calls-tab" aria-controls="dialog-calls-panel">
            </mdc-tab>
            <mdc-tab text="Videos" icon-name="video-bold" tab-id="videos-tab" aria-controls="dialog-videos-panel">
            </mdc-tab>
            <mdc-tab
              text="Documents"
              icon-name="document-bold"
              tab-id="documents-tab"
              aria-controls="dialog-documents-panel"
            >
            </mdc-tab>
          </mdc-tablist>

          <div id="dialog-calls-panel" role="tabpanel">
            <p>Calls panel content.</p>
            <mdc-button>Action in Calls</mdc-button>
          </div>
          <div id="dialog-videos-panel" role="tabpanel" hidden>
            <p>Videos panel content.</p>
            <mdc-button>Action in Videos</mdc-button>
          </div>
          <div id="dialog-documents-panel" role="tabpanel" hidden>
            <p>Documents panel content.</p>
            <mdc-button>Action in Documents</mdc-button>
          </div>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${n}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${n}">Confirm</mdc-button>
      </mdc-dialog>
    `}};var S,z,R;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
    tabsize: TAB_SIZES[32],
    tabvariant: 'line'
  }
}`,...(R=(z=h.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var k,D,M;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    ...describeStory(html\` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side\`, true)
  },
  render: args => {
    const updateTabPanel = (event: CustomEvent) => {
      const activeTab = document.querySelector(\`mdc-tab[tab-id="\${event.detail.tabId}"]\`);
      const panelId = activeTab?.getAttribute('aria-controls');
      const panels = document.querySelectorAll('[role="tabpanel"]');
      panels.forEach(panelElement => {
        const el = panelElement as HTMLElement;
        el.hidden = el.id !== panelId;
      });
    };
    return html\` <mdc-tablist
        @change="\${updateTabPanel}"
        active-tab-id="\${args['active-tab-id']}"
        data-aria-label=\${args['data-aria-label']}
      >
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=\${args.tabsize}
          variant=\${args.tabvariant}
          text="Meetings"
          icon-name="calendar-month-bold"
          tab-id="meetings-tab"
          aria-controls="meetings-panel"
        >
        </mdc-tab>
      </mdc-tablist>

      <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
      <div id="calls-panel" role="tabpanel" hidden>
        <p>Calls panel</p>
      </div>
      <div id="videos-panel" role="tabpanel" hidden>
        <p>Videos panel</p>
      </div>
      <div id="music-panel" role="tabpanel" hidden>
        <p>Music panel</p>
      </div>
      <div id="documents-panel" role="tabpanel">
        <p>Documents panel</p>
      </div>
      <div id="meetings-panel" role="tabpanel" hidden>
        <p>Meetings panel</p>
      </div>
      <!-- End of example markup for the tab panels -->\`;
  },
  args: {
    tabvariant: 'glass',
    tabsize: TAB_SIZES[32],
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types'
  }
}`,...(M=(D=v.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var F,O,V;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <div role="\${ROLE.MAIN}">
      <mdc-tablist active-tab-id="tab-2" data-aria-label="Tablist with a lot of tabs">
        \${new Array(100).fill(undefined).map((_, i) => html\`<mdc-tab text="Tab #\${i + 1}" tab-id="tab-\${i + 1}"></mdc-tab>\`)}
      </mdc-tablist>
    </div>
  \`,
  ...describeStory(html\`<p role="\${ROLE.REGION}">
      When the tabs overflow the available space, arrow buttons appear at the left and right ends of the tablist. These
      buttons allow users to scroll through the tabs horizontally. The arrow buttons are automatically shown or hidden
      based on the scroll position.
    </p>\`)
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,L,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    ...describeStory(html\`<p>
        A <code>mdc-tablist</code> inside an <code>mdc-dialog</code> with <code>focus-trap</code> enabled. Use
        <kbd>Tab</kbd> to navigate between the tabs and interactive elements inside the dialog.
      </p>\`, true)
  },
  render: () => {
    const dialogId = 'tablist-dialog';
    const toggleVisibility = () => {
      const dialog = document.getElementById(dialogId) as HTMLElement;
      dialog?.toggleAttribute('visible');
    };
    const onClose = () => {
      const dialog = document.getElementById(dialogId) as HTMLElement;
      dialog?.removeAttribute('visible');
    };
    const updateTabPanel = (event: CustomEvent) => {
      const dialog = document.getElementById(dialogId);
      const activeTab = dialog?.querySelector(\`mdc-tab[tab-id="\${event.detail.tabId}"]\`);
      const panelId = activeTab?.getAttribute('aria-controls');
      const panels = dialog?.querySelectorAll('[role="tabpanel"]');
      panels?.forEach(panelElement => {
        const el = panelElement as HTMLElement;
        el.hidden = el.id !== panelId;
      });
    };
    return html\`
      <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
        <mdc-button @click="\${toggleVisibility}" id="tablist-dialog-trigger">Open Dialog</mdc-button>
      </div>

      <mdc-dialog
        id="\${dialogId}"
        header-text="Tabbed Dialog"
        close-button-aria-label="Close dialog"
        triggerId="tablist-dialog-trigger"
        focus-trap
        @close="\${onClose}"
      >
        <div slot="dialog-body">
          <mdc-tablist @change="\${updateTabPanel}" active-tab-id="calls-tab" data-aria-label="Media types">
            <mdc-tab text="Calls" icon-name="audio-call-bold" tab-id="calls-tab" aria-controls="dialog-calls-panel">
            </mdc-tab>
            <mdc-tab text="Videos" icon-name="video-bold" tab-id="videos-tab" aria-controls="dialog-videos-panel">
            </mdc-tab>
            <mdc-tab
              text="Documents"
              icon-name="document-bold"
              tab-id="documents-tab"
              aria-controls="dialog-documents-panel"
            >
            </mdc-tab>
          </mdc-tablist>

          <div id="dialog-calls-panel" role="tabpanel">
            <p>Calls panel content.</p>
            <mdc-button>Action in Calls</mdc-button>
          </div>
          <div id="dialog-videos-panel" role="tabpanel" hidden>
            <p>Videos panel content.</p>
            <mdc-button>Action in Videos</mdc-button>
          </div>
          <div id="dialog-documents-panel" role="tabpanel" hidden>
            <p>Documents panel content.</p>
            <mdc-button>Action in Documents</mdc-button>
          </div>
        </div>
        <mdc-button slot="footer-button-secondary" @click="\${onClose}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="\${onClose}">Confirm</mdc-button>
      </mdc-dialog>
    \`;
  }
}`,...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const Wt=["Example","TablistWithPanels","TablistWithButtons","TablistInsideDialog"];export{h as Example,f as TablistInsideDialog,g as TablistWithButtons,v as TablistWithPanels,Wt as __namedExportsOrder,Nt as default};
