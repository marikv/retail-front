"use strict";(self["webpackChunkretail_creditbox_md"]=self["webpackChunkretail_creditbox_md"]||[]).push([[262],{8262:(e,a,t)=>{t.r(a),t.d(a,{default:()=>q});var l=t(3673),r=t(8880);function o(e,a,t,o,u,s){const n=(0,l.up)("q-input"),d=(0,l.up)("q-card-section"),i=(0,l.up)("q-btn"),m=(0,l.up)("q-card"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{class:"flex flex-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"full-width",style:{"max-width":"500px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"q-pb-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),outlined:"",onKeyup:(0,r.D2)(e.login,["enter"]),"error-message":e.emailError,error:e.emailError.length>0,label:"Nume utilizator",type:"text",class:"q-ma-lg"},null,8,["modelValue","onKeyup","error-message","error"]),(0,l.Wm)(n,{modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),outlined:"",onKeyup:(0,r.D2)(e.login,["enter"]),"error-message":e.passwordError,error:e.passwordError.length>0,label:"Parola",type:"password",class:"q-ma-lg"},null,8,["modelValue","onKeyup","error-message","error"])])),_:1}),(0,l.Wm)(d,{class:"text-right q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:"primary",icon:"login",size:"lg",label:"Login",class:"q-ma-lg",onClick:e.login},null,8,["onClick"])])),_:1})])),_:1})])),_:1})}var u=t(1959),s=t(3617),n=t(5474),d=t(3413),i=t(9582);const m=(0,l.aZ)({name:"PageAuth",setup(){const e=(0,s.oR)(),a=(0,u.iH)(""),t=(0,u.iH)(""),r=(0,u.iH)(""),o=(0,u.iH)(""),m=(0,i.tv)();e.commit("auth/updateActiveModule","Auth"),(0,l.m0)((()=>{a.value&&(r.value=""),t.value&&(o.value="")}));const p=()=>{r.value="",o.value="",0===a.value.length&&(r.value+="Numele utilizatorului nu poate fi gol"),t.value.length<8&&(o.value="Parola nu poate fi mai mică de 8 caractere"),""===r.value&&""===o.value&&((0,d.QP)(),n.api.post("/login",{email:a.value,password:t.value}).then((a=>{(0,d.Zk)(),a.data.success?(d.mb.set("token",a.data.data.token),n.api.defaults.headers.common.Authorization=`Bearer ${a.data.data.token}`,e.commit("auth/updateToken",a.data.data.token),e.commit("auth/updateUser",a.data.data.user),a.data.data.user.role_id===d.Vz?m.push({path:"/calculator"}):a.data.data.user.role_id===d.M6?m.push({path:"/bids"}):m.push({path:"/"})):(0,d.NU)({message:a.data.data.message})})).catch((e=>{(0,d.Zk)(),(0,d.NU)({},e)})))};return{login:p,email:a,password:t,emailError:r,passwordError:o}}});var p=t(4260),c=t(4379),g=t(151),h=t(5589),v=t(4842),w=t(2165),f=t(7518),k=t.n(f);const b=(0,p.Z)(m,[["render",o]]),q=b;k()(m,"components",{QPage:c.Z,QCard:g.Z,QCardSection:h.Z,QInput:v.Z,QBtn:w.Z})}}]);