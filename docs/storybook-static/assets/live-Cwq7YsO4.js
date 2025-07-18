import{R as i,D as s}from"./lit-element-D5KKan5q.js";import{e as T,i as p,t as r}from"./directive-Ctav8iJK.js";import{r as a,d as f}from"./directive-helpers-Bb6vhctq.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=T(class extends p{constructor(t){if(super(t),t.type!==r.PROPERTY&&t.type!==r.ATTRIBUTE&&t.type!==r.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!a(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===i||e===s)return e;const n=t.element,o=t.name;if(t.type===r.PROPERTY){if(e===n[o])return i}else if(t.type===r.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return i}else if(t.type===r.ATTRIBUTE&&n.getAttribute(o)===e+"")return i;return f(t),e}});export{E as F};
