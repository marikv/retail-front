(()=>{"use strict";var e={3762:(e,t,r)=>{r(71),r(5363);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});var d=r(4260);const c=(0,d.Z)(s,[["render",i]]),u=c;var l=r(8178),p=r(3340),f=r(9582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(750)]).then(r.bind(r,6750)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(527)]).then(r.bind(r,3527))},{path:"auth",component:()=>Promise.all([r.e(736),r.e(64),r.e(262)]).then(r.bind(r,8262))},{path:"dealers",component:()=>Promise.all([r.e(736),r.e(64),r.e(6)]).then(r.bind(r,6))},{path:"users",component:()=>Promise.all([r.e(736),r.e(64),r.e(628)]).then(r.bind(r,4628))},{path:"calculator",component:()=>Promise.all([r.e(736),r.e(64),r.e(164)]).then(r.bind(r,3164))},{path:"settings",component:()=>Promise.all([r.e(736),r.e(64),r.e(796)]).then(r.bind(r,3796))},{path:"bids",component:()=>Promise.all([r.e(736),r.e(64),r.e(101)]).then(r.bind(r,101))},{path:"contracts",component:()=>Promise.all([r.e(736),r.e(64),r.e(695)]).then(r.bind(r,3695))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(434)]).then(r.bind(r,6434))}],g=h,m=(0,p.BC)((()=>{const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t}));async function v(e,t){const n="function"===typeof l["default"]?await(0,l["default"])({}):l["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,8178)),i="function"===typeof m?await m({store:n}):m;n.$router=i;const s=e(u);return s.use(o.Z,t),{app:s,store:n,storeKey:a,router:i}}var b=r(1509),w=r(4434);const y={config:{},plugins:{Dialog:b.Z,Notify:w.Z}};var D=r(1413);(0,D.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));const O="";async function P({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},d=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:d,publicPath:O})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}v(n.ri,y).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4112)),Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,api:()=>c});r(5363);var n=r(3340),o=r(52),a=r.n(o),i=r(1509),s=r(27);window.location.origin||i.Z.create({title:"Atenție",message:"Eroare de accesare window.location.origin",color:"negative"});let d=String(window.location.origin);Object.keys(s.Z.apiUrls).forEach((e=>{d=d.replace(e,s.Z.apiUrls[e])})),d||i.Z.create({title:"Atenție",message:"Eroare de accesare baseURL",color:"negative"});const c=a().create({baseURL:`${d}/api`}),u=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=c}))},4112:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(3340),o=r(5948);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,n.xr)((({app:e})=>{const t=(0,o.o)({locale:"en-US",messages:i});e.use(t)}))},27:(e,t,r)=>{r.d(t,{Z:()=>n});const n={apiUrls:{"192.168.0.66:1313":"192.168.0.66:1212","retail.creditbox.md":"retail-php.creditbox.md"},USER_ROLES:{1:"Admin",2:"Dealer",3:"Executor"}}},8178:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ve});var n={};r.r(n),r.d(n,{getActiveModule:()=>k,getCheckNewMessages:()=>P,getToken:()=>D,getUser:()=>O});var o={};r.r(o),r.d(o,{updateActiveModule:()=>F,updateCheckNewMessages:()=>j,updateToken:()=>G,updateUser:()=>B});var a={};r.r(a),r.d(a,{someAction:()=>S});var i={};r.r(i),r.d(i,{getOpenedDealerData:()=>C,getOpenedDealerForm:()=>M,getRefreshGrid:()=>T});var s={};r.r(s),r.d(s,{updateOpenedDealerData:()=>x,updateOpenedDealerForm:()=>_,updateRefreshGrid:()=>R});var d={};r.r(d),r.d(d,{someAction:()=>E});var c={};r.r(c),r.d(c,{getLastBidTab:()=>q,getOpenedBidData:()=>L,getOpenedBidForm:()=>$,getRefreshGrid:()=>K});var u={};r.r(u),r.d(u,{updateLastBidTab:()=>I,updateOpenedBidData:()=>z,updateOpenedBidForm:()=>Q,updateRefreshGrid:()=>H});var l={};r.r(l),r.d(l,{someAction:()=>J});var p={};r.r(p),r.d(p,{getOpenedUserData:()=>X,getOpenedUserForm:()=>Y,getRefreshGrid:()=>ee,getRefreshGridBidsCalculator:()=>te});var f={};r.r(f),r.d(f,{updateOpenedUserData:()=>re,updateOpenedUserForm:()=>ne,updateRefreshGrid:()=>oe,updateRefreshGridBidsCalculator:()=>ae});var h={};r.r(h),r.d(h,{someAction:()=>ie});var g={};r.r(g),r.d(g,{getOpenedSettingsDialogData:()=>ce,getOpenedSettingsDialogForm:()=>ue,getRefreshGrid:()=>le});var m={};r.r(m),r.d(m,{updateOpenedSettingsDialogData:()=>pe,updateOpenedSettingsDialogForm:()=>fe,updateRefreshGrid:()=>he});var v={};r.r(v),r.d(v,{someAction:()=>ge});var b=r(3340),w=r(3617);const y=()=>({token:"",user:{},checkNewMessages:{},activeModule:""});function D(e){return e.token}function O(e){return e.user}function P(e){return e.checkNewMessages}function k(e){return e.activeModule}const G=(e,t)=>{e.token=t},B=(e,t)=>{e.user=t},j=(e,t)=>{e.checkNewMessages=t},F=(e,t)=>{e.activeModule=t};function S(){}const U={namespaced:!0,getters:n,mutations:o,actions:a,state:y},A=()=>({openedDealerData:{},openedDealerForm:!1,refreshGrid:!1});function C(e){return e.openedDealerData}function M(e){return e.openedDealerForm}function T(e){return e.refreshGrid}const x=(e,t)=>{e.openedDealerData=t},_=(e,t)=>{e.openedDealerForm=t},R=(e,t)=>{e.refreshGrid=t};function E(){}const N={namespaced:!0,getters:i,mutations:s,actions:d,state:A},Z=()=>({openedBidData:{},openedBidForm:!1,refreshGrid:!1,lastBidTab:!1});function L(e){return e.openedBidData}function $(e){return e.openedBidForm}function K(e){return e.refreshGrid}function q(e){return e.lastBidTab}const z=(e,t)=>{e.openedBidData=t},Q=(e,t)=>{e.openedBidForm=t},H=(e,t)=>{e.refreshGrid=t},I=(e,t)=>{e.lastBidTab=t};function J(){}const V={namespaced:!0,getters:c,mutations:u,actions:l,state:Z},W=()=>({openedUserData:{},openedUserForm:!1,refreshGrid:!1,refreshGridBidsCalculator:!1});function X(e){return e.openedUserData}function Y(e){return e.openedUserForm}function ee(e){return e.refreshGrid}function te(e){return e.refreshGridBidsCalculator}const re=(e,t)=>{e.openedUserData=t},ne=(e,t)=>{e.openedUserForm=t},oe=(e,t)=>{e.refreshGrid=t},ae=(e,t)=>{e.refreshGridBidsCalculator=t};function ie(){}const se={namespaced:!0,getters:p,mutations:f,actions:h,state:W},de=()=>({openedSettingsDialogData:{},openedSettingsDialogForm:!1,refreshGrid:!1});function ce(e){return e.openedSettingsDialogData}function ue(e){return e.openedSettingsDialogForm}function le(e){return e.refreshGrid}const pe=(e,t)=>{e.openedSettingsDialogData=t},fe=(e,t)=>{e.openedSettingsDialogForm=t},he=(e,t)=>{e.refreshGrid=t};function ge(){}const me={namespaced:!0,getters:g,mutations:m,actions:v,state:de},ve=(0,b.h)((()=>{const e=(0,w.MT)({modules:{auth:U,dealers:N,bids:V,users:se,settingsTypeCredits:me},strict:!1});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{6:"93457828",64:"5e7bed1a",101:"e7fadca6",164:"dee0aa63",262:"f610c7a0",434:"ff3d9d3b",527:"67f77ed3",628:"caa019c2",695:"00a24e80",750:"d94037d5",796:"8a3b77a4"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"71801429",736:"27679da4"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="retail.creditbox.md:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,d;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,d=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,d,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,d]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var u=d(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkretail_creditbox_md"]=self["webpackChunkretail_creditbox_md"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(3762)));n=r.O(n)})();