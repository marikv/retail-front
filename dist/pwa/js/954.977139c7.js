"use strict";(self["webpackChunkretail_creditbox_md"]=self["webpackChunkretail_creditbox_md"]||[]).push([[954],{7954:(e,l,a)=>{a.r(l),a.d(l,{default:()=>$e});var o=a(3673),r=a(8880),s=a(2323);const d=(0,o.Uk)("Caută"),t=(0,o.Uk)("Adaugă"),n=(0,o.Uk)("Redactează"),i=(0,o.Uk)("Șterge"),u=(0,o.Uk)("Deschide");function c(e,l,a,c,m,p){const v=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),b=(0,o.up)("q-tooltip"),w=(0,o.up)("q-btn"),x=(0,o.up)("q-td"),_=(0,o.up)("q-img"),k=(0,o.up)("q-avatar"),f=(0,o.up)("q-table"),H=(0,o.up)("Dealer"),q=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(q,{class:"flex flex-block"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"full-width sticky-header-table",flat:!0,title:"Dealeri",rows:e.rows,columns:e.columns,"row-key":"id",pagination:e.pagination,"onUpdate:pagination":l[2]||(l[2]=l=>e.pagination=l),loading:e.loading,filter:e.filter,"binary-state-sort":"","no-data-label":"Nu sunt înregistrări","rows-per-page-label":"Înregistrări pe pagină","rows-per-page-options":[30,50,100,200,500,1e3,0],onRequest:e.onRequest},{"top-right":(0,o.w5)((()=>[(0,o.Wm)(g,{outlined:"","bg-color":"white",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[0]||(l[0]=l=>e.filter=l),onKeyup:(0,r.D2)(e.onRequest,["enter"]),placeholder:"Caută"},{append:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"search"})])),_:1},8,["modelValue","onKeyup"]),(0,o.Wm)(w,{icon:"search",round:"",onClick:e.onRequestWithLast,class:"q-ml-lg",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[d])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(w,{icon:"add",round:"",onClick:l[1]||(l[1]=l=>e.showDealerModalSetValue(!0)),class:"q-ml-lg",color:"positive"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[t])),_:1})])),_:1})])),"body-cell-actions":(0,o.w5)((l=>[(0,o.Wm)(x,{props:l,class:"actions-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"positive",onClick:a=>e.editRow(l),icon:"edit"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:2},1032,["onClick"]),(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"negative",onClick:a=>e.deleteRow(l),icon:"delete"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[i])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),"body-cell-logo":(0,o.w5)((l=>[(0,o.Wm)(x,{props:l,class:"props-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{onClick:a=>e.editRow(l),class:"cursor-pointer",style:{border:"1px solid #dddddd"}},{default:(0,o.w5)((()=>[e.getLogo(l)?((0,o.wg)(),(0,o.j4)(_,{key:0,src:e.getLogo(l),alt:""},null,8,["src"])):((0,o.wg)(),(0,o.iD)("div",{key:1,style:(0,s.j5)(`color: ${e.getColorForLogo(l.row.name)}`)},(0,s.zw)(e.getInitialsForLogo(l.row.name)),5)),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[u])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","loading","filter","onRequest"]),(0,o.Wm)(H,{ref:"DealerRef",onOnCloseDialog:l[3]||(l[3]=l=>e.showDealerModalSetValue(!1))},null,512)])),_:1})}a(5363);var m=a(1959),p=a(3617),v=a(5474),g=a(3413);const b={class:"text-subtitle1"},w=(0,o._)("span",{class:"text-blue-grey"},"Dealer",-1),x={class:(0,s.C_)("q-ml-md")};function _(e,l,a,r,d,t){const n=(0,o.up)("q-toolbar-title"),i=(0,o.up)("header-tabs-for-forms"),u=(0,o.up)("q-space"),c=(0,o.up)("q-btn"),m=(0,o.up)("q-toolbar"),p=(0,o.up)("q-separator"),v=(0,o.up)("DealerGeneral"),g=(0,o.up)("q-tab-panel"),_=(0,o.up)("dealer-products"),k=(0,o.up)("files-form"),f=(0,o.up)("payments"),H=(0,o.up)("logs-table-for-forms"),q=(0,o.up)("q-tab-panels"),V=(0,o.up)("q-card-section"),h=(0,o.up)("q-card-actions"),D=(0,o.up)("q-card"),y=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(y,{ref:"dialogRef",modelValue:r.isOpenedLocal,"onUpdate:modelValue":l[5]||(l[5]=e=>r.isOpenedLocal=e),onHide:r.onDialogHide,"full-height":"",persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{class:"q-dialog-plugin",style:{width:"100%","max-width":"1300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:(0,s.C_)("q-pr-xs")},{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o._)("span",b,[w,(0,o._)("strong",x,(0,s.zw)(r.id),1)])])),_:1}),(0,o.Wm)(i,{modelValue:r.tab,"onUpdate:modelValue":l[0]||(l[0]=e=>r.tab=e),tabs:r.tabs},null,8,["modelValue","tabs"]),(0,o.Wm)(u),(0,o.Wm)(c,{icon:"close",flat:"",round:"",dense:"",onClick:r.onCancelClick},null,8,["onClick"])])),_:1}),(0,o.Wm)(p),(0,o.Wm)(V,{style:{"min-height":"calc(100vh - 165px)","max-height":"calc(100vh - 165px)"},class:"scroll"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:r.tab,"onUpdate:modelValue":l[1]||(l[1]=e=>r.tab=e),animated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{name:"general",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{ref:"DealerGeneralRef"},null,512)])),_:1}),(0,o.Wm)(g,{name:"products",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{ref:"DealerProductsRef",dealer_id:r.id},null,8,["dealer_id"])])),_:1}),(0,o.Wm)(g,{name:"files",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{ref:"FilesForm",dealer_id:r.id},null,8,["dealer_id"])])),_:1}),(0,o.Wm)(g,{name:"payments",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{dealer_id:r.id},null,8,["dealer_id"])])),_:1}),(0,o.Wm)(g,{name:"user_tab_logs",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{entity_id:r.id,entity_name:"dealers"},null,8,["entity_id"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),"general"===r.tab?((0,o.wg)(),(0,o.j4)(p,{key:0})):(0,o.kq)("",!0),"general"===r.tab?((0,o.wg)(),(0,o.j4)(h,{key:1,align:"right"},{default:(0,o.w5)((()=>[r.id?((0,o.wg)(),(0,o.j4)(c,{key:0,onClick:l[2]||(l[2]=e=>r.printContract()),icon:"print",label:"Contract"})):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:1,onClick:l[3]||(l[3]=e=>r.printAcord()),icon:"print",label:"Acord PDF"})):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:2,href:r.printAcord2,target:"_blank",download:"",icon:"description",label:"Acord PDF"},null,8,["href"])):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:3,href:r.acordWordLink,target:"_blank",download:"",icon:"description",label:"Acord WORD"},null,8,["href"])):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:4,onClick:l[4]||(l[4]=e=>r.printConsimtamant()),icon:"print",label:"Consimțământul"})):(0,o.kq)("",!0),(0,o.Wm)(c,{color:"primary",icon:"save",label:"Salvează",onClick:r.onOKClick},null,8,["onClick"]),(0,o.Wm)(c,{label:"Închide",onClick:r.onCancelClick},null,8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1},8,["modelValue","onHide"])}a(71);var k=a(1701),f=a(7755);const H={class:"row"},q={class:"col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs"},V={class:"col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 row"},h={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},D={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},y={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},C={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},U=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Contacte ",-1),W={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},E={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},P={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},Z={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},N={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},F={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},Q=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Date bancare ",-1),T={class:"col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs"},R={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},O={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},z={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},I={class:"col-xl-1 col-lg-1 col-md-1 col-sm-6 col-xs-12 q-pa-xs"},B={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},j={key:0,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},A={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},L={key:1,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},S=(0,o.Uk)(" Utilizatori / Login "),M={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},$={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},G={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"},J={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},K={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},Y={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"};function X(e,l,a,r,s,d){const t=(0,o.up)("avatar-upload-field"),n=(0,o.up)("q-input"),i=(0,o.up)("q-btn"),u=(0,o.up)("q-icon");return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",q,[(0,o.Wm)(t,{linkToCurrentImage:e.logo,isFor:"dealer",id:e.id},null,8,["linkToCurrentImage","id"])]),(0,o._)("div",V,[(0,o._)("div",h,[(0,o.Wm)(n,{outlined:"",error:e.nameHasError,onBlur:l[0]||(l[0]=l=>e.nameHasError=!1),onFocus:l[1]||(l[1]=l=>e.nameHasError=!1),modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=l=>e.name=l),label:"Nume (scurt)"},null,8,["error","modelValue"])]),(0,o._)("div",D,[(0,o.Wm)(n,{outlined:"",error:e.fullNameHasError,onBlur:l[3]||(l[3]=l=>e.fullNameHasError=!1),onFocus:l[4]||(l[4]=l=>e.fullNameHasError=!1),modelValue:e.fullName,"onUpdate:modelValue":l[5]||(l[5]=l=>e.fullName=l),label:"Nume Juridic"},null,8,["error","modelValue"])]),(0,o._)("div",y,[(0,o.Wm)(n,{outlined:"",error:e.idnoHasError,onBlur:l[6]||(l[6]=l=>e.idnoHasError=!1),onFocus:l[7]||(l[7]=l=>e.idnoHasError=!1),modelValue:e.idno,"onUpdate:modelValue":l[8]||(l[8]=l=>e.idno=l),label:"IDNO"},null,8,["error","modelValue"])]),(0,o._)("div",C,[(0,o.Wm)(n,{outlined:"",error:e.addressJurHasError,onBlur:l[9]||(l[9]=l=>e.addressJurHasError=!1),onFocus:l[10]||(l[10]=l=>e.addressJurHasError=!1),modelValue:e.addressJur,"onUpdate:modelValue":l[11]||(l[11]=l=>e.addressJur=l),label:"Adresa"},null,8,["error","modelValue"])])]),U,(0,o._)("div",W,[(0,o.Wm)(n,{outlined:"",error:e.phone1HasError,onBlur:l[12]||(l[12]=l=>e.phone1HasError=!1),onFocus:l[13]||(l[13]=l=>e.phone1HasError=!1),modelValue:e.phone1,"onUpdate:modelValue":l[14]||(l[14]=l=>e.phone1=l),label:"Telefon 1"},null,8,["error","modelValue"])]),(0,o._)("div",E,[(0,o.Wm)(n,{outlined:"",error:e.phone2HasError,onBlur:l[15]||(l[15]=l=>e.phone2HasError=!1),onFocus:l[16]||(l[16]=l=>e.phone2HasError=!1),modelValue:e.phone2,"onUpdate:modelValue":l[17]||(l[17]=l=>e.phone2=l),label:"Telefon 2"},null,8,["error","modelValue"])]),(0,o._)("div",P,[(0,o.Wm)(n,{outlined:"",error:e.faxHasError,onBlur:l[18]||(l[18]=l=>e.faxHasError=!1),onFocus:l[19]||(l[19]=l=>e.faxHasError=!1),modelValue:e.fax,"onUpdate:modelValue":l[20]||(l[20]=l=>e.fax=l),label:"Fax"},null,8,["error","modelValue"])]),(0,o._)("div",Z,[(0,o.Wm)(n,{outlined:"",error:e.emailHasError,onBlur:l[21]||(l[21]=l=>e.emailHasError=!1),onFocus:l[22]||(l[22]=l=>e.emailHasError=!1),modelValue:e.email,"onUpdate:modelValue":l[23]||(l[23]=l=>e.email=l),label:"Email"},null,8,["error","modelValue"])]),(0,o._)("div",N,[(0,o.Wm)(n,{outlined:"",modelValue:e.website,"onUpdate:modelValue":l[24]||(l[24]=l=>e.website=l),label:"WEB site"},null,8,["modelValue"])]),(0,o._)("div",F,[(0,o.Wm)(n,{outlined:"",modelValue:e.directorGeneral,"onUpdate:modelValue":l[25]||(l[25]=l=>e.directorGeneral=l),label:"Director (Nume Prenume)"},null,8,["modelValue"])]),Q,(0,o._)("div",T,[(0,o.Wm)(n,{outlined:"",error:e.addressJurHasError,onBlur:l[26]||(l[26]=l=>e.addressJurHasError=!1),onFocus:l[27]||(l[27]=l=>e.addressJurHasError=!1),modelValue:e.bankName,"onUpdate:modelValue":l[28]||(l[28]=l=>e.bankName=l),label:"Nume bancă, filiala"},null,8,["error","modelValue"])]),(0,o._)("div",R,[(0,o.Wm)(n,{outlined:"",modelValue:e.bankCb,"onUpdate:modelValue":l[29]||(l[29]=l=>e.bankCb=l),label:"c/b"},null,8,["modelValue"])]),(0,o._)("div",O,[(0,o.Wm)(n,{outlined:"",modelValue:e.bankIban,"onUpdate:modelValue":l[30]||(l[30]=l=>e.bankIban=l),label:"IBAN"},null,8,["modelValue"])]),(0,o._)("div",z,[(0,o.Wm)(n,{outlined:"",modelValue:e.bankSwift,"onUpdate:modelValue":l[31]||(l[31]=l=>e.bankSwift=l),label:"SWIFT"},null,8,["modelValue"])]),(0,o._)("div",I,[(0,o.Wm)(n,{outlined:"",modelValue:e.bankValuta,"onUpdate:modelValue":l[32]||(l[32]=l=>e.bankValuta=l),label:"Valuta"},null,8,["modelValue"])]),(0,o._)("div",B,[(0,o.Wm)(n,{outlined:"",modelValue:e.bankTva,"onUpdate:modelValue":l[33]||(l[33]=l=>e.bankTva=l),label:"Cod TVA"},null,8,["modelValue"])]),e.id>0?((0,o.wg)(),(0,o.iD)("div",j," Contract de colaborare ")):(0,o.kq)("",!0),(0,o._)("div",A,[(0,o.Wm)(n,{outlined:"",modelValue:e.contractDate,"onUpdate:modelValue":l[34]||(l[34]=l=>e.contractDate=l),label:"Data"},null,8,["modelValue"])]),e.id>0?((0,o.wg)(),(0,o.iD)("div",L,[S,e.addUserPressed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(i,{key:0,color:"primary",icon:"add",class:"q-ml-lg",onClick:l[35]||(l[35]=l=>e.addUserPressed=!0),label:"Adaugă utilizator"}))])):(0,o.kq)("",!0),(0,o._)("div",M,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(n,{key:0,outlined:"",dense:"",error:e.newUserError,onBlur:l[36]||(l[36]=l=>e.newUserError=!1),onFocus:l[37]||(l[37]=l=>e.newUserError=!1),modelValue:e.newUser,"onUpdate:modelValue":l[38]||(l[38]=l=>e.newUser=l),rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["error","modelValue","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",$,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(n,{key:0,outlined:"",dense:"",modelValue:e.newPassword,"onUpdate:modelValue":l[39]||(l[39]=l=>e.newPassword=l),error:e.newPasswordError,onBlur:l[40]||(l[40]=l=>e.newPasswordError=!1),onFocus:l[41]||(l[41]=l=>e.newPasswordError=!1),rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["modelValue","error","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",G,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(i,{key:0,color:"positive",icon:"save",onClick:e.addNewUser,label:"Adaugă"},null,8,["onClick"])):(0,o.kq)("",!0)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.allUsers,((l,a)=>((0,o.wg)(),(0,o.iD)("div",{key:`user-${a}`,class:"col-xs-12 row"},[(0,o._)("div",J,[(0,o.Wm)(n,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,modelValue:e.allUsers[a].email,"onUpdate:modelValue":l=>e.allUsers[a].email=l,rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["readonly","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",K,[(0,o.Wm)(n,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,disable:!e.allUsers[a].edit,modelValue:e.allUsers[a].password,"onUpdate:modelValue":l=>e.allUsers[a].password=l,rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["readonly","disable","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",Y,[e.allUsers[a].edit?((0,o.wg)(),(0,o.j4)(i,{key:1,icon:"save",label:"Salvează",onClick:l=>e.saveUser(a),color:"positive"},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:0,name:"edit",class:"cursor-pointer q-mt-xs",size:"sm",onClick:l=>e.allUsers[a].edit=!e.allUsers[a].edit,color:"indigo-4"},null,8,["onClick"]))])])))),128))])}a(246);var ee=a(9517);const le=(0,o.aZ)({name:"DealerGeneral",components:{AvatarUploadField:ee.Z},setup(){const e=(0,p.oR)(),l=(0,m.iH)(""),a=(0,m.iH)(!1),r=(0,m.iH)(""),s=(0,m.iH)(!1),d=(0,m.iH)(""),t=(0,m.iH)(!1),n=(0,m.iH)(""),i=(0,m.iH)(!1),u=(0,m.iH)(""),c=(0,m.iH)(!1),b=(0,m.iH)(""),w=(0,m.iH)(""),x=(0,m.iH)(""),_=(0,m.iH)(""),k=(0,m.iH)(""),f=(0,m.iH)(""),H=(0,m.iH)(""),q=(0,m.iH)(!1),V=(0,m.iH)(""),h=(0,m.iH)(!1),D=(0,m.iH)(""),y=(0,m.iH)(!1),C=(0,m.iH)(""),U=(0,m.iH)(""),W=(0,m.iH)(""),E=(0,m.iH)(""),P=(0,m.iH)(!1),Z=(0,m.iH)(0),N=(0,m.iH)({}),F=(0,m.iH)(""),Q=(0,m.iH)(""),T=(0,m.iH)(!1),R=(0,m.iH)(""),O=(0,m.iH)(!1),z=(0,m.iH)(!1),I=(0,m.iH)([]),B=()=>{Z.value>0&&v.api.get(`/users-get-by-dealer/${Z.value}`).then((e=>{e.data.success&&(I.value=e.data.data)})).catch((()=>{}))},j=e=>{Z.value>0&&v.api.put(`/users-edit-user-for-dealer/${Z.value}`,{username:I.value[e].email,password:I.value[e].password,user_id:I.value[e].id}).then((e=>{e.data.success&&B()})).catch((()=>{}))};(0,o.m0)((()=>{N.value=e.getters["dealers/getOpenedDealerData"]})),(0,o.m0)((()=>{Z.value=N.value.id||0,l.value=N.value.name||"",r.value=N.value.full_name||"",F.value=N.value.logo||"",d.value=N.value.idno||"",n.value=N.value.address_jju||"",u.value=N.value.bank_name||"",b.value=N.value.bank_cb||"",w.value=N.value.bank_iban||"",x.value=N.value.bank_swift||"",_.value=N.value.bank_valuta||"",k.value=N.value.bank_tva||"",f.value=N.value.contract_date||"",H.value=N.value.phone1||"",V.value=N.value.phone2||"",V.value=N.value.phone2||"",D.value=N.value.fax||"",C.value=N.value.website||"",U.value=N.value.director_general||"",W.value=N.value.email||"",E.value=N.value.description||""})),(0,o.m0)((()=>{Z.value&&B()}));const A=()=>{if(l.value||(a.value=!0),r.value||(s.value=!0),d.value||(t.value=!0),H.value||(q.value=!0),!a.value&&!s.value&&!t.value&&!q.value){const a={name:l.value,full_name:r.value,idno:d.value,address_jju:n.value,address_fiz:null,phone1:H.value,phone2:H.value,fax:D.value,website:C.value,director_general:U.value,email:W.value,description:E.value,bank_name:u.value,bank_cb:b.value,bank_iban:w.value,bank_swift:x.value,bank_valuta:_.value,bank_tva:k.value,contract_date:f.value};(0,g.QP)();const o=parseInt(String(Z.value),10);v.api.post(`/dealer-add-or-edit/${o}`,a).then((l=>{(0,g.Zk)(),l.data.success?(o>0?(e.commit("dealers/updateOpenedDealerData",{}),e.commit("dealers/updateOpenedDealerForm",!1)):(e.commit("dealers/updateOpenedDealerData",l.data.data),e.commit("dealers/updateOpenedDealerForm",!0)),e.commit("dealers/updateRefreshGrid",!0)):(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))}},L=()=>{T.value=!1,O.value=!1,Q.value.length<5&&(T.value=!0),R.value.length<8&&(O.value=!0),T.value||O.value||((0,g.QP)(),v.api.post("/users-add-new-for-dealer",{username:Q.value,password:R.value,dealer_id:Z.value}).then((e=>{(0,g.Zk)(),e.data.success?(B(),z.value=!1,Q.value="",R.value=""):(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)})))};return{id:Z,name:l,logo:F,fullName:r,idno:d,addressJur:n,nameHasError:a,fullNameHasError:s,idnoHasError:t,addressJurHasError:i,phone1:H,phone1HasError:q,phone2:V,phone2HasError:h,website:C,directorGeneral:U,fax:D,faxHasError:y,email:W,emailHasError:P,bankName:u,bankNameHasError:c,bankCb:b,bankIban:w,bankSwift:x,bankValuta:_,bankTva:k,contractDate:f,save:A,newPassword:R,newUser:Q,addUserPressed:z,addNewUser:L,newUserError:T,newPasswordError:O,allUsers:I,saveUser:j}}});var ae=a(4260),oe=a(4842),re=a(2165),se=a(4554),de=a(7518),te=a.n(de);const ne=(0,ae.Z)(le,[["render",X]]),ie=ne;te()(le,"components",{QInput:oe.Z,QBtn:re.Z,QIcon:se.Z});var ue=a(9548),ce=a(3225),me=a(6824);const pe={key:0,class:"row"},ve={key:0,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},ge={key:1,class:"col-xs-12 q-pb-lg"},be={class:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 row text-primary q-pa-xs q-pt-md text-right"},we={class:"col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12 q-pa-xs"},xe={class:"col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12 q-pa-xs"},_e={class:"col-xl-2 col-lg-2 col-md-1 col-sm-1 col-xs-12 row text-subtitle1 text-primary q-pa-xs"};function ke(e,l,a,r,d,t){const n=(0,o.up)("q-select"),i=(0,o.up)("q-input"),u=(0,o.up)("q-btn");return e.dealer_id>0?((0,o.wg)(),(0,o.iD)("div",pe,[e.dealer_id>0?((0,o.wg)(),(0,o.iD)("div",ve," Produse ")):(0,o.kq)("",!0),e.dealer_id>0?((0,o.wg)(),(0,o.iD)("div",ge,[(0,o.Wm)(n,{outlined:"",modelValue:e.dealerProducts,"onUpdate:modelValue":[l[0]||(l[0]=l=>e.dealerProducts=l),e.save],multiple:"",options:e.dealerProductsOptions,"use-chips":"","stack-label":"","emit-value":"","map-options":"","option-value":"id","option-label":"name",label:""},null,8,["modelValue","options","onUpdate:modelValue"])])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.dealerTypeCredits,((l,a)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:`dtiIndex${a}`},[e.dealerProducts.indexOf(e.typeCreditProductIds[a])>-1?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("div",be,(0,s.zw)(l.name),1),(0,o._)("div",we,[(0,o.Wm)(i,{type:"number",modelValue:e.percentComisionMagazin[a],"onUpdate:modelValue":l=>e.percentComisionMagazin[a]=l,outlined:"",label:"Procent comision magazin"},null,8,["modelValue","onUpdate:modelValue"])]),(0,o._)("div",xe,[(0,o.Wm)(i,{type:"number",modelValue:e.percentBonusMagazin[a],"onUpdate:modelValue":l=>e.percentBonusMagazin[a]=l,outlined:"",label:"Procent bonus magazin"},null,8,["modelValue","onUpdate:modelValue"])]),(0,o._)("div",_e,[(0,o.Wm)(u,{color:"positive",onClick:l=>e.savePercent(a),icon:"save"},null,8,["onClick"])])],64)):(0,o.kq)("",!0)],64)))),128))])):(0,o.kq)("",!0)}const fe=(0,o.aZ)({name:"DealerProducts",props:{dealer_id:{type:Number,default:null}},components:{},setup(e){const l=(0,m.iH)([]),a=(0,m.iH)([]),r=(0,m.iH)([]),s=(0,m.iH)({}),d=(0,m.iH)({}),t=(0,m.iH)({}),n=(0,m.iH)({}),i=(0,m.iH)({}),u=()=>{v.api.get(`/dealer-products/${e.dealer_id}`).then((e=>{e.data.success&&(l.value=[],e.data.data.DealerProducts.forEach((e=>{l.value.push(e.product_id)})),a.value=e.data.data.Products,r.value=e.data.data.DealerTypeCredits,e.data.data.DealerTypeCredits&&e.data.data.DealerTypeCredits.forEach(((e,l)=>{n.value[l]=null,i.value[l]=null,s.value[l]=null,d.value[l]=e.id,t.value[l]=e.product_id,e.DealerTypeCredits&&e.DealerTypeCredits.id&&(n.value[l]=e.DealerTypeCredits.percent_bonus_magazin,i.value[l]=e.DealerTypeCredits.percent_comision_magazin,s.value[l]=e.DealerTypeCredits.id)})))}))};(0,o.bv)((()=>{u()})),(0,o.m0)((()=>{e.dealer_id&&u()}));const c=l=>{(0,g.QP)();const a=s.value[l]?s.value[l]:0;v.api.post(`/dealer-type-credits/${a}`,{percent_bonus_magazin:n.value[l],percent_comision_magazin:i.value[l],type_credit_id:d.value[l],dealer_id:e.dealer_id}).then((e=>{(0,g.Zk)(),e.data.success?u():(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))},p=()=>{(0,g.QP)(),v.api.post(`/edit-dealer-products/${e.dealer_id}`,{products:l.value}).then((e=>{(0,g.Zk)(),e.data.success?u():(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))};return{save:p,dealerProducts:l,dealerProductsOptions:a,dealerTypeCredits:r,percentBonusMagazin:n,percentComisionMagazin:i,typeCreditProductIds:t,savePercent:c}}});var He=a(8516);const qe=(0,ae.Z)(fe,[["render",ke]]),Ve=qe;te()(fe,"components",{QSelect:He.Z,QInput:oe.Z,QBtn:re.Z});const he={name:"Dealer",components:{DealerProducts:Ve,Payments:me["default"],LogsTableForForms:ce.Z,FilesForm:ue.Z,DealerGeneral:ie,HeaderTabsForForms:f.Z},props:{},emits:[...k.Z.emits,"onCloseDialog"],setup(e,l){const a="https://retail-php.creditbox.md/acord_dealer.docx",r="https://retail-php.creditbox.md/acord_dealer.pdf",s=(0,m.iH)(!1),d=(0,m.iH)(null),t=(0,m.iH)([{name:"general",icon:"store",label:"Date generale"},{name:"products",icon:"percent",label:"Produse"},{name:"bids",icon:"warning_amber",label:"Cereri"},{name:"contracte",icon:"gavel",label:"Contracte"},{name:"payments",icon:"payments",label:"Plăți"},{name:"files",icon:"folder_open",label:"Fișiere"},{name:"logs",icon:"history",label:"Log"}]),n=(0,m.iH)("general"),i=(0,m.iH)(0),u=(0,p.oR)(),c=(0,m.iH)({}),{dialogRef:b,onDialogHide:w,onDialogCancel:x}=(0,k.Z)();(0,o.m0)((()=>{s.value=u.getters["dealers/getOpenedDealerForm"]})),(0,o.m0)((()=>{c.value=u.getters["dealers/getOpenedDealerData"],c.value&&(n.value="general")})),(0,o.m0)((()=>{i.value=c.value.id}));const _=(e=null)=>{const l={...u.getters["dealers/getOpenedDealerData"]};l.id=e,u.commit("dealers/updateOpenedDealerData",l),(0,g.QP)(),v.api.get(`/dealers/get-data-by-id/${e}`).then((e=>{(0,g.Zk)(),e.data.success?u.commit("dealers/updateOpenedDealerData",e.data.data):(0,g.NU)({message:e.data.data.message})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))},f=()=>{l.emit("onCloseDialog",!1),w()},H=()=>{"undefined"!==typeof d.value&&"undefined"!==typeof d.value.save&&d.value.save()},q=()=>{(0,g.WW)(i.value,"/print/contractDealer","contract_colaborare")},V=()=>{(0,g.WW)(i.value,"/print/contractDealerConsimtamant","consimtamant_dealer")},h=()=>{(0,g.WW)(i.value,"/print/contractDealerAcord","acord_dealer")};return{dialogRef:b,onDialogHide:f,onOKClick:H,onCancelClick:x,isOpenedLocal:s,printContract:q,printConsimtamant:V,printAcord:h,printAcord2:r,id:i,tab:n,tabs:t,DealerGeneralRef:d,acordWordLink:a,getDataById:_}}};var De=a(6778),ye=a(151),Ce=a(9570),Ue=a(3747),We=a(2025),Ee=a(5869),Pe=a(5589),Ze=a(5906),Ne=a(6602),Fe=a(9367);const Qe=(0,ae.Z)(he,[["render",_]]),Te=Qe;te()(he,"components",{QDialog:De.Z,QCard:ye.Z,QToolbar:Ce.Z,QToolbarTitle:Ue.Z,QSpace:We.Z,QBtn:re.Z,QSeparator:Ee.Z,QCardSection:Pe.Z,QTabPanels:Ze.Z,QTabPanel:Ne.Z,QCardActions:Fe.Z});var Re=a(8825);const Oe=[{name:"id",label:"ID",field:"id",sortable:!0,style:"width: 50px"},{name:"logo",label:"",align:"center",style:"width: 80px"},{name:"name",label:"Nume",field:"name",sortable:!0,align:"left"},{name:"idno",label:"IDNO",field:"idno",sortable:!0,align:"left"},{name:"phone1",label:"Telefon",field:"phone1",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"created_at2",label:"Adăugat",field:"created_at2",sortable:!0},{name:"actions",label:"",align:"center",style:"width: 60px"}],ze=(0,o.aZ)({name:"Dealers",components:{Dealer:Te},setup(){const e=(0,Re.Z)(),l=(0,m.iH)([]),a=(0,m.iH)(null),r=(0,m.iH)(""),s=(0,m.iH)(!1),d=(0,m.iH)(null),t=(0,p.oR)();t.commit("auth/updateActiveModule","Dealers");const n=(0,m.iH)({sortBy:"id",descending:!0,page:1,rowsPerPage:30}),i=e=>{if(e.row.logo){const l=(0,g.LO)(e.row.logo);let a=`${g.v2.replace("/api","")}/${l}`;return a=a.replace("//uploads","/uploads"),a}return""},u=e=>(0,g.Qm)(e),c=e=>(0,g.Zx)(e),b=e=>{s.value=!0,d.value=e,t.commit("dealers/updateRefreshGrid",!1),v.api.post("/dealers-list",{...e}).then((e=>{s.value=!1,e.data.success&&(l.value=e.data.data.data,n.value.page=e.data.data.current_page,n.value.rowsPerPage=e.data.data.per_page,n.value.rowsNumber=e.data.data.total)})).catch((e=>{s.value=!1,(0,g.NU)({},e)}))},w=()=>{b(d.value)},x=(e,l=0)=>{t.commit("dealers/updateOpenedDealerForm",e),t.commit("dealers/updateOpenedDealerData",{}),e&&l>0&&a.value&&a.value.getDataById(l)},_=e=>{x(!0,e.row.id)},k=l=>{e.dialog({title:"Atenție",message:"Sunteți sigur că doriți să ștergeți?",cancel:!0,persistent:!0}).onOk((()=>{v.api["delete"](`/dealers/${l.row.id}`).then((()=>{b(d.value)}))}))};return(0,o.m0)((()=>{t.getters["dealers/getRefreshGrid"]&&b(d.value)})),(0,o.bv)((()=>{b({pagination:n.value,filter:void 0})})),{filter:r,loading:s,pagination:n,columns:Oe,rows:l,showDealerModalSetValue:x,editRow:_,deleteRow:k,onRequest:b,DealerRef:a,getLogo:i,getColorForLogo:c,getInitialsForLogo:u,onRequestWithLast:w}}});var Ie=a(4379),Be=a(8107),je=a(8870),Ae=a(3884),Le=a(5096),Se=a(4027);const Me=(0,ae.Z)(ze,[["render",c]]),$e=Me;te()(ze,"components",{QPage:Ie.Z,QTable:Be.Z,QInput:oe.Z,QIcon:se.Z,QBtn:re.Z,QTooltip:je.Z,QTd:Ae.Z,QAvatar:Le.Z,QImg:Se.Z})}}]);