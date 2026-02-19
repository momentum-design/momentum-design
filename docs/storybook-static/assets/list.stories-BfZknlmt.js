import{k as i}from"./iframe-M3ijzwy0.js";import"./index-CFQLQQ7R.js";import{K as Y,i as G}from"./ref-zAZ-xlUT.js";import{Q as c}from"./repeat-JnDbo4I0.js";import{c as J,s as X}from"./commonArgTypes-BG7EqI50.js";import{h as Z}from"./utils-B5QUENNQ.js";import{b as s}from"./listitem.component-WzphvcOv.js";import"./index-XEXiAHBa.js";import"./index-B8hadIjA.js";import"./index-Cnj2AI4u.js";import"./index-DWCYdM_5.js";import"./index-ZA_zkJd8.js";import"./index-JPpbG9nX.js";import"./index-D2zvpdtC.js";import"./index-kIPlukn-.js";import"./index-Bb7rs6L2.js";import"./index-BpwA3v_a.js";import"./index-88KDEDVU.js";import"./index-Lt12Syb0.js";import"./index-DulqVEHk.js";import"./index-ClsXh8U8.js";import"./preload-helper-C1FmrZbK.js";import"./ListNavigationMixin-DltgCHy-.js";import"./KeyDownHandledMixin-CnuZvsMv.js";import"./index-BbwzIs6v.js";import"./CaptureDestroyEventForChildElement-B9cC0Ah9.js";import"./directive-Ctav8iJK.js";import"./query-assigned-elements-DJCBQZB3.js";import"./DisabledMixin-7EXHhexm.js";import"./if-defined-D0L9-6S-.js";import"./IconNameMixin-CwMrXxQY.js";import"./index-3cxKMfsG.js";import"./buttonsimple.component-DWNQU9p4.js";import"./badge.constants-CE6lYwGp.js";import"./button.component-C4UfzUmj.js";import"./button.utils-rNW36Ji7.js";import"./index-UmCxYoX7.js";import"./formfieldwrapper.constants-BayEAJRs.js";import"./popover.constants-53Sbideg.js";import"./index-C6RLDR4F.js";import"./popover.component-8kUPUpQF.js";import"./BackdropMixin-snl_Hu5n.js";import"./index-D1JK9EFs.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-By13sHn4.js";import"./FormInternalsMixin-CqOscAxO.js";import"./formfieldwrapper.component-BawKyVHf.js";import"./index-DTrDRi1E.js";import"./toggle.constants-Drp3JzyF.js";import"./ControlTypeMixin-_-zX3Tiu.js";import"./index-DI4lBf13.js";import"./index-0zGS3K33.js";import"./menuitemradio.constants-Cm2-yWYR.js";import"./menupopover.constants-CWZVoKYn.js";import"./menuitem.component-DfCY4DBj.js";import"./menuitemcheckbox.constants-BZKEP3zt.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,n=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],tt=t=>i` <mdc-list
    aria-label="${t["aria-label"]}"
    loop="${t.loop}"
    initial-focus="${t["initial-focus"]}"
    orientation="${t.orientation}"
  >
    ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
    ${c(n,e=>i`<mdc-listitem @click="${a("onclick")}" label="${e}" variant="${s.INSET_PILL}">
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
  </mdc-list>`,le={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:tt,argTypes:{textPassedToListHeader:{control:"text",description:"Text to be rendered in the list header component. This is a control in storybook only."},"aria-label":{control:"text"},loop:{control:"select",options:["true","false"],table:{defaultValue:{summary:"true"}}},orientation:{control:"select",options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"}}},...Z(["itemsStore"]),...J,...X}},d={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants",orientation:"vertical"}},p={render:t=>i`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${a("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${a("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${a("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${a("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${a("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${a("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},b={render:t=>i`
    <mdc-list aria-label="${t["aria-label"]}" style="height: 200px; overflow-y: auto;" id="scrollable-list">
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${c(n,e=>i`<mdc-listitem @click="${a("onclick")}" label="${e}" variant="${s.INSET_PILL}">
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
  `,args:{textPassedToListHeader:"Scrollable Participants List","aria-label":"View all participants"}},u={render:t=>{const e=l=>{const r=l.target.closest("mdc-listitem");r&&r.remove()},m=()=>{var o;const l=[...document.querySelector("mdc-list").querySelectorAll("mdc-listitem")];(o=l[l.length-1])==null||o.remove()};return i`
      <mdc-list aria-label="${t["aria-label"]}">
        ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${c(n,l=>i`<mdc-listitem @click="${a("onclick")}" label="${l}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[l.split(" ")[0][0],l.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls" @click="${e}"> Remove </mdc-button>
              <mdc-button slot="trailing-controls" @click="${m}"> Remove Last </mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
      <mdc-button @click=${m}>Remove Last</mdc-button>
    `}},g={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants","initial-focus":n.length-1}},h={render:t=>{const e=G(),m=()=>{var x,I;const l=document.createElement("mdc-listitem");l.setAttribute("variant",s.INSET_PILL),l.setAttribute("label",`List Item ${(((x=e.value)==null?void 0:x.children.length)||0)+1}`);const o=document.createElement("mdc-button");o.setAttribute("slot","trailing-controls"),o.textContent="Action";const r=document.createElement("mdc-button");r.setAttribute("slot","trailing-controls"),r.textContent="Action 2",l.append(o,r),(I=e.value)==null||I.append(l)};return i`
      <mdc-list aria-label="${t["aria-label"]}" ${Y(e)}>
        ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${c(n.slice(0,4),l=>i`<mdc-listitem label="${l}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[l.split(" ")[0][0],l.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls">Action</mdc-button>
              <mdc-button slot="trailing-controls">Action 2</mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
      <mdc-button style="margin-top: 16px;" @click="${m}">Add Item</mdc-button>
    `}},L={render:t=>i`<mdc-list
      style="height: 400px; overflow-y: auto; padding: 0.25rem"
      aria-label="${t["aria-label"]}"
      loop="${t.loop}"
      initial-focus="${t["initial-focus"]}"
    >
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${c(new Array(5).fill(0).map(()=>[...n]).flat(),e=>e,e=>i`<mdc-listitem @click="${a("onclick")}" label="${e}" variant="${s.INSET_PILL}">
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
    </mdc-list>`},v={parameters:{docs:{description:{story:i`<mdc-text tagname="h1" type="heading-large-bold">Interactive Elements in list</mdc-text>
          <ul>
            <li>Interactive elements are focusable inside list items</li>
            <li>
              Clicking or pressing Enter/Space on them should change the selected row in the list without moving focus
            </li>
          </ul>`}}},render:()=>i`
    <mdc-text tagname="h2" type="heading-midsize-bold">With stock list items</mdc-text>
    <mdc-list>
      <mdc-listitem label="List item with button">
        List item with button
        <mdc-button slot="trailing-controls" variant="secondary">Action</mdc-button>
      </mdc-listitem>
      <mdc-listitem label="List item with toggle">
        List item with toggle
        <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      </mdc-listitem>
      <mdc-listitem label="List item with badge">
        List item with menu
        <div slot="trailing-controls">
          <mdc-button id="copy-menu-trigger-1" variant="secondary" prefix-icon="more-bold"></mdc-button>
          <mdc-menupopover triggerID="copy-menu-trigger-1" placement="bottom" show-arrow>
            <mdc-menuitem label="Copy"></mdc-menuitem>
          </mdc-menupopover>
        </div>
      </mdc-listitem>
    </mdc-list>

    <mdc-text tagname="h2" type="heading-midsize-bold">With customised list items</mdc-text>
    <mdc-list>
      <mdc-listitem label="List item with button">
        <div slot="content">
          List item with button
          <mdc-button slot="trailing-controls" variant="secondary">Action</mdc-button>
        </div>
      </mdc-listitem>
      <mdc-listitem label="List item with toggle">
        <div slot="content">
          List item with toggle
          <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        </div>
      </mdc-listitem>
      <mdc-listitem label="List item with badge">
        <div slot="content">
          List item with menu
          <div slot="trailing-controls">
            <mdc-button id="copy-menu-trigger-2" variant="secondary" prefix-icon="more-bold"></mdc-button>
            <mdc-menupopover triggerID="copy-menu-trigger-2" placement="bottom" show-arrow>
              <mdc-menuitem label="Copy"></mdc-menuitem>
            </mdc-menupopover>
          </div>
        </div>
      </mdc-listitem>
    </mdc-list>
  `},$={parameters:{docs:{description:{story:i`<mdc-text tagname="p" type="body-large-bold">Horizontal List Orientation</mdc-text>
          <ul>
            <li>List items are arranged horizontally, by setting orientation="horizontal"</li>
            <li>Use Left/Right arrow keys to navigate instead of Up/Down</li>
            <li>Home/End keys still move to first/last items</li>
          </ul>`}}},render:t=>i`
    <mdc-list
      aria-label="${t["aria-label"]}"
      orientation="horizontal"
      style="display: flex; gap: 12px; overflow-x: auto; padding: 12px;"
    >
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${c(n.slice(0,5),e=>i`<mdc-listitem
            @click="${a("onclick")}"
            label="${e}"
            variant="${s.INSET_PILL}"
            style="flex-shrink: 0; width: fit-content;"
          >
            <mdc-avatarbutton
              slot="leading-controls"
              initials="${[e.split(" ")[0][0],e.split(" ")[1][0]].join("")}"
            ></mdc-avatarbutton>
          </mdc-listitem> `)}
    </mdc-list>
  `,args:{"aria-label":"Horizontal participants list"}};var k,y,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    orientation: 'vertical'
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,w,P;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(w=p.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,A,H;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(A=b.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var E,R,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const handleRemoveItem = (event: Event) => {
      const button = event.target as HTMLElement;
      const listItem = button.closest('mdc-listitem');
      if (listItem) {
        listItem.remove();
      }
    };
    const removeLast = () => {
      const items = [...document.querySelector('mdc-list')!.querySelectorAll('mdc-listitem')];
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
      <mdc-button @click=\${removeLast}>Remove Last</mdc-button>
    \`;
  }
}`,...(N=(R=u.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var _,O,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    'initial-focus': fakeUserNamesList.length - 1
  }
}`,...(z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var V,C,M;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(C=h.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var W,U,j;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(U=L.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var D,q,B;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="h1" type="heading-large-bold">Interactive Elements in list</mdc-text>
          <ul>
            <li>Interactive elements are focusable inside list items</li>
            <li>
              Clicking or pressing Enter/Space on them should change the selected row in the list without moving focus
            </li>
          </ul>\`
      }
    }
  },
  render: () => html\`
    <mdc-text tagname="h2" type="heading-midsize-bold">With stock list items</mdc-text>
    <mdc-list>
      <mdc-listitem label="List item with button">
        List item with button
        <mdc-button slot="trailing-controls" variant="secondary">Action</mdc-button>
      </mdc-listitem>
      <mdc-listitem label="List item with toggle">
        List item with toggle
        <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
      </mdc-listitem>
      <mdc-listitem label="List item with badge">
        List item with menu
        <div slot="trailing-controls">
          <mdc-button id="copy-menu-trigger-1" variant="secondary" prefix-icon="more-bold"></mdc-button>
          <mdc-menupopover triggerID="copy-menu-trigger-1" placement="bottom" show-arrow>
            <mdc-menuitem label="Copy"></mdc-menuitem>
          </mdc-menupopover>
        </div>
      </mdc-listitem>
    </mdc-list>

    <mdc-text tagname="h2" type="heading-midsize-bold">With customised list items</mdc-text>
    <mdc-list>
      <mdc-listitem label="List item with button">
        <div slot="content">
          List item with button
          <mdc-button slot="trailing-controls" variant="secondary">Action</mdc-button>
        </div>
      </mdc-listitem>
      <mdc-listitem label="List item with toggle">
        <div slot="content">
          List item with toggle
          <mdc-toggle slot="trailing-controls" data-aria-label="mock label" size="compact"></mdc-toggle>
        </div>
      </mdc-listitem>
      <mdc-listitem label="List item with badge">
        <div slot="content">
          List item with menu
          <div slot="trailing-controls">
            <mdc-button id="copy-menu-trigger-2" variant="secondary" prefix-icon="more-bold"></mdc-button>
            <mdc-menupopover triggerID="copy-menu-trigger-2" placement="bottom" show-arrow>
              <mdc-menuitem label="Copy"></mdc-menuitem>
            </mdc-menupopover>
          </div>
        </div>
      </mdc-listitem>
    </mdc-list>
  \`
}`,...(B=(q=v.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,K,Q;$.parameters={...$.parameters,docs:{...(F=$.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="p" type="body-large-bold">Horizontal List Orientation</mdc-text>
          <ul>
            <li>List items are arranged horizontally, by setting orientation="horizontal"</li>
            <li>Use Left/Right arrow keys to navigate instead of Up/Down</li>
            <li>Home/End keys still move to first/last items</li>
          </ul>\`
      }
    }
  },
  render: args => html\`
    <mdc-list
      aria-label="\${args['aria-label']}"
      orientation="horizontal"
      style="display: flex; gap: 12px; overflow-x: auto; padding: 12px;"
    >
      \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
      \${repeat(fakeUserNamesList.slice(0, 5), name => html\`<mdc-listitem
            @click="\${action('onclick')}"
            label="\${name}"
            variant="\${LISTITEM_VARIANTS.INSET_PILL}"
            style="flex-shrink: 0; width: fit-content;"
          >
            <mdc-avatarbutton
              slot="leading-controls"
              initials="\${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
            ></mdc-avatarbutton>
          </mdc-listitem> \`)}
    </mdc-list>
  \`,
  args: {
    'aria-label': 'Horizontal participants list'
  }
}`,...(Q=(K=$.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ae=["Example","ListWithDivider","ScrollableListWithSelect","ListWithRemovalElements","InitialFocusAtBottom","ExpandingList","ScrollingList","ListWithInteractiveElements","HorizontalOrientation"];export{d as Example,h as ExpandingList,$ as HorizontalOrientation,g as InitialFocusAtBottom,p as ListWithDivider,v as ListWithInteractiveElements,u as ListWithRemovalElements,b as ScrollableListWithSelect,L as ScrollingList,ae as __namedExportsOrder,le as default};
