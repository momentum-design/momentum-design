import{a5 as g,av as S,k as o,t}from"./iframe-DKmoi846.js";import{c as w,s as C}from"./commonArgTypes-BG7EqI50.js";import{h as T}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,$=["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Blueberry","Watermelon","Kiwi"],F=e=>{const n=new Set($.filter(r=>r.toLowerCase().includes(e.value.toLowerCase())));return o` <mdc-searchpopover
    @input="${a("oninput")}"
    @change="${a("onchange")}"
    @focus="${a("onfocus")}"
    @blur="${a("onblur")}"
    @clear="${a("onclear")}"
    @chipRemove="${a("onChipRemove")}"
    label="${e.label}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${e.value}"
    ?disabled="${e.disabled}"
    id="${e.id}"
    data-aria-label="${t(e["data-aria-label"])}"
    clear-aria-label="${t(e["clear-aria-label"])}"
    class="${e.class}"
    style="${e.style}"
    ?readonly="${e.readonly}"
    maxlength="${t(e.maxlength)}"
    minlength="${t(e.minlength)}"
    autocapitalize="${t(e.autocapitalize)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${t(e.autocomplete)}"
    dirname="${t(e.dirname)}"
    pattern="${t(e.pattern)}"
    list="${t(e.list)}"
    size="${t(e.size)}"
    ?display-popover="${e["display-popover"]}"
    popover-aria-label="${t(e["popover-aria-label"])}"
  >
    <mdc-list> ${Array.from(n).map(r=>o`<mdc-listitem label="${r}"></mdc-listitem>`)} </mdc-list>
  </mdc-searchpopover>`},_={title:"Widgets/searchpopover",tags:["autodocs"],component:"mdc-searchpopover",render:F,argTypes:{"display-popover":{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(g)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(S)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"popover-aria-label":{control:"text"},...T(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...w,...C}},d=[{label:"Tropical",items:["Mango","Pineapple","Kiwi","Banana"]},{label:"Berries",items:["Strawberry","Blueberry","Grapes"]},{label:"Citrus",items:["Orange"]},{label:"Common",items:["Apple","Watermelon"]}],O=e=>{const n=e.value??"",r=e.selectedFilters??[],y=$.filter(l=>{const p=l.toLowerCase().includes(n.toLowerCase());if(r.length===0)return p;const x=d.filter(c=>r.includes(c.label)).some(c=>c.items.includes(l));return p&&x});return o`
    <mdc-searchpopover
      @input="${a("oninput")}"
      @change="${a("onchange")}"
      @focus="${a("onfocus")}"
      @blur="${a("onblur")}"
      @clear="${a("onclear")}"
      @chipRemove="${a("onChipRemove")}"
      label="${e.label}"
      placeholder="${e.placeholder}"
      name="${e.name}"
      value="${e.value}"
      ?disabled="${e.disabled}"
      id="${e.id}"
      data-aria-label="${t(e["data-aria-label"])}"
      clear-aria-label="${t(e["clear-aria-label"])}"
      class="${e.class}"
      style="${e.style}"
      ?readonly="${e.readonly}"
      ?display-popover="${e["display-popover"]}"
      popover-aria-label="${t(e["popover-aria-label"])}"
    >
      ${d.map(l=>o`<mdc-chip slot="filters" label="${l.label}"></mdc-chip>`)}
      <mdc-list> ${y.map(l=>o`<mdc-listitem label="${l}"></mdc-listitem>`)} </mdc-list>
    </mdc-searchpopover>
  `},i={args:{"display-popover":!0,value:"Banana",label:"Fruits",placeholder:"Placeholder","popover-aria-label":"Search results",disabled:!1,"clear-aria-label":"Clear"},parameters:{docs:{description:{story:o`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> `}}}},s={render:O,args:{"display-popover":!0,value:"",label:"Fruits",placeholder:"Search fruits","popover-aria-label":"Search results",disabled:!1,"clear-aria-label":"Clear",selectedFilters:["Tropical","Berries"]},parameters:{docs:{description:{story:o`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
          The Searchpopover supports filter chips via the <code>filters</code> slot. Chip components (e.g.
          <code>mdc-filterchip</code>) placed in this slot appear inside the search input area and can be used to apply
          category filters alongside the text search. <br /><br />In this example, filter chips narrow the list of
          fruits shown in the popover. The consumer is responsible for managing the selected state of each chip and
          updating the displayed results accordingly.
        </mdc-text>`}}}};var m,h,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    'display-popover': true,
    value: 'Banana',
    label: 'Fruits',
    placeholder: 'Placeholder',
    'popover-aria-label': 'Search results',
    disabled: false,
    'clear-aria-label': 'Clear'
  },
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
            The Searchpopover combines the Searchfield and Popover component to a widget, setting the role of the
            Searchfield to "combobox" and the Popover to "dialog" for accessibility purposes.
            <br /><br />In the example below the Searchpopover component is created with a List passed into the slot
            from the consumer side.
            <br />
          </mdc-text>
          <mdc-banner
            variant="warning"
            label="When using the Searchpopover, make sure to control the filtering of content, opening &amp; closing of the popover (via the display-popover attribute), and selection of items from the popover on the consumer side."
          ></mdc-banner> \`
      }
    }
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var b,v,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: renderWithFilters,
  args: {
    'display-popover': true,
    value: '',
    label: 'Fruits',
    placeholder: 'Search fruits',
    'popover-aria-label': 'Search results',
    disabled: false,
    'clear-aria-label': 'Clear',
    selectedFilters: ['Tropical', 'Berries']
  },
  parameters: {
    docs: {
      description: {
        story: html\`<mdc-text tagname="span" style="margin-bottom: 0.5rem;">
          The Searchpopover supports filter chips via the <code>filters</code> slot. Chip components (e.g.
          <code>mdc-filterchip</code>) placed in this slot appear inside the search input area and can be used to apply
          category filters alongside the text search. <br /><br />In this example, filter chips narrow the list of
          fruits shown in the popover. The consumer is responsible for managing the selected state of each chip and
          updating the displayed results accordingly.
        </mdc-text>\`
      }
    }
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const L=["Example","WithFilters"];export{i as Example,s as WithFilters,L as __namedExportsOrder,_ as default};
