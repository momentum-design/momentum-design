import{k as c}from"./lit-element-D5KKan5q.js";import{o as f}from"./query-assigned-elements-uEuc3rg8.js";import{u as m}from"./provider.component-DrWB4byV.js";import{T as I,V as u}from"./index-D2VIkDCb.js";import{T as L,a as h,B as a}from"./button.constants-BBlkZKjZ.js";import{T as R}from"./link.constants-DNTydABS.js";const D=m.constructTagName("card"),E={BORDER:"border",GHOST:"ghost",PROMOTIONAL:"promotional"},S={HORIZONTAL:"horizontal",VERTICAL:"vertical"},n={VARIANT:E.BORDER,ORIENTATION:S.VERTICAL,TITLE_TYPE:I.HEADING_SMALL_BOLD,SUBTITLE_TYPE:I.BODY_MIDSIZE_MEDIUM,TAGNAME:u.SPAN,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem",LINK:R,BUTTON:L};var B=Object.defineProperty,A=(i,r,l,e)=>{for(var o=void 0,t=i.length-1,T;t>=0;t--)(T=i[t])&&(o=T(r,l,o)||o);return o&&B(r,l,o),o};const U=i=>{class r extends i{updateFooterButtonColors(e){const o=[...this.footerButtonPrimary||[],...this.footerButtonSecondary||[]];o==null||o.forEach(t=>{e===E.PROMOTIONAL?t.setAttribute("color",h.PROMOTIONAL):t.setAttribute("color",h.DEFAULT)})}handleFooterSlot(e,o){var T,O,N;let t=[];e===n.LINK&&((T=this.footerLink)!=null&&T.length)?t=this.footerLink:e===n.BUTTON&&o===a.PRIMARY&&((O=this.footerButtonPrimary)!=null&&O.length)?t=this.footerButtonPrimary:e===n.BUTTON&&o===a.SECONDARY&&((N=this.footerButtonSecondary)!=null&&N.length)&&(t=this.footerButtonSecondary);for(let s=1;s<t.length;s+=1)t[s].remove();t.forEach(s=>{s.matches(e)||s.remove(),o&&s.setAttribute("variant",o)})}renderFooter(){return c` <slot name="footer">
        <div part="footer">
          <slot name="footer-link" @slotchange=${()=>this.handleFooterSlot(n.LINK)}></slot>
          <slot
            name="footer-button-secondary"
            @slotchange=${()=>this.handleFooterSlot(n.BUTTON,a.SECONDARY)}
          ></slot>
          <slot
            name="footer-button-primary"
            @slotchange=${()=>this.handleFooterSlot(n.BUTTON,a.PRIMARY)}
          ></slot>
        </div>
      </slot>`}}return A([f({slot:"footer-link"})],r.prototype,"footerLink"),A([f({slot:"footer-button-primary"})],r.prototype,"footerButtonPrimary"),A([f({slot:"footer-button-secondary"})],r.prototype,"footerButtonSecondary"),r};export{n as D,U as F,S as O,D as T,E as V};
