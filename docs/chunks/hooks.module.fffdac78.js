import{l as x}from"./preact.module.3a027d7c.js";var v,n,H,y,m=0,C=[],i=x,A=i.__b,q=i.__r,F=i.diffed,g=i.__c,k=i.unmount,T=i.__;function d(_,t){i.__h&&i.__h(n,_,m||t),m=0;var r=n.__H||(n.__H={__:[],__h:[]});return _>=r.__.length&&r.__.push({}),r.__[_]}function S(_){return m=1,z(j,_)}function z(_,t,r){var o=d(v++,2);if(o.t=_,!o.__c&&(o.__=[r?r(t):j(void 0,t),function(c){var e=o.__N?o.__N[0]:o.__[0],f=o.t(e,c);e!==f&&(o.__N=[f,o.__[1]],o.__c.setState({}))}],o.__c=n,!n.u)){var a=function(c,e,f){if(!o.__c.__H)return!0;var l=o.__c.__H.__.filter(function(u){return!!u.__c});if(l.every(function(u){return!u.__N}))return!h||h.call(this,c,e,f);var E=!1;return l.forEach(function(u){if(u.__N){var w=u.__[0];u.__=u.__N,u.__N=void 0,w!==u.__[0]&&(E=!0)}}),!(!E&&o.__c.props===c)&&(!h||h.call(this,c,e,f))};n.u=!0;var h=n.shouldComponentUpdate,N=n.componentWillUpdate;n.componentWillUpdate=function(c,e,f){if(this.__e){var l=h;h=void 0,a(c,e,f),h=l}N&&N.call(this,c,e,f)},n.shouldComponentUpdate=a}return o.__N||o.__}function $(_,t){var r=d(v++,3);!i.__s&&W(r.__H,t)&&(r.__=_,r.i=t,n.__H.__h.push(r))}function G(_){return m=5,b(function(){return{current:_}},[])}function b(_,t){var r=d(v++,7);return W(r.__H,t)&&(r.__=_(),r.__H=t,r.__h=_),r.__}function I(_,t){return m=8,b(function(){return _},t)}function B(){for(var _;_=C.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(s),_.__H.__h.forEach(p),_.__H.__h=[]}catch(t){_.__H.__h=[],i.__e(t,_.__v)}}i.__b=function(_){n=null,A&&A(_)},i.__=function(_,t){_&&t.__k&&t.__k.__m&&(_.__m=t.__k.__m),T&&T(_,t)},i.__r=function(_){q&&q(_),v=0;var t=(n=_.__c).__H;t&&(H===n?(t.__h=[],n.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.i=r.__N=void 0})):(t.__h.forEach(s),t.__h.forEach(p),t.__h=[],v=0)),H=n},i.diffed=function(_){F&&F(_);var t=_.__c;t&&t.__H&&(t.__H.__h.length&&(C.push(t)!==1&&y===i.requestAnimationFrame||((y=i.requestAnimationFrame)||D)(B)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.i=void 0})),H=n=null},i.__c=function(_,t){t.some(function(r){try{r.__h.forEach(s),r.__h=r.__h.filter(function(o){return!o.__||p(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],i.__e(o,r.__v)}}),g&&g(_,t)},i.unmount=function(_){k&&k(_);var t,r=_.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{s(o)}catch(a){t=a}}),r.__H=void 0,t&&i.__e(t,r.__v))};var U=typeof requestAnimationFrame=="function";function D(_){var t,r=function(){clearTimeout(o),U&&cancelAnimationFrame(t),setTimeout(_)},o=setTimeout(r,100);U&&(t=requestAnimationFrame(r))}function s(_){var t=n,r=_.__c;typeof r=="function"&&(_.__c=void 0,r()),n=t}function p(_){var t=n;_.__c=_.__(),n=t}function W(_,t){return!_||_.length!==t.length||t.some(function(r,o){return r!==_[o]})}function j(_,t){return typeof t=="function"?t(_):t}export{G as A,b as T,S as h,I as q,$ as y};
