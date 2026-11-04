"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=u(function(k,o){
function p(e,r,a,i){var t,n;if(e<=0)return!1;for(t=i,n=0;n<e;n++){if(r[t])return!0;t+=a}return!1}o.exports=p
});var q=u(function(w,f){
var l=require('@stdlib/strided-base-stride2offset/dist'),j=s();function m(e,r,a){var i=l(e,a);return j(e,r,a,i)}f.exports=m
});var c=u(function(z,y){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),_=s();R(d,"ndarray",_);y.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),v,x=O(E(__dirname,"./native.js"));b(x)?v=g:v=x;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
