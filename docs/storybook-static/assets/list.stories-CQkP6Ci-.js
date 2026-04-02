import{k as e}from"./iframe-z54V7R-I.js";import"./index-CZWmAPmy.js";import{K as Z,i as tt}from"./ref-Hzi73uoc.js";import{Q as r}from"./repeat-aqc-0uPC.js";import{c as et,s as it}from"./commonArgTypes-BG7EqI50.js";import{h as lt}from"./utils-B5QUENNQ.js";import{L as s}from"./listitem.constants-BYoKYJXd.js";import"./index-DUXo3SbP.js";import"./index-CohbsDxO.js";import"./index-DQoFgUPp.js";import"./index-DVSZoP5w.js";import"./index-DD2QHdNH.js";import"./index-B5KrUTtI.js";import"./index-50NDFR5O.js";import"./index-DVk561w3.js";import"./index-B71Un4Hn.js";import"./index-2xvw9iBZ.js";import"./index-BCDgnfbE.js";import"./index-DvL36OZW.js";import"./index-B6kAgLxb.js";import"./index-CwV7gzj9.js";import"./preload-helper-C1FmrZbK.js";import"./list.component-DKLVqyf9.js";import"./ListNavigationMixin-oyjSNFMM.js";import"./KeyDownHandledMixin-DzCOe6p0.js";import"./index-BxJNj_9N.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./CaptureDestroyEventForChildElement-COLyRYxe.js";import"./directive-Ctav8iJK.js";import"./if-defined-tLTANQnt.js";import"./IconNameMixin-CNPqIZ3u.js";import"./index-D3D2ApvG.js";import"./buttonsimple.component-CUu1iVGZ.js";import"./DisabledMixin-BPk196UL.js";import"./badge.constants-qYWyIjWR.js";import"./button.component-Dxa6i38J.js";import"./button.utils-rNW36Ji7.js";import"./index-D7StbR9N.js";import"./formfieldwrapper.constants-0CYF99Rz.js";import"./popover.constants-h7bp5Fij.js";import"./index-C7_vmDis.js";import"./popover.component-BDwe_Bpv.js";import"./BackdropMixin-6LYYjBLx.js";import"./index-8oav281r.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-CPRxXCJY.js";import"./FormInternalsMixin-cclbth7h.js";import"./formfieldwrapper.component-DX2OsQQ9.js";import"./index-DTrDRi1E.js";import"./listitem.component-Bc2ro6kX.js";import"./query-assigned-elements-C1zIRLYq.js";import"./toggle.constants-SO0AnDsq.js";import"./ControlTypeMixin-DhI03YhY.js";import"./index-DmdePjxU.js";import"./index-CsUJvLLZ.js";import"./menuitemradio.constants-CwHr4IhI.js";import"./menupopover.constants-CXKlV-JW.js";import"./menuitem.component-ClgOg7gH.js";import"./menuitemcheckbox.constants-BHt7opKv.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,c=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],at=t=>e` <mdc-list
    aria-label="${t["aria-label"]}"
    loop="${t.loop}"
    initial-focus="${t["initial-focus"]}"
    orientation="${t.orientation}"
  >
    ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
    ${r(c,i=>e`<mdc-listitem @click="${l("onclick")}" label="${i}" variant="${s.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
            initials="${[i.split(" ")[0][0],i.split(" ")[1][0]].join("")}"
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
  </mdc-list>`,me={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:at,argTypes:{textPassedToListHeader:{control:"text",description:"Text to be rendered in the list header component. This is a control in storybook only."},"aria-label":{control:"text"},loop:{control:"select",options:["true","false"],table:{defaultValue:{summary:"true"}}},orientation:{control:"select",options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"}}},...lt(["itemsStore"]),...et,...it}},d={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants",orientation:"vertical"}},p={render:t=>e`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${l("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${l("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},b={render:t=>e`
    <mdc-list aria-label="${t["aria-label"]}" style="height: 200px; overflow-y: auto;" id="scrollable-list">
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${r(c,i=>e`<mdc-listitem @click="${l("onclick")}" label="${i}" variant="${s.INSET_PILL}">
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
              initials="${[i.split(" ")[0][0],i.split(" ")[1][0]].join("")}"
            ></mdc-avatar>
          </mdc-listitem> `)}
    </mdc-list>
  `,args:{textPassedToListHeader:"Scrollable Participants List","aria-label":"View all participants"}},g={render:t=>{const i=a=>{const n=a.target.closest("mdc-listitem");n&&n.remove()},m=()=>{var o;const a=[...document.querySelector("mdc-list").querySelectorAll("mdc-listitem")];(o=a[a.length-1])==null||o.remove()};return e`
      <mdc-list aria-label="${t["aria-label"]}">
        ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${r(c,a=>e`<mdc-listitem @click="${l("onclick")}" label="${a}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls" @click="${i}"> Remove </mdc-button>
              <mdc-button slot="trailing-controls" @click="${m}"> Remove Last </mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
      <mdc-button @click=${m}>Remove Last</mdc-button>
    `}},u={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants","initial-focus":c.length-1}},h={render:t=>{const i=tt(),m=()=>{var x,y;const a=document.createElement("mdc-listitem");a.setAttribute("variant",s.INSET_PILL),a.setAttribute("label",`List Item ${(((x=i.value)==null?void 0:x.children.length)||0)+1}`);const o=document.createElement("mdc-button");o.setAttribute("slot","trailing-controls"),o.textContent="Action";const n=document.createElement("mdc-button");n.setAttribute("slot","trailing-controls"),n.textContent="Action 2",a.append(o,n),(y=i.value)==null||y.append(a)};return e`
      <mdc-list aria-label="${t["aria-label"]}" ${Z(i)}>
        ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${r(c.slice(0,4),a=>e`<mdc-listitem label="${a}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls">Action</mdc-button>
              <mdc-button slot="trailing-controls">Action 2</mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
      <mdc-button style="margin-top: 16px;" @click="${m}">Add Item</mdc-button>
    `}},L={render:t=>e`<mdc-list
      style="height: 400px; overflow-y: auto; padding: 0.25rem"
      aria-label="${t["aria-label"]}"
      loop="${t.loop}"
      initial-focus="${t["initial-focus"]}"
    >
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${r(new Array(5).fill(0).map(()=>[...c]).flat(),i=>i,i=>e`<mdc-listitem @click="${l("onclick")}" label="${i}" variant="${s.INSET_PILL}">
            <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
            <mdc-avatar
              slot="leading-controls"
              initials="${[i.split(" ")[0][0],i.split(" ")[1][0]].join("")}"
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
    </mdc-list>`},$={parameters:{docs:{description:{story:e`<mdc-text tagname="h1" type="heading-large-bold">Interactive Elements in list</mdc-text>
          <ul>
            <li>Interactive elements are focusable inside list items</li>
            <li>
              Clicking or pressing Enter/Space on them should change the selected row in the list without moving focus
            </li>
          </ul>`}}},render:()=>e`
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
  `},v={parameters:{docs:{description:{story:e`<mdc-text tagname="p" type="body-large-bold">Horizontal List Orientation</mdc-text>
          <ul>
            <li>List items are arranged horizontally, by setting orientation="horizontal"</li>
            <li>Use Left/Right arrow keys to navigate instead of Up/Down</li>
            <li>Home/End keys still move to first/last items</li>
          </ul>`}}},render:t=>e`
    <mdc-list
      aria-label="${t["aria-label"]}"
      orientation="horizontal"
      style="display: flex; gap: 12px; overflow-x: auto; padding: 12px;"
    >
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${r(c.slice(0,5),i=>e`<mdc-listitem
            @click="${l("onclick")}"
            label="${i}"
            variant="${s.INSET_PILL}"
            style="flex-shrink: 0; width: fit-content;"
          >
            <mdc-avatarbutton
              slot="leading-controls"
              initials="${[i.split(" ")[0][0],i.split(" ")[1][0]].join("")}"
            ></mdc-avatarbutton>
          </mdc-listitem> `)}
    </mdc-list>
  `,args:{"aria-label":"Horizontal participants list"}},k={parameters:{docs:{description:{story:e`<mdc-text tagname="p" type="body-large-bold">Nested List</mdc-text>
          <ul>
            <li>A list can be nested inside a list item to create hierarchical structures</li>
            <li>Each nested list maintains its own keyboard navigation context</li>
          </ul>`}}},render:t=>e`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?e`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${l("onclick")} label="Fruits">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Fruits sublist">
          <mdc-listitem @click=${l("onclick")} label="Apples"></mdc-listitem>
          <mdc-listitem @click=${l("onclick")} label="Bananas"></mdc-listitem>
          <mdc-listitem @click=${l("onclick")} label="Oranges"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="Vegetables">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Vegetables sublist">
          <mdc-listitem @click=${l("onclick")} label="Carrots"></mdc-listitem>
          <mdc-listitem @click=${l("onclick")} label="Broccoli"></mdc-listitem>
          <mdc-listitem @click=${l("onclick")} label="Spinach"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
      <mdc-listitem @click=${l("onclick")} label="Dairy">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Dairy sublist">
          <mdc-listitem @click=${l("onclick")} label="Milk"></mdc-listitem>
          <mdc-listitem @click=${l("onclick")} label="Cheese"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Grocery Categories","aria-label":"Grocery list with nested categories"}};var I,T,f;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    orientation: 'vertical'
  }
}`,...(f=(T=d.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var w,P,S;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(P=p.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var A,H,E;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(H=b.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var N,R,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(R=g.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var O,z,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    'initial-focus': fakeUserNamesList.length - 1
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var V,M,D;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(M=h.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var W,U,j;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(U=L.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var B,F,q;$.parameters={...$.parameters,docs:{...(B=$.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(F=$.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var G,K,Q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,J,X;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="p" type="body-large-bold">Nested List</mdc-text>
          <ul>
            <li>A list can be nested inside a list item to create hierarchical structures</li>
            <li>Each nested list maintains its own keyboard navigation context</li>
          </ul>\`
      }
    }
  },
  render: args => html\`
    <mdc-list aria-label="\${args['aria-label']}">
      \${args.textPassedToListHeader ? html\`<mdc-listheader slot="list-header" header-text="\${args.textPassedToListHeader}"></mdc-listheader>\` : ''}
      <mdc-listitem @click=\${action('onclick')} label="Fruits">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Fruits sublist">
          <mdc-listitem @click=\${action('onclick')} label="Apples"></mdc-listitem>
          <mdc-listitem @click=\${action('onclick')} label="Bananas"></mdc-listitem>
          <mdc-listitem @click=\${action('onclick')} label="Oranges"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="Vegetables">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Vegetables sublist">
          <mdc-listitem @click=\${action('onclick')} label="Carrots"></mdc-listitem>
          <mdc-listitem @click=\${action('onclick')} label="Broccoli"></mdc-listitem>
          <mdc-listitem @click=\${action('onclick')} label="Spinach"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
      <mdc-listitem @click=\${action('onclick')} label="Dairy">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Dairy sublist">
          <mdc-listitem @click=\${action('onclick')} label="Milk"></mdc-listitem>
          <mdc-listitem @click=\${action('onclick')} label="Cheese"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
    </mdc-list>
  \`,
  args: {
    textPassedToListHeader: 'Grocery Categories',
    'aria-label': 'Grocery list with nested categories'
  }
}`,...(X=(J=k.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const de=["Example","ListWithDivider","ScrollableListWithSelect","ListWithRemovalElements","InitialFocusAtBottom","ExpandingList","ScrollingList","ListWithInteractiveElements","HorizontalOrientation","NestedList"];export{d as Example,h as ExpandingList,v as HorizontalOrientation,u as InitialFocusAtBottom,p as ListWithDivider,$ as ListWithInteractiveElements,g as ListWithRemovalElements,k as NestedList,b as ScrollableListWithSelect,L as ScrollingList,de as __namedExportsOrder,me as default};
