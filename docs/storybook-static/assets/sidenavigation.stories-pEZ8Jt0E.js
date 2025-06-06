import{k as l}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-CKzLj7bz.js";import{c as s,s as b}from"./commonArgTypes-BluK8w5L.js";import{d as p,h as g}from"./utils-CO8B6ZcN.js";import{V as u,a as x}from"./index-D4MUYbyy.js";import"./index-DObZKUtw.js";import"./index-DdUHVmAs.js";import"./index-DwnnXD6a.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./menubar.component-BW7Fn6AM.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./menu.constants-Bt64zAlX.js";import"./menupopover.constants-D31hJpJi.js";import"./menusection.constants-CectB7Mc.js";import"./listitem.component-7b049Nhq.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./roles-Ch6n0tol.js";import"./index-D1yLszQ-.js";import"./index-BQIA-yjU.js";import"./popover.component-DqsEEw9E.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./v4-CmTdKEVZ.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./index-53jBjG1v.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./button.utils-rNW36Ji7.js";import"./index-CWciZxqh.js";import"./divider.constants-DyEGqhgz.js";import"./index-DboZPEXm.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./IconNameMixin-CujGSn0t.js";import"./menuitem.component-BRf3IJAH.js";import"./create-context-89xeped_.js";import"./iframe-DyJif37m.js";import"../sb-preview/runtime.js";import"./iconprovider.component-Bvm-70EG.js";const h=e=>l`
  <div style="height: 90vh; margin: 1rem">
    <mdc-sidenavigation variant="${e.variant}" customer-name=${e["customer-name"]} 
        grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
        parent-nav-tooltip-text="${e["parent-nav-tooltip-text"]}"
        @activechange="${r("onactivechange")}">
        <!-- Upper Nav (scrollable section) -->
        <mdc-navitemlist slot="scrollable-section" aria-label="This is a 1st navitemlist.">
          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="1"
            label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="2" label='Meetings' disabled></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="3" label='Calling'></mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 1</mdc-text>

          <mdc-navitem icon-name="chat-bold" nav-id="4" label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="5" label='Meetings' badge-type="counter" 
          counter="2" max-counter="66"></mdc-navitem>
          <mdc-navitem icon-name="audio-call-bold" nav-id="6" label='Calling'></mdc-navitem>

          <mdc-divider variant="gradient" nav-id="7"></mdc-divider>
          <mdc-text>Section 2</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="8"
            label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="9" label='Meetings'>
          </mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="10" label='Calling'> </mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 3</mdc-text>

          <mdc-navitem icon-name="chat-bold" nav-id="11" label='Messaging'> </mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="meetings-bold" nav-id="12"
            label='Meetings'></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="13" label='Calling'></mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="14"
            label='Teams'></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="placeholder-bold" nav-id="15"
            label='Contacts'></mdc-navitem>
          <mdc-navitem icon-name="placeholder-bold" nav-id="16" label='Whiteboards'></mdc-navitem>

          <mdc-divider variant="gradient"></mdc-divider>
          <mdc-text>Section 4</mdc-text>

          <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="17"
            label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="18" label='Meetings'></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="19" label='Calling'></mdc-navitem>
          <mdc-navitem icon-name="chat-bold" nav-id="20" label='Messaging'></mdc-navitem>
          <mdc-navitem icon-name="meetings-bold" nav-id="21" label='Meetings'></mdc-navitem>
          <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="22" label='Calling'></mdc-navitem>
        </mdc-navitemlist>

        <!-- Lower Nav (Fixed section) -->
        <mdc-navitemlist slot="fixed-section" aria-label="This is a 2nd navitemlist.">
          <mdc-navitem icon-name="settings-bold" nav-id="23"
            label='Settings'></mdc-navitem>
          <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="help-circle-bold" nav-id="24"
            label='Help'></mdc-navitem>
        </mdc-navitemlist>

        <!-- Brand Logo (Fixed section) -->
        <mdc-icon 
          slot="brand-logo"
          aria-label="This is a brandlogo." 
          name="apple-bold">
        </mdc-icon>
    </mdc-sidenavigation>
  </div>
