"use strict";(self["webpackChunkretail_creditbox_md"]=self["webpackChunkretail_creditbox_md"]||[]).push([[6],{6:(e,l,a)=>{a.r(l),a.d(l,{default:()=>ye});var o=a(3673),r=a(8880),s=a(2323);const n=(0,o.Uk)("Caută"),d=(0,o.Uk)("Adaugă"),t=(0,o.Uk)("Redactează"),u=(0,o.Uk)("Șterge"),i=(0,o.Uk)("Deschide");function c(e,l,a,c,m,p){const g=(0,o.up)("q-icon"),v=(0,o.up)("q-input"),b=(0,o.up)("q-tooltip"),w=(0,o.up)("q-btn"),f=(0,o.up)("q-td"),x=(0,o.up)("q-img"),k=(0,o.up)("q-avatar"),H=(0,o.up)("q-table"),_=(0,o.up)("Dealer"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{class:"flex flex-block"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{class:"full-width sticky-header-table",flat:!0,title:"Dealeri",rows:e.rows,columns:e.columns,"row-key":"id",pagination:e.pagination,"onUpdate:pagination":l[2]||(l[2]=l=>e.pagination=l),loading:e.loading,filter:e.filter,"binary-state-sort":"","no-data-label":"Nu sunt înregistrări","rows-per-page-label":"Înregistrări pe pagină","rows-per-page-options":[30,50,100,200,500,1e3,0],onRequest:e.onRequest},{"top-right":(0,o.w5)((()=>[(0,o.Wm)(v,{outlined:"","bg-color":"white",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[0]||(l[0]=l=>e.filter=l),onKeyup:(0,r.D2)(e.onRequest,["enter"]),placeholder:"Caută"},{append:(0,o.w5)((()=>[(0,o.Wm)(g,{name:"search"})])),_:1},8,["modelValue","onKeyup"]),(0,o.Wm)(w,{icon:"search",round:"",onClick:e.onRequestWithLast,class:"q-ml-lg",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(w,{icon:"add",round:"",onClick:l[1]||(l[1]=l=>e.showDealerModalSetValue(!0)),class:"q-ml-lg",color:"positive"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[d])),_:1})])),_:1})])),"body-cell-actions":(0,o.w5)((l=>[(0,o.Wm)(f,{props:l,class:"actions-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"positive",onClick:a=>e.editRow(l),icon:"edit"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[t])),_:1})])),_:2},1032,["onClick"]),(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"negative",onClick:a=>e.deleteRow(l),icon:"delete"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[u])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),"body-cell-logo":(0,o.w5)((l=>[(0,o.Wm)(f,{props:l,class:"props-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{onClick:a=>e.editRow(l),class:"cursor-pointer",style:{border:"1px solid #dddddd"}},{default:(0,o.w5)((()=>[e.getLogo(l)?((0,o.wg)(),(0,o.j4)(x,{key:0,src:e.getLogo(l),alt:""},null,8,["src"])):((0,o.wg)(),(0,o.iD)("div",{key:1,style:(0,s.j5)(`color: ${e.getColorForLogo(l.row.name)}`)},(0,s.zw)(e.getInitialsForLogo(l.row.name)),5)),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[i])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","loading","filter","onRequest"]),(0,o.Wm)(_,{ref:"DealerRef",onOnCloseDialog:l[3]||(l[3]=l=>e.showDealerModalSetValue(!1))},null,512)])),_:1})}a(5363);var m=a(1959),p=a(3617),g=a(5474),v=a(3413);const b={class:"text-subtitle1"},w=(0,o._)("span",{class:"text-blue-grey"},"Dealer",-1),f={class:(0,s.C_)("q-ml-md")};function x(e,l,a,r,n,d){const t=(0,o.up)("q-toolbar-title"),u=(0,o.up)("header-tabs-for-forms"),i=(0,o.up)("q-space"),c=(0,o.up)("q-btn"),m=(0,o.up)("q-toolbar"),p=(0,o.up)("q-separator"),g=(0,o.up)("DealerGeneral"),v=(0,o.up)("q-tab-panel"),x=(0,o.up)("files-form"),k=(0,o.up)("logs-table-for-forms"),H=(0,o.up)("q-tab-panels"),_=(0,o.up)("q-card-section"),h=(0,o.up)("q-card-actions"),q=(0,o.up)("q-card"),V=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(V,{ref:"dialogRef",modelValue:r.isOpenedLocal,"onUpdate:modelValue":l[2]||(l[2]=e=>r.isOpenedLocal=e),onHide:r.onDialogHide,"full-height":"",persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"q-dialog-plugin",style:{width:"100%","max-width":"1300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:(0,s.C_)("q-pr-xs")},{default:(0,o.w5)((()=>[(0,o.Wm)(t,null,{default:(0,o.w5)((()=>[(0,o._)("span",b,[w,(0,o._)("strong",f,(0,s.zw)(r.id),1)])])),_:1}),(0,o.Wm)(u,{modelValue:r.tab,"onUpdate:modelValue":l[0]||(l[0]=e=>r.tab=e),tabs:r.tabs},null,8,["modelValue","tabs"]),(0,o.Wm)(i),(0,o.Wm)(c,{icon:"close",flat:"",round:"",dense:"",onClick:r.onCancelClick},null,8,["onClick"])])),_:1}),(0,o.Wm)(p),(0,o.Wm)(_,{style:{"min-height":"calc(100vh - 165px)","max-height":"calc(100vh - 165px)"},class:"scroll"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{modelValue:r.tab,"onUpdate:modelValue":l[1]||(l[1]=e=>r.tab=e),animated:"","keep-alive":""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"general",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{ref:"DealerGeneralRef"},null,512)])),_:1}),(0,o.Wm)(v,{name:"files",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{ref:"FilesForm",dealer_id:r.id},null,8,["dealer_id"])])),_:1}),(0,o.Wm)(v,{name:"user_tab_logs",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{entity_id:r.id,entity_name:"dealers"},null,8,["entity_id"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),"general"===r.tab?((0,o.wg)(),(0,o.j4)(p,{key:0})):(0,o.kq)("",!0),"general"===r.tab?((0,o.wg)(),(0,o.j4)(h,{key:1,align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"primary",label:"Salvează",onClick:r.onOKClick},null,8,["onClick"]),(0,o.Wm)(c,{label:"Închide",onClick:r.onCancelClick},null,8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1},8,["modelValue","onHide"])}a(71);var k=a(1701),H=a(7755);const _={class:"row"},h={class:"col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs"},q={class:"col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 row"},V={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},U={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},D={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},C={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},y=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Contacte ",-1),W={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},E={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},Z={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},F={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},N=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Date bancare ",-1),Q={class:"col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-xs"},P={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},R={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},O={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},I={key:0,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},B=(0,o.Uk)(" Utilizatori / Login "),L={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},j={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},T={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"},z={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},A={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},J={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"};function S(e,l,a,r,s,n){const d=(0,o.up)("avatar-upload-field"),t=(0,o.up)("q-input"),u=(0,o.up)("q-btn"),i=(0,o.up)("q-icon");return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",h,[(0,o.Wm)(d,{linkToCurrentImage:e.logo,isFor:"dealer",id:e.id},null,8,["linkToCurrentImage","id"])]),(0,o._)("div",q,[(0,o._)("div",V,[(0,o.Wm)(t,{outlined:"",error:e.nameHasError,onBlur:l[0]||(l[0]=l=>e.nameHasError=!1),onFocus:l[1]||(l[1]=l=>e.nameHasError=!1),modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=l=>e.name=l),label:"Nume (scurt)"},null,8,["error","modelValue"])]),(0,o._)("div",U,[(0,o.Wm)(t,{outlined:"",error:e.fullNameHasError,onBlur:l[3]||(l[3]=l=>e.fullNameHasError=!1),onFocus:l[4]||(l[4]=l=>e.fullNameHasError=!1),modelValue:e.fullName,"onUpdate:modelValue":l[5]||(l[5]=l=>e.fullName=l),label:"Nume Juridic"},null,8,["error","modelValue"])]),(0,o._)("div",D,[(0,o.Wm)(t,{outlined:"",error:e.idnoHasError,onBlur:l[6]||(l[6]=l=>e.idnoHasError=!1),onFocus:l[7]||(l[7]=l=>e.idnoHasError=!1),modelValue:e.idno,"onUpdate:modelValue":l[8]||(l[8]=l=>e.idno=l),label:"IDNO"},null,8,["error","modelValue"])]),(0,o._)("div",C,[(0,o.Wm)(t,{outlined:"",error:e.addressJurHasError,onBlur:l[9]||(l[9]=l=>e.addressJurHasError=!1),onFocus:l[10]||(l[10]=l=>e.addressJurHasError=!1),modelValue:e.addressJur,"onUpdate:modelValue":l[11]||(l[11]=l=>e.addressJur=l),label:"Adresa"},null,8,["error","modelValue"])])]),y,(0,o._)("div",W,[(0,o.Wm)(t,{outlined:"",error:e.phone1HasError,onBlur:l[12]||(l[12]=l=>e.phone1HasError=!1),onFocus:l[13]||(l[13]=l=>e.phone1HasError=!1),modelValue:e.phone1,"onUpdate:modelValue":l[14]||(l[14]=l=>e.phone1=l),label:"Telefon 1"},null,8,["error","modelValue"])]),(0,o._)("div",E,[(0,o.Wm)(t,{outlined:"",error:e.phone2HasError,onBlur:l[15]||(l[15]=l=>e.phone2HasError=!1),onFocus:l[16]||(l[16]=l=>e.phone2HasError=!1),modelValue:e.phone2,"onUpdate:modelValue":l[17]||(l[17]=l=>e.phone2=l),label:"Telefon 2"},null,8,["error","modelValue"])]),(0,o._)("div",Z,[(0,o.Wm)(t,{outlined:"",error:e.faxHasError,onBlur:l[18]||(l[18]=l=>e.faxHasError=!1),onFocus:l[19]||(l[19]=l=>e.faxHasError=!1),modelValue:e.fax,"onUpdate:modelValue":l[20]||(l[20]=l=>e.fax=l),label:"Fax"},null,8,["error","modelValue"])]),(0,o._)("div",F,[(0,o.Wm)(t,{outlined:"",error:e.emailHasError,onBlur:l[21]||(l[21]=l=>e.emailHasError=!1),onFocus:l[22]||(l[22]=l=>e.emailHasError=!1),modelValue:e.email,"onUpdate:modelValue":l[23]||(l[23]=l=>e.email=l),label:"Email"},null,8,["error","modelValue"])]),N,(0,o._)("div",Q,[(0,o.Wm)(t,{outlined:"",error:e.addressJurHasError,onBlur:l[24]||(l[24]=l=>e.addressJurHasError=!1),onFocus:l[25]||(l[25]=l=>e.addressJurHasError=!1),modelValue:e.bankName,"onUpdate:modelValue":l[26]||(l[26]=l=>e.bankName=l),label:"Nume bancă"},null,8,["error","modelValue"])]),(0,o._)("div",P,[(0,o.Wm)(t,{outlined:"",modelValue:e.bankCb,"onUpdate:modelValue":l[27]||(l[27]=l=>e.bankCb=l),label:"c/b"},null,8,["modelValue"])]),(0,o._)("div",R,[(0,o.Wm)(t,{outlined:"",modelValue:e.bankIban,"onUpdate:modelValue":l[28]||(l[28]=l=>e.bankIban=l),label:"IBAN"},null,8,["modelValue"])]),(0,o._)("div",O,[(0,o.Wm)(t,{outlined:"",modelValue:e.bankValuta,"onUpdate:modelValue":l[29]||(l[29]=l=>e.bankValuta=l),label:"Valuta"},null,8,["modelValue"])]),e.id>0?((0,o.wg)(),(0,o.iD)("div",I,[B,e.addUserPressed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:0,color:"primary",icon:"add",class:"q-ml-lg",onClick:l[30]||(l[30]=l=>e.addUserPressed=!0),label:"Adaugă utilizator"}))])):(0,o.kq)("",!0),(0,o._)("div",L,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(t,{key:0,outlined:"",dense:"",error:e.newUserError,onBlur:l[31]||(l[31]=l=>e.newUserError=!1),onFocus:l[32]||(l[32]=l=>e.newUserError=!1),modelValue:e.newUser,"onUpdate:modelValue":l[33]||(l[33]=l=>e.newUser=l),rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["error","modelValue","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",j,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(t,{key:0,outlined:"",dense:"",modelValue:e.newPassword,"onUpdate:modelValue":l[34]||(l[34]=l=>e.newPassword=l),error:e.newPasswordError,onBlur:l[35]||(l[35]=l=>e.newPasswordError=!1),onFocus:l[36]||(l[36]=l=>e.newPasswordError=!1),rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["modelValue","error","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",T,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(u,{key:0,color:"positive",icon:"save",onClick:e.addNewUser,label:"Adaugă"},null,8,["onClick"])):(0,o.kq)("",!0)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.allUsers,((l,a)=>((0,o.wg)(),(0,o.iD)("div",{key:`user-${a}`,class:"col-xs-12 row"},[(0,o._)("div",z,[(0,o.Wm)(t,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,modelValue:e.allUsers[a].email,"onUpdate:modelValue":l=>e.allUsers[a].email=l,rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["readonly","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",A,[(0,o.Wm)(t,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,disable:!e.allUsers[a].edit,modelValue:e.allUsers[a].password,"onUpdate:modelValue":l=>e.allUsers[a].password=l,rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["readonly","disable","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",J,[e.allUsers[a].edit?((0,o.wg)(),(0,o.j4)(u,{key:1,icon:"save",label:"Salvează",onClick:l=>e.saveUser(a),color:"positive"},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(i,{key:0,name:"edit",class:"cursor-pointer q-mt-xs",size:"sm",onClick:l=>e.allUsers[a].edit=!e.allUsers[a].edit,color:"indigo-4"},null,8,["onClick"]))])])))),128))])}a(246);var $=a(9517);const G=(0,o.aZ)({name:"DealerGeneral",components:{AvatarUploadField:$.Z},setup(){const e=(0,p.oR)(),l=(0,m.iH)(""),a=(0,m.iH)(!1),r=(0,m.iH)(""),s=(0,m.iH)(!1),n=(0,m.iH)(""),d=(0,m.iH)(!1),t=(0,m.iH)(""),u=(0,m.iH)(!1),i=(0,m.iH)(""),c=(0,m.iH)(!1),b=(0,m.iH)(""),w=(0,m.iH)(""),f=(0,m.iH)(""),x=(0,m.iH)(""),k=(0,m.iH)(!1),H=(0,m.iH)(""),_=(0,m.iH)(!1),h=(0,m.iH)(""),q=(0,m.iH)(!1),V=(0,m.iH)(""),U=(0,m.iH)(""),D=(0,m.iH)(!1),C=(0,m.iH)(0),y=(0,m.iH)({}),W=(0,m.iH)(""),E=(0,m.iH)(""),Z=(0,m.iH)(!1),F=(0,m.iH)(""),N=(0,m.iH)(!1),Q=(0,m.iH)(!1),P=(0,m.iH)([]),R=()=>{C.value>0&&g.api.get(`/users-get-by-dealer/${C.value}`).then((e=>{e.data.success&&(P.value=e.data.data)})).catch((()=>{}))},O=e=>{C.value>0&&g.api.put(`/users-edit-user-for-dealer/${C.value}`,{username:P.value[e].email,password:P.value[e].password,user_id:P.value[e].id}).then((e=>{e.data.success&&R()})).catch((()=>{}))};(0,o.m0)((()=>{y.value=e.getters["dealers/getOpenedDealerData"]})),(0,o.m0)((()=>{C.value=y.value.id||0,l.value=y.value.name||"",r.value=y.value.full_name||"",W.value=y.value.logo||"",n.value=y.value.idno||"",t.value=y.value.address_jju||"",i.value=y.value.bank_name||"",b.value=y.value.bank_cb||"",w.value=y.value.bank_iban||"",f.value=y.value.bank_valuta||"",x.value=y.value.phone1||"",H.value=y.value.phone2||"",H.value=y.value.phone2||"",h.value=y.value.fax||"",V.value=y.value.email||"",U.value=y.value.description||""})),(0,o.m0)((()=>{C.value&&R()}));const I=()=>{if(l.value||(a.value=!0),r.value||(s.value=!0),n.value||(d.value=!0),x.value||(k.value=!0),!a.value&&!s.value&&!d.value&&!k.value){const a={name:l.value,full_name:r.value,idno:n.value,address_jju:t.value,address_fiz:null,phone1:x.value,phone2:x.value,fax:h.value,email:V.value,description:U.value,bank_name:i.value,bank_cb:b.value,bank_iban:w.value,bank_valuta:f.value};(0,v.QP)();const o=parseInt(String(C.value),10);g.api.post(`/dealer-add-or-edit/${o}`,a).then((l=>{(0,v.Zk)(),l.data.success?(o>0?(e.commit("dealers/updateOpenedDealerData",{}),e.commit("dealers/updateOpenedDealerForm",!1)):(e.commit("dealers/updateOpenedDealerData",l.data.data),e.commit("dealers/updateOpenedDealerForm",!0)),e.commit("dealers/updateRefreshGrid",!0)):(0,v.NU)({message:"Eroare de update"})})).catch((e=>{(0,v.Zk)(),(0,v.NU)({},e)}))}},B=()=>{Z.value=!1,N.value=!1,E.value.length<5&&(Z.value=!0),F.value.length<8&&(N.value=!0),Z.value||N.value||((0,v.QP)(),g.api.post("/users-add-new-for-dealer",{username:E.value,password:F.value,dealer_id:C.value}).then((e=>{(0,v.Zk)(),e.data.success?(R(),Q.value=!1,E.value="",F.value=""):(0,v.NU)({message:"Eroare de update"})})).catch((e=>{(0,v.Zk)(),(0,v.NU)({},e)})))};return{id:C,name:l,logo:W,fullName:r,idno:n,addressJur:t,nameHasError:a,fullNameHasError:s,idnoHasError:d,addressJurHasError:u,phone1:x,phone1HasError:k,phone2:H,phone2HasError:_,fax:h,faxHasError:q,email:V,emailHasError:D,bankName:i,bankNameHasError:c,bankCb:b,bankIban:w,bankValuta:f,save:I,newPassword:F,newUser:E,addUserPressed:Q,addNewUser:B,newUserError:Z,newPasswordError:N,allUsers:P,saveUser:O}}});var M=a(4260),K=a(4842),Y=a(2165),X=a(4554),ee=a(7518),le=a.n(ee);const ae=(0,M.Z)(G,[["render",S]]),oe=ae;le()(G,"components",{QInput:K.Z,QBtn:Y.Z,QIcon:X.Z});var re=a(7333),se=a(3225);const ne={name:"Dealer",components:{LogsTableForForms:se.Z,FilesForm:re.Z,DealerGeneral:oe,HeaderTabsForForms:H.Z},props:{},emits:[...k.Z.emits,"onCloseDialog"],setup(e,l){const a=(0,m.iH)(!1),r=(0,m.iH)(null),s=(0,m.iH)([{name:"general",icon:"store",label:"Date generale"},{name:"bids",icon:"warning_amber",label:"Cereri"},{name:"contracte",icon:"gavel",label:"Contracte"},{name:"payments",icon:"payments",label:"Plăți"},{name:"files",icon:"folder_open",label:"Fișiere"},{name:"logs",icon:"history",label:"Log"}]),n=(0,m.iH)("general"),d=(0,m.iH)(0),t=(0,p.oR)(),u=(0,m.iH)({}),{dialogRef:i,onDialogHide:c,onDialogCancel:b}=(0,k.Z)();(0,o.m0)((()=>{a.value=t.getters["dealers/getOpenedDealerForm"]})),(0,o.m0)((()=>{u.value=t.getters["dealers/getOpenedDealerData"],u.value&&(n.value="general")})),(0,o.m0)((()=>{d.value=u.value.id}));const w=(e=null)=>{const l={...t.getters["dealers/getOpenedDealerData"]};l.id=e,t.commit("dealers/updateOpenedDealerData",l),(0,v.QP)(),g.api.get(`/dealers/get-data-by-id/${e}`).then((e=>{(0,v.Zk)(),e.data.success?t.commit("dealers/updateOpenedDealerData",e.data.data):(0,v.NU)({message:e.data.data.message})})).catch((e=>{(0,v.Zk)(),(0,v.NU)({},e)}))},f=()=>{l.emit("onCloseDialog",!1),c()},x=()=>{"undefined"!==typeof r.value&&"undefined"!==typeof r.value.save&&r.value.save()};return{dialogRef:i,onDialogHide:f,onOKClick:x,onCancelClick:b,isOpenedLocal:a,id:d,tab:n,tabs:s,DealerGeneralRef:r,getDataById:w}}};var de=a(6778),te=a(151),ue=a(9570),ie=a(3747),ce=a(2025),me=a(5869),pe=a(5589),ge=a(5906),ve=a(6602),be=a(9367);const we=(0,M.Z)(ne,[["render",x]]),fe=we;le()(ne,"components",{QDialog:de.Z,QCard:te.Z,QToolbar:ue.Z,QToolbarTitle:ie.Z,QSpace:ce.Z,QBtn:Y.Z,QSeparator:me.Z,QCardSection:pe.Z,QTabPanels:ge.Z,QTabPanel:ve.Z,QCardActions:be.Z});var xe=a(8825);const ke=[{name:"id",label:"ID",field:"id",sortable:!0,style:"width: 50px"},{name:"logo",label:"",align:"center",style:"width: 80px"},{name:"name",label:"Nume",field:"name",sortable:!0,align:"left"},{name:"idno",label:"IDNO",field:"idno",sortable:!0,align:"left"},{name:"phone1",label:"Telefon",field:"phone1",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"created_at2",label:"Adăugat",field:"created_at2",sortable:!0},{name:"actions",label:"",align:"center",style:"width: 60px"}],He=(0,o.aZ)({name:"Dealers",components:{Dealer:fe},setup(){const e=(0,xe.Z)(),l=(0,m.iH)([]),a=(0,m.iH)(null),r=(0,m.iH)(""),s=(0,m.iH)(!1),n=(0,m.iH)(null),d=(0,p.oR)();d.commit("auth/updateActiveModule","Dealers");const t=(0,m.iH)({sortBy:"id",descending:!0,page:1,rowsPerPage:30}),u=e=>{if(e.row.logo){const l=(0,v.LO)(e.row.logo);let a=`${v.v2.replace("/api","")}/${l}`;return a=a.replace("//uploads","/uploads"),a}return""},i=e=>(0,v.Qm)(e),c=e=>(0,v.Zx)(e),b=e=>{s.value=!0,n.value=e,d.commit("dealers/updateRefreshGrid",!1),g.api.post("/dealers-list",{...e}).then((e=>{s.value=!1,e.data.success&&(l.value=e.data.data.data,t.value.page=e.data.data.current_page,t.value.rowsPerPage=e.data.data.per_page,t.value.rowsNumber=e.data.data.total)})).catch((e=>{s.value=!1,(0,v.NU)({},e)}))},w=()=>{b(n.value)},f=(e,l=0)=>{d.commit("dealers/updateOpenedDealerForm",e),d.commit("dealers/updateOpenedDealerData",{}),e&&l>0&&a.value&&a.value.getDataById(l)},x=e=>{f(!0,e.row.id)},k=l=>{e.dialog({title:"Atenție",message:"Sunteți sigur că doriți să ștergeți?",cancel:!0,persistent:!0}).onOk((()=>{g.api["delete"](`/dealers/${l.row.id}`).then((()=>{b(n.value)}))}))};return(0,o.m0)((()=>{d.getters["dealers/getRefreshGrid"]&&b(n.value)})),(0,o.bv)((()=>{b({pagination:t.value,filter:void 0})})),{filter:r,loading:s,pagination:t,columns:ke,rows:l,showDealerModalSetValue:f,editRow:x,deleteRow:k,onRequest:b,DealerRef:a,getLogo:u,getColorForLogo:c,getInitialsForLogo:i,onRequestWithLast:w}}});var _e=a(4379),he=a(8107),qe=a(8870),Ve=a(3884),Ue=a(5096),De=a(4027);const Ce=(0,M.Z)(He,[["render",c]]),ye=Ce;le()(He,"components",{QPage:_e.Z,QTable:he.Z,QInput:K.Z,QIcon:X.Z,QBtn:Y.Z,QTooltip:qe.Z,QTd:Ve.Z,QAvatar:Ue.Z,QImg:De.Z})}}]);