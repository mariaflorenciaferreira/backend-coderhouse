(()=>{"use strict";var e={607:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(860)),i=r(721),s=o(r(332)),l=(0,n.default)(),u=new s.default("Juan","Perez");l.get("/",((e,t)=>{t.send({time:(0,i.getTime)(),name:u.getFullName()})})),l.listen(4e3,(()=>{console.log("Server is running on port 4000")}))},721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=void 0,t.getTime=()=>({fyh:(new Date).toLocaleString,time:Date.now()})},332:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.name=e,this.apellido=t}getFullName(){return`${this.name} ${this.apellido}`}}},860:e=>{e.exports=require("express")}},t={};!function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}(607)})();