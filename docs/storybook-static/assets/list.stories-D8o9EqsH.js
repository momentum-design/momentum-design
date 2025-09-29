import{k as i}from"./iframe-QSDyrAdE.js";import"./index-Cq0HUpGp.js";import{K as U,i as D}from"./ref-BAHlF8Ii.js";import{Q as m}from"./repeat---mcHV-j.js";import{c as B,s as F}from"./commonArgTypes-BluK8w5L.js";import{d as K,a as q}from"./utils-CFOyPOhY.js";import{a as s}from"./listitem.component-rmggZ_GV.js";import"./index-B0X5ddH-.js";import"./index-C-9vWaoK.js";import"./index-D4o3cWJ9.js";import"./index-BNatOgDM.js";import"./index-Dxpo7PDP.js";import"./index-DXIF-imp.js";import"./index-fgDsCE7Q.js";import"./index-B_eZahT2.js";import"./index-Dd2GtzXM.js";import"./index-COmTsnFb.js";import"./index-DIca0CXO.js";import"./index-C85T85ic.js";import"./index-D18__1DT.js";import"./index-Byu1Vs1G.js";import"./preload-helper-C1FmrZbK.js";import"./roles-CJI3JVG-.js";import"./ListNavigationMixin-DgCStHq0.js";import"./keys-hFXe221I.js";import"./CaptureDestroyEventForChildElement-DyCk2Zk1.js";import"./directive-Ctav8iJK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-D6enQAXq.js";import"./TabIndexMixin-BVjLDI6m.js";import"./index-EVhd65vU.js";import"./if-defined-ClteKkfF.js";import"./IconNameMixin-CSqyg41M.js";import"./index-B3jK4bXP.js";import"./button.constants-WVm7tXwE.js";import"./buttonsimple.constants-DOebIZq9.js";import"./buttonsimple.component-_HsIFC4Q.js";import"./badge.constants-Btxp5gds.js";import"./button.component-C1j5LlK8.js";import"./button.utils-rNW36Ji7.js";import"./index-0itY_JWB.js";import"./index-yYnH3jAH.js";import"./popover.component-BWPdzp8n.js";import"./BackdropMixin-Aq_yjMkc.js";import"./index-Cn4Do0r8.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-Dtxn4H1o.js";import"./FormInternalsMixin-CYosLjK8.js";import"./query-DXShiZ7f.js";import"./formfieldwrapper.component-fDryl_uM.js";import"./divider.constants-jH-9hos-.js";import"./index-B0QaVnKo.js";import"./index-DTrDRi1E.js";import"./toggle.constants-CfnzaBZE.js";import"./index-8pjD56Ib.js";import"./index-Bjnz6iG8.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,r=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],Q=t=>i` <mdc-list aria-label="${t["aria-label"]}" loop="${t.loop}" initial-focus="${t["initial-focus"]}">
    ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
    ${m(r,e=>i`<mdc-listitem @click="${l("onclick")}" label="${e}" variant="${s.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
            initials="${[e.split(" ")[0][0],e.split(" ")[1][0]].join("")}"
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
  </mdc-list>`,Jt={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:Q,argTypes:{textPassedToListHeader:{control:"text",description:"Text to be rendered in the list header component. This is a control in storybook only."},"aria-label":{control:"text"},...K(["default","list-header"]),...q(["itemsStore"]),loop:{control:"select",options:["true","false"],table:{defaultValue:{summary:"true"}}},...B,...F}},d={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},p={render:t=>i`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${l("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${l("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},b={render:t=>i`
    <mdc-list aria-label="${t["aria-label"]}" style="height: 200px; overflow-y: auto;" id="scrollable-list">
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${m(r,e=>i`<mdc-listitem @click="${l("onclick")}" label="${e}" variant="${s.INSET_PILL}">
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
              initials="${[e.split(" ")[0][0],e.split(" ")[1][0]].join("")}"
            ></mdc-avatar>
          </mdc-listitem> `)}
    </mdc-list>
  `,args:{textPassedToListHeader:"Scrollable Participants List","aria-label":"View all participants"}},u={render:t=>{const e=a=>{const o=a.target.closest("mdc-listitem");o&&o.remove()},g=a=>{var n;const o=[...a.target.closest("mdc-list").querySelectorAll("mdc-listitem")];(n=o[o.length-1])==null||n.remove()};return i`
      <mdc-list aria-label="${t["aria-label"]}">
        ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${m(r,a=>i`<mdc-listitem @click="${l("onclick")}" label="${a}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls" @click="${e}"> Remove </mdc-button>
              <mdc-button slot="trailing-controls" @click="${g}"> Remove Last </mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
    `}},L={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants","initial-focus":r.length-1}},$={render:t=>{const e=D(),g=()=>{var n,v;const a=document.createElement("mdc-listitem");a.setAttribute("variant",s.INSET_PILL),a.setAttribute("label",`List Item ${(((n=e.value)==null?void 0:n.children.length)||0)+1}`);const c=document.createElement("mdc-button");c.setAttribute("slot","trailing-controls"),c.textContent="Action";const o=document.createElement("mdc-button");o.setAttribute("slot","trailing-controls"),o.textContent="Action 2",a.append(c,o),(v=e.value)==null||v.append(a)};return i`
      <mdc-list aria-label="${t["aria-label"]}" ${U(e)}>
        ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${m(r.slice(0,4),a=>i`<mdc-listitem label="${a}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls">Action</mdc-button>
              <mdc-button slot="trailing-controls">Action 2</mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
      <mdc-button style="margin-top: 16px;" @click="${g}">Add Item</mdc-button>
    `}},h={render:t=>i`<mdc-list
      style="height: 400px; overflow-y: auto; padding: 0.25rem"
      aria-label="${t["aria-label"]}"
      loop="${t.loop}"
      initial-focus="${t["initial-focus"]}"
    >
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${m(new Array(5).fill(0).map(()=>[...r]).flat(),e=>e,e=>i`<mdc-listitem @click="${l("onclick")}" label="${e}" variant="${s.INSET_PILL}">
            <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
            <mdc-avatar
              slot="leading-controls"
              initials="${[e.split(" ")[0][0],e.split(" ")[1][0]].join("")}"
            ></mdc-avatar>
            <mdc-button
              slot="trailing-controls"
              color="positive"
              prefix-icon="data-range-selection-bold"
              aria-label="mock label"
            ></mdc-button>
            <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
            <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
          </mdc-listitem>`)}
    </mdc-list>`};var x,I,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants'
  }
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var k,P,f;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(P=p.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var S,A,E;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(A=b.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var H,y,N;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const handleRemoveItem = (event: Event) => {
      const button = event.target as HTMLElement;
      const listItem = button.closest('mdc-listitem');
      if (listItem) {
        listItem.remove();
      }
    };
    const removeLast = (event: Event) => {
      const button = event.target as HTMLElement;
      const items = [...button.closest('mdc-list')!.querySelectorAll('mdc-listitem')];
      items[items.length - 1]?.remove();
    };
    return html\`
      <mdc-list aria-label="\${args['aria-label']}">
        \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
        \${repeat(fakeUserNamesList, name => html\`<mdc-listitem @click="\${action('onclick')}" label="\${name}" variant="\${LISTITEM_VARIANTS.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="\${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls" @click="\${handleRemoveItem}"> Remove </mdc-button>
              <mdc-button slot="trailing-controls" @click="\${removeLast}"> Remove Last </mdc-button>
            </mdc-listitem> \`)}
      </mdc-list>
    \`;
  }
}`,...(N=(y=u.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var R,_,w;L.parameters={...L.parameters,docs:{...(R=L.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    'initial-focus': fakeUserNamesList.length - 1
  }
}`,...(w=(_=L.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var O,V,M;$.parameters={...$.parameters,docs:{...(O=$.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const listRef = createRef<List>();
    const addItem = () => {
      const newItem = document.createElement('mdc-listitem');
      newItem.setAttribute('variant', LISTITEM_VARIANTS.INSET_PILL);
      newItem.setAttribute('label', \`List Item \${(listRef.value?.children.length || 0) + 1}\`);
      const btn1 = document.createElement('mdc-button');
      btn1.setAttribute('slot', 'trailing-controls');
      btn1.textContent = 'Action';
      const btn2 = document.createElement('mdc-button');
      btn2.setAttribute('slot', 'trailing-controls');
      btn2.textContent = 'Action 2';
      newItem.append(btn1, btn2);
      listRef.value?.append(newItem);
    };
    return html\`
      <mdc-list aria-label="\${args['aria-label']}" \${ref(listRef)}>
        \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
        \${repeat(fakeUserNamesList.slice(0, 4), name => html\`<mdc-listitem label="\${name}" variant="\${LISTITEM_VARIANTS.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="\${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls">Action</mdc-button>
              <mdc-button slot="trailing-controls">Action 2</mdc-button>
            </mdc-listitem> \`)}
      </mdc-list>
      <mdc-button style="margin-top: 16px;" @click="\${addItem}">Add Item</mdc-button>
    \`;
  }
}`,...(M=(V=$.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var C,j,W;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => html\`<mdc-list
      style="height: 400px; overflow-y: auto; padding: 0.25rem"
      aria-label="\${args['aria-label']}"
      loop="\${args.loop}"
      initial-focus="\${args['initial-focus']}"
    >
      \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
      \${repeat(new Array(5).fill(0).map(() => [...fakeUserNamesList]).flat(), item => item, name => html\`<mdc-listitem @click="\${action('onclick')}" label="\${name}" variant="\${LISTITEM_VARIANTS.INSET_PILL}">
            <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
            <mdc-avatar
              slot="leading-controls"
              initials="\${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
            ></mdc-avatar>
            <mdc-button
              slot="trailing-controls"
              color="positive"
              prefix-icon="data-range-selection-bold"
              aria-label="mock label"
            ></mdc-button>
            <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
            <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
          </mdc-listitem>\`)}
    </mdc-list>\`
}`,...(W=(j=h.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const Xt=["Example","ListWithDivider","ScrollableListWithSelect","ListWithRemovalElements","InitialFocusAtBottom","ExpandingList","ScrollingList"];export{d as Example,$ as ExpandingList,L as InitialFocusAtBottom,p as ListWithDivider,u as ListWithRemovalElements,b as ScrollableListWithSelect,h as ScrollingList,Xt as __namedExportsOrder,Jt as default};
