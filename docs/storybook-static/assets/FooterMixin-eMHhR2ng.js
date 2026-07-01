import{u as c,T as I,V as u,i as L,H as A,c as h,B as a,k as R}from"./iframe-BrN8x_Z0.js";import{T as S}from"./link.constants-Dp3tY8uh.js";const p=c.constructTagName("card"),E={BORDER:"border",GHOST:"ghost",PROMOTIONAL:"promotional"},B={HORIZONTAL:"horizontal",VERTICAL:"vertical"},n={VARIANT:E.BORDER,ORIENTATION:B.VERTICAL,TITLE_TYPE:I.HEADING_SMALL_BOLD,SUBTITLE_TYPE:I.BODY_MIDSIZE_MEDIUM,TAGNAME:u.SPAN,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem",LINK:S,BUTTON:L};var d=Object.defineProperty,O=(i,r,l,e)=>{for(var o=void 0,t=i.length-1,T;t>=0;t--)(T=i[t])&&(o=T(r,l,o)||o);return o&&d(r,l,o),o};const y=i=>{class r extends i{updateFooterButtonColors(e){const o=[...this.footerButtonPrimary||[],...this.footerButtonSecondary||[]];o==null||o.forEach(t=>{e===E.PROMOTIONAL?t.setAttribute("color",h.PROMOTIONAL):t.setAttribute("color",h.DEFAULT)})}handleFooterSlot(e,o){var T,f,N;let t=[];e===n.LINK&&((T=this.footerLink)!=null&&T.length)?t=this.footerLink:e===n.BUTTON&&o===a.PRIMARY&&((f=this.footerButtonPrimary)!=null&&f.length)?t=this.footerButtonPrimary:e===n.BUTTON&&o===a.SECONDARY&&((N=this.footerButtonSecondary)!=null&&N.length)&&(t=this.footerButtonSecondary);for(let s=1;s<t.length;s+=1)t[s].remove();t.forEach(s=>{s.matches(e)||s.remove(),o&&s.setAttribute("variant",o)})}renderFooter(){return R` <slot name="footer">
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
      </slot>`}}return O([A({slot:"footer-link"})],r.prototype,"footerLink"),O([A({slot:"footer-button-primary"})],r.prototype,"footerButtonPrimary"),O([A({slot:"footer-button-secondary"})],r.prototype,"footerButtonSecondary"),r};export{n as D,y as F,B as O,p as T,E as V};
