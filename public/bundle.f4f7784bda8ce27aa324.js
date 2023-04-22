(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/**\n * Body CSS\n */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n/*\n  * Sidebar CSS\n  */\n\n#sidebar {\n  background-color: #2196f3;\n  padding: 15px;\n}\n.author {\n  font-size: 0.8rem;\n}\n\n/* \n* Modal\n */\n.floating-btn {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n\n.modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  background: #fff;\n  overflow-y: auto;\n}\n\n.modal > h1 {\n  text-align: center;\n}\n\n.modal .modal-content {\n  padding: 1rem;\n}\n\n.error {\n  color: red;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n/**\n  * Content CSS\n  */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{class e{static create(t){return fetch("https://podcast-app-8154e-default-rtdb.europe-west1.firebasedatabase.app/questions.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>(console.log(e),t.id=e.name,t))).then(n).then(e.renderList)}static fetch(e){return e?fetch(`https://podcast-app-8154e-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((n=>({...e[n],id:n}))):[])):Promise.resolve('<p class="error">У Вас нет Токена</p>')}static renderList(){const e=o(),n=e.length?e.map(r).join(" "):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';document.getElementById("list").innerHTML=n}static listToHTML(e){return console.log("!!!",e.length),e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join(" ")}</ol>`:"<p>Вопросов пока нет</p>"}}function n(e){const n=o();n.push(e),localStorage.setItem("questions",JSON.stringify(n))}function o(){return JSON.parse(localStorage.getItem("questions"))||[]}function r(e){return`\n  <div class="mui--text-black-54">\n            ${new Date(e.date).toLocaleDateString()}\n            ${new Date(e.date).toLocaleTimeString()}\n          </div>\n          <div>${e.text}</div>\n          <br />\n  `}function a(e){return e.length>=10}function i(e,n){const t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`\n  <h1>${e}</h1>\n  <div class="modal-content">${n}</div>\n  `,mui.overlay("on",t)}var s=t(379),c=t.n(s),l=t(795),d=t.n(l),u=t(569),p=t.n(u),f=t(565),m=t.n(f),h=t(216),v=t.n(h),g=t(589),b=t.n(g),y=t(28),x={};x.styleTagTransform=b(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=v(),c()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;const S=document.getElementById("form"),w=S.querySelector("#question-input"),T=S.querySelector("#submit"),L=document.getElementById("modal-btn");function E(n){n.preventDefault();const t=n.target.querySelector("button"),o=n.target.querySelector("#email").value,r=n.target.querySelector("#password").value;console.log(o,r),t.disabled=!0,function(e,n){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1lh99wCbRg-ymLGraSBpoQ6dYRvevuP0",{method:"POST",body:JSON.stringify({email:e,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(o,r).then((n=>(console.log("Token",n),e.fetch(n)))).then(C).then((()=>t.disabled=!1))}function C(n){console.log("Content",n),"string"==typeof n?i("Ошибка",n):i("Список вопросов",e.listToHTML(n))}console.log("App working..."),window.addEventListener("load",e.renderList),L.addEventListener("click",(function(){i("Авторизация",'\n\t<form class="mui-form" id="auth-form">\n            <div class="mui-textfield mui-textfield--float-label">\n              <input\n                type="email"\n                id="email"\n                required\n              />\n              <label for="email">Email</label>\n            </div>\n            <div class="mui-textfield mui-textfield--float-label">\n              <input\n                type="password"\n                id="password"\n                required\n              />\n              <label for="password">Пароль</label>\n            </div>\n\n            <button\n              type="submit"\n              class="mui-btn mui-btn--raised mui-btn--primary"\n            >\n              Войти\n            </button>\n          </form>\n\t'),document.getElementById("auth-form").addEventListener("submit",E,{once:!0})})),S.addEventListener("submit",(function(n){if(n.preventDefault(),a(w.value)){const n={text:w.value.trim(),date:(new Date).toJSON()};T.disabled=!0,e.create(n).then((()=>{console.log("Question",n),w.value="",w.className="",T.disabled=!1}))}})),w.addEventListener("input",(()=>{T.disabled=!a(w.value)}))})()})();