import{S as U,W as X,k as l,n as K,$ as Z,E as z,u as J}from"./iframe-CB9sX04z.js";import{L as Q}from"./index-CaK2ecbG.js";import{T as ee}from"./index-DvH3ltha.js";import{C as oe,E as te}from"./CaptureDestroyEventForChildElement-W7_cewV6.js";import{L as le}from"./ListNavigationMixin-DlcwfBiA.js";import{d as S,h as r}from"./utils-Dd_sfl9-.js";import{c as ie,s as ne}from"./commonArgTypes-BluK8w5L.js";import"./index-DrGjNEl-.js";import"./preload-helper-C1FmrZbK.js";import"./listitem.component-Bis4_let.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BibexCZG.js";import"./DisabledMixin-CiPsgT_4.js";import"./index-BGeLnnap.js";import"./index-2xS_qDks.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-B-hfZkqM.js";import"./query-BPxBhMfF.js";import"./DataAriaLabelMixin-CiRSeEtg.js";const ae=U`
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
`,ce=[ae];var de=Object.defineProperty,y=(t,e,o,i)=>{for(var n=void 0,c=t.length-1,O;c>=0;c--)(O=t[c])&&(n=O(e,o,n)||n);return n&&de(e,o,n),n};const f=class f extends le(oe(z)){constructor(){super(),this.loop="false",this.name=void 0,this.value=void 0,this.itemsStore=new te(this,{isValidItem:this.isValidItem}),this.handleDestroyEvent=()=>{this.handleNoSelection()},this.addEventListener("click",this.handleClick),this.addEventListener("modified",this.handleModifiedEvent),this.addEventListener("destroyed",this.handleDestroyEvent)}connectedCallback(){super.connectedCallback(),this.role=X.LISTBOX}handleModifiedEvent(e){const o=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(o);break;case"disabled":this.itemsStore.delete(o);break;case"selected":this.setSelectedOption(o,!1,!1);break;case"unselected":this.handleNoSelection();break}}handleNoSelection(){this.getFirstSelectedOption()||(this.selectedOption=void 0,this.value=void 0)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${ee}:not([disabled])`)}handleClick(e){const o=e.target;this.isValidItem(o)&&this.setSelectedOption(o)}getFirstSelectedOption(){return this.itemsStore.items.find(e=>e.matches("[selected]"))}updated(e){if(e.has("value")){const o=this.itemsStore.items.find(i=>i.value===this.value);o?this.setSelectedOption(o,!1):this.setSelectedOption(null,!1)}}setSelectedOption(e,o=!0,i=!0){e!=null&&e.disabled||e!=null&&e.softDisabled||(i&&this.updateSelectedInChildOptions(e),this.selectedOption=e,this.value=e==null?void 0:e.value,o&&this.fireEvents())}updateSelectedInChildOptions(e){this.itemsStore.items.forEach(o=>o.removeAttribute("selected")),e==null||e.toggleAttribute("selected",!0)}fireEvents(){this.selectedOption&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return l`<slot part="container"></slot>`}};f.styles=[...Q.styles,...ce];let d=f;y([K({type:String,reflect:!0})],d.prototype,"name");y([K({type:String,reflect:!0})],d.prototype,"value");y([Z()],d.prototype,"selectedOption");const re=J.constructTagName("listbox");d.register(re);const{action:s}=__STORYBOOK_MODULE_ACTIONS__,a=t=>l`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${t}
  </div>
`,se=t=>a(l`
    <mdc-listbox @change="${s("onchange")}" name="${t.name}" value="${t.value}">
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `),De={title:"Components/listbox",tags:["autodocs"],component:"mdc-listbox",render:se,argTypes:{name:{control:"text"},value:{control:"text"},...S(["default"]),...ie,...ne}},p={args:{value:"london"}},m={render:()=>a(l`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    `),...r()},b={render:()=>l`
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
  `,...r()},u={render:()=>a(l`
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
    `),...r()},h={render:()=>a(l`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications" value="mute"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps" value="apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy" value="message"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities" value="meeting"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave" value="leave"></mdc-option>
      </mdc-listbox>
    `),...r()},v={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:t=>a(l`
      <mdc-listbox placeholder="${t.placeholder}" label="${t.label}" style="--mdc-listbox-max-height: 30rem">
        ${Array.from({length:1e3},(e,o)=>l`<mdc-option label="Option Label ${o+1}" value="option${o+1}"></mdc-option>`)}
      </mdc-listbox>
    `),argTypes:{...S(["name","data-aria-label","disabled","required","help-text-type","help-text"])}},x={render:()=>{const t=Array.from({length:10},(o,i)=>l`<mdc-option label="Option ${i+1}" value="option${i+1}"></mdc-option>`);let e=null;return setTimeout(()=>{e=l`<mdc-option label="Delayed Option" value="optionDelayed"></mdc-option>`;const o=document.querySelector('mdc-listbox[label="Select option"]');if(o){const i=document.createElement("mdc-option");i.setAttribute("label","Delayed Option"),o.appendChild(i)}},2e3),a(l`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${t} ${e||""} </mdc-listbox>
    `)},argTypes:{...S(["name","data-aria-label","disabled","required","help-text-type","help-text"])},...r()},g={render:()=>a(l`
      <mdc-button @click=${()=>{const o=document.querySelector('mdc-listbox[label="Select an option"]');o&&o.querySelectorAll("mdc-option").forEach((n,c)=>{c===0&&n.removeAttribute("selected"),c===1&&n.setAttribute("selected","")})}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const o=document.querySelector('mdc-listbox[label="Select an option"]');o&&o.querySelectorAll("mdc-option").forEach(n=>{n.removeAttribute("selected")})}}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="${s("onchange")}"
        @click="${s("onclick")}"
        @keydown="${s("onkeydown")}"
        @focus="${s("onfocus")}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    `),...r()};var L,A,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 'london'
  }
}`,...(k=(A=p.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var C,$,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(E=($=m.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var w,W,D;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(W=b.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var T,B,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var q,M,I;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(M=h.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var R,N,F;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    height: '18rem',
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}" style="--mdc-listbox-max-height: 30rem">
        \${Array.from({
    length: 1000
  }, (_, i) => html\`<mdc-option label="Option Label \${i + 1}" value="option\${i + 1}"></mdc-option>\`)}
      </mdc-listbox>
    \`),
  argTypes: {
    ...disableControls(['name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  }
}`,...(F=(N=v.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var V,Y,G;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,j,H;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(j=g.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Te=["Example","ListboxWithSecondaryLabel","ListboxWithGroups","ListboxWithLongOptionText","ListboxWithIconOptions","ListboxWithFixedHeight","ListboxWithDynamicOptions","ListboxWithChangingSelectedAfterMount"];export{p as Example,g as ListboxWithChangingSelectedAfterMount,x as ListboxWithDynamicOptions,v as ListboxWithFixedHeight,b as ListboxWithGroups,h as ListboxWithIconOptions,u as ListboxWithLongOptionText,m as ListboxWithSecondaryLabel,Te as __namedExportsOrder,De as default};
