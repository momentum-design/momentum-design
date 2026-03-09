import{a2 as A,R as I,k as i,u as E}from"./iframe-poZqDqjY.js";import{Q as M}from"./repeat-F-8XW9am.js";import{L as p}from"./list.component-bbK30Q8m.js";import{T as w}from"./TabListComponentMixin-KijZoMdF.js";import{b as O}from"./index-jDdLwZWh.js";import{c as _,s as L}from"./commonArgTypes-BG7EqI50.js";import{h as N}from"./utils-B5QUENNQ.js";import"./index-DzIWYZCa.js";import"./index-B4_Z3j_6.js";import"./preload-helper-C1FmrZbK.js";import"./directive-Ctav8iJK.js";import"./ListNavigationMixin-BA_gmxd5.js";import"./KeyDownHandledMixin-B9NVAJR6.js";import"./index-LrKBDY0R.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-C7nxaYLg.js";import"./CaptureDestroyEventForChildElement-Ca9QBKLi.js";import"./if-defined-Bk6xV7nx.js";import"./button.utils-rNW36Ji7.js";import"./buttonsimple.component-BmC6gNHp.js";import"./DisabledMixin-CHAoifzE.js";import"./IconNameMixin-BUcMTsnH.js";import"./index-DTrDRi1E.js";import"./badge.constants-Bi-DdSpd.js";const G=A`
  :host {
    --mdc-verticaltablist-width: 100%;

    width: var(--mdc-verticaltablist-width);
  }

  :host::part(container) {
    gap: 0.5rem;
  }

  ::slotted(mdc-tab) {
    width: 100%;
    border-radius: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    align-items: flex-start;
    --mdc-tab-line-active-indicator-height: 100%;
    --mdc-tab-line-active-indicator-width: 0.125rem;
    --mdc-tab-content-justification: space-between;
  }
`,P=[G],m=class m extends w(p){constructor(){super(...arguments),this.orientation="vertical"}isValidItem(e){return e.matches(`${O}:not([disabled])`)}onElementStoreUpdate(e,l,o){super.onElementStoreUpdate(e,l,o),l==="added"&&e.setAttribute("variant","line")}connectedCallback(){super.connectedCallback(),this.role=I.TABLIST,this.setAttribute("aria-orientation","vertical")}render(){return i`
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `}};m.styles=[...p.styles,...P];let s=m;const D=E.constructTagName("verticaltablist");s.register(D);const{action:a}=__STORYBOOK_MODULE_ACTIONS__,z=[{tabId:"messages",text:"Messages",iconName:"chat-regular"},{tabId:"favorites",text:"Favorites",iconName:"favorite-regular"},{tabId:"contacts",text:"Contacts",iconName:"contact-card-regular"},{tabId:"meetings",text:"Meetings",iconName:"meetings-regular"},{tabId:"calls",text:"Calls",iconName:"handset-regular"},{tabId:"voicemail",text:"Voicemail",iconName:"voicemail-regular"},{tabId:"settings",text:"Settings",iconName:"settings-regular"}],B=t=>i`<mdc-verticaltablist
    data-aria-label="${t["data-aria-label"]}"
    active-tab-id="${t["active-tab-id"]||""}"
    @change="${a("change")}"
  >
    ${M(z,e=>e.tabId,e=>i`<mdc-tab
          tab-id="${e.tabId}"
          text="${e.text}"
          icon-name="${e.iconName}"
          @click="${a("onclick")}"
        ></mdc-tab>`)}
  </mdc-verticaltablist>`,sa={title:"Components/verticaltablist",tags:["autodocs"],component:"mdc-verticaltablist",render:B,argTypes:{"aria-label":{control:"text",description:"Label for the tab list used for accessibility. This is required for the component to be accessible."},"active-tab-id":{control:"select",description:"ID of the active tab. Defaults to the first tab if not provided.",options:z.map(t=>t.tabId)},...N(["itemsStore","orientation","loop","initial-focus"]),..._,...L}},c={args:{"aria-label":"Navigation tabs","active-tab-id":"messages"}},r={render:t=>i`
    <mdc-verticaltablist
      data-aria-label="${t["data-aria-label"]}"
      active-tab-id="${t["active-tab-id"]||""}"
      @change="${a("change")}"
    >
      <mdc-tab tab-id="messages" text="Messages" icon-name="chat-regular" @click="${a("onclick")}">
        <mdc-badge slot="badge" type="counter" counter="5"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="favorites" text="Favorites" icon-name="favorite-regular" @click="${a("onclick")}">
      </mdc-tab>
      <mdc-tab tab-id="contacts" text="Contacts" icon-name="contact-card-regular" @click="${a("onclick")}">
        <mdc-badge slot="badge" type="dot"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="meetings" text="Meetings" icon-name="meetings-regular" @click="${a("onclick")}"> </mdc-tab>
      <mdc-tab tab-id="calls" text="Calls" icon-name="handset-regular" @click="${a("onclick")}">
        <mdc-badge slot="badge" type="counter" counter="3"></mdc-badge>
      </mdc-tab>
    </mdc-verticaltablist>
  `,args:{"data-aria-label":"Navigation tabs with badges","active-tab-id":"messages"}},d={render:t=>i`
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
  `,args:{"data-aria-label":"Text only navigation tabs","active-tab-id":"tab-1"}},n={render:t=>i`
    <div style="display: flex; gap: 16px;">
      <mdc-verticaltablist
        data-aria-label="${t["data-aria-label"]}"
        active-tab-id="${t["active-tab-id"]||""}"
        @change="${e=>{a("change")(e),document.querySelectorAll('[role="tabpanel"]').forEach(o=>{const b=o;b.hidden=b.id!==`panel-${e.detail.tabId}`})}}"
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
  `,args:{"active-tab-id":"general"},argTypes:{...N(["active-tab-id"])}};var g,v,u;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    'active-tab-id': 'messages'
  }
}`,...(u=(v=c.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,y,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => html\`
    <mdc-verticaltablist
      data-aria-label="\${args['data-aria-label']}"
      active-tab-id="\${args['active-tab-id'] || ''}"
      @change="\${action('change')}"
    >
      <mdc-tab tab-id="messages" text="Messages" icon-name="chat-regular" @click="\${action('onclick')}">
        <mdc-badge slot="badge" type="counter" counter="5"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="favorites" text="Favorites" icon-name="favorite-regular" @click="\${action('onclick')}">
      </mdc-tab>
      <mdc-tab tab-id="contacts" text="Contacts" icon-name="contact-card-regular" @click="\${action('onclick')}">
        <mdc-badge slot="badge" type="dot"></mdc-badge>
      </mdc-tab>
      <mdc-tab tab-id="meetings" text="Meetings" icon-name="meetings-regular" @click="\${action('onclick')}"> </mdc-tab>
      <mdc-tab tab-id="calls" text="Calls" icon-name="handset-regular" @click="\${action('onclick')}">
        <mdc-badge slot="badge" type="counter" counter="3"></mdc-badge>
      </mdc-tab>
    </mdc-verticaltablist>
  \`,
  args: {
    'data-aria-label': 'Navigation tabs with badges',
    'active-tab-id': 'messages'
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,$,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var T,S,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const ma=["Example","TabsWithBadges","TextOnlyTabs","TabsWithPanels"];export{c as Example,r as TabsWithBadges,n as TabsWithPanels,d as TextOnlyTabs,ma as __namedExportsOrder,sa as default};
