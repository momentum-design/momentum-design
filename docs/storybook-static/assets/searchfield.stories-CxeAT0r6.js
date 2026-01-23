import{t as a}from"./if-defined-Cv7J1nAi.js";import{S,T}from"./searchfield.component-Bbw3CrgC.js";import"./index-CDpY4Xpy.js";import"./index-D5ySaiVt.js";import{k as x}from"./iframe-BsSOvdiI.js";import{c as y,s as g}from"./commonArgTypes-BG7EqI50.js";import{h as O}from"./utils-D6nie9pS.js";import"./index-DSmj0hY9.js";import{A as _,a as A}from"./input.constants-BxRTsBv0.js";import"./query-assigned-elements-7ys-p9AB.js";import"./class-map-Bl3Jz4Cb.js";import"./directive-Ctav8iJK.js";import"./input.component-Cs-q75j7.js";import"./index-DZQWiz7U.js";import"./index-BcO7BA_0.js";import"./popover.component-D6Eqefys.js";import"./BackdropMixin-DzXuwf05.js";import"./dom-BlZvhF8F.js";import"./KeyToActionMixin-NJAwsg8D.js";import"./popover.constants-BSWNBOE7.js";import"./index-CyshhQF0.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-4yFeXsB_.js";import"./DisabledMixin-fjLCGnVB.js";import"./formfieldwrapper.constants-D9evYn07.js";import"./DataAriaLabelMixin-Bdk731Yz.js";import"./FormInternalsMixin-BuhlSliP.js";import"./buttonsimple.component-DIoIQKM2.js";import"./button.component-lOqoOFxR.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-BD9j_4IV.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-Bds9UP_C.js";S.register(T);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,E=e=>x` <mdc-searchfield
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
