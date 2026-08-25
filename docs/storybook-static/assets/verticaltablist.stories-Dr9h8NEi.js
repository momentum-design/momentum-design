import{k as i,Q as T}from"./iframe-DKmoi846.js";import{c as z,s as C}from"./commonArgTypes-BG7EqI50.js";import{h as $}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,k=[{tabId:"messages",text:"Messages",iconName:"chat-regular"},{tabId:"favorites",text:"Favorites",iconName:"favorite-regular"},{tabId:"contacts",text:"Contacts",iconName:"contact-card-regular"},{tabId:"meetings",text:"Meetings",iconName:"meetings-regular"},{tabId:"calls",text:"Calls",iconName:"handset-regular"},{tabId:"voicemail",text:"Voicemail",iconName:"voicemail-regular"},{tabId:"settings",text:"Settings",iconName:"settings-regular"}],N=t=>i`<mdc-verticaltablist
    data-aria-label="${t["data-aria-label"]}"
    active-tab-id="${t["active-tab-id"]||""}"
    @change="${a("change")}"
  >
    ${T(k,e=>e.tabId,e=>i`<mdc-tab
          tab-id="${e.tabId}"
          text="${e.text}"
          icon-name="${e.iconName}"
          @click="${a("onclick")}"
        ></mdc-tab>`)}
  </mdc-verticaltablist>`,_={title:"Components/verticaltablist",tags:["autodocs"],component:"mdc-verticaltablist",render:N,argTypes:{"aria-label":{control:"text",description:"Label for the tab list used for accessibility. This is required for the component to be accessible."},"active-tab-id":{control:"select",description:"ID of the active tab. Defaults to the first tab if not provided.",options:k.map(t=>t.tabId)},...$(["itemsStore","orientation","loop","initial-focus"]),...z,...C}},c={args:{"aria-label":"Navigation tabs","active-tab-id":"messages"}},d={render:t=>i`
    <mdc-verticaltablist
      data-aria-label="${t["data-aria-label"]}"
      active-tab-id="${t["active-tab-id"]||""}"
      @change="${a("change")}"
    >
      <mdc-tab tab-id="messages" text="Messages" icon-name="chat-regular" @click="${a("onclick")}">
        <mdc-badge slot="postfix" type="counter" counter="5"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="favorites" text="Favorites" icon-name="favorite-regular" @click="${a("onclick")}">
      </mdc-tab>
      <mdc-tab tab-id="contacts" text="Contacts" icon-name="contact-card-regular" @click="${a("onclick")}">
        <mdc-badge slot="postfix" type="dot"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="meetings" text="Meetings" icon-name="meetings-regular" @click="${a("onclick")}"> </mdc-tab>
      <mdc-tab tab-id="calls" text="Calls" icon-name="handset-regular" @click="${a("onclick")}">
        <mdc-badge slot="postfix" type="counter" counter="3"></mdc-badge>
      </mdc-tab>
    </mdc-verticaltablist>
  `,args:{"data-aria-label":"Navigation tabs with badges","active-tab-id":"messages"}},n={render:t=>i`
    <mdc-verticaltablist
      data-aria-label="${t["data-aria-label"]}"
      active-tab-id="${t["active-tab-id"]||""}"
      @change="${a("change")}"
    >
      <mdc-tab tab-id="tab-1" text="Overview" @click="${a("onclick")}"></mdc-tab>
      <mdc-tab tab-id="tab-2" text="Details" @click="${a("onclick")}"></mdc-tab>
      <mdc-tab tab-id="tab-3" text="History" @click="${a("onclick")}"></mdc-tab>
      <mdc-tab tab-id="tab-4" text="Analytics" @click="${a("onclick")}"></mdc-tab>
      <mdc-tab tab-id="tab-5" text="Settings" @click="${a("onclick")}"></mdc-tab>
    </mdc-verticaltablist>
  `,args:{"data-aria-label":"Text only navigation tabs","active-tab-id":"tab-1"}},l={render:t=>i`
    <div style="display: flex; gap: 16px;">
      <mdc-verticaltablist
        data-aria-label="${t["data-aria-label"]}"
        active-tab-id="${t["active-tab-id"]||""}"
        @change="${e=>{a("change")(e),document.querySelectorAll('[role="tabpanel"]').forEach(S=>{const r=S;r.hidden=r.id!==`panel-${e.detail.tabId}`})}}"
        style="width: 200px"
      >
        <mdc-tab tab-id="general" text="General" icon-name="settings-regular" aria-controls="panel-general"></mdc-tab>
        <mdc-tab
          tab-id="appearance"
          text="Appearance"
          icon-name="adjust-regular"
          aria-controls="panel-appearance"
        ></mdc-tab>
        <mdc-tab
          tab-id="notifications"
          text="Notifications"
          icon-name="alert-regular"
          aria-controls="panel-notifications"
        ></mdc-tab>
        <mdc-tab
          tab-id="privacy"
          text="Privacy"
          icon-name="privacy-circle-regular"
          aria-controls="panel-privacy"
        ></mdc-tab>
      </mdc-verticaltablist>
      <div style="flex: 1; padding: 12px;">
        <div role="tabpanel" id="panel-general" aria-labelledby="general">
          <mdc-text type="heading-midsize-bold" tagname="h3">General Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Configure your general application settings here.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-appearance" aria-labelledby="appearance" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Appearance Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Customize the look and feel of the application.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-notifications" aria-labelledby="notifications" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Notification Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Manage your notification preferences.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-privacy" aria-labelledby="privacy" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Privacy Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Control your privacy and security settings.</mdc-text>
        </div>
      </div>
    </div>
  `,args:{"active-tab-id":"general"},argTypes:{...$(["active-tab-id"])}};var o,s,b;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    'active-tab-id': 'messages'
  }
}`,...(b=(s=c.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var m,g,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <mdc-verticaltablist
      data-aria-label="\${args['data-aria-label']}"
      active-tab-id="\${args['active-tab-id'] || ''}"
      @change="\${action('change')}"
    >
      <mdc-tab tab-id="messages" text="Messages" icon-name="chat-regular" @click="\${action('onclick')}">
        <mdc-badge slot="postfix" type="counter" counter="5"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="favorites" text="Favorites" icon-name="favorite-regular" @click="\${action('onclick')}">
      </mdc-tab>
      <mdc-tab tab-id="contacts" text="Contacts" icon-name="contact-card-regular" @click="\${action('onclick')}">
        <mdc-badge slot="postfix" type="dot"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="meetings" text="Meetings" icon-name="meetings-regular" @click="\${action('onclick')}"> </mdc-tab>
      <mdc-tab tab-id="calls" text="Calls" icon-name="handset-regular" @click="\${action('onclick')}">
        <mdc-badge slot="postfix" type="counter" counter="3"></mdc-badge>
      </mdc-tab>
    </mdc-verticaltablist>
  \`,
  args: {
    'data-aria-label': 'Navigation tabs with badges',
    'active-tab-id': 'messages'
  }
}`,...(p=(g=d.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`
    <mdc-verticaltablist
      data-aria-label="\${args['data-aria-label']}"
      active-tab-id="\${args['active-tab-id'] || ''}"
      @change="\${action('change')}"
    >
      <mdc-tab tab-id="tab-1" text="Overview" @click="\${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-2" text="Details" @click="\${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-3" text="History" @click="\${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-4" text="Analytics" @click="\${action('onclick')}"></mdc-tab>
      <mdc-tab tab-id="tab-5" text="Settings" @click="\${action('onclick')}"></mdc-tab>
    </mdc-verticaltablist>
  \`,
  args: {
    'data-aria-label': 'Text only navigation tabs',
    'active-tab-id': 'tab-1'
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var u,h,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; gap: 16px;">
      <mdc-verticaltablist
        data-aria-label="\${args['data-aria-label']}"
        active-tab-id="\${args['active-tab-id'] || ''}"
        @change="\${(e: CustomEvent) => {
    action('change')(e);
    const panels = document.querySelectorAll('[role="tabpanel"]');
    panels.forEach(panel => {
      const el = panel as HTMLElement;
      el.hidden = el.id !== \`panel-\${e.detail.tabId}\`;
    });
  }}"
        style="width: 200px"
      >
        <mdc-tab tab-id="general" text="General" icon-name="settings-regular" aria-controls="panel-general"></mdc-tab>
        <mdc-tab
          tab-id="appearance"
          text="Appearance"
          icon-name="adjust-regular"
          aria-controls="panel-appearance"
        ></mdc-tab>
        <mdc-tab
          tab-id="notifications"
          text="Notifications"
          icon-name="alert-regular"
          aria-controls="panel-notifications"
        ></mdc-tab>
        <mdc-tab
          tab-id="privacy"
          text="Privacy"
          icon-name="privacy-circle-regular"
          aria-controls="panel-privacy"
        ></mdc-tab>
      </mdc-verticaltablist>
      <div style="flex: 1; padding: 12px;">
        <div role="tabpanel" id="panel-general" aria-labelledby="general">
          <mdc-text type="heading-midsize-bold" tagname="h3">General Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Configure your general application settings here.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-appearance" aria-labelledby="appearance" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Appearance Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Customize the look and feel of the application.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-notifications" aria-labelledby="notifications" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Notification Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Manage your notification preferences.</mdc-text>
        </div>
        <div role="tabpanel" id="panel-privacy" aria-labelledby="privacy" hidden>
          <mdc-text type="heading-midsize-bold" tagname="h3">Privacy Settings</mdc-text>
          <mdc-text type="body-midsize-regular" tagname="p">Control your privacy and security settings.</mdc-text>
        </div>
      </div>
    </div>
  \`,
  args: {
    'active-tab-id': 'general'
  },
  argTypes: {
    ...hideControls(['active-tab-id'])
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const w=["Example","TabsWithBadges","TextOnlyTabs","TabsWithPanels"];export{c as Example,d as TabsWithBadges,l as TabsWithPanels,n as TextOnlyTabs,w as __namedExportsOrder,_ as default};
