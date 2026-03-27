import{a2 as pe,R as me,k as a,a4 as A,n as $,C as re,u as be}from"./iframe-DBAXEeb_.js";import"./index-0yvz8LgJ.js";import{T as W}from"./index-DlM2MNhc.js";import{C as ue,E as he}from"./CaptureDestroyEventForChildElement-Dq9FKVll.js";import{L as ve}from"./ListNavigationMixin-Bdtj-xKo.js";import{L as ge}from"./list.component-DneTVkNn.js";import{b as de,a as s}from"./utils-B5QUENNQ.js";import{c as xe,s as Se}from"./commonArgTypes-BG7EqI50.js";import"./index-CJ5KPy1j.js";import"./index-CvWzBfk2.js";import{Q as ye}from"./repeat-gwSwhFfd.js";import"./preload-helper-C1FmrZbK.js";import"./index-CyqGq4J2.js";import"./index-Bul3jdd3.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-DcVhp37-.js";import"./listitem.component-D2ouUEW9.js";import"./query-assigned-elements-BB93mBke.js";import"./DisabledMixin-CJ5fJ_db.js";import"./KeyDownHandledMixin-CGg5F37x.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DYVkDZAD.js";import"./DataAriaLabelMixin-BeMM70jK.js";import"./optgroup.constants-BCh8j1_U.js";import"./directive-Ctav8iJK.js";const fe=pe`
  :host {
    --mdc-listbox-max-height: auto;

    height: inherit;
    width: inherit;

    overflow-y: auto;
    max-height: var(--mdc-listbox-max-height);

    /* prevent focus ring clipping */
    padding: 0.25rem;
  }

  ::slotted(mdc-option) {
    width: 100%;
  }
`,Oe=[fe];var Ae=Object.defineProperty,L=(o,e,t,l)=>{for(var i=void 0,n=o.length-1,p;n>=0;n--)(p=o[n])&&(i=p(e,t,i)||i);return i&&Ae(e,t,i),i};const w=class w extends ve(ue(re)){constructor(){super(),this.loop="false",this.name=void 0,this.value=void 0,this.multiple=!1,this.itemsStore=new he(this,{isValidItem:this.isValidItem}),this.handleDestroyEvent=()=>{this.handleNoSelection()},this.addEventListener("click",this.handleClick),this.addEventListener("modified",this.handleModifiedEvent),this.addEventListener("destroyed",this.handleDestroyEvent)}connectedCallback(){super.connectedCallback(),this.role=me.LISTBOX}handleModifiedEvent(e){const t=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(t);break;case"disabled":this.itemsStore.delete(t);break;case"selected":this.multiple?this.syncValueToFirstSelected():this.setSelectedOption(t,!1,!1);break;case"unselected":this.multiple?this.syncValueToFirstSelected():this.handleNoSelection();break}}handleNoSelection(){this.getFirstSelectedOption()||(this.selectedOption=void 0,this.value=void 0)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${W}:not([disabled])`)}handleClick(e){const l=e.target.closest(W);!l||!this.isValidItem(l)||(this.multiple?this.toggleOptionSelection(l):this.setSelectedOption(l))}toggleOptionSelection(e){if(e.disabled||e.softDisabled)return;const t=e.hasAttribute("selected");e.toggleAttribute("selected",!t),this.syncValueToFirstSelected(),this.fireEvents()}getFirstSelectedOption(){return this.itemsStore.items.find(e=>e.matches("[selected]"))}syncValueToFirstSelected(){const e=this.getFirstSelectedOption();this.value=e==null?void 0:e.value,this.selectedOption=e??null}getSelectedValues(){return this.itemsStore.items.reduce((e,t)=>{const{value:l}=t;return t.hasAttribute("selected")&&l!==void 0&&e.push(l),e},[])}setInitialFocus(){const e=this.getFirstSelectedOption();if(e){const t=this.itemsStore.items.indexOf(e);if(t!==-1){this.resetTabIndexAndSetFocus(t,void 0,!1);return}}super.setInitialFocus()}updated(e){if(e.has("multiple")&&(this.multiple?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")),e.has("value")&&!this.multiple){const t=this.itemsStore.items.find(l=>l.value===this.value);t?this.setSelectedOption(t,!1):this.setSelectedOption(null,!1)}}setSelectedOption(e,t=!0,l=!0){e!=null&&e.disabled||e!=null&&e.softDisabled||(l&&this.updateSelectedInChildOptions(e),this.selectedOption=e,this.value=e==null?void 0:e.value,t&&this.fireEvents())}updateSelectedInChildOptions(e){this.itemsStore.items.forEach(t=>t.removeAttribute("selected")),e==null||e.toggleAttribute("selected",!0)}fireEvents(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value,selectedValues:this.getSelectedValues()},composed:!0,bubbles:!0}))}render(){return a`<slot part="container"></slot>`}};w.styles=[...ge.styles,...Oe];let d=w;L([$({type:String,reflect:!0})],d.prototype,"name");L([$({type:String,reflect:!0})],d.prototype,"value");L([$({type:Boolean,reflect:!0})],d.prototype,"multiple");L([A()],d.prototype,"selectedOption");const Le=be.constructTagName("listbox");d.register(Le);var Ce=Object.defineProperty,k=(o,e,t,l)=>{for(var i=void 0,n=o.length-1,p;n>=0;n--)(p=o[n])&&(i=p(e,t,i)||i);return i&&Ce(e,t,i),i};class C extends re{constructor(){super(),this.listItems=new Array(1e3).fill(!0),this.virtualData={virtualItems:[]},this.virtualizerProps={count:0,estimateSize:()=>0,getItemKey:e=>this.listItems[e]},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail},this.onscroll=null}connectedCallback(){super.connectedCallback(),this.updateVirtualProps()}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>36,getItemKey:e=>this.listItems[e]}}render(){return a`
      <div class="wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${ye(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>a`<mdc-option data-index="${e}" label="Option Label ${e+1}"></mdc-option>`)}
        </mdc-virtualizedlist>
      </div>
      <style>
        .wrapper {
          height: 100vh;
        }
      </style>
    `}createRenderRoot(){return this}}k([A()],C.prototype,"listItems");k([A()],C.prototype,"virtualData");k([A()],C.prototype,"virtualizerProps");C.register("mdc-listboxvirtualizedlist");const{action:r}=__STORYBOOK_MODULE_ACTIONS__,c=o=>a`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${o}
  </div>
`,$e=o=>c(a`
    <mdc-listbox @change="${r("onchange")}" name="${o.name}" value="${o.value}" ?multiple="${o.multiple}">
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `),Xe={title:"Components/listbox",tags:["autodocs"],component:"mdc-listbox",render:$e,argTypes:{name:{control:"text"},value:{control:"text"},multiple:{control:"boolean"},...de(["default"]),...xe,...Se}},m={args:{value:"losangeles"}},b={render:()=>c(a`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    `),...s()},u={render:()=>a`
    <div style="height: 35rem;">
      <mdc-listbox label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-optgroup label="Fruit">
          <mdc-option value="apple" label="Apples"></mdc-option>
          <mdc-option value="banana" label="Bananas"></mdc-option>
          <mdc-option value="cherry" label="Cherries"></mdc-option>
          <mdc-option value="damson" label="Damsons"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Vegetables" disabled>
          <mdc-option value="artichoke" label="Artichokes"></mdc-option>
          <mdc-option value="broccoli" label="Broccoli"></mdc-option>
          <mdc-option value="cabbage" label="Cabbages"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Fish">
          <mdc-option value="tuna" label="Tuna"></mdc-option>
          <mdc-option value="salmon" label="Salmon"></mdc-option>
        </mdc-optgroup>
      </mdc-listbox>
    </div>
  `,...s()},h={render:()=>c(a`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red" value="red"></mdc-option>
        <mdc-option label="Yellow" value="yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
          value="whiteblack"
        ></mdc-option>
        <mdc-option label="Green" value="green"></mdc-option>
      </mdc-listbox>
    `),...s()},v={render:()=>c(a`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications" value="mute"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps" value="apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy" value="message"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities" value="meeting"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave" value="leave"></mdc-option>
      </mdc-listbox>
    `),...s()},g={args:{placeholder:"Select an option",label:"Select option"},render:o=>c(a`
      <mdc-listbox placeholder="${o.placeholder}" label="${o.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    `)},x={args:{"--mdc-listbox-max-height":"18rem",placeholder:"Select an option",label:"Select option"},render:o=>c(a`
      <mdc-listbox placeholder="${o.placeholder}" label="${o.label}">
        ${Array.from({length:1e3}).map((e,t)=>a`<mdc-option label="Option Label ${t+1}"></mdc-option>`)}
      </mdc-listbox>
    `)},S={render:()=>{const o=Array.from({length:10},(t,l)=>a`<mdc-option label="Option ${l+1}" value="option${l+1}"></mdc-option>`);let e=null;return setTimeout(()=>{e=a`<mdc-option label="Delayed Option" value="optionDelayed"></mdc-option>`;const t=document.querySelector('mdc-listbox[label="Select option"]');if(t){const l=document.createElement("mdc-option");l.setAttribute("label","Delayed Option"),t.appendChild(l)}},2e3),c(a`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${o} ${e||""} </mdc-listbox>
    `)},argTypes:{...de(["name","data-aria-label","disabled","required","help-text-type","help-text"])},...s()},y={render:()=>c(a`
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-listbox[label="Select an option"]');t&&t.querySelectorAll("mdc-option").forEach((i,n)=>{n===0&&i.removeAttribute("selected"),n===1&&i.setAttribute("selected","")})}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-listbox[label="Select an option"]');t&&t.querySelectorAll("mdc-option").forEach(i=>{i.removeAttribute("selected")})}}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="${r("onchange")}"
        @click="${r("onclick")}"
        @keydown="${r("onkeydown")}"
        @focus="${r("onfocus")}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    `),...s()},f={render:()=>c(a`
      <mdc-listbox multiple @change="${r("onchange")}">
        <mdc-option value="apple" label="Apple"></mdc-option>
        <mdc-option value="banana" label="Banana" selected></mdc-option>
        <mdc-option value="cherry" label="Cherry"></mdc-option>
        <mdc-option value="date" label="Date" selected></mdc-option>
      </mdc-listbox>
    `),...s()},O={render:()=>c(a`
      <mdc-listbox @change="${r("onchange")}">
        <mdc-option value="user1" label="John Doe" secondary-label="john.doe@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user2" label="Jane Smith" secondary-label="jane.smith@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/64/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user3" label="Bob Wilson" secondary-label="bob.wilson@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/65/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user4" label="Alice Brown" secondary-label="alice.brown@example.com">
          <mdc-avatar slot="leading-controls" initials="AB" size="32"></mdc-avatar>
        </mdc-option>
      </mdc-listbox>
    `),...s()};var D,E,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 'losangeles'
  }
}`,...(B=(E=m.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var I,z,T;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(T=(z=b.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,_,F;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 35rem;">
      <mdc-listbox label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-optgroup label="Fruit">
          <mdc-option value="apple" label="Apples"></mdc-option>
          <mdc-option value="banana" label="Bananas"></mdc-option>
          <mdc-option value="cherry" label="Cherries"></mdc-option>
          <mdc-option value="damson" label="Damsons"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Vegetables" disabled>
          <mdc-option value="artichoke" label="Artichokes"></mdc-option>
          <mdc-option value="broccoli" label="Broccoli"></mdc-option>
          <mdc-option value="cabbage" label="Cabbages"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Fish">
          <mdc-option value="tuna" label="Tuna"></mdc-option>
          <mdc-option value="salmon" label="Salmon"></mdc-option>
        </mdc-optgroup>
      </mdc-listbox>
    </div>
  \`,
  ...hideAllControls()
}`,...(F=(_=u.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,R,q;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red" value="red"></mdc-option>
        <mdc-option label="Yellow" value="yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
          value="whiteblack"
        ></mdc-option>
        <mdc-option label="Green" value="green"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var P,N,j;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications" value="mute"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps" value="apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy" value="message"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities" value="meeting"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave" value="leave"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(j=(N=v.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var Y,G,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    \`)
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,U,H;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    '--mdc-listbox-max-height': '18rem',
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}">
        \${Array.from({
    length: 1000
  }).map((_, i) => html\`<mdc-option label="Option Label \${i + 1}"></mdc-option>\`)}
      </mdc-listbox>
    \`)
}`,...(H=(U=x.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var Q,X,Z;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const options = Array.from({
      length: 10
    }, (_, i) => html\`<mdc-option label="Option \${i + 1}" value="option\${i + 1}"></mdc-option>\`);
    let extraOption: TemplateResult | null = null;
    setTimeout(() => {
      extraOption = html\`<mdc-option label="Delayed Option" value="optionDelayed"></mdc-option>\`;
      const listbox = document.querySelector('mdc-listbox[label="Select option"]');
      if (listbox) {
        const option = document.createElement('mdc-option');
        option.setAttribute('label', 'Delayed Option');
        listbox.appendChild(option);
      }
    }, 2000);
    return wrapWithDiv(html\`
      <mdc-listbox placeholder="Select an option" label="Select option"> \${options} \${extraOption || ''} </mdc-listbox>
    \`);
  },
  argTypes: {
    ...disableControls(['name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  },
  ...hideAllControls()
}`,...(Z=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,oe;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const handleClick = () => {
      const listBox = document.querySelector('mdc-listbox[label="Select an option"]') as ListBox;
      if (listBox) {
        const options = listBox.querySelectorAll('mdc-option');
        options.forEach((option, idx) => {
          if (idx === 0) {
            option.removeAttribute('selected');
          }
          if (idx === 1) {
            option.setAttribute('selected', '');
          }
        });
      }
    };
    const handleClickRemove = () => {
      const listBox = document.querySelector('mdc-listbox[label="Select an option"]') as ListBox;
      if (listBox) {
        const options = listBox.querySelectorAll('mdc-option');
        options.forEach(option => {
          option.removeAttribute('selected');
        });
      }
    };
    return wrapWithDiv(html\`
      <mdc-button @click=\${handleClick}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=\${handleClickRemove}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="\${action('onchange')}"
        @click="\${action('onclick')}"
        @keydown="\${action('onkeydown')}"
        @focus="\${action('onfocus')}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    \`);
  },
  ...hideAllControls()
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ie,ae;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox multiple @change="\${action('onchange')}">
        <mdc-option value="apple" label="Apple"></mdc-option>
        <mdc-option value="banana" label="Banana" selected></mdc-option>
        <mdc-option value="cherry" label="Cherry"></mdc-option>
        <mdc-option value="date" label="Date" selected></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(ae=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var ne,ce,se;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox @change="\${action('onchange')}">
        <mdc-option value="user1" label="John Doe" secondary-label="john.doe@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user2" label="Jane Smith" secondary-label="jane.smith@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/64/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user3" label="Bob Wilson" secondary-label="bob.wilson@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/65/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user4" label="Alice Brown" secondary-label="alice.brown@example.com">
          <mdc-avatar slot="leading-controls" initials="AB" size="32"></mdc-avatar>
        </mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(se=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};const Ze=["Example","ListboxWithSecondaryLabel","ListboxWithGroups","ListboxWithLongOptionText","ListboxWithIconOptions","ListboxWithVirtualizedList","ListboxWithFixedHeight","ListboxWithDynamicOptions","ListboxWithChangingSelectedAfterMount","Multiselect","ListboxWithAvatarInOptions"];export{m as Example,O as ListboxWithAvatarInOptions,y as ListboxWithChangingSelectedAfterMount,S as ListboxWithDynamicOptions,x as ListboxWithFixedHeight,u as ListboxWithGroups,v as ListboxWithIconOptions,h as ListboxWithLongOptionText,b as ListboxWithSecondaryLabel,g as ListboxWithVirtualizedList,f as Multiselect,Ze as __namedExportsOrder,Xe as default};
