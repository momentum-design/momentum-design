import{k as i}from"./iframe-CYZ064vw.js";import"./index-BTqFDNa1.js";import{K as lt,i as at}from"./ref-CpjbPkH6.js";import{Q as n}from"./repeat-C0I5Zcjc.js";import{c as st,s as ot}from"./commonArgTypes-BG7EqI50.js";import{h as ct}from"./utils-B5QUENNQ.js";import{L as s}from"./listitem.constants-CBNLPVQ0.js";import"./index-BnAQXDVh.js";import"./index-brpWbpUH.js";import"./index-CbK4qKYb.js";import"./index-DM419G9w.js";import"./index-Cd2uV_sZ.js";import"./index-DytwX3Ew.js";import"./index-C-a6jsM_.js";import"./index-CPFW1djj.js";import"./index-CQT5f8DH.js";import"./index-D_aaHV6-.js";import"./index-sees4Fcm.js";import"./index-CKWj35Yf.js";import"./index-DZpKCd0q.js";import"./index-DWBjme5d.js";import"./index-wBn8TcpB.js";import"./preload-helper-C1FmrZbK.js";import"./list.component-BvRDRKtS.js";import"./ListNavigationMixin-CFRyGBG9.js";import"./KeyDownHandledMixin-DGzJ0rYO.js";import"./index-Cm4DuzN6.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./CaptureDestroyEventForChildElement-Dg8hazqV.js";import"./directive-Ctav8iJK.js";import"./IconNameMixin-DeWqQ5kO.js";import"./index-CrTG-VGM.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./badge.constants-BGT540PQ.js";import"./button.component-DTdegw5n.js";import"./button.utils-rNW36Ji7.js";import"./index-BPbaFssc.js";import"./formfieldwrapper.constants-pFvOs8lW.js";import"./popover.constants-gNuL8rzb.js";import"./index-z2OdZlVq.js";import"./popover.component-BIUkn_Yc.js";import"./BackdropMixin-DDg7Q_Id.js";import"./index-BiMq2Xfh.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-BjIJ89BI.js";import"./FormInternalsMixin-B818aAc-.js";import"./formfieldwrapper.component-BfRcMfn_.js";import"./chip.component-CVPLw_oi.js";import"./staticchip.component-CaELqiF0.js";import"./index-DTrDRi1E.js";import"./listitem.component-Db8W56sD.js";import"./query-assigned-elements-D2XoKueq.js";import"./toggle.constants-B3PJkBWY.js";import"./ControlTypeMixin-exIoapIA.js";import"./index-B4MIJwAF.js";import"./index-BzXIsb3j.js";import"./menuitemradio.constants-CrIqXSV_.js";import"./menupopover.constants-C5XzAs8k.js";import"./menuitem.component-CEMs2qRx.js";import"./menuitemcheckbox.constants-Cy-h6jCK.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c=["Maria Simpson","Diana Rees","Fiona Wallace","Abigail Reid","Theresa Miller","Andrea Wright","Natalie Hunter","Bernadette Carr","Samantha Robertson","Deirdre Clark"],rt=t=>i` <mdc-list
    aria-label="${t["aria-label"]}"
    loop="${t.loop}"
    initial-focus="${t["initial-focus"]}"
    orientation="${t.orientation}"
  >
    ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
    ${n(c,l=>i`<mdc-listitem @click="${e("onclick")}" label="${l}" variant="${s.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
            initials="${[l.split(" ")[0][0],l.split(" ")[1][0]].join("")}"
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
  </mdc-list>`,he={title:"Components/list",tags:["autodocs"],component:"mdc-list",render:rt,argTypes:{textPassedToListHeader:{control:"text",description:"Text to be rendered in the list header component. This is a control in storybook only."},"aria-label":{control:"text"},loop:{control:"select",options:["true","false"],table:{defaultValue:{summary:"true"}}},orientation:{control:"select",options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"}}},...ct(["itemsStore"]),...st,...ot}},d={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants",orientation:"vertical"}},u={render:t=>i`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${e("onclick")} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${e("onclick")} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${e("onclick")} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${e("onclick")} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${e("onclick")} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${e("onclick")} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Participants List","aria-label":"View all participants"}},p={render:t=>i`
    <mdc-list aria-label="${t["aria-label"]}" style="height: 200px; overflow-y: auto;" id="scrollable-list">
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${n(c,l=>i`<mdc-listitem @click="${e("onclick")}" label="${l}" variant="${s.INSET_PILL}">
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
              initials="${[l.split(" ")[0][0],l.split(" ")[1][0]].join("")}"
            ></mdc-avatar>
          </mdc-listitem> `)}
    </mdc-list>
  `,args:{textPassedToListHeader:"Scrollable Participants List","aria-label":"View all participants"}},b={render:t=>{const l=a=>{const r=a.target.closest("mdc-listitem");r&&r.remove()},m=()=>{var o;const a=[...document.querySelector("mdc-list").querySelectorAll("mdc-listitem")];(o=a[a.length-1])==null||o.remove()};return i`
      <mdc-list aria-label="${t["aria-label"]}">
        ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${n(c,a=>i`<mdc-listitem @click="${e("onclick")}" label="${a}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls" @click="${l}"> Remove </mdc-button>
              <mdc-button slot="trailing-controls" @click="${m}"> Remove Last </mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
      <mdc-button @click=${m}>Remove Last</mdc-button>
    `}},g={args:{textPassedToListHeader:"Participants List","aria-label":"View all participants","initial-focus":c.length-1}},h={render:t=>{const l=at(),m=()=>{var T,I;const a=document.createElement("mdc-listitem");a.setAttribute("variant",s.INSET_PILL),a.setAttribute("label",`List Item ${(((T=l.value)==null?void 0:T.children.length)||0)+1}`);const o=document.createElement("mdc-button");o.setAttribute("slot","trailing-controls"),o.textContent="Action";const r=document.createElement("mdc-button");r.setAttribute("slot","trailing-controls"),r.textContent="Action 2",a.append(o,r),(I=l.value)==null||I.append(a)};return i`
      <mdc-list aria-label="${t["aria-label"]}" ${lt(l)}>
        ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
        ${n(c.slice(0,4),a=>i`<mdc-listitem label="${a}" variant="${s.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[a.split(" ")[0][0],a.split(" ")[1][0]].join("")}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls">Action</mdc-button>
              <mdc-button slot="trailing-controls">Action 2</mdc-button>
            </mdc-listitem> `)}
      </mdc-list>
      <mdc-button style="margin-top: 16px;" @click="${m}">Add Item</mdc-button>
    `}},v={render:t=>i`<mdc-list
      style="height: 400px; overflow-y: auto; padding: 0.25rem"
      aria-label="${t["aria-label"]}"
      loop="${t.loop}"
      initial-focus="${t["initial-focus"]}"
    >
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      ${n(new Array(5).fill(0).map(()=>[...c]).flat(),l=>l,l=>i`<mdc-listitem @click="${e("onclick")}" label="${l}" variant="${s.INSET_PILL}">
            <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
            <mdc-avatar
              slot="leading-controls"
              initials="${[l.split(" ")[0][0],l.split(" ")[1][0]].join("")}"
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
    </mdc-list>`},L={parameters:{docs:{description:{story:i`<mdc-text tagname="h1" type="heading-large-bold">Interactive Elements in list</mdc-text>
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
      ${n(c.slice(0,5),l=>i`<mdc-listitem
            @click="${e("onclick")}"
            label="${l}"
            variant="${s.INSET_PILL}"
            style="flex-shrink: 0; width: fit-content;"
          >
            <mdc-avatarbutton
              slot="leading-controls"
              initials="${[l.split(" ")[0][0],l.split(" ")[1][0]].join("")}"
            ></mdc-avatarbutton>
          </mdc-listitem> `)}
    </mdc-list>
  `,args:{"aria-label":"Horizontal participants list"}},k={parameters:{docs:{description:{story:i`<mdc-text tagname="p" type="body-large-bold">Nested List</mdc-text>
          <ul>
            <li>A list can be nested inside a list item to create hierarchical structures</li>
            <li>Each nested list maintains its own keyboard navigation context</li>
          </ul>`}}},render:t=>i`
    <mdc-list aria-label="${t["aria-label"]}">
      ${t.textPassedToListHeader?i`<mdc-listheader slot="list-header" header-text="${t.textPassedToListHeader}"></mdc-listheader>`:""}
      <mdc-listitem @click=${e("onclick")} label="Fruits">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Fruits sublist">
          <mdc-listitem @click=${e("onclick")} label="Apples"></mdc-listitem>
          <mdc-listitem @click=${e("onclick")} label="Bananas"></mdc-listitem>
          <mdc-listitem @click=${e("onclick")} label="Oranges"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
      <mdc-listitem @click=${e("onclick")} label="Vegetables">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Vegetables sublist">
          <mdc-listitem @click=${e("onclick")} label="Carrots"></mdc-listitem>
          <mdc-listitem @click=${e("onclick")} label="Broccoli"></mdc-listitem>
          <mdc-listitem @click=${e("onclick")} label="Spinach"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
      <mdc-listitem @click=${e("onclick")} label="Dairy">
        <mdc-icon slot="leading-controls" name="category-bold"></mdc-icon>
        <mdc-list slot="trailing-controls" aria-label="Dairy sublist">
          <mdc-listitem @click=${e("onclick")} label="Milk"></mdc-listitem>
          <mdc-listitem @click=${e("onclick")} label="Cheese"></mdc-listitem>
        </mdc-list>
      </mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Grocery Categories","aria-label":"Grocery list with nested categories"}},x={parameters:{docs:{description:{story:i` <mdc-text tagname="h1" type="body-large-bold"
            >Handle list with oversized items in spatial navigation</mdc-text
          >
          <mdc-text tagname="p" type="body-large-bold">List item marked:</mdc-text>
          <ul>
            <li style="padding-block-end: 0.5rem">
              <mdc-chip
                color="lime"
                label="Scroll active element in the given direction when it does not fit into the scroll view"
              ></mdc-chip>
            </li>
            <li><mdc-chip color="pink" label="No scroll"></mdc-chip></li>
          </ul>`}}},render:t=>i`
    <style>
      mdc-listitem {
        outline: 2px solid var(--mds-color-theme-background-label-lime-active);
        outline-offset: -3px;
      }
      mdc-listitem[data-spatial-noscroll] {
        outline: 2px solid var(--mds-color-theme-background-label-pink-active);
      }
    </style>
    <mdc-list
      aria-label="${t["aria-label"]}"
      style="height: 200px; overflow-y: auto; padding: 0.5rem"
      id="scrollable-list"
    >
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero. Vestibulum lacinia dignissim efficitur. Ut quis velit at lectus ultricies
          faucibus at a risus. Nunc accumsan augue euismod nibh bibendum ullamcorper. Mauris bibendum elit nec orci
          eleifend, ut ornare risus rutrum. Maecenas sit amet magna placerat, ultricies lectus in, malesuada quam. Donec
          vestibulum nisi eu viverra vehicula. Morbi sem tellus, faucibus ac ligula interdum, suscipit porttitor nunc.
          Nullam sit amet justo eros. Curabitur et tincidunt justo. Mauris lobortis velit nec porttitor gravida. Proin
          elementum aliquet ante at tincidunt.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero. Vestibulum lacinia dignissim efficitur. Ut quis velit at lectus ultricies
          faucibus at a risus. Nunc accumsan augue euismod nibh bibendum ullamcorper. Mauris bibendum elit nec orci
          eleifend, ut ornare risus rutrum. Maecenas sit amet magna placerat, ultricies lectus in, malesuada quam. Donec
          vestibulum nisi eu viverra vehicula. Morbi sem tellus, faucibus ac ligula interdum, suscipit porttitor nunc.
          Nullam sit amet justo eros. Curabitur et tincidunt justo. Mauris lobortis velit nec porttitor gravida. Proin
          elementum aliquet ante at tincidunt.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}" data-spatial-noscroll>
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}" data-spatial-noscroll>
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero. Vestibulum lacinia dignissim efficitur. Ut quis velit at lectus ultricies
          faucibus at a risus. Nunc accumsan augue euismod nibh bibendum ullamcorper. Mauris bibendum elit nec orci
          eleifend, ut ornare risus rutrum. Maecenas sit amet magna placerat, ultricies lectus in, malesuada quam. Donec
          vestibulum nisi eu viverra vehicula. Morbi sem tellus, faucibus ac ligula interdum, suscipit porttitor nunc.
          Nullam sit amet justo eros. Curabitur et tincidunt justo. Mauris lobortis velit nec porttitor gravida. Proin
          elementum aliquet ante at tincidunt.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="${e("onclick")}" variant="${s.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
        </mdc-text>
      </mdc-listitem>
    </mdc-list>
  `,args:{textPassedToListHeader:"Scrollable Participants List","aria-label":"View all participants"}};var y,P,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    orientation: 'vertical'
  }
}`,...(f=(P=d.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var E,S,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var A,w,q;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(q=(w=p.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var R,H,_;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(H=b.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var V,M,C;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    'initial-focus': fakeUserNamesList.length - 1
  }
}`,...(C=(M=g.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var O,j,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(j=h.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var G,D,U;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(D=v.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var W,B,F;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(B=L.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var K,Q,Y;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var J,X,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var tt,et,it;x.parameters={...x.parameters,docs:{...(tt=x.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\` <mdc-text tagname="h1" type="body-large-bold"
            >Handle list with oversized items in spatial navigation</mdc-text
          >
          <mdc-text tagname="p" type="body-large-bold">List item marked:</mdc-text>
          <ul>
            <li style="padding-block-end: 0.5rem">
              <mdc-chip
                color="lime"
                label="Scroll active element in the given direction when it does not fit into the scroll view"
              ></mdc-chip>
            </li>
            <li><mdc-chip color="pink" label="No scroll"></mdc-chip></li>
          </ul>\`
      }
    }
  },
  render: args => html\`
    <style>
      mdc-listitem {
        outline: 2px solid var(--mds-color-theme-background-label-lime-active);
        outline-offset: -3px;
      }
      mdc-listitem[data-spatial-noscroll] {
        outline: 2px solid var(--mds-color-theme-background-label-pink-active);
      }
    </style>
    <mdc-list
      aria-label="\${args['aria-label']}"
      style="height: 200px; overflow-y: auto; padding: 0.5rem"
      id="scrollable-list"
    >
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero. Vestibulum lacinia dignissim efficitur. Ut quis velit at lectus ultricies
          faucibus at a risus. Nunc accumsan augue euismod nibh bibendum ullamcorper. Mauris bibendum elit nec orci
          eleifend, ut ornare risus rutrum. Maecenas sit amet magna placerat, ultricies lectus in, malesuada quam. Donec
          vestibulum nisi eu viverra vehicula. Morbi sem tellus, faucibus ac ligula interdum, suscipit porttitor nunc.
          Nullam sit amet justo eros. Curabitur et tincidunt justo. Mauris lobortis velit nec porttitor gravida. Proin
          elementum aliquet ante at tincidunt.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero. Vestibulum lacinia dignissim efficitur. Ut quis velit at lectus ultricies
          faucibus at a risus. Nunc accumsan augue euismod nibh bibendum ullamcorper. Mauris bibendum elit nec orci
          eleifend, ut ornare risus rutrum. Maecenas sit amet magna placerat, ultricies lectus in, malesuada quam. Donec
          vestibulum nisi eu viverra vehicula. Morbi sem tellus, faucibus ac ligula interdum, suscipit porttitor nunc.
          Nullam sit amet justo eros. Curabitur et tincidunt justo. Mauris lobortis velit nec porttitor gravida. Proin
          elementum aliquet ante at tincidunt.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}" data-spatial-noscroll>
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}" data-spatial-noscroll>
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
          Vestibulum lobortis sollicitudin arcu ultricies tristique. Pellentesque iaculis risus condimentum purus ornare
          egestas. Proin vitae augue libero. Vestibulum lacinia dignissim efficitur. Ut quis velit at lectus ultricies
          faucibus at a risus. Nunc accumsan augue euismod nibh bibendum ullamcorper. Mauris bibendum elit nec orci
          eleifend, ut ornare risus rutrum. Maecenas sit amet magna placerat, ultricies lectus in, malesuada quam. Donec
          vestibulum nisi eu viverra vehicula. Morbi sem tellus, faucibus ac ligula interdum, suscipit porttitor nunc.
          Nullam sit amet justo eros. Curabitur et tincidunt justo. Mauris lobortis velit nec porttitor gravida. Proin
          elementum aliquet ante at tincidunt.
        </mdc-text>
      </mdc-listitem>
      <mdc-listitem @click="\${action('onclick')}" variant="\${LISTITEM_VARIANTS.INSET_RECTANGLE}">
        <mdc-text slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium erat ac egestas molestie.
        </mdc-text>
      </mdc-listitem>
    </mdc-list>
  \`,
  args: {
    textPassedToListHeader: 'Scrollable Participants List',
    'aria-label': 'View all participants'
  }
}`,...(it=(et=x.parameters)==null?void 0:et.docs)==null?void 0:it.source}}};const ve=["Example","ListWithDivider","ScrollableListWithSelect","ListWithRemovalElements","InitialFocusAtBottom","ExpandingList","ScrollingList","ListWithInteractiveElements","HorizontalOrientation","NestedList","ScrollableListWithLongListItems"];export{d as Example,h as ExpandingList,$ as HorizontalOrientation,g as InitialFocusAtBottom,u as ListWithDivider,L as ListWithInteractiveElements,b as ListWithRemovalElements,k as NestedList,x as ScrollableListWithLongListItems,p as ScrollableListWithSelect,v as ScrollingList,ve as __namedExportsOrder,he as default};