`,y=e=>{const v=()=>{window.confirm("Are you sure you want to cancel?")};return l`
<div style="height: 90vh; margin: 1rem">
  <mdc-sidenavigation variant="${e.variant}" customer-name=${e["customer-name"]} 
      grabber-btn-aria-label="${e["grabber-btn-aria-label"]}"
      parent-nav-tooltip-text="${e["parent-nav-tooltip-text"]}"
      @activechange="${r("onactivechange")}">
      <!-- Upper Nav (scrollable section) -->
      <mdc-navitemlist slot="scrollable-section" aria-label="This is a 1st navitemlist.">
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" 
        nav-id="1" label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="2" label='Meetings' disabled></mdc-navitem>
        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="audio-call-bold" nav-id="3"
        label='Callings'></mdc-navitem>
        <mdc-navitem icon-name="more-circle-bold" nav-id="4" label='More' id="menu-button-trigger"></mdc-navitem>
        <mdc-menupopover triggerid="menu-button-trigger">
            <mdc-navitem label="App Hub" nav-id="5" badge-type="dot" icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="Personal Insights" nav-id="6" icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="What's new?" nav-id="7" badge-type="counter" counter="2" max-counter="66" 
            icon-name="placeholder-bold"></mdc-navitem>
            <mdc-navitem label="Collaboration Tools" nav-id="8" icon-name="placeholder-bold" 
            id="share-id"></mdc-navitem>
            <mdc-menupopover triggerid="share-id">
              <mdc-navitem label="Webex App Hub" nav-id="temp1" badge-type="dot" 
              icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Team Insights" nav-id="temp2" 
              icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Release Notes" nav-id="temp3" badge-type="counter" counter="2" max-counter="66" 
              icon-name="placeholder-bold"></mdc-navitem>
              <mdc-navitem label="Cisco Spaces" nav-id="temp4" icon-name="placeholder-bold"></mdc-navitem>
            </mdc-menupopover>
        </mdc-menupopover>

        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 1</mdc-text>

        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="9"
          label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="10" label='Meetings'></mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="11" label='Calling'></mdc-navitem>

        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 2</mdc-text>

        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="12"
          label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="13" label='Meetings'></mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="14" label='Calling'></mdc-navitem>

        <mdc-divider variant="gradient"></mdc-divider>
        <mdc-text>Section 3</mdc-text>

        <mdc-navitem badge-type="counter" counter="2" max-counter="66" icon-name="chat-bold" nav-id="15"
          label='Messaging'></mdc-navitem>
        <mdc-navitem icon-name="meetings-bold" nav-id="16" label='Meetings'></mdc-navitem>
        <mdc-navitem badge-type="dot" icon-name="audio-call-bold" nav-id="17" label='Calling'></mdc-navitem>
      </mdc-navitemlist>

      <!-- Lower Nav (Fixed section) -->
      <mdc-navitemlist slot="fixed-section" aria-label="This is a 2nd navitemlist.">
        <mdc-navitem badge-type="counter" counter="3" max-counter="66" icon-name="settings-bold" nav-id="18"
          label='Settings'></mdc-navitem>
        <mdc-navitem @click="${v}" icon-name="help-circle-bold" nav-id="19" label='Help' 
        disable-aria-current></mdc-navitem>
      </mdc-navitemlist>

      <!-- Brand Logo (Fixed section) -->
      <mdc-icon 
        slot="brand-logo"
        aria-label="This is the brand logo icon" 
        name="apple-bold">
      </mdc-icon>
  </mdc-sidenavigation>
</div>`},be={title:"Work In Progress/sidenavigation/sidenavigation",tags:["autodocs"],component:"mdc-sidenavigation",render:h,parameters:{badges:["wip"]},argTypes:{variant:{control:"select",options:Object.values(u)},"grabber-btn-aria-label":{control:"text"},"parent-nav-tooltip-text":{control:"text"},...p(["scrollable-section","fixed-section","brand-logo","--mdc-sidenavigation-expanded-width","--mdc-sidenavigation-collapsed-width"]),...g(["role","Context"]),...s,...b}},a={args:{variant:x.VARIANT,"customer-name":"%Customer Name%","grabber-btn-aria-label":"Toggle Side navigation","parent-nav-tooltip-text":"Contains active navitem"}},i={render:y,args:{...a.args}};var n,t,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: DEFAULTS.VARIANT,
    'customer-name': '%Customer Name%',
    'grabber-btn-aria-label': 'Toggle Side navigation',
    'parent-nav-tooltip-text': 'Contains active navitem'
  }
}`,...(m=(t=a.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,o,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderNestedSideNavigation,
  args: {
    ...Example.args
  }
}`,...(c=(o=i.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const pe=["Example","NestedSideNavigation"];export{a as Example,i as NestedSideNavigation,pe as __namedExportsOrder,be as default};
