import{l as u}from"./preact.module.9d6f4735.js";var l,o,s,E,m=0,b=[],h=[],y=u.__b,V=u.__r,F=u.diffed,g=u.__c,A=u.unmount;function d(n,r){u.__h&&u.__h(o,n,m||r),m=0;var _=o.__H||(o.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({__V:h}),_.__[n]}function B(n){return m=1,j(C,n)}function j(n,r,_){var t=d(l++,2);if(t.t=n,!t.__c&&(t.__=[_?_(r):C(void 0,r),function(e){var f=t.__N?t.__N[0]:t.__[0],a=t.t(f,e);f!==a&&(t.__N=[a,t.__[1]],t.__c.setState({}))}],t.__c=o,!o.u)){o.u=!0;var c=o.shouldComponentUpdate;o.shouldComponentUpdate=function(e,f,a){if(!t.__c.__H)return!0;var p=t.__c.__H.__.filter(function(i){return i.__c});if(p.every(function(i){return!i.__N}))return!c||c.call(this,e,f,a);var N=!1;return p.forEach(function(i){if(i.__N){var U=i.__[0];i.__=i.__N,i.__N=void 0,U!==i.__[0]&&(N=!0)}}),!(!N&&t.__c.props===e)&&(!c||c.call(this,e,f,a))}}return t.__N||t.__}function P(n,r){var _=d(l++,3);!u.__s&&T(_.__H,r)&&(_.__=n,_.i=r,o.__H.__h.push(_))}function S(n){return m=5,k(function(){return{current:n}},[])}function k(n,r){var _=d(l++,7);return T(_.__H,r)?(_.__V=n(),_.i=r,_.__h=n,_.__V):_.__}function w(){for(var n;n=b.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(v),n.__H.__h.forEach(H),n.__H.__h=[]}catch(r){n.__H.__h=[],u.__e(r,n.__v)}}u.__b=function(n){o=null,y&&y(n)},u.__r=function(n){V&&V(n),l=0;var r=(o=n.__c).__H;r&&(s===o?(r.__h=[],o.__h=[],r.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=h,_.__N=_.i=void 0})):(r.__h.forEach(v),r.__h.forEach(H),r.__h=[])),s=o},u.diffed=function(n){F&&F(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(b.push(r)!==1&&E===u.requestAnimationFrame||((E=u.requestAnimationFrame)||x)(w)),r.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==h&&(_.__=_.__V),_.i=void 0,_.__V=h})),s=o=null},u.__c=function(n,r){r.some(function(_){try{_.__h.forEach(v),_.__h=_.__h.filter(function(t){return!t.__||H(t)})}catch(t){r.some(function(c){c.__h&&(c.__h=[])}),r=[],u.__e(t,_.__v)}}),g&&g(n,r)},u.unmount=function(n){A&&A(n);var r,_=n.__c;_&&_.__H&&(_.__H.__.forEach(function(t){try{v(t)}catch(c){r=c}}),_.__H=void 0,r&&u.__e(r,_.__v))};var q=typeof requestAnimationFrame=="function";function x(n){var r,_=function(){clearTimeout(t),q&&cancelAnimationFrame(r),setTimeout(n)},t=setTimeout(_,100);q&&(r=requestAnimationFrame(_))}function v(n){var r=o,_=n.__c;typeof _=="function"&&(n.__c=void 0,_()),o=r}function H(n){var r=o;n.__c=n.__(),o=r}function T(n,r){return!n||n.length!==r.length||r.some(function(_,t){return _!==n[t]})}function C(n,r){return typeof r=="function"?r(n):r}export{k as F,S as _,P as h,B as p};
