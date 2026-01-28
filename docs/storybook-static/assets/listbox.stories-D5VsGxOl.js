import{X as oe,R as le,k as i,n as J,a1 as f,H as ee,u as ie}from"./iframe-CM5v7A9W.js";import{L as ae}from"./index-C-u1zEAe.js";import{T as ne}from"./index-DNnUPG5B.js";import{C as ce,E as re}from"./CaptureDestroyEventForChildElement-Cr5X7Sq2.js";import{L as se}from"./ListNavigationMixin-BRit6Ltr.js";import{d as te,a as s}from"./utils-D6nie9pS.js";import{c as de,s as pe}from"./commonArgTypes-BG7EqI50.js";import"./index-WLWNYNtm.js";import"./index-B9SxCSqs.js";import{Q as me}from"./repeat-CnCDBWoJ.js";import"./preload-helper-C1FmrZbK.js";import"./listitem.component-D3JP4vE0.js";import"./query-assigned-elements-CpgEA_Ma.js";import"./DisabledMixin-CLyN7JwY.js";import"./KeyToActionMixin-eZa7VV6_.js";import"./index-8eILrhn8.js";import"./index-7nPJAxAt.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-DRnfzEfu.js";import"./dom-BlZvhF8F.js";import"./DataAriaLabelMixin-Bksih1qV.js";import"./optgroup.constants-ClCAcEV3.js";import"./directive-Ctav8iJK.js";const be=oe`
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
`,ue=[be];var he=Object.defineProperty,L=(o,e,t,a)=>{for(var l=void 0,n=o.length-1,d;n>=0;n--)(d=o[n])&&(l=d(e,t,l)||l);return l&&he(e,t,l),l};const C=class C extends se(ce(ee)){constructor(){super(),this.loop="false",this.name=void 0,this.value=void 0,this.itemsStore=new re(this,{isValidItem:this.isValidItem}),this.handleDestroyEvent=()=>{this.handleNoSelection()},this.addEventListener("click",this.handleClick),this.addEventListener("modified",this.handleModifiedEvent),this.addEventListener("destroyed",this.handleDestroyEvent)}connectedCallback(){super.connectedCallback(),this.role=le.LISTBOX}handleModifiedEvent(e){const t=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(t);break;case"disabled":this.itemsStore.delete(t);break;case"selected":this.setSelectedOption(t,!1,!1);break;case"unselected":this.handleNoSelection();break}}handleNoSelection(){this.getFirstSelectedOption()||(this.selectedOption=void 0,this.value=void 0)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${ne}:not([disabled])`)}handleClick(e){const t=e.target;this.isValidItem(t)&&this.setSelectedOption(t)}getFirstSelectedOption(){return this.itemsStore.items.find(e=>e.matches("[selected]"))}updated(e){if(e.has("value")){const t=this.itemsStore.items.find(a=>a.value===this.value);t?this.setSelectedOption(t,!1):this.setSelectedOption(null,!1)}}setSelectedOption(e,t=!0,a=!0){e!=null&&e.disabled||e!=null&&e.softDisabled||(a&&this.updateSelectedInChildOptions(e),this.selectedOption=e,this.value=e==null?void 0:e.value,t&&this.fireEvents())}updateSelectedInChildOptions(e){this.itemsStore.items.forEach(t=>t.removeAttribute("selected")),e==null||e.toggleAttribute("selected",!0)}fireEvents(){this.selectedOption&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return i`<slot part="container"></slot>`}};C.styles=[...ae.styles,...ue];let r=C;L([J({type:String,reflect:!0})],r.prototype,"name");L([J({type:String,reflect:!0})],r.prototype,"value");L([f()],r.prototype,"selectedOption");const ve=ie.constructTagName("listbox");r.register(ve);var xe=Object.defineProperty,A=(o,e,t,a)=>{for(var l=void 0,n=o.length-1,d;n>=0;n--)(d=o[n])&&(l=d(e,t,l)||l);return l&&xe(e,t,l),l};class O extends ee{constructor(){super(),this.listItems=new Array(1e3).fill(!0),this.virtualData={virtualItems:[]},this.virtualizerProps={count:0,estimateSize:()=>0,getItemKey:e=>this.listItems[e]},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail},this.onscroll=null}connectedCallback(){super.connectedCallback(),this.updateVirtualProps()}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>36,getItemKey:e=>this.listItems[e]}}render(){return i`
      <div class="wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${me(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>i`<mdc-option data-index="${e}" label="Option Label ${e+1}"></mdc-option>`)}
        </mdc-virtualizedlist>
      </div>
      <style>
        .wrapper {
          height: 100vh;
        }
      </style>
    `}createRenderRoot(){return this}}A([f()],O.prototype,"listItems");A([f()],O.prototype,"virtualData");A([f()],O.prototype,"virtualizerProps");O.register("mdc-listboxvirtualizedlist");const{action:p}=__STORYBOOK_MODULE_ACTIONS__,c=o=>i`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${o}
  </div>
`,ge=o=>c(i`
    <mdc-listbox @change="${p("onchange")}" name="${o.name}" value="${o.value}">
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `),Ne={title:"Components/listbox",tags:["autodocs"],component:"mdc-listbox",render:ge,argTypes:{name:{control:"text"},value:{control:"text"},...te(["default"]),...de,...pe}},m={args:{value:"london"}},b={render:()=>c(i`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    `),...s()},u={render:()=>i`
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
  `,...s()},h={render:()=>c(i`
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
    `),...s()},v={render:()=>c(i`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications" value="mute"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps" value="apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy" value="message"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities" value="meeting"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave" value="leave"></mdc-option>
      </mdc-listbox>
    `),...s()},x={args:{placeholder:"Select an option",label:"Select option"},render:o=>c(i`
      <mdc-listbox placeholder="${o.placeholder}" label="${o.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    `)},g={args:{"--mdc-listbox-max-height":"18rem",placeholder:"Select an option",label:"Select option"},render:o=>c(i`
      <mdc-listbox placeholder="${o.placeholder}" label="${o.label}">
        ${Array.from({length:1e3}).map((e,t)=>i`<mdc-option label="Option Label ${t+1}"></mdc-option>`)}
      </mdc-listbox>
    `)},S={render:()=>{const o=Array.from({length:10},(t,a)=>i`<mdc-option label="Option ${a+1}" value="option${a+1}"></mdc-option>`);let e=null;return setTimeout(()=>{e=i`<mdc-option label="Delayed Option" value="optionDelayed"></mdc-option>`;const t=document.querySelector('mdc-listbox[label="Select option"]');if(t){const a=document.createElement("mdc-option");a.setAttribute("label","Delayed Option"),t.appendChild(a)}},2e3),c(i`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${o} ${e||""} </mdc-listbox>
    `)},argTypes:{...te(["name","data-aria-label","disabled","required","help-text-type","help-text"])},...s()},y={render:()=>c(i`
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-listbox[label="Select an option"]');t&&t.querySelectorAll("mdc-option").forEach((l,n)=>{n===0&&l.removeAttribute("selected"),n===1&&l.setAttribute("selected","")})}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-listbox[label="Select an option"]');t&&t.querySelectorAll("mdc-option").forEach(l=>{l.removeAttribute("selected")})}}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="${p("onchange")}"
        @click="${p("onclick")}"
        @keydown="${p("onkeydown")}"
        @focus="${p("onfocus")}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    `),...s()};var $,k,w;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 'london'
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,W,D;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(D=(W=b.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,_,T;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(_=u.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var B,z,V;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(z=h.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var R,q,M;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(q=v.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var P,N,F;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    \`)
}`,...(F=(N=x.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var Y,G,K;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var j,H,U;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(H=S.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Fe=["Example","ListboxWithSecondaryLabel","ListboxWithGroups","ListboxWithLongOptionText","ListboxWithIconOptions","ListboxWithVirtualizedList","ListboxWithFixedHeight","ListboxWithDynamicOptions","ListboxWithChangingSelectedAfterMount"];export{m as Example,y as ListboxWithChangingSelectedAfterMount,S as ListboxWithDynamicOptions,g as ListboxWithFixedHeight,u as ListboxWithGroups,v as ListboxWithIconOptions,h as ListboxWithLongOptionText,b as ListboxWithSecondaryLabel,x as ListboxWithVirtualizedList,Fe as __namedExportsOrder,Ne as default};
