import{a2 as ne,R as ce,k as a,n as C,a4 as O,C as ie,u as se}from"./iframe-DyOAHjNf.js";import"./index-Btef4eu5.js";import{T as re}from"./index-l2d6szJK.js";import{C as de,E as pe}from"./CaptureDestroyEventForChildElement-CjW-poxG.js";import{L as me}from"./ListNavigationMixin-mQ50qesX.js";import{L as ue}from"./list.component-C1USkWaP.js";import{b as ae,a as r}from"./utils-B5QUENNQ.js";import{c as be,s as he}from"./commonArgTypes-BG7EqI50.js";import"./index-IprPYwfc.js";import"./index-D0TwAsWO.js";import{Q as ve}from"./repeat-IZutRRdp.js";import"./preload-helper-C1FmrZbK.js";import"./index-NDaHquKD.js";import"./index-CaeVKSVA.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-BIu3KSu9.js";import"./listitem.component-DK5mlZSk.js";import"./query-assigned-elements-D6RvelBl.js";import"./DisabledMixin-Dqod2-IJ.js";import"./KeyDownHandledMixin-BCqzWN8b.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DWHPAXjk.js";import"./DataAriaLabelMixin-6CnB7Dxp.js";import"./optgroup.constants-CvabmG_i.js";import"./directive-Ctav8iJK.js";const ge=ne`
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
`,xe=[ge];var Se=Object.defineProperty,L=(o,e,t,l)=>{for(var i=void 0,n=o.length-1,p;n>=0;n--)(p=o[n])&&(i=p(e,t,i)||i);return i&&Se(e,t,i),i};const k=class k extends me(de(ie)){constructor(){super(),this.loop="false",this.name=void 0,this.value=void 0,this.multiple=!1,this.itemsStore=new pe(this,{isValidItem:this.isValidItem}),this.handleDestroyEvent=()=>{this.handleNoSelection()},this.addEventListener("click",this.handleClick),this.addEventListener("modified",this.handleModifiedEvent),this.addEventListener("destroyed",this.handleDestroyEvent)}connectedCallback(){super.connectedCallback(),this.role=ce.LISTBOX}handleModifiedEvent(e){const t=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(t);break;case"disabled":this.itemsStore.delete(t);break;case"selected":this.multiple?this.syncValueToFirstSelected():this.setSelectedOption(t,!1,!1);break;case"unselected":this.multiple?this.syncValueToFirstSelected():this.handleNoSelection();break}}handleNoSelection(){this.getFirstSelectedOption()||(this.selectedOption=void 0,this.value=void 0)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${re}:not([disabled])`)}handleClick(e){const t=e.target;if(!this.isValidItem(t))return;const l=t;this.multiple?this.toggleOptionSelection(l):this.setSelectedOption(l)}toggleOptionSelection(e){if(e.disabled||e.softDisabled)return;const t=e.hasAttribute("selected");e.toggleAttribute("selected",!t),this.syncValueToFirstSelected(),this.fireEvents()}getFirstSelectedOption(){return this.itemsStore.items.find(e=>e.matches("[selected]"))}syncValueToFirstSelected(){const e=this.getFirstSelectedOption();this.value=e==null?void 0:e.value,this.selectedOption=e??null}getSelectedValues(){return this.itemsStore.items.reduce((e,t)=>{const{value:l}=t;return t.hasAttribute("selected")&&l!==void 0&&e.push(l),e},[])}setInitialFocus(){const e=this.getFirstSelectedOption();if(e){const t=this.itemsStore.items.indexOf(e);if(t!==-1){this.resetTabIndexAndSetFocus(t,void 0,!1);return}}super.setInitialFocus()}updated(e){if(e.has("multiple")&&(this.multiple?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")),e.has("value")&&!this.multiple){const t=this.itemsStore.items.find(l=>l.value===this.value);t?this.setSelectedOption(t,!1):this.setSelectedOption(null,!1)}}setSelectedOption(e,t=!0,l=!0){e!=null&&e.disabled||e!=null&&e.softDisabled||(l&&this.updateSelectedInChildOptions(e),this.selectedOption=e,this.value=e==null?void 0:e.value,t&&this.fireEvents())}updateSelectedInChildOptions(e){this.itemsStore.items.forEach(t=>t.removeAttribute("selected")),e==null||e.toggleAttribute("selected",!0)}fireEvents(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value,selectedValues:this.getSelectedValues()},composed:!0,bubbles:!0}))}render(){return a`<slot part="container"></slot>`}};k.styles=[...ue.styles,...xe];let s=k;L([C({type:String,reflect:!0})],s.prototype,"name");L([C({type:String,reflect:!0})],s.prototype,"value");L([C({type:Boolean,reflect:!0})],s.prototype,"multiple");L([O()],s.prototype,"selectedOption");const ye=se.constructTagName("listbox");s.register(ye);var fe=Object.defineProperty,$=(o,e,t,l)=>{for(var i=void 0,n=o.length-1,p;n>=0;n--)(p=o[n])&&(i=p(e,t,i)||i);return i&&fe(e,t,i),i};class A extends ie{constructor(){super(),this.listItems=new Array(1e3).fill(!0),this.virtualData={virtualItems:[]},this.virtualizerProps={count:0,estimateSize:()=>0,getItemKey:e=>this.listItems[e]},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail},this.onscroll=null}connectedCallback(){super.connectedCallback(),this.updateVirtualProps()}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>36,getItemKey:e=>this.listItems[e]}}render(){return a`
      <div class="wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${ve(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>a`<mdc-option data-index="${e}" label="Option Label ${e+1}"></mdc-option>`)}
        </mdc-virtualizedlist>
      </div>
      <style>
        .wrapper {
          height: 100vh;
        }
      </style>
    `}createRenderRoot(){return this}}$([O()],A.prototype,"listItems");$([O()],A.prototype,"virtualData");$([O()],A.prototype,"virtualizerProps");A.register("mdc-listboxvirtualizedlist");const{action:d}=__STORYBOOK_MODULE_ACTIONS__,c=o=>a`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${o}
  </div>
`,Oe=o=>c(a`
    <mdc-listbox @change="${d("onchange")}" name="${o.name}" value="${o.value}" ?multiple="${o.multiple}">
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `),Ue={title:"Components/listbox",tags:["autodocs"],component:"mdc-listbox",render:Oe,argTypes:{name:{control:"text"},value:{control:"text"},multiple:{control:"boolean"},...ae(["default"]),...be,...he}},m={args:{value:"losangeles"}},u={render:()=>c(a`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    `),...r()},b={render:()=>a`
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
  `,...r()},h={render:()=>c(a`
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
    `),...r()},v={render:()=>c(a`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications" value="mute"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps" value="apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy" value="message"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities" value="meeting"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave" value="leave"></mdc-option>
      </mdc-listbox>
    `),...r()},g={args:{placeholder:"Select an option",label:"Select option"},render:o=>c(a`
      <mdc-listbox placeholder="${o.placeholder}" label="${o.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    `)},x={args:{"--mdc-listbox-max-height":"18rem",placeholder:"Select an option",label:"Select option"},render:o=>c(a`
      <mdc-listbox placeholder="${o.placeholder}" label="${o.label}">
        ${Array.from({length:1e3}).map((e,t)=>a`<mdc-option label="Option Label ${t+1}"></mdc-option>`)}
      </mdc-listbox>
    `)},S={render:()=>{const o=Array.from({length:10},(t,l)=>a`<mdc-option label="Option ${l+1}" value="option${l+1}"></mdc-option>`);let e=null;return setTimeout(()=>{e=a`<mdc-option label="Delayed Option" value="optionDelayed"></mdc-option>`;const t=document.querySelector('mdc-listbox[label="Select option"]');if(t){const l=document.createElement("mdc-option");l.setAttribute("label","Delayed Option"),t.appendChild(l)}},2e3),c(a`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${o} ${e||""} </mdc-listbox>
    `)},argTypes:{...ae(["name","data-aria-label","disabled","required","help-text-type","help-text"])},...r()},y={render:()=>c(a`
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-listbox[label="Select an option"]');t&&t.querySelectorAll("mdc-option").forEach((i,n)=>{n===0&&i.removeAttribute("selected"),n===1&&i.setAttribute("selected","")})}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const t=document.querySelector('mdc-listbox[label="Select an option"]');t&&t.querySelectorAll("mdc-option").forEach(i=>{i.removeAttribute("selected")})}}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="${d("onchange")}"
        @click="${d("onclick")}"
        @keydown="${d("onkeydown")}"
        @focus="${d("onfocus")}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    `),...r()},f={render:()=>c(a`
      <mdc-listbox multiple @change="${d("onchange")}">
        <mdc-option value="apple" label="Apple"></mdc-option>
        <mdc-option value="banana" label="Banana" selected></mdc-option>
        <mdc-option value="cherry" label="Cherry"></mdc-option>
        <mdc-option value="date" label="Date" selected></mdc-option>
      </mdc-listbox>
    `),...r()};var w,D,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 'losangeles'
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var W,I,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,B,_;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(B=b.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var F,z,M;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(z=h.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var R,q,P;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(q=v.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var N,Y,G;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    \`)
}`,...(G=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var K,j,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(j=x.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var H,Q,X;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,J,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(J=y.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var te,oe,le;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox multiple @change="\${action('onchange')}">
        <mdc-option value="apple" label="Apple"></mdc-option>
        <mdc-option value="banana" label="Banana" selected></mdc-option>
        <mdc-option value="cherry" label="Cherry"></mdc-option>
        <mdc-option value="date" label="Date" selected></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const He=["Example","ListboxWithSecondaryLabel","ListboxWithGroups","ListboxWithLongOptionText","ListboxWithIconOptions","ListboxWithVirtualizedList","ListboxWithFixedHeight","ListboxWithDynamicOptions","ListboxWithChangingSelectedAfterMount","Multiselect"];export{m as Example,y as ListboxWithChangingSelectedAfterMount,S as ListboxWithDynamicOptions,x as ListboxWithFixedHeight,b as ListboxWithGroups,v as ListboxWithIconOptions,h as ListboxWithLongOptionText,u as ListboxWithSecondaryLabel,g as ListboxWithVirtualizedList,f as Multiselect,He as __namedExportsOrder,Ue as default};
