import{t as a}from"./if-defined-DCu-IhVE.js";import{S,T}from"./searchfield.component-Mq48L8t6.js";import"./index-DaWfXzJH.js";import"./index-DP53CESZ.js";import{k as x}from"./iframe-CrnImR4G.js";import{c as y,s as g}from"./commonArgTypes-BluK8w5L.js";import{a as O}from"./utils-Dd_sfl9-.js";import"./index-Bd9AQVQf.js";import{A as _,a as A}from"./input.constants-pcw0xdy3.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./class-map-0Qgz_ywX.js";import"./directive-Ctav8iJK.js";import"./input.component-5qX0h_Hf.js";import"./index-Bhkd8XCG.js";import"./index-D6qtz3hF.js";import"./popover.component-B78cd_EW.js";import"./BackdropMixin-Dde3aBbE.js";import"./index-NFGKo2_b.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-Dg08Jbay.js";import"./DisabledMixin-BmiKlCWv.js";import"./formfieldwrapper.constants-D0Da9cl0.js";import"./DataAriaLabelMixin-DsK-d1g_.js";import"./FormInternalsMixin-Cu1AE0ZP.js";import"./query-BPxBhMfF.js";import"./TabIndexMixin-BpHFDf7-.js";import"./buttonsimple.component-DktXvV2-.js";import"./button.component-_X1-1Cl-.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-BPg1OG9M.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-8qu3hifq.js";S.register(T);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,E=e=>x` <mdc-searchfield
    @input="${l("oninput")}"
    @change="${l("onchange")}"
    @focus="${l("onfocus")}"
    @blur="${l("onblur")}"
    @clear="${l("onclear")}"
    label="${e.label}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${e.value}"
    ?disabled="${e.disabled}"
    id="${e.id}"
    data-aria-label="${a(e["data-aria-label"])}"
    clear-aria-label="${a(e["clear-aria-label"])}"
    class="${e.class}"
    style="${e.style}"
    ?readonly="${e.readonly}"
    maxlength="${a(e.maxlength)}"
    minlength="${a(e.minlength)}"
    autocapitalize="${a(e.autocapitalize)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${a(e.autocomplete)}"
    dirname="${a(e.dirname)}"
    pattern="${a(e.pattern)}"
    list="${a(e.list)}"
    size="${a(e.size)}"
  ></mdc-searchfield>`,se={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:E,argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(_)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(A)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...O(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...y,...g}},r={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},t={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},o={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},i={render:()=>{const e=C=>{C.target.remove()};return x`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: value"
          slot="filters"
          @remove="${e}"
        ></mdc-inputchip>
        <mdc-inputchip
          clear-aria-label="Clear"
          label="In: Marketing"
          slot="filters"
          @remove="${e}"
        ></mdc-inputchip>
        <mdc-chip label="This does not render" slot="filters"></mdc-chip>
      </mdc-searchfield>
    `}};var c,n,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,$,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html\`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: value"
          slot="filters"
          @remove="\${clearFilter}"
        ></mdc-inputchip>
        <mdc-inputchip
          clear-aria-label="Clear"
          label="In: Marketing"
          slot="filters"
          @remove="\${clearFilter}"
        ></mdc-inputchip>
        <mdc-chip label="This does not render" slot="filters"></mdc-chip>
      </mdc-searchfield>
    \`;
  }
}`,...(v=($=i.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};const pe=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{o as DisabledSearch,r as Example,i as WithInputChipFilters,t as WithoutLabel,pe as __namedExportsOrder,se as default};
