import{R as h}from"./lit-element-CPYlYYac.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=e=>(...t)=>({_$litDirective$:e,values:t});class d{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this.t=t,this._$AM=i,this.i=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=c(class extends d{constructor(e){var t;if(super(e),e.type!==a.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const o=!!t[s];o===this.st.has(s)||(n=this.nt)!=null&&n.has(s)||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return h}});export{u as R};
