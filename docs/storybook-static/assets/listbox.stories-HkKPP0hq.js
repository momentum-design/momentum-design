import{i as U,k as l}from"./lit-element-D5KKan5q.js";import{n as K,C as X,u as Z}from"./provider.component-BaQC7CJH.js";import{r as z}from"./state-C0WmBOuD.js";import{L as J}from"./index-iU0e_kzA.js";import{T as Q}from"./index-Dw48renH.js";import{R as ee}from"./roles-CJI3JVG-.js";import{C as oe,E as te}from"./CaptureDestroyEventForChildElement-qq7X9vNO.js";import{L as le}from"./ListNavigationMixin-DgCStHq0.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as ie,d as S,h as r}from"./utils-CFOyPOhY.js";import{c as ne,s as ae}from"./commonArgTypes-BluK8w5L.js";import"./index-DXxAvG-Y.js";import"./index-BaUwcf4A.js";import"./listitem.component-Cy9hWtov.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-DHsMOcdX.js";import"./index-CqVtAZCJ.js";import"./index-DyTlZ_IO.js";import"./iframe-BUpju6j_.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-CvUI0OX_.js";import"./query-DXShiZ7f.js";import"./v4-CQkTLCs1.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./divider.constants-DBMTjDho.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";const ce=U`
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
`,de=[ce];var re=Object.defineProperty,y=(t,e,o,i)=>{for(var n=void 0,c=t.length-1,O;c>=0;c--)(O=t[c])&&(n=O(e,o,n)||n);return n&&re(e,o,n),n};const f=class f extends le(oe(X)){constructor(){super(),this.loop="false",this.name=void 0,this.value=void 0,this.itemsStore=new te(this,{isValidItem:this.isValidItem}),this.handleDestroyEvent=()=>{this.handleNoSelection()},this.addEventListener("click",this.handleClick),this.addEventListener("modified",this.handleModifiedEvent),this.addEventListener("destroyed",this.handleDestroyEvent)}connectedCallback(){super.connectedCallback(),this.role=ee.LISTBOX}handleModifiedEvent(e){const o=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(o);break;case"disabled":this.itemsStore.delete(o);break;case"selected":this.setSelectedOption(o,!1,!1);break;case"unselected":this.handleNoSelection();break}}handleNoSelection(){this.getFirstSelectedOption()||(this.selectedOption=void 0,this.value=void 0)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${Q}:not([disabled])`)}handleClick(e){const o=e.target;this.isValidItem(o)&&this.setSelectedOption(o)}getFirstSelectedOption(){return this.itemsStore.items.find(e=>e.matches("[selected]"))}updated(e){if(e.has("value")){const o=this.itemsStore.items.find(i=>i.value===this.value);o?this.setSelectedOption(o,!1):this.setSelectedOption(null,!1)}}setSelectedOption(e,o=!0,i=!0){e!=null&&e.disabled||e!=null&&e.softDisabled||(i&&this.updateSelectedInChildOptions(e),this.selectedOption=e,this.value=e==null?void 0:e.value,o&&this.fireEvents())}updateSelectedInChildOptions(e){this.itemsStore.items.forEach(o=>o.removeAttribute("selected")),e==null||e.toggleAttribute("selected",!0)}fireEvents(){this.selectedOption&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return l`<slot part="container"></slot>`}};f.styles=[...J.styles,...de];let d=f;y([K({type:String,reflect:!0})],d.prototype,"name");y([K({type:String,reflect:!0})],d.prototype,"value");y([z()],d.prototype,"selectedOption");const se=Z.constructTagName("listbox");d.register(se);const a=t=>l`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${t}
  </div>
`,pe=t=>a(l`
    <mdc-listbox @change="${s("onchange")}" name="${t.name}" value="${t.value}">
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `),Ue={title:"Components/listbox",tags:["autodocs"],component:"mdc-listbox",render:pe,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},value:{control:"text"},...ie(["--mdc-listbox-max-height"]),...S(["default"]),...ne,...ae}},p={args:{value:"london"}},m={render:()=>a(l`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
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
  `,...r()},h={render:()=>a(l`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
        ></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-listbox>
    `),...r()},u={render:()=>a(l`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
      </mdc-listbox>
    `),...r()},x={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:t=>a(l`
      <mdc-listbox placeholder="${t.placeholder}" label="${t.label}" style="--mdc-listbox-max-height: 30rem">
        ${Array.from({length:1e3},(e,o)=>l`<mdc-option label="Option Label ${o+1}"></mdc-option>`)}
      </mdc-listbox>
    `),argTypes:{...S(["name","data-aria-label","disabled","required","help-text-type","help-text"])}},g={render:()=>{const t=Array.from({length:10},(o,i)=>l`<mdc-option label="Option ${i+1}"></mdc-option>`);let e=null;return setTimeout(()=>{e=l`<mdc-option label="Delayed Option"></mdc-option>`;const o=document.querySelector('mdc-listbox[label="Select option"]');if(o){const i=document.createElement("mdc-option");i.setAttribute("label","Delayed Option"),o.appendChild(i)}},2e3),a(l`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${t} ${e||""} </mdc-listbox>
    `)},argTypes:{...S(["name","data-aria-label","disabled","required","help-text-type","help-text"])},...r()},v={render:()=>a(l`
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
    `),...r()};var L,A,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 'london'
  }
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var k,$,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(E=($=m.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var W,w,D;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(w=b.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var T,B,q;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
        ></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(q=(B=h.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var M,R,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var I,F,N;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    height: '18rem',
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}" style="--mdc-listbox-max-height: 30rem">
        \${Array.from({
    length: 1000
  }, (_, i) => html\`<mdc-option label="Option Label \${i + 1}"></mdc-option>\`)}
      </mdc-listbox>
    \`),
  argTypes: {
    ...disableControls(['name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  }
}`,...(N=(F=x.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,G,Y;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const options = Array.from({
      length: 10
    }, (_, i) => html\`<mdc-option label="Option \${i + 1}"></mdc-option>\`);
    let extraOption: TemplateResult | null = null;
    setTimeout(() => {
      extraOption = html\`<mdc-option label="Delayed Option"></mdc-option>\`;
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
}`,...(Y=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var P,j,H;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(j=v.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Xe=["Example","ListboxWithSecondaryLabel","ListboxWithGroups","ListboxWithLongOptionText","ListboxWithIconOptions","ListboxWithFixedHeight","ListboxWithDynamicOptions","ListboxWithChangingSelectedAfterMount"];export{p as Example,v as ListboxWithChangingSelectedAfterMount,g as ListboxWithDynamicOptions,x as ListboxWithFixedHeight,b as ListboxWithGroups,u as ListboxWithIconOptions,h as ListboxWithLongOptionText,m as ListboxWithSecondaryLabel,Xe as __namedExportsOrder,Ue as default};
