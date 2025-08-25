import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import{Q as k}from"./repeat-CNQ7t7Vw.js";import"./index-Ch8lwNIF.js";import{c as u,s as g}from"./commonArgTypes-BluK8w5L.js";import{d as v}from"./utils-CFOyPOhY.js";import{a as x}from"./listitem.component-moTyXfIR.js";import"./index-D69ff9w3.js";import"./index-Doz7NEhG.js";import"./index-DCObO7AW.js";import"./index-hjA7jCQh.js";import"./index-03m1uM4C.js";import"./index-gmOmAGHl.js";import"./index-BzpPSfOP.js";import"./index-DJDHCrwC.js";import"./index-BUR4qSQX.js";import"./index-DeEenWCE.js";import"./index-DMj4H42a.js";import"./index-CrG6FjCK.js";import"./index-CxSAsU8C.js";import"./index-B0BpaJvv.js";import"./v4-CQkTLCs1.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./provider.component-DrWB4byV.js";import"./keys-hFXe221I.js";import"./roles-CJI3JVG-.js";import"./property-Bj3TGwkg.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-DM9rY9pk.js";import"./popover.component-CWSuSUni.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";import"./index-B-GnYs90.js";import"./state-CmYk530Z.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./index-DbhzW0J0.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./class-map-BcCVsMyu.js";import"./badge.constants-C6WKiCnx.js";import"./button.component-AY6DUPps.js";import"./button.utils-rNW36Ji7.js";import"./index-BZhmiycu.js";import"./index-KnrMSfc0.js";import"./index-CnFwjDgi.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-BfkD1w96.js";import"./divider.constants-DXWnBz1m.js";import"./iframe-ClPIXJmm.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./toggle.constants-T43Qk2UJ.js";import"./index-DCAkmhEK.js";import"./index-DIsq2659.js";const $=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],T=t=>e` <mdc-list aria-label="${t["aria-label"]}">
    ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
    ${k($,a=>e`<mdc-listitem @click="${i("onclick")}" label="${a}" variant="${x.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
            initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
          ></mdc-avatar>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
          <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
        </mdc-listitem> `)}
  </mdc-list>`,Et={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:T,parameters:{badges:["stable"]},argTypes:{textPassedToListHeader:{control:"text",description:"Text to be rendered in the list header component. This is a control in storybook only."},"aria-label":{control:"text"},...v(["default","list-header"]),...u,...g}},l={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},o={render:t=>e`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${i("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${i("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${i("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},s={render:t=>e`
    <mdc-list aria-label="${t["aria-label"]}" style="height: 200px; overflow-y: auto;" id="scrollable-list">
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${k($,a=>e`<mdc-listitem @click="${i("onclick")}" label="${a}" variant="${x.INSET_PILL}">
            <mdc-select
              slot="leading-controls"
              style="--mdc-select-width: 200px;"
              boundary="scrollable-list"
              strategy="fixed"
              backdrop-append-to="scrollable-list"
            >
              <mdc-selectlistbox>
                <mdc-option value="option1" label="Option 1" disabled></mdc-option>
                <mdc-option value="option2" label="Option 2"></mdc-option>
                <mdc-option value="option3" label="Option 3"></mdc-option>
                <mdc-option value="option4" label="Option 4" disabled></mdc-option>
                <mdc-option value="option5" label="Option 5"></mdc-option>
                <mdc-option value="option6" label="Option 6" disabled></mdc-option>
                <mdc-option value="option6" label="Option 7" soft-disabled></mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
            <mdc-avatar
              slot="leading-controls"
              initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
            ></mdc-avatar>
          </mdc-listitem> `)}
    </mdc-list>
  `,args:{textPassedToListHeader:"Scrollable Participants List","aria-label":"View all participants"}};var r,c,m;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants'
  }
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,n;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`
    <mdc-list aria-label="\${args['aria-label']}">
      \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
      <mdc-listitem @click=\${action('onclick')} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=\${action('onclick')} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="List Item 6"></mdc-listitem>
    </mdc-list>
  \`,
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants'
  }
}`,...(n=(p=o.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var b,L,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`
    <mdc-list aria-label="\${args['aria-label']}" style="height: 200px; overflow-y: auto;" id="scrollable-list">
      \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
      \${repeat(fakeUserNamesList, name => html\`<mdc-listitem @click="\${action('onclick')}" label="\${name}" variant="\${LISTITEM_VARIANTS.INSET_PILL}">
            <mdc-select
              slot="leading-controls"
              style="--mdc-select-width: 200px;"
              boundary="scrollable-list"
              strategy="fixed"
              backdrop-append-to="scrollable-list"
            >
              <mdc-selectlistbox>
                <mdc-option value="option1" label="Option 1" disabled></mdc-option>
                <mdc-option value="option2" label="Option 2"></mdc-option>
                <mdc-option value="option3" label="Option 3"></mdc-option>
                <mdc-option value="option4" label="Option 4" disabled></mdc-option>
                <mdc-option value="option5" label="Option 5"></mdc-option>
                <mdc-option value="option6" label="Option 6" disabled></mdc-option>
                <mdc-option value="option6" label="Option 7" soft-disabled></mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
            <mdc-avatar
              slot="leading-controls"
              initials="\${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
            ></mdc-avatar>
          </mdc-listitem> \`)}
    </mdc-list>
  \`,
  args: {
    textPassedToListHeader: 'Scrollable Participants List',
    'aria-label': 'View all participants'
  }
}`,...(h=(L=s.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};const Nt=["Example","ListWithDivider","ScrollableListWithSelect"];export{l as Example,o as ListWithDivider,s as ScrollableListWithSelect,Nt as __namedExportsOrder,Et as default};
