(()=>{"use strict";var e={3762:(e,t,r)=>{r(71),r(5363);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});var d=r(4260);const c=(0,d.Z)(s,[["render",i]]),u=c;var l=r(955),p=r(3340),f=r(9582);const g=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(166)]).then(r.bind(r,3166)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(437)]).then(r.bind(r,7437))},{path:"auth",component:()=>Promise.all([r.e(736),r.e(64),r.e(262)]).then(r.bind(r,8262))},{path:"dealers",component:()=>Promise.all([r.e(736),r.e(64),r.e(613)]).then(r.bind(r,2613))},{path:"users",component:()=>Promise.all([r.e(736),r.e(64),r.e(628)]).then(r.bind(r,4628))},{path:"payments",component:()=>Promise.all([r.e(736),r.e(64),r.e(679)]).then(r.bind(r,7679))},{path:"calculator",component:()=>Promise.all([r.e(736),r.e(64),r.e(10)]).then(r.bind(r,1010))},{path:"settings",component:()=>Promise.all([r.e(736),r.e(64),r.e(863)]).then(r.bind(r,5863))},{path:"bids",component:()=>Promise.all([r.e(736),r.e(64),r.e(101)]).then(r.bind(r,101))},{path:"contracts",component:()=>Promise.all([r.e(736),r.e(64),r.e(695)]).then(r.bind(r,3695))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(434)]).then(r.bind(r,6434))}],m=g,h=(0,p.BC)((()=>{const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function v(e,t){const n="function"===typeof l["default"]?await(0,l["default"])({}):l["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,955)),i="function"===typeof h?await h({store:n}):h;n.$router=i;const s=e(u);return s.use(o.Z,t),{app:s,store:n,storeKey:a,router:i}}var b=r(1509),D=r(4434);const w={config:{},plugins:{Dialog:b.Z,Notify:D.Z}};var y=r(1413),O=r(6249),P=r(6394),G=r(27);(0,y.z)("service-worker.js",{ready(e){console.log("Service worker is active.",e)},registered(e){console.log("Service worker has been registered.",e)},cached(e){console.log("Content has been cached for offline use.",e)},updatefound(e){console.log("New content is downloading. updatefound",e),b.Z.create({title:"Atenție!",message:`A fost instalată o versiune mai nouă a aplicației (${G.Z.appVersion}). Doriți să încărcați versiunea nouă?`,persistent:!0,ok:{label:"DA, încarcă",flat:!1,size:"lg"},cancel:{label:"Închide",flat:!0,size:"lg"}}).onOk((()=>{"serviceWorker"in navigator&&caches.keys().then((e=>{e.forEach((e=>{caches.delete(e)}))})),O.Z.show({spinner:P.Z}),setTimeout((()=>{window.location.reload(!0)}),1e4)})).onCancel((()=>{}))},updated(e){console.log("New content is available; please refresh. updated",e)},offline(){},error(e){console.error("Error during service worker registration:",e)}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));const S="";async function k({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},d=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:d,publicPath:S})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}v(n.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4112)),Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,api:()=>c});r(5363);var n=r(3340),o=r(52),a=r.n(o),i=r(1509),s=r(27);window.location.origin||i.Z.create({title:"Atenție",message:"Eroare de accesare window.location.origin",color:"negative"});let d=String(window.location.origin);Object.keys(s.Z.apiUrls).forEach((e=>{d=d.replace(e,s.Z.apiUrls[e])})),d||i.Z.create({title:"Atenție",message:"Eroare de accesare baseURL",color:"negative"});const c=a().create({baseURL:`${d}/api`}),u=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=c}))},4112:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(3340),o=r(5948);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,n.xr)((({app:e})=>{const t=(0,o.o)({locale:"en-US",messages:i});e.use(t)}))},27:(e,t,r)=>{r.d(t,{Z:()=>n});const n={appVersion:"0.896.2.pwa",apiUrls:{"192.168.0.66:1313":"192.168.0.66:1212","retail.creditbox.md":"retail-php.creditbox.md"},USER_ROLES:{1:"Admin",2:"Dealer",3:"Executor"}}},955:(e,t,r)=>{r.r(t),r.d(t,{default:()=>qe});var n={};r.r(n),r.d(n,{getActiveModule:()=>B,getCheckNewMessages:()=>A,getCountNewMessages:()=>j,getToken:()=>F,getUser:()=>C});var o={};r.r(o),r.d(o,{updateActiveModule:()=>R,updateCheckNewMessages:()=>T,updateCountNewMessages:()=>N,updateToken:()=>M,updateUser:()=>U});var a={};r.r(a),r.d(a,{someAction:()=>x});var i={};r.r(i),r.d(i,{getOpenedDealerData:()=>Z,getOpenedDealerForm:()=>L,getRefreshGrid:()=>$});var s={};r.r(s),r.d(s,{updateOpenedDealerData:()=>z,updateOpenedDealerForm:()=>K,updateRefreshGrid:()=>q});var d={};r.r(d),r.d(d,{someAction:()=>V});var c={};r.r(c),r.d(c,{getLastBidTab:()=>X,getOpenedBidData:()=>H,getOpenedBidForm:()=>I,getRefreshGrid:()=>J,getTermeniConditii:()=>Y});var u={};r.r(u),r.d(u,{updateLastBidTab:()=>ne,updateOpenedBidData:()=>ee,updateOpenedBidForm:()=>te,updateRefreshGrid:()=>re,updateTermeniConditii:()=>oe});var l={};r.r(l),r.d(l,{someAction:()=>ae});var p={};r.r(p),r.d(p,{getOpenedUserData:()=>de,getOpenedUserForm:()=>ce,getRefreshGrid:()=>ue,getRefreshGridBidsCalculator:()=>le});var f={};r.r(f),r.d(f,{updateOpenedUserData:()=>pe,updateOpenedUserForm:()=>fe,updateRefreshGrid:()=>ge,updateRefreshGridBidsCalculator:()=>me});var g={};r.r(g),r.d(g,{someAction:()=>he});var m={};r.r(m),r.d(m,{getOpenedPaymentData:()=>De,getOpenedPaymentForm:()=>we,getRefreshGrid:()=>ye});var h={};r.r(h),r.d(h,{updateOpenedPaymentData:()=>Oe,updateOpenedPaymentForm:()=>Pe,updateRefreshGrid:()=>Ge});var v={};r.r(v),r.d(v,{someAction:()=>Se});var b={};r.r(b),r.d(b,{getOpenedSettingsDialogData:()=>Ce,getOpenedSettingsDialogForm:()=>Ae,getRefreshGrid:()=>Be});var D={};r.r(D),r.d(D,{updateOpenedSettingsDialogData:()=>je,updateOpenedSettingsDialogForm:()=>Me,updateRefreshGrid:()=>Ue});var w={};r.r(w),r.d(w,{someAction:()=>Te});var y={};r.r(y),r.d(y,{getOpenedSettingsDialogData:()=>xe,getOpenedSettingsDialogForm:()=>Ee,getRefreshGrid:()=>_e});var O={};r.r(O),r.d(O,{updateOpenedSettingsDialogData:()=>Ze,updateOpenedSettingsDialogForm:()=>Le,updateRefreshGrid:()=>$e});var P={};r.r(P),r.d(P,{someAction:()=>ze});var G=r(3340),S=r(3617);const k=()=>({token:"",user:{},checkNewMessages:{},activeModule:"",countNewMessages:0});function F(e){return e.token}function C(e){return e.user}function A(e){return e.checkNewMessages}function B(e){return e.activeModule}function j(e){return e.countNewMessages}const M=(e,t)=>{e.token=t},U=(e,t)=>{e.user=t},T=(e,t)=>{e.checkNewMessages=t},R=(e,t)=>{e.activeModule=t},N=(e,t)=>{e.countNewMessages=t};function x(){}const E={namespaced:!0,getters:n,mutations:o,actions:a,state:k},_=()=>({openedDealerData:{},openedDealerForm:!1,refreshGrid:!1});function Z(e){return e.openedDealerData}function L(e){return e.openedDealerForm}function $(e){return e.refreshGrid}const z=(e,t)=>{e.openedDealerData=t},K=(e,t)=>{e.openedDealerForm=t},q=(e,t)=>{e.refreshGrid=t};function V(){}const Q={namespaced:!0,getters:i,mutations:s,actions:d,state:_},W=()=>({openedBidData:{},openedBidForm:!1,refreshGrid:!1,lastBidTab:!1,termeniConditii:!1});function H(e){return e.openedBidData}function I(e){return e.openedBidForm}function J(e){return e.refreshGrid}function X(e){return e.lastBidTab}function Y(e){return e.termeniConditii}const ee=(e,t)=>{e.openedBidData=t},te=(e,t)=>{e.openedBidForm=t},re=(e,t)=>{e.refreshGrid=t},ne=(e,t)=>{e.lastBidTab=t},oe=(e,t)=>{e.termeniConditii=t};function ae(){}const ie={namespaced:!0,getters:c,mutations:u,actions:l,state:W},se=()=>({openedUserData:{},openedUserForm:!1,refreshGrid:!1,refreshGridBidsCalculator:!1});function de(e){return e.openedUserData}function ce(e){return e.openedUserForm}function ue(e){return e.refreshGrid}function le(e){return e.refreshGridBidsCalculator}const pe=(e,t)=>{e.openedUserData=t},fe=(e,t)=>{e.openedUserForm=t},ge=(e,t)=>{e.refreshGrid=t},me=(e,t)=>{e.refreshGridBidsCalculator=t};function he(){}const ve={namespaced:!0,getters:p,mutations:f,actions:g,state:se},be=()=>({openedPaymentData:{},openedPaymentForm:!1,refreshGrid:!1});function De(e){return e.openedPaymentData}function we(e){return e.openedPaymentForm}function ye(e){return e.refreshGrid}const Oe=(e,t)=>{e.openedPaymentData=t},Pe=(e,t)=>{e.openedPaymentForm=t},Ge=(e,t)=>{e.refreshGrid=t};function Se(){}const ke={namespaced:!0,getters:m,mutations:h,actions:v,state:be},Fe=()=>({openedSettingsDialogData:{},openedSettingsDialogForm:!1,refreshGrid:!1});function Ce(e){return e.openedSettingsDialogData}function Ae(e){return e.openedSettingsDialogForm}function Be(e){return e.refreshGrid}const je=(e,t)=>{e.openedSettingsDialogData=t},Me=(e,t)=>{e.openedSettingsDialogForm=t},Ue=(e,t)=>{e.refreshGrid=t};function Te(){}const Re={namespaced:!0,getters:b,mutations:D,actions:w,state:Fe},Ne=()=>({openedSettingsDialogData:{},openedSettingsDialogForm:!1,refreshGrid:!1});function xe(e){return e.openedSettingsDialogData}function Ee(e){return e.openedSettingsDialogForm}function _e(e){return e.refreshGrid}const Ze=(e,t)=>{e.openedSettingsDialogData=t},Le=(e,t)=>{e.openedSettingsDialogForm=t},$e=(e,t)=>{e.refreshGrid=t};function ze(){}const Ke={namespaced:!0,getters:y,mutations:O,actions:P,state:Ne},qe=(0,G.h)((()=>{const e=(0,S.MT)({modules:{auth:E,dealers:Q,bids:ie,users:ve,payments:ke,settingsTypeCredits:Re,settingsProducts:Ke},strict:!1});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{10:"81e66f4b",64:"4b5dc4d0",101:"5ce3d1b7",166:"f0c5ce11",262:"4be6c67f",434:"bd46704e",437:"e5b72f73",613:"2eb6f52f",628:"4d878d07",679:"484348ee",695:"9faf9601",863:"76d06a07"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"71801429",736:"fd0a74bd"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="retail.creditbox.md:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,d;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,d=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,d,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,d]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var u=d(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkretail_creditbox_md"]=self["webpackChunkretail_creditbox_md"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(3762)));n=r.O(n)})();