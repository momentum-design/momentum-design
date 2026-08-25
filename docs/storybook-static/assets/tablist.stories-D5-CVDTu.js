import{aL as k,aK as u,k as e,R as g}from"./iframe-DKmoi846.js";import{h as D,d as v}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:V}=__STORYBOOK_MODULE_ACTIONS__,O=t=>e` <mdc-tablist
      @change="${V("onchange")}"
      active-tab-id="${t["active-tab-id"]}"
      data-aria-label=${t["data-aria-label"]}
    >
      <mdc-tab
        size=${t.tabsize}
        variant=${t.tabvariant}
        text="Calls"
        icon-name="audio-call-bold"
        tab-id="calls-tab"
        aria-controls="calls-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${t.tabsize}
        variant=${t.tabvariant}
        text="Videos"
        icon-name="video-bold"
        tab-id="videos-tab"
        aria-controls="videos-panel"
      >
        <mdc-badge slot="postfix" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
      </mdc-tab>
      <mdc-tab
        size=${t.tabsize}
        variant=${t.tabvariant}
        text="Music"
        icon-name="file-music-bold"
        tab-id="music-tab"
        aria-controls="music-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${t.tabsize}
        variant=${t.tabvariant}
        text="Documents"
        icon-name="document-bold"
        tab-id="documents-tab"
        aria-controls="documents-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${t.tabsize}
        variant=${t.tabvariant}
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
    <!-- End of example markup for the tab panels -->`,P={title:"Components/tablist",tags:["autodocs"],component:"mdc-tablist",render:O,argTypes:{"active-tab-id":{control:"select",description:"ID of the active tab. Defaults to the first tab if not provided.",options:["calls-tab","videos-tab","music-tab","documents-tab","meetings-tab"]},"data-aria-label":{control:"text"},tabvariant:{control:"select",description:"Set the variant of tab inside the tablist",options:Object.values(k)},tabsize:{control:"select",description:"Set the size of tabs inside the tablist",options:Object.values(u)},...D(["itemsStore"])}},c={args:{"active-tab-id":"documents-tab","data-aria-label":"Media types",tabsize:u[32],tabvariant:"line"}},b={parameters:{...v(e` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side`,!0)},render:t=>e` <mdc-tablist
        @change="${o=>{const l=document.querySelector(`mdc-tab[tab-id="${o.detail.tabId}"]`),a=l==null?void 0:l.getAttribute("aria-controls");document.querySelectorAll('[role="tabpanel"]').forEach(d=>{const s=d;s.hidden=s.id!==a})}}"
        active-tab-id="${t["active-tab-id"]}"
        data-aria-label=${t["data-aria-label"]}
      >
        <mdc-tab
          size=${t.tabsize}
          variant=${t.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${t.tabsize}
          variant=${t.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          size=${t.tabsize}
          variant=${t.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${t.tabsize}
          variant=${t.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${t.tabsize}
          variant=${t.tabvariant}
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
      <!-- End of example markup for the tab panels -->`,args:{tabvariant:"glass",tabsize:u[32],"active-tab-id":"documents-tab","data-aria-label":"Media types"}},r={render:()=>e`
    <div role="${g.MAIN}">
      <mdc-tablist active-tab-id="tab-2" data-aria-label="Tablist with a lot of tabs">
        ${new Array(100).fill(void 0).map((t,i)=>e`<mdc-tab text="Tab #${i+1}" tab-id="tab-${i+1}"></mdc-tab>`)}
      </mdc-tablist>
    </div>
  `,...v(e`<p role="${g.REGION}">
      When the tabs overflow the available space, arrow buttons appear at the left and right ends of the tablist. These
      buttons allow users to scroll through the tabs horizontally. The arrow buttons are automatically shown or hidden
      based on the scroll position.
    </p>`)},m={parameters:{...v(e`<p>
        A <code>mdc-tablist</code> inside an <code>mdc-dialog</code> with <code>focus-trap</code> enabled. Use
        <kbd>Tab</kbd> to navigate between the tabs and interactive elements inside the dialog.
      </p>`,!0)},render:()=>{const t="tablist-dialog",i=()=>{const a=document.getElementById(t);a==null||a.toggleAttribute("visible")},o=()=>{const a=document.getElementById(t);a==null||a.removeAttribute("visible")};return e`
      <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
        <mdc-button @click="${i}" id="tablist-dialog-trigger">Open Dialog</mdc-button>
      </div>

      <mdc-dialog
        id="${t}"
        header-text="Tabbed Dialog"
        close-button-aria-label="Close dialog"
        triggerId="tablist-dialog-trigger"
        focus-trap
        @close="${o}"
      >
        <div slot="dialog-body">
          <mdc-tablist @change="${a=>{const n=document.getElementById(t),d=n==null?void 0:n.querySelector(`mdc-tab[tab-id="${a.detail.tabId}"]`),s=d==null?void 0:d.getAttribute("aria-controls"),p=n==null?void 0:n.querySelectorAll('[role="tabpanel"]');p==null||p.forEach(w=>{const h=w;h.hidden=h.id!==s})}}" active-tab-id="calls-tab" data-aria-label="Media types">
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
        <mdc-button slot="footer-button-secondary" @click="${o}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${o}">Confirm</mdc-button>
      </mdc-dialog>
    `}};var f,$,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
    tabsize: TAB_SIZES[32],
    tabvariant: 'line'
  }
}`,...(y=($=c.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var T,x,z;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(x=b.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,E,A;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(E=r.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var C,S,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(S=m.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const L=["Example","TablistWithPanels","TablistWithButtons","TablistInsideDialog"];export{c as Example,m as TablistInsideDialog,r as TablistWithButtons,b as TablistWithPanels,L as __namedExportsOrder,P as default};
