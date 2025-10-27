import{S as wt,u as St,k as m,n as g,R as _t,$ as u,E as P,h as Ct}from"./iframe-BpeRZ387.js";import{e as j}from"./query-BPxBhMfF.js";import{L as G}from"./index--zpsoCJd.js";import{D as Tt}from"./DataAriaLabelMixin-CEFjQrVY.js";import{K as W}from"./TabIndexMixin-BjPEs3lV.js";import{b as Et}from"./listitem.component-lm-6ZJNH.js";import{c as kt,s as Mt}from"./commonArgTypes-BluK8w5L.js";import{Q as D}from"./repeat-BNwafLON.js";import{i as vt,K as yt}from"./ref-D7CqinNI.js";import{e as At,i as Ot,t as Rt}from"./directive-Ctav8iJK.js";import"./index-CNjZXUWz.js";import"./index-CFdwf5JV.js";import"./index-BNp3A3XY.js";import"./index-CNGcc8bK.js";import"./index-3zEa4DwW.js";import{a as N}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./ListNavigationMixin-CiUCunVg.js";import"./CaptureDestroyEventForChildElement-DUW4cxGm.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-BCMfh-jl.js";import"./button.component-Df_6Xtjl.js";import"./buttonsimple.component-7vZKM0mw.js";import"./button.utils-rNW36Ji7.js";import"./index-D2p99Z6C.js";import"./index-BHyKjIzi.js";import"./index-DTrDRi1E.js";import"./if-defined-Vjdh4VZl.js";import"./IconNameMixin-C0uf2xFH.js";import"./index-C7Pm2fFi.js";import"./index-DsGelZrh.js";import"./index-DLJkb11l.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-CpKq-J8S.js";import"./BackdropMixin-gFQyqIeG.js";import"./index-BwOMbKqX.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-nGq94CXi.js";import"./formfieldwrapper.constants-DWzvJcLF.js";import"./input.constants-D-K1XwLh.js";import"./FormInternalsMixin-Dgso51mY.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(a){return(e,t)=>{const s=typeof e=="function"?e:e[t];Object.assign(s,a)}}function S(a,e,t){let s=t.initialDeps??[],i;function r(){var n,o,c,h;let l;t.key&&((n=t.debug)!=null&&n.call(t))&&(l=Date.now());const p=a();if(!(p.length!==s.length||p.some((y,z)=>s[z]!==y)))return i;s=p;let b;if(t.key&&((o=t.debug)!=null&&o.call(t))&&(b=Date.now()),i=e(...p),t.key&&((c=t.debug)!=null&&c.call(t))){const y=Math.round((Date.now()-l)*100)/100,z=Math.round((Date.now()-b)*100)/100,V=z/16,C=(w,xt)=>{for(w=String(w);w.length<xt;)w=" "+w;return w};console.info(`%c⏱ ${C(z,5)} /${C(y,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*V,120))}deg 100% 31%);`,t==null?void 0:t.key)}return(h=t==null?void 0:t.onChange)==null||h.call(t,i),i}return r.updateDeps=n=>{s=n},r}function J(a,e){if(a===void 0)throw new Error("Unexpected undefined");return a}const Pt=(a,e)=>Math.abs(a-e)<1.01,Dt=(a,e,t)=>{let s;return function(...i){a.clearTimeout(s),s=a.setTimeout(()=>e.apply(this,i),t)}},q=a=>{const{offsetWidth:e,offsetHeight:t}=a;return{width:e,height:t}},Bt=a=>a,It=a=>{const e=Math.max(a.startIndex-a.overscan,0),t=Math.min(a.endIndex+a.overscan,a.count-1),s=[];for(let i=e;i<=t;i++)s.push(i);return s},Lt=(a,e)=>{const t=a.scrollElement;if(!t)return;const s=a.targetWindow;if(!s)return;const i=n=>{const{width:o,height:c}=n;e({width:Math.round(o),height:Math.round(c)})};if(i(q(t)),!s.ResizeObserver)return()=>{};const r=new s.ResizeObserver(n=>{const o=()=>{const c=n[0];if(c!=null&&c.borderBoxSize){const h=c.borderBoxSize[0];if(h){i({width:h.inlineSize,height:h.blockSize});return}}i(q(t))};a.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(o):o()});return r.observe(t,{box:"border-box"}),()=>{r.unobserve(t)}},Q={passive:!0},Y=typeof window>"u"?!0:"onscrollend"in window,Ft=(a,e)=>{const t=a.scrollElement;if(!t)return;const s=a.targetWindow;if(!s)return;let i=0;const r=a.options.useScrollendEvent&&Y?()=>{}:Dt(s,()=>{e(i,!1)},a.options.isScrollingResetDelay),n=l=>()=>{const{horizontal:p,isRtl:f}=a.options;i=p?t.scrollLeft*(f&&-1||1):t.scrollTop,r(),e(i,l)},o=n(!0),c=n(!1);c(),t.addEventListener("scroll",o,Q);const h=a.options.useScrollendEvent&&Y;return h&&t.addEventListener("scrollend",c,Q),()=>{t.removeEventListener("scroll",o),h&&t.removeEventListener("scrollend",c)}},Vt=(a,e,t)=>{if(e!=null&&e.borderBoxSize){const s=e.borderBoxSize[0];if(s)return Math.round(s[t.options.horizontal?"inlineSize":"blockSize"])}return a[t.options.horizontal?"offsetWidth":"offsetHeight"]},Wt=(a,{adjustments:e=0,behavior:t},s)=>{var i,r;const n=a+e;(r=(i=s.scrollElement)==null?void 0:i.scrollTo)==null||r.call(i,{[s.options.horizontal?"left":"top"]:n,behavior:t})};class Nt{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let t=null;const s=()=>t||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:t=new this.targetWindow.ResizeObserver(i=>{i.forEach(r=>{const n=()=>{this._measureElement(r.target,r)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(n):n()})}));return{disconnect:()=>{var i;(i=s())==null||i.disconnect(),t=null},observe:i=>{var r;return(r=s())==null?void 0:r.observe(i,{box:"border-box"})},unobserve:i=>{var r;return(r=s())==null?void 0:r.unobserve(i)}}})(),this.range=null,this.setOptions=t=>{Object.entries(t).forEach(([s,i])=>{typeof i>"u"&&delete t[s]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Bt,rangeExtractor:It,onChange:()=>{},measureElement:Vt,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...t}},this.notify=t=>{var s,i;(i=(s=this.options).onChange)==null||i.call(s,this,t)},this.maybeNotify=S(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),t=>{this.notify(t)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(t=>t()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var t;const s=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==s){if(this.cleanup(),!s){this.maybeNotify();return}this.scrollElement=s,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((t=this.scrollElement)==null?void 0:t.window)??null,this.elementsCache.forEach(i=>{this.observer.observe(i)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,i=>{this.scrollRect=i,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(i,r)=>{this.scrollAdjustments=0,this.scrollDirection=r?this.getScrollOffset()<i?"forward":"backward":null,this.scrollOffset=i,this.isScrolling=r,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(t,s)=>{const i=new Map,r=new Map;for(let n=s-1;n>=0;n--){const o=t[n];if(i.has(o.lane))continue;const c=r.get(o.lane);if(c==null||o.end>c.end?r.set(o.lane,o):o.end<c.end&&i.set(o.lane,!0),i.size===this.options.lanes)break}return r.size===this.options.lanes?Array.from(r.values()).sort((n,o)=>n.end===o.end?n.index-o.index:n.end-o.end)[0]:void 0},this.getMeasurementOptions=S(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(t,s,i,r,n)=>(this.pendingMeasuredCacheIndexes=[],{count:t,paddingStart:s,scrollMargin:i,getItemKey:r,enabled:n}),{key:!1}),this.getMeasurements=S(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:t,paddingStart:s,scrollMargin:i,getItemKey:r,enabled:n},o)=>{if(!n)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(l=>{this.itemSizeCache.set(l.key,l.size)}));const c=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const h=this.measurementsCache.slice(0,c);for(let l=c;l<t;l++){const p=r(l),f=this.options.lanes===1?h[l-1]:this.getFurthestMeasurement(h,l),b=f?f.end+this.options.gap:s+i,y=o.get(p),z=typeof y=="number"?y:this.options.estimateSize(l),V=b+z,C=f?f.lane:l%this.options.lanes;h[l]={index:l,start:b,size:z,end:V,key:p,lane:C}}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=S(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(t,s,i,r)=>this.range=t.length>0&&s>0?jt({measurements:t,outerSize:s,scrollOffset:i,lanes:r}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=S(()=>{let t=null,s=null;const i=this.calculateRange();return i&&(t=i.startIndex,s=i.endIndex),this.maybeNotify.updateDeps([this.isScrolling,t,s]),[this.options.rangeExtractor,this.options.overscan,this.options.count,t,s]},(t,s,i,r,n)=>r===null||n===null?[]:t({startIndex:r,endIndex:n,overscan:s,count:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=t=>{const s=this.options.indexAttribute,i=t.getAttribute(s);return i?parseInt(i,10):(console.warn(`Missing attribute name '${s}={index}' on measured element.`),-1)},this._measureElement=(t,s)=>{const i=this.indexFromElement(t),r=this.measurementsCache[i];if(!r)return;const n=r.key,o=this.elementsCache.get(n);o!==t&&(o&&this.observer.unobserve(o),this.observer.observe(t),this.elementsCache.set(n,t)),t.isConnected&&this.resizeItem(i,this.options.measureElement(t,s,this))},this.resizeItem=(t,s)=>{const i=this.measurementsCache[t];if(!i)return;const r=this.itemSizeCache.get(i.key)??i.size,n=s-r;n!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(i,n,this):i.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=n,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(i.index),this.itemSizeCache=new Map(this.itemSizeCache.set(i.key,s)),this.notify(!1))},this.measureElement=t=>{if(!t){this.elementsCache.forEach((s,i)=>{s.isConnected||(this.observer.unobserve(s),this.elementsCache.delete(i))});return}this._measureElement(t,void 0)},this.getVirtualItems=S(()=>[this.getVirtualIndexes(),this.getMeasurements()],(t,s)=>{const i=[];for(let r=0,n=t.length;r<n;r++){const o=t[r],c=s[o];i.push(c)}return i},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=t=>{const s=this.getMeasurements();if(s.length!==0)return J(s[bt(0,s.length-1,i=>J(s[i]).start,t)])},this.getOffsetForAlignment=(t,s,i=0)=>{const r=this.getSize(),n=this.getScrollOffset();s==="auto"&&(s=t>=n+r?"end":"start"),s==="center"?t+=(i-r)/2:s==="end"&&(t-=r);const o=this.getTotalSize()+this.options.scrollMargin-r;return Math.max(Math.min(o,t),0)},this.getOffsetForIndex=(t,s="auto")=>{t=Math.max(0,Math.min(t,this.options.count-1));const i=this.measurementsCache[t];if(!i)return;const r=this.getSize(),n=this.getScrollOffset();if(s==="auto")if(i.end>=n+r-this.options.scrollPaddingEnd)s="end";else if(i.start<=n+this.options.scrollPaddingStart)s="start";else return[n,s];const o=s==="end"?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(o,s,i.size),s]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(t,{align:s="start",behavior:i}={})=>{i==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(t,s),{adjustments:void 0,behavior:i})},this.scrollToIndex=(t,{align:s="auto",behavior:i}={})=>{i==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),t=Math.max(0,Math.min(t,this.options.count-1));let r=0;const n=10,o=h=>{if(!this.targetWindow)return;const l=this.getOffsetForIndex(t,h);if(!l){console.warn("Failed to get offset for index:",t);return}const[p,f]=l;this._scrollToOffset(p,{adjustments:void 0,behavior:i}),this.targetWindow.requestAnimationFrame(()=>{const b=this.getScrollOffset(),y=this.getOffsetForIndex(t,f);if(!y){console.warn("Failed to get offset for index:",t);return}Pt(y[0],b)||c(f)})},c=h=>{this.targetWindow&&(r++,r<n?this.targetWindow.requestAnimationFrame(()=>o(h)):console.warn(`Failed to scroll to index ${t} after ${n} attempts.`))};o(s)},this.scrollBy=(t,{behavior:s}={})=>{s==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+t,{adjustments:void 0,behavior:s})},this.getTotalSize=()=>{var t;const s=this.getMeasurements();let i;if(s.length===0)i=this.options.paddingStart;else if(this.options.lanes===1)i=((t=s[s.length-1])==null?void 0:t.end)??0;else{const r=Array(this.options.lanes).fill(null);let n=s.length-1;for(;n>=0&&r.some(o=>o===null);){const o=s[n];r[o.lane]===null&&(r[o.lane]=o.end),n--}i=Math.max(...r.filter(o=>o!==null))}return Math.max(i-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(t,{adjustments:s,behavior:i})=>{this.options.scrollToFn(t,{behavior:i,adjustments:s},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(e)}}const bt=(a,e,t,s)=>{for(;a<=e;){const i=(a+e)/2|0,r=t(i);if(r<s)a=i+1;else if(r>s)e=i-1;else return i}return a>0?a-1:0};function jt({measurements:a,outerSize:e,scrollOffset:t,lanes:s}){const i=a.length-1,r=c=>a[c].start;if(a.length<=s)return{startIndex:0,endIndex:i};let n=bt(0,i,r,t),o=n;if(s===1)for(;o<i&&a[o].end<t+e;)o++;else if(s>1){const c=Array(s).fill(0);for(;o<i&&c.some(l=>l<t+e);){const l=a[o];c[l.lane]=l.end,o++}const h=Array(s).fill(t+e);for(;n>=0&&h.some(l=>l>=t);){const l=a[n];h[l.lane]=l.start,n--}n=Math.max(0,n-n%s),o=Math.min(i,o+(s-1-o%s))}return{startIndex:n,endIndex:o}}class Kt{constructor(e,t){this.cleanup=()=>{},(this.host=e).addController(this);const s={...t,onChange:(i,r)=>{var n;this.host.updateComplete.then(()=>this.host.requestUpdate()),(n=t.onChange)==null||n.call(t,i,r)}};this.virtualizer=new Nt(s)}getVirtualizer(){return this.virtualizer}async hostConnected(){this.cleanup=this.virtualizer._didMount()}hostUpdated(){this.virtualizer._willUpdate()}hostDisconnected(){this.cleanup()}}class Ht extends Kt{constructor(e,t){super(e,{observeElementRect:Lt,observeElementOffset:Ft,scrollToFn:Wt,...t})}}const Ut={includeEnd:!1};class Gt{constructor(e,t,s={}){const i={...Ut,...s};this.start=e,this.end=t,this.includeEnd=i.includeEnd}includes(e){const{start:t,end:s,includeEnd:i}=this,r=Math.min(t,s),n=Math.max(t,s);return i?e>=r&&e<=n:e>=r&&e<n}iter(e=1){if(e<=0)throw new Error("Step must be a positive non-zero number");const t=e*(this.start<=this.end?1:-1),{includeEnd:s,end:i}=this;let r=this.start,n=!1;return{next:()=>{if(n)return{value:void 0,done:!0};const o=r;return r+=t,(s?o>i:o>=i)?(n=!0,{value:void 0,done:!0}):{value:o,done:!1}}}}[Symbol.iterator](){return this.iter()}}class Jt{constructor(e,t,s){this.getIndex=()=>0,this.items=e,this.getIndex=t,this.lengthFn=s}get length(){return this.lengthFn()}at(e){return this.items.find(t=>this.getIndex(t)===e)}map(e,t){return this.items.map((s,i,r)=>e.call(t,s,this.getIndex(s),r))}forEach(e,t){this.items.forEach((s,i,r)=>{e.call(t,s,this.getIndex(s),r)})}findIndex(e,t){const s=this.items.find((i,r,n)=>e.call(t,i,this.getIndex(i),n));return s?this.getIndex(s):-1}find(e,t){return this.items.find((s,i,r)=>e.call(t,s,this.getIndex(s),r))}}const qt=[wt`
    :host {
      height: 100%;
    }

    :host::part(scroll) {
      height: 100%;
      width: 100%;
      overflow-y: auto;
      scroll-padding: 0.25rem 0;
      contain: strict;
      overflow-anchor: none;
      scrollbar-gutter: stable;
    }

    :host::part(wrapper) {
      padding: 0 0.25rem;
    }

    ::slotted([data-virtualized-hidden]) {
      position: absolute !important;
      top: var(--mdc-virtualizedlist-hidden-top) !important;
      left: 0 !important;
    }
  `],Qt=St.constructTagName("virtualizedlist"),T={VIRTUALIZER_PROPS:{count:0,estimateSize:()=>0,getItemKey:a=>a},LOOP:"false",SCROLL_ANCHORING:!1,IS_AT_BOTTOM_THRESHOLD:16};var Yt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,v=(a,e,t,s)=>{for(var i=s>1?void 0:s?Zt(e,t):e,r=a.length-1,n;r>=0;r--)(n=a[r])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Yt(e,t,i),i};const U=class U extends Tt(G){constructor(){super(),this.virtualizerProps=T.VIRTUALIZER_PROPS,this.loop=T.LOOP,this.scrollAnchoring=T.SCROLL_ANCHORING,this.observeSizeChanges=!1,this.revertList=!1,this.atBottomThreshold=T.IS_AT_BOTTOM_THRESHOLD,this.virtualizer=null,this.virtualizedNavItems=null,this.virtualizerController=null,this.selectedIndex=this.initialFocus,this.selectedKey=null,this.firstIndex=0,this.firstKey=null,this.hiddenIndexes=[],this.atBottomValue="no",this.atBottomTimer=-1,this.lastScrollPosition=0,this.endOfScrollQueue=[],this.handleElementFirstUpdateCompleted=e=>{var t,s;this.observeSizeChanges&&this.navItems.find(i=>i===e.target)!==void 0&&((s=(t=this.virtualizer)==null?void 0:t.measureElement)==null||s.call(t,e.target))},this.addEventListener("wheel",this.handleWheelEvent.bind(this)),this.addEventListener(Et.FIRST_UPDATE_COMPLETED,this.handleElementFirstUpdateCompleted.bind(this))}get virtualItems(){var e;return((e=this.virtualizer)==null?void 0:e.getVirtualItems())??[]}get navItems(){var e,t,s;if(((e=this.virtualizedNavItems)==null?void 0:e.items)!==super.navItems){const i=((s=(t=this.virtualizer)==null?void 0:t.options)==null?void 0:s.indexAttribute)??"data-index";this.virtualizedNavItems=new Jt(super.navItems,r=>Number(r.getAttribute(i)),()=>this.virtualizerProps.count)}return this.virtualizedNavItems}get atBottom(){return this.atBottomValue}set atBottom(e){(this.atBottomValue!==e||e==="yes"&&this.atBottomTimer===-1)&&(this.atBottomValue=e,e==="yes"?this.scrollToBottom():this.clearScrollToBottomTimer())}get totalListHeight(){var e;return((e=this.virtualizer)==null?void 0:e.getTotalSize())??0}connectedCallback(){this.virtualizerController=new Ht(this,{...this.virtualizerProps,horizontal:!1,getScrollElement:()=>this.scrollRef,onChange:this.onVListStateChangeHandler.bind(this),rangeExtractor:this.virtualizerRangeExtractor.bind(this)}),this.virtualizer=this.virtualizerController.getVirtualizer(),super.connectedCallback(),this.role=null,this.atBottom=this.revertList&&this.scrollAnchoring?"yes":"no"}disconnectedCallback(){super.disconnectedCallback(),this.clearScrollToBottomTimer(),this.virtualizerController=null,this.virtualizer=null}async update(e){super.update(e),e.has("virtualizerProps")&&await this.handleVirtualizerPropsUpdate(e.get("virtualizerProps")),e.has("observeSizeChanges")&&this.navItems.forEach(t=>{var s,i;this.observeSizeChanges&&((i=(s=this.virtualizer)==null?void 0:s.measureElement)==null||i.call(s,t))}),e.has("scrollAnchoring")&&(this.scrollAnchoring?this.checkAtBottom():this.atBottom="no"),e.has("revertList")&&this.revertList&&this.scrollAnchoring&&(this.atBottom="yes"),e.has("atBottomThreshold")&&this.scrollAnchoring&&this.checkAtBottom()}async handleVirtualizerPropsUpdate(e){const{virtualizer:t}=this;if(!t)return;const s=t.measurementsCache.slice();if(t.setOptions({...t.options,...this.virtualizerProps}),this.virtualizerProps.count!==(e==null?void 0:e.count)&&(this.emitChangeEvent(),this.syncUI()),this.scrollAnchoring&&s.length>0){const i=Math.abs(this.virtualizerProps.count-((e==null?void 0:e.count)??0)),r=this.selectedIndex,n=this.firstKey,o=new Gt(r-i,r+i,{includeEnd:!0}),c=Array.from(o).find(l=>t.options.getItemKey(l)===this.selectedKey)??this.selectedIndex;if(this.setSelectedIndex(c),this.requestUpdate(),await this.updateComplete,this.atBottom==="yes"){this.scrollToBottom();return}if(this.focusWithin&&r!==this.selectedIndex||!this.focusWithin&&this.firstKey!==n){const l=t.measurementsCache[this.selectedIndex].end-s[r].end;this.scrollRef.scrollTop+=l}}}setInitialFocus(){setTimeout(async()=>{if(!this.virtualizer)return;const{scrollToIndex:e}=this.virtualizer;if(this.setSelectedIndex(this.initialFocus),this.selectedIndex>=this.navItems.length)return;e(this.selectedIndex,{align:"center"}),this.navItems.find(this.isElementSelected,this)&&this.resetTabIndexes(this.selectedIndex,!1)},0)}emitChangeEvent(){var t,s,i,r;(s=(t=this.virtualizerProps).onChange)==null||s.call(t,this.virtualizer,this.virtualizer.isScrolling);const e={virtualizer:this.virtualizer,virtualItems:((r=(i=this.virtualizer)==null?void 0:i.getVirtualItems)==null?void 0:r.call(i))??[]};this.dispatchEvent(new CustomEvent("virtualitemschange",{detail:e,bubbles:!1,cancelable:!1}))}virtualizerRangeExtractor(e){var o,c;const{navItems:t,virtualizerProps:s,virtualizer:i}=this,r=((o=s.rangeExtractor)==null?void 0:o.call(s,e))??It(e);return this.hiddenIndexes.forEach(h=>{const l=t.at(h);l&&(l.removeAttribute("data-virtualized-hidden"),l.style.removeProperty("--mdc-virtualizedlist-hidden-top"))}),this.firstIndex=e.startIndex,this.firstKey=((c=this.virtualizer)==null?void 0:c.options.getItemKey(this.firstIndex))??null,this.hiddenIndexes.length=0,[this.selectedIndex-1,this.selectedIndex,this.selectedIndex+1].forEach(h=>{r.includes(h)||(h<e.startIndex&&h>=0&&(r.unshift(h),this.hiddenIndexes.push(h)),h>e.endIndex&&h<((i==null?void 0:i.options.count)??0)&&(r.push(h),this.hiddenIndexes.push(h)))}),this.updateHiddenItemsPosition(),r.sort((h,l)=>h-l),r}updateHiddenItemsPosition(){const{navItems:e,virtualizerProps:t,virtualizer:s}=this;if(!s||t.count===0)return;const{measurementsCache:i,range:r}=s;this.hiddenIndexes.forEach(n=>{const o=e.at(n);if(o){const c=i[(r==null?void 0:r.startIndex)??0],h=i[n];o.setAttribute("data-virtualized-hidden","true"),o.style.setProperty("--mdc-virtualizedlist-hidden-top",`${h.start-c.start}px`)}})}isElementSelected(e){var t;return((t=this.virtualizer)==null?void 0:t.indexFromElement(e))===this.selectedIndex}setSelectedIndex(e){if(this.virtualizer){const{count:t,getItemKey:s}=this.virtualizer.options;this.selectedIndex=Math.max(0,Math.min(t-1,e)),this.selectedKey=s(e),this.scrollAnchoring&&this.selectedIndex+1===t&&(this.atBottom="yes")}}onElementStoreUpdate(e,t){if(t==="added"){const s=this.isElementSelected(e);e.tabIndex=s?0:-1,this.setAriaSetSize(e)}else t==="removed"&&e.tabIndex===0&&queueMicrotask(()=>{this.resetTabIndexes(this.selectedIndex,this.focusWithin)})}async onVListStateChangeHandler(e,t){this.syncUI(),await this.updateComplete,this.requestUpdate(),!t&&this.endOfScrollQueue.length>0&&(this.endOfScrollQueue.forEach(s=>s()),this.endOfScrollQueue.length=0),this.checkAtBottom(),this.emitChangeEvent()}onScrollHandler(e){const t=e.target;this.atBottom==="re-evaluate"||t.scrollTop<this.lastScrollPosition?this.atBottom="no":this.checkAtBottom(),this.lastScrollPosition=t.scrollTop}checkAtBottom(){const{clientHeight:e,scrollHeight:t,scrollTop:s}=this.scrollRef;this.scrollAnchoring&&this.virtualizer&&this.atBottom==="no"&&t>e-this.atBottomThreshold&&!this.virtualizer.isScrolling&&(this.atBottom=t-s<=e+this.atBottomThreshold?"yes":"no")}handleNavigationKeyDown(e){var t,s,i,r;switch(e.key){case W.HOME:{(s=(t=this.virtualizer)==null?void 0:t.scrollToIndex)==null||s.call(t,0,{align:"start"}),this.endOfScrollQueue.push(()=>this.resetTabIndexes(0));break}case W.END:{const n=this.virtualizerProps.count-1;(r=(i=this.virtualizer)==null?void 0:i.scrollToIndex)==null||r.call(i,n,{align:"end"}),this.endOfScrollQueue.push(()=>this.resetTabIndexes(n));break}case W.ARROW_UP:{this.atBottom="re-evaluate";break}}super.handleNavigationKeyDown(e)}resetTabIndexes(e,t=!0){super.resetTabIndexes(e,t),this.setSelectedIndex(e)}resetTabIndexAndSetFocus(e,t,s){if(this.navItems.find(r=>{var n;return((n=this.virtualizer)==null?void 0:n.indexFromElement(r))===e})===void 0){this.scrollToIndex(e,{}),this.endOfScrollQueue.push(()=>{super.resetTabIndexAndSetFocus(e,t,s),this.setSelectedIndex(e)});return}super.resetTabIndexAndSetFocus(e,t,s),this.setSelectedIndex(e)}setAriaSetSize(e){var t;e.setAttribute("aria-setsize",`${((t=this.virtualizer)==null?void 0:t.options.count)??-1}`)}scrollToBottom(){if(this.clearScrollToBottomTimer(),this.atBottom==="yes"&&this.scrollRef){const{clientHeight:e,scrollHeight:t,scrollTop:s}=this.scrollRef;this.totalListHeight>e&&(this.scrollRef.scrollTop+=t-e-s),this.atBottomTimer=requestAnimationFrame(this.scrollToBottom.bind(this))}}clearScrollToBottomTimer(){cancelAnimationFrame(this.atBottomTimer),this.atBottomTimer=-1}scrollToIndex(e,t){var s,i;(i=(s=this.virtualizer).scrollToIndex)==null||i.call(s,e,t),this.atBottom=this.scrollAnchoring&&e+1===this.virtualizerProps.count?"yes":"no"}syncUI(){const e=this.virtualItems.find(({index:i})=>!this.hiddenIndexes.includes(i)),t=(e==null?void 0:e.start)??0;window.getComputedStyle(this);let s=0;this.revertList&&this.scrollRef.clientHeight>=this.totalListHeight&&(s=this.scrollRef.clientHeight-this.totalListHeight),this.wrapperRef.style.height=`${this.totalListHeight}px`,this.containerRef.style.transform=`translateY(${s+t}px)`}handleWheelEvent(e){e.deltaY<0&&(this.atBottom="re-evaluate")}render(){return m`
      <slot name="list-header"></slot>
      <div part="scroll" tabindex="-1" @scroll="${this.onScrollHandler}">
        <div part="wrapper">
          <div part="container" role="list" aria-label="${this.dataAriaLabel??""}">
            <slot role="presentation"></slot>
          </div>
        </div>
      </div>
    `}};U.styles=[...G.styles,...qt];let d=U;v([g({type:Object})],d.prototype,"virtualizerProps",2);v([g({type:String,reflect:!0})],d.prototype,"loop",2);v([g({type:Boolean,attribute:"scroll-anchoring",reflect:!0})],d.prototype,"scrollAnchoring",2);v([g({type:Boolean,reflect:!0,attribute:"observe-size-changes"})],d.prototype,"observeSizeChanges",2);v([g({type:Boolean,reflect:!0,attribute:"revert-list"})],d.prototype,"revertList",2);v([g({type:Number,reflect:!0,attribute:"at-bottom-threshold"})],d.prototype,"atBottomThreshold",2);v([j('[part="scroll"]',!0)],d.prototype,"scrollRef",2);v([j('[part="wrapper"]',!0)],d.prototype,"wrapperRef",2);v([j('[part="container"]',!0)],d.prototype,"containerRef",2);v([$t({passive:!0})],d.prototype,"onScrollHandler",1);d.register(Qt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt="important",Xt=" !"+zt,te=At(class extends Ot{constructor(a){var e;if(super(a),a.type!==Rt.ATTRIBUTE||a.name!=="style"||((e=a.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return Object.keys(a).reduce((e,t)=>{const s=a[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(a,[e]){const{style:t}=a.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const r=typeof i=="string"&&i.endsWith(Xt);s.includes("-")||r?t.setProperty(s,r?i.slice(0,-11):i,r?zt:""):t[s]=i}}return _t}});var ee=Object.defineProperty,B=(a,e,t,s)=>{for(var i=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(i=n(e,t,i)||i);return i&&ee(e,t,i),i};class _ extends P{constructor(){super(...arguments),this.chatMessages={msg_001:{name:"Alice Johnson",message:"Hey team! Just finished the quarterly report. Ready for review."},msg_002:{name:"Bob Smith",message:"Great work Alice! I'll take a look this afternoon."},msg_003:{name:"Carol Davis",message:"Perfect timing. We can discuss it in tomorrow's standup."},msg_004:{name:"Alice Johnson",message:"Sounds good! Also, anyone know if the client meeting is still at 3pm?",parent:"msg_001"},msg_005:{name:"Bob Smith",message:"Yes, still at 3pm. I'll send the calendar invite.",parent:"msg_001"},msg_006:{name:"David Wilson",message:"Morning everyone! Can someone help me with the API documentation?"},msg_007:{name:"Emma Brown",message:"Good morning! What specific part are you struggling with?"},msg_008:{name:"David Wilson",message:"I need to understand the authentication flow for the new endpoints.",parent:"msg_006"},msg_009:{name:"Frank Miller",message:"I can help with that! Let me share the updated docs.",parent:"msg_006"},msg_010:{name:"Emma Brown",message:"Frank has the latest version, mine might be outdated.",parent:"msg_006"},msg_011:{name:"Carol Davis",message:"Quick question - has anyone tested the new deployment pipeline?"},msg_012:{name:"Bob Smith",message:"I ran it yesterday, worked perfectly! No issues on my end."},msg_013:{name:"Alice Johnson",message:"Same here. The performance improvements are noticeable."},msg_014:{name:"Carol Davis",message:"Excellent! Should we roll it out to staging then?",parent:"msg_011"},msg_015:{name:"Alice Johnson",message:"I think we're ready. Bob, what do you think?",parent:"msg_011"},msg_016:{name:"Bob Smith",message:"Let's do it! I can handle the deployment this evening.",parent:"msg_011"},msg_017:{name:"Frank Miller",message:"Just pushed the hotfix for the login issue. Please test when you can."},msg_018:{name:"Emma Brown",message:"Thanks Frank! I'll test it right now."},msg_019:{name:"David Wilson",message:"Login is working perfectly on my end now. Great job!"},msg_020:{name:"Frank Miller",message:"Awesome! The fix was simpler than I thought.",parent:"msg_017"},msg_021:{name:"Bob Smith",message:"Should we backport this to the release branch?",parent:"msg_017"},msg_022:{name:"Alice Johnson",message:"Yes, definitely. This was blocking our demo tomorrow.",parent:"msg_017"},msg_023:{name:"Emma Brown",message:"Hey team, reminder that code freeze is at 5pm today for the sprint."},msg_024:{name:"Carol Davis",message:"Perfect timing! I just submitted my last PR."},msg_025:{name:"David Wilson",message:"Mine is still in review. Carol, could you take a look?"},msg_026:{name:"Carol Davis",message:"Sure! Send me the link and I'll review it now.",parent:"msg_025"},msg_027:{name:"Bob Smith",message:"I can also help with reviews if needed.",parent:"msg_025"},msg_028:{name:"Frank Miller",message:"Does anyone know if the database migration is scheduled for tonight?"},msg_029:{name:"Emma Brown",message:"Yes, it's scheduled for 11pm. I'll be monitoring it."},msg_030:{name:"Alice Johnson",message:"I can stay online too in case we need to rollback."},msg_031:{name:"Frank Miller",message:"Great! I'll prepare the rollback scripts just in case.",parent:"msg_028"},msg_032:{name:"Bob Smith",message:"Should we create a war room channel for tonight?",parent:"msg_028"},msg_033:{name:"Emma Brown",message:"Good idea! I'll set it up and invite everyone.",parent:"msg_028"},msg_034:{name:"Grace Lee",message:"Just joined the team! Excited to work with everyone. 👋"},msg_035:{name:"Alice Johnson",message:"Welcome Grace! Great to have you on board!"},msg_036:{name:"Bob Smith",message:"Welcome! Let me know if you need help getting set up."},msg_037:{name:"Grace Lee",message:"Thanks everyone! Alice, could you help me with the development environment setup?",parent:"msg_034"},msg_038:{name:"Alice Johnson",message:"Absolutely! I'll send you the setup guide and we can pair tomorrow.",parent:"msg_034"},msg_039:{name:"Carol Davis",message:"Grace, I've added you to all the relevant Slack channels too.",parent:"msg_034"},msg_040:{name:"David Wilson",message:"Quick update: the API rate limiting is now live in production."},msg_041:{name:"Frank Miller",message:"Nice! Are we seeing any impact on performance?"},msg_042:{name:"Emma Brown",message:"Monitoring shows everything looks good so far."},msg_043:{name:"David Wilson",message:"Perfect! The new limits should prevent the timeout issues we had last week.",parent:"msg_040"},msg_044:{name:"Bob Smith",message:"Great work David! This was a critical fix.",parent:"msg_040"},msg_045:{name:"Carol Davis",message:"Thanks everyone! This has been a productive week."},msg_046:{name:"Grace Lee",message:"Looking forward to contributing next week!"},msg_047:{name:"Alice Johnson",message:"Have a great weekend everyone!"},msg_048:{name:"Frank Miller",message:"See you all on Monday! 🎉"},msg_049:{name:"Emma Brown",message:"One last thing - don't forget the retrospective is moved to Tuesday."},msg_050:{name:"Bob Smith",message:"Thanks for the reminder! I'll update my calendar."},msg_051:{name:"Carol Davis",message:"Same here. What time was it again?",parent:"msg_049"},msg_052:{name:"Emma Brown",message:"2pm, right after the sprint planning meeting.",parent:"msg_049"},msg_053:{name:"Grace Lee",message:"Should I join the retrospective even though I just started?",parent:"msg_049"},msg_054:{name:"Alice Johnson",message:"Absolutely! It's a great way to learn about our process.",parent:"msg_049"}},this.listItems=this.getOrderedMessageKeys(),this.virtualData={virtualItems:[]},this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:e=>this.listItems[e]},this.textareaValue="",this.messageCounter=54,this.textareaRef=vt(),this.randomMessages=["Just finished reviewing the latest pull request.","The build is now passing on all environments.","Quick reminder about tomorrow's team meeting.","I've updated the documentation with the latest changes.","The performance metrics look great this week!","Does anyone have time to pair on this feature?","Just deployed the hotfix to production.","The client feedback has been very positive.","I'll be working from home tomorrow.","Great work on the sprint demo today!","The new feature is ready for QA testing.","Coffee break anyone? ☕","The integration tests are now automated.","Thanks for the code review feedback!","The database migration completed successfully."],this.teamMembers=["Alice Johnson","Bob Smith","Carol Davis","David Wilson","Emma Brown","Frank Miller","Grace Lee"],this.handleTextareaKeyDown=e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.sendMessage())},this.handleTextareaInput=e=>{const t=e.target;this.textareaValue=t.value},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}getOrderedMessageKeys(){const e=Object.keys(this.chatMessages),t=e.filter(i=>!this.chatMessages[i].parent),s=[];return t.forEach(i=>{s.push(i);const r=e.filter(n=>this.chatMessages[n].parent===i);s.push(...r)}),s}connectedCallback(){super.connectedCallback(),this.startRandomMessageTimer()}disconnectedCallback(){super.disconnectedCallback(),this.stopRandomMessageTimer()}startRandomMessageTimer(){this.randomMessageTimer=window.setInterval(()=>{this.addRandomMessage()},5e3)}stopRandomMessageTimer(){this.randomMessageTimer&&(clearInterval(this.randomMessageTimer),this.randomMessageTimer=void 0)}addRandomMessage(){const e=this.randomMessages[Math.floor(Math.random()*this.randomMessages.length)],t=this.teamMembers[Math.floor(Math.random()*this.teamMembers.length)],s=`msg_${String(this.messageCounter+1).padStart(3,"0")}`;let i;const r=Object.keys(this.chatMessages).filter(n=>!this.chatMessages[n].parent).slice(-10);r.length>0&&(i=r[Math.floor(Math.random()*r.length)]),this.messageCounter+=1,this.chatMessages={...this.chatMessages,[s]:{name:t,message:e,...i&&{parent:i}}}}sendMessage(){if(this.textareaValue.trim()){const e=`msg_${String(this.messageCounter+1).padStart(3,"0")}`;if(this.messageCounter+=1,this.chatMessages={...this.chatMessages,[e]:{name:"You",message:this.textareaValue.trim()}},this.textareaValue="",this.textareaRef.value){const t=this.textareaRef.value.querySelector("textarea");t&&(t.value="",t.focus())}}}update(e){super.update(e),e.has("chatMessages")&&(this.listItems=this.getOrderedMessageKeys(),this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:t=>this.listItems[t]})}generateListItem({index:e}){const t=this.chatMessages[this.listItems[e]];return m`
      <mdc-listitem data-index=${e}>
        <div
          slot="content"
          style=${te({display:"flex",gap:"0.5rem","align-items":"center",...t.parent?{"margin-left":"1rem"}:{}})}
        >
          <mdc-avatar
            initials=${t.name.split(" ").map(s=>s[0]).join("")}
          ></mdc-avatar>
          <mdc-text tagname="span">${t.message}</mdc-text>
        </div>
      </mdc-listitem>
    `}createRenderRoot(){return this}render(){return m`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.listItems.length-1}
          scroll-anchoring
        >
          ${D(this.virtualData.virtualItems,({key:e})=>e,this.generateListItem.bind(this))}
        </mdc-virtualizedlist>
        <!-- Start AI-Assisted -->
        <div class="chat-input-container">
          <mdc-textarea
            ${yt(this.textareaRef)}
            placeholder="Type a message... (Press Enter to send, Shift+Enter for new line)"
            .value=${this.textareaValue}
            @input=${this.handleTextareaInput}
            @keydown=${this.handleTextareaKeyDown}
            resize="none"
            rows="2"
          ></mdc-textarea>
          <mdc-button @click=${this.sendMessage} variant="primary" ?disabled=${!this.textareaValue.trim()}>
            Send
          </mdc-button>
        </div>
        <!-- End AI-Assisted -->
      </div>
      <style>
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: min(100%, 600px);
          display: flex;
          flex-direction: column;
        }

        /* Start AI-Assisted */
        .chat-input-container {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem;
          border-top: 1px solid var(--mds-color-theme-outline-secondary-normal);
          align-items: flex-end;
        }

        .chat-input-container mdc-textarea {
          flex: 1;
        }
        /* End AI-Assisted */
      </style>
    `}}B([u()],_.prototype,"chatMessages");B([u()],_.prototype,"virtualData");B([u()],_.prototype,"virtualizerProps");B([u()],_.prototype,"textareaValue");_.register("mdc-virtualizedlist-chat-example");var se=Object.defineProperty,K=(a,e,t,s)=>{for(var i=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(i=n(e,t,i)||i);return i&&se(e,t,i),i};class L extends P{constructor(){super(...arguments),this.listItems=new Array(20).fill(!0).map((e,t)=>`list item number ${t}`),this.virtualData={virtualItems:[]},this.virtualizerProps={count:0,estimateSize:()=>0,getItemKey:e=>this.listItems[e]},this.counter=this.listItems.length,this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}connectedCallback(){super.connectedCallback(),this.updateVirtualProps()}generateListItem(e,t){return m`
      <mdc-listitem data-index=${e} label=${t}>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem(0,5)}>Add 5 At Top</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem(e)}>Add Above</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem(e+1)}>Add Below</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem()}>Add Last</mdc-button>
        </mdc-buttongroup>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="negative" @click=${()=>this.removeItem(e)}>Remove This</mdc-button>
          <mdc-button variant="primary" color="negative" @click=${()=>this.removeItem(e-1)}
            >Remove Above</mdc-button
          >
          <mdc-button variant="primary" color="negative" @click=${()=>this.removeItem(e+1)}
            >Remove Below</mdc-button
          >
        </mdc-buttongroup>
      </mdc-listitem>
    `}addItem(e,t=1){const s=new Array(t).fill(!0).map(()=>{const i=`list item number ${this.counter}`;return this.counter+=1,i});e===void 0?this.listItems=[...this.listItems,...s]:this.listItems=[...this.listItems.slice(0,e),...s,...this.listItems.slice(e,this.listItems.length)],this.updateVirtualProps()}removeItem(e){e===void 0?this.listItems=this.listItems.slice(0,-1):this.listItems=[...this.listItems.slice(0,e),...this.listItems.slice(e+1,this.listItems.length)],this.updateVirtualProps()}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>44,getItemKey:e=>this.listItems[e]}}render(){return m`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
          scroll-anchoring
        >
          ${D(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.generateListItem(e,this.listItems[e]))}
        </mdc-virtualizedlist>
      </div>
      <div style="margin-top: 1rem;">
        <div>Current List Size: <span data-test="counter">${this.listItems.length}</span></div>
        <div style="display: flex; gap: 0.25rem;">
          <mdc-button @click=${()=>this.removeItem()}>Remove Last</mdc-button>
        </div>
      </div>
      <style>
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: calc(100% - 200px);
        }
      </style>
    `}createRenderRoot(){return this}}K([u()],L.prototype,"listItems");K([u()],L.prototype,"virtualData");K([u()],L.prototype,"virtualizerProps");L.register("mdc-virtualizeddynamiclist");var ie=Object.defineProperty,H=(a,e,t,s)=>{for(var i=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(i=n(e,t,i)||i);return i&&ie(e,t,i),i};const Z=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ","standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ","a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ","remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "," Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions ","of Lorem Ipsum."].join(" ").split(" "),E=(a,e)=>a+Math.floor(Math.random()*e);class F extends P{constructor(){super(...arguments),this.listItems=[],this.virtualData={virtualItems:[]},this.virtualizerProps={useAnimationFrameWithResizeObserver:!0,count:0,estimateSize:()=>36,getItemKey:e=>{var t;return(t=this.listItems[e])==null?void 0:t.key}},this.virtualizerRef=vt(),this.counter=0,this.isClippyNext=!1,this.addChunks=()=>{var r,n;clearTimeout(this.timerId);const e=E(2,30);let t=new Array(e).fill(!0).map(()=>Z[E(0,Z.length-1)]).join(" ").replace(/ +/gm," ").trim();const s=E(0,10);t+=s>6?`.
`:"",t+=s>8?`
`:"";const i=(n=(r=this.listItems.at(-1))==null?void 0:r.data)==null?void 0:n.at(-1);(!i||i===`
`)&&(t=t.charAt(0).toUpperCase()+t.slice(1)),this.listItems[this.listItems.length-1].data+=`${t}`,this.requestUpdate(),this.timerId=setTimeout(this.addChunks,E(5,200))},this.onNext=async e=>{this.isClippyNext?(this.listItems.push({key:this.listItems.length.toString(),data:""}),this.addChunks()):(clearTimeout(this.timerId),this.counter+=1,this.listItems.push({key:this.listItems.length.toString(),data:`Question #${this.counter}`})),this.isClippyNext=!this.isClippyNext,this.virtualizerProps={...this.virtualizerProps,count:this.listItems.length},e&&(await this.updateComplete,this.virtualizerRef.value.scrollToIndex(this.listItems.length-1,{align:"end",behavior:"auto"}))},this.reset=()=>{clearTimeout(this.timerId),this.counter=0,this.isClippyNext=!1,this.listItems.length=0,this.virtualizerProps={...this.virtualizerProps,count:this.listItems.length}},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}connectedCallback(){super.connectedCallback(),this.updateVirtualProps(),this.reset()}disconnectedCallback(){super.disconnectedCallback(),this.reset()}generateListItem(e,t){return m`
      <mdc-listitem data-index=${e} label=${t}>
        <pre slot="content">${t}</pre>
      </mdc-listitem>
    `}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:e=>{var t;return(t=this.listItems[e])==null?void 0:t.key}}}render(){return m`
      <div class="vlist-dynamic-content--wrapper">
        <mdc-virtualizedlist
          ${yt(this.virtualizerRef)}
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
          observe-size-changes
          revert-list
          scroll-anchoring
        >
          ${this.listItems.length?D(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.generateListItem(e,this.listItems[e].data)):Ct}
        </mdc-virtualizedlist>
        <div style="margin-top: 1rem;">
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button @click=${()=>this.onNext(!0)}>Go to next message</mdc-button>
            <mdc-button @click=${()=>this.onNext(!1)}>Add next message</mdc-button>
            <mdc-button variant="secondary" @click=${this.reset}>Reset</mdc-button>
          </div>
        </div>
      </div>

      <style>
        .vlist-dynamic-content--wrapper {
          width: 100%;
          margin-block: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        mdc-virtualizedlist {
          width: 640px;
          height: 480px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1rem;
        }
        pre {
          text-wrap: auto;
        }
      </style>
    `}createRenderRoot(){return this}}H([u()],F.prototype,"listItems");H([u()],F.prototype,"virtualData");H([u()],F.prototype,"virtualizerProps");F.register("mdc-virtualizeddynamiclistcontent");var re=Object.defineProperty,x=(a,e,t,s)=>{for(var i=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(i=n(e,t,i)||i);return i&&re(e,t,i),i};class I extends P{constructor(){super(),this.virtualizerProps={count:100,estimateSize:()=>this.itemSize,getItemKey:e=>this.listItemTexts[e]},this.story="text",this.loop="false",this.itemSize=36,this.initialFocus=0,this.virtualData={virtualItems:[]},this.listItemTexts=new Array(this.virtualizerProps.count).fill(!0).map((e,t)=>`list item number ${t}`),this.handleVirtualItemsChange=e=>{this.virtualData=e.detail},this.onscroll=null}update(e){super.update(e),e.has("virtualizerProps")&&this.updateListItemTextArray(),e.has("itemSize")&&(this.virtualizerProps={...this.virtualizerProps,estimateSize:()=>this.itemSize})}connectedCallback(){var e;super.connectedCallback(),(e=this.virtualizerProps)!=null&&e.count&&this.updateListItemTextArray()}updateListItemTextArray(){var e;this.listItemTexts=new Array((e=this.virtualizerProps)==null?void 0:e.count).fill(!0).map((t,s)=>`list item number ${s}`)}renderItem(e){return this.story==="text"?m`<mdc-listitem data-index=${e} label="${this.listItemTexts[e]}"></mdc-listitem> `:this.story==="interactive"?m`
        <mdc-listitem data-index=${e}>
          <span slot="leading-text-primary-label">${this.listItemTexts[e]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `:this.story==="dynamic"?m`
        <mdc-listitem data-index=${e} style="--mdc-listitem-height: ${50+e%5*10}px">
          <span slot="leading-text-primary-label">${this.listItemTexts[e]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `:m``}render(){return m`
      <div part="wrapper">
        <mdc-virtualizedlist
          @scroll=${this.onscroll}
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.initialFocus}
          loop=${this.loop}
        >
          ${D(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.renderItem(e))}
        </mdc-virtualizedlist>
      </div>
      <style>
        :host([story='text'])::part(wrapper) {
          width: 500px;
          height: 500px;
        }
        :host([story='interactive'])::part(wrapper) {
          width: 100%;
          height: 500px;
        }
        :host([story='dynamic'])::part(wrapper) {
          width: 100%;
          height: 500px;
        }
      </style>
    `}}x([g({type:Object,attribute:"virtualizerprops"})],I.prototype,"virtualizerProps");x([g({type:String})],I.prototype,"story");x([g({type:String,reflect:!0})],I.prototype,"loop");x([g({type:Number,reflect:!0,attribute:"item-size"})],I.prototype,"itemSize");x([g({type:Number,reflect:!0,attribute:"initial-focus"})],I.prototype,"initialFocus");x([u()],I.prototype,"virtualData");x([u()],I.prototype,"listItemTexts");I.register("mdc-virtualizedwrapper");const{action:ne}=__STORYBOOK_MODULE_ACTIONS__,ae=a=>m` <mdc-virtualizedwrapper
    .virtualizerProps=${a.virtualizerProps}
    .onscroll=${ne("scroll")}
    story=${a.story}
    initial-focus="${a["initial-focus"]||0}"
  ></mdc-virtualizedwrapper>`,qe={title:"Components/virtualizedlist",tags:["autodocs"],component:"mdc-virtualizedlist",render:ae,argTypes:{...N(["virtualizerController","virtualizer","scrollElementRef","focusTrapRef","loop","role","itemsStore"]),...N(["story"]),...kt,...Mt}},k={args:{virtualizerProps:{count:200,estimateSize:()=>36,overscan:30},story:"text"}},M={args:{virtualizerProps:{count:200,estimateSize:()=>48},story:"interactive"}},A={argTypes:{...N(["initial-focus"])},args:{virtualizerProps:{count:200,estimateSize:()=>48},story:"interactive","initial-focus":199}},O={render:()=>m` <mdc-virtualizeddynamiclist></mdc-virtualizeddynamiclist>`},R={render:()=>m` <mdc-virtualizedlist-chat-example></mdc-virtualizedlist-chat-example>`},$={parameters:{docs:{description:{story:m`<p>AI chat like example to test revers list with dynamically changing content height.</p>
          <p>Every second message is an "AI" answer updated over time.</p>`}}},render:()=>m` <mdc-virtualizeddynamiclistcontent></mdc-virtualizeddynamiclistcontent>`};var X,tt,et;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 36,
      overscan: 30
    },
    story: 'text'
  }
}`,...(et=(tt=k.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var st,it,rt;M.parameters={...M.parameters,docs:{...(st=M.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 48
    },
    story: 'interactive'
  }
}`,...(rt=(it=M.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var nt,at,ot;A.parameters={...A.parameters,docs:{...(nt=A.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['initial-focus'])
  },
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 48
    },
    story: 'interactive',
    'initial-focus': 199
  }
}`,...(ot=(at=A.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var lt,ht,ct;O.parameters={...O.parameters,docs:{...(lt=O.parameters)==null?void 0:lt.docs,source:{originalSource:"{\n  render: () => html` <mdc-virtualizeddynamiclist></mdc-virtualizeddynamiclist>`\n}",...(ct=(ht=O.parameters)==null?void 0:ht.docs)==null?void 0:ct.source}}};var mt,dt,ut;R.parameters={...R.parameters,docs:{...(mt=R.parameters)==null?void 0:mt.docs,source:{originalSource:"{\n  render: () => html` <mdc-virtualizedlist-chat-example></mdc-virtualizedlist-chat-example>`\n}",...(ut=(dt=R.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,gt,ft;$.parameters={...$.parameters,docs:{...(pt=$.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\`<p>AI chat like example to test revers list with dynamically changing content height.</p>
          <p>Every second message is an "AI" answer updated over time.</p>\`
      }
    }
  },
  render: () => html\` <mdc-virtualizeddynamiclistcontent></mdc-virtualizeddynamiclistcontent>\`
}`,...(ft=(gt=$.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};const Qe=["Example","Interactive","InteractiveStartAtBottom","Dynamic","Chat","DynamicContent"];export{R as Chat,O as Dynamic,$ as DynamicContent,k as Example,M as Interactive,A as InteractiveStartAtBottom,Qe as __namedExportsOrder,qe as default};
