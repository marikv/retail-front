"use strict";(self["webpackChunkretail_creditbox_md"]=self["webpackChunkretail_creditbox_md"]||[]).push([[874],{1874:(e,l,a)=>{a.r(l),a.d(l,{default:()=>je});var o=a(3673),r=a(8880),s=a(2323);const n=(0,o.Uk)("Caută"),t=(0,o.Uk)("Adaugă"),d=(0,o.Uk)("Redactează"),i=(0,o.Uk)("Șterge"),u=(0,o.Uk)("Deschide");function c(e,l,a,c,m,p){const v=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),b=(0,o.up)("q-tooltip"),w=(0,o.up)("q-btn"),x=(0,o.up)("q-td"),f=(0,o.up)("q-img"),k=(0,o.up)("q-avatar"),_=(0,o.up)("q-table"),H=(0,o.up)("Dealer"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{class:"flex flex-block"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"full-width sticky-header-table",flat:!0,title:"Dealeri",rows:e.rows,columns:e.columns,"row-key":"id",pagination:e.pagination,"onUpdate:pagination":l[2]||(l[2]=l=>e.pagination=l),loading:e.loading,filter:e.filter,"binary-state-sort":"","no-data-label":"Nu sunt înregistrări","rows-per-page-label":"Înregistrări pe pagină","rows-per-page-options":[30,50,100,200,500,1e3,0],onRequest:e.onRequest},{"top-right":(0,o.w5)((()=>[(0,o.Wm)(g,{outlined:"","bg-color":"white",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[0]||(l[0]=l=>e.filter=l),onKeyup:(0,r.D2)(e.onRequest,["enter"]),placeholder:"Caută"},{append:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"search"})])),_:1},8,["modelValue","onKeyup"]),(0,o.Wm)(w,{icon:"search",round:"",onClick:e.onRequestWithLast,class:"q-ml-lg",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(w,{icon:"add",round:"",onClick:l[1]||(l[1]=l=>e.showDealerModalSetValue(!0)),class:"q-ml-lg",color:"positive"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[t])),_:1})])),_:1})])),"body-cell-actions":(0,o.w5)((l=>[(0,o.Wm)(x,{props:l,class:"actions-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"positive",onClick:a=>e.editRow(l),icon:"edit"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[d])),_:1})])),_:2},1032,["onClick"]),(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"negative",onClick:a=>e.deleteRow(l),icon:"delete"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[i])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),"body-cell-logo":(0,o.w5)((l=>[(0,o.Wm)(x,{props:l,class:"props-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{onClick:a=>e.editRow(l),class:"cursor-pointer",style:{border:"1px solid #dddddd"}},{default:(0,o.w5)((()=>[e.getLogo(l)?((0,o.wg)(),(0,o.j4)(f,{key:0,src:e.getLogo(l),alt:""},null,8,["src"])):((0,o.wg)(),(0,o.iD)("div",{key:1,style:(0,s.j5)(`color: ${e.getColorForLogo(l.row.name)}`)},(0,s.zw)(e.getInitialsForLogo(l.row.name)),5)),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[u])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","loading","filter","onRequest"]),(0,o.Wm)(H,{ref:"DealerRef",onOnCloseDialog:l[3]||(l[3]=l=>e.showDealerModalSetValue(!1))},null,512)])),_:1})}a(5363);var m=a(1959),p=a(3617),v=a(5474),g=a(3413);const b={class:"text-subtitle1"},w=(0,o._)("span",{class:"text-blue-grey"},"Dealer",-1),x={class:(0,s.C_)("q-ml-md")};function f(e,l,a,r,n,t){const d=(0,o.up)("q-toolbar-title"),i=(0,o.up)("header-tabs-for-forms"),u=(0,o.up)("q-space"),c=(0,o.up)("q-btn"),m=(0,o.up)("q-toolbar"),p=(0,o.up)("q-separator"),v=(0,o.up)("DealerGeneral"),g=(0,o.up)("q-tab-panel"),f=(0,o.up)("files-form"),k=(0,o.up)("payments"),_=(0,o.up)("logs-table-for-forms"),H=(0,o.up)("q-tab-panels"),h=(0,o.up)("q-card-section"),V=(0,o.up)("q-card-actions"),q=(0,o.up)("q-card"),D=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(D,{ref:"dialogRef",modelValue:r.isOpenedLocal,"onUpdate:modelValue":l[4]||(l[4]=e=>r.isOpenedLocal=e),onHide:r.onDialogHide,"full-height":"",persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"q-dialog-plugin",style:{width:"100%","max-width":"1300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:(0,s.C_)("q-pr-xs")},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("span",b,[w,(0,o._)("strong",x,(0,s.zw)(r.id),1)])])),_:1}),(0,o.Wm)(i,{modelValue:r.tab,"onUpdate:modelValue":l[0]||(l[0]=e=>r.tab=e),tabs:r.tabs},null,8,["modelValue","tabs"]),(0,o.Wm)(u),(0,o.Wm)(c,{icon:"close",flat:"",round:"",dense:"",onClick:r.onCancelClick},null,8,["onClick"])])),_:1}),(0,o.Wm)(p),(0,o.Wm)(h,{style:{"min-height":"calc(100vh - 165px)","max-height":"calc(100vh - 165px)"},class:"scroll"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{modelValue:r.tab,"onUpdate:modelValue":l[1]||(l[1]=e=>r.tab=e),animated:"","keep-alive":""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{name:"general",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{ref:"DealerGeneralRef"},null,512)])),_:1}),(0,o.Wm)(g,{name:"files",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{ref:"FilesForm",dealer_id:r.id},null,8,["dealer_id"])])),_:1}),(0,o.Wm)(g,{name:"payments",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{dealer_id:r.id},null,8,["dealer_id"])])),_:1}),(0,o.Wm)(g,{name:"user_tab_logs",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{entity_id:r.id,entity_name:"dealers"},null,8,["entity_id"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),"general"===r.tab?((0,o.wg)(),(0,o.j4)(p,{key:0})):(0,o.kq)("",!0),"general"===r.tab?((0,o.wg)(),(0,o.j4)(V,{key:1,align:"right"},{default:(0,o.w5)((()=>[r.id?((0,o.wg)(),(0,o.j4)(c,{key:0,onClick:l[2]||(l[2]=e=>r.printContract()),icon:"print",label:"Contract"})):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:1,href:r.printAcord2,target:"_blank",download:"",icon:"description",label:"Acord PDF"},null,8,["href"])):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:2,href:r.acordWordLink,target:"_blank",download:"",icon:"description",label:"Acord WORD"},null,8,["href"])):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:3,onClick:l[3]||(l[3]=e=>r.printConsimtamant()),icon:"print",label:"Consimțământul"})):(0,o.kq)("",!0),(0,o.Wm)(c,{color:"primary",icon:"save",label:"Salvează",onClick:r.onOKClick},null,8,["onClick"]),(0,o.Wm)(c,{label:"Închide",onClick:r.onCancelClick},null,8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1},8,["modelValue","onHide"])}a(71);var k=a(1701),_=a(7755);const H={class:"row"},h={class:"col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs"},V={class:"col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 row"},q={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},D={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},U={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},W={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},C=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Contacte ",-1),y={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},E={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},Z={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},P={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},F={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},N={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},Q=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Date bancare ",-1),R={class:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs"},O={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},j={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},I={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},L={class:"col-xl-1 col-lg-1 col-md-1 col-sm-6 col-xs-12 q-pa-xs"},T={class:"col-xl-1 col-lg-1 col-md-1 col-sm-6 col-xs-12 q-pa-xs"},B={key:0,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},A={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},S={key:1,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},z={key:2,class:"col-xs-12 q-pb-lg"},G={key:3,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},J=(0,o.Uk)(" Utilizatori / Login "),$={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},M={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},K={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"},Y={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},X={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},ee={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"};function le(e,l,a,r,s,n){const t=(0,o.up)("avatar-upload-field"),d=(0,o.up)("q-input"),i=(0,o.up)("q-select"),u=(0,o.up)("q-btn"),c=(0,o.up)("q-icon");return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",h,[(0,o.Wm)(t,{linkToCurrentImage:e.logo,isFor:"dealer",id:e.id},null,8,["linkToCurrentImage","id"])]),(0,o._)("div",V,[(0,o._)("div",q,[(0,o.Wm)(d,{outlined:"",error:e.nameHasError,onBlur:l[0]||(l[0]=l=>e.nameHasError=!1),onFocus:l[1]||(l[1]=l=>e.nameHasError=!1),modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=l=>e.name=l),label:"Nume (scurt)"},null,8,["error","modelValue"])]),(0,o._)("div",D,[(0,o.Wm)(d,{outlined:"",error:e.fullNameHasError,onBlur:l[3]||(l[3]=l=>e.fullNameHasError=!1),onFocus:l[4]||(l[4]=l=>e.fullNameHasError=!1),modelValue:e.fullName,"onUpdate:modelValue":l[5]||(l[5]=l=>e.fullName=l),label:"Nume Juridic"},null,8,["error","modelValue"])]),(0,o._)("div",U,[(0,o.Wm)(d,{outlined:"",error:e.idnoHasError,onBlur:l[6]||(l[6]=l=>e.idnoHasError=!1),onFocus:l[7]||(l[7]=l=>e.idnoHasError=!1),modelValue:e.idno,"onUpdate:modelValue":l[8]||(l[8]=l=>e.idno=l),label:"IDNO"},null,8,["error","modelValue"])]),(0,o._)("div",W,[(0,o.Wm)(d,{outlined:"",error:e.addressJurHasError,onBlur:l[9]||(l[9]=l=>e.addressJurHasError=!1),onFocus:l[10]||(l[10]=l=>e.addressJurHasError=!1),modelValue:e.addressJur,"onUpdate:modelValue":l[11]||(l[11]=l=>e.addressJur=l),label:"Adresa"},null,8,["error","modelValue"])])]),C,(0,o._)("div",y,[(0,o.Wm)(d,{outlined:"",error:e.phone1HasError,onBlur:l[12]||(l[12]=l=>e.phone1HasError=!1),onFocus:l[13]||(l[13]=l=>e.phone1HasError=!1),modelValue:e.phone1,"onUpdate:modelValue":l[14]||(l[14]=l=>e.phone1=l),label:"Telefon 1"},null,8,["error","modelValue"])]),(0,o._)("div",E,[(0,o.Wm)(d,{outlined:"",error:e.phone2HasError,onBlur:l[15]||(l[15]=l=>e.phone2HasError=!1),onFocus:l[16]||(l[16]=l=>e.phone2HasError=!1),modelValue:e.phone2,"onUpdate:modelValue":l[17]||(l[17]=l=>e.phone2=l),label:"Telefon 2"},null,8,["error","modelValue"])]),(0,o._)("div",Z,[(0,o.Wm)(d,{outlined:"",error:e.faxHasError,onBlur:l[18]||(l[18]=l=>e.faxHasError=!1),onFocus:l[19]||(l[19]=l=>e.faxHasError=!1),modelValue:e.fax,"onUpdate:modelValue":l[20]||(l[20]=l=>e.fax=l),label:"Fax"},null,8,["error","modelValue"])]),(0,o._)("div",P,[(0,o.Wm)(d,{outlined:"",error:e.emailHasError,onBlur:l[21]||(l[21]=l=>e.emailHasError=!1),onFocus:l[22]||(l[22]=l=>e.emailHasError=!1),modelValue:e.email,"onUpdate:modelValue":l[23]||(l[23]=l=>e.email=l),label:"Email"},null,8,["error","modelValue"])]),(0,o._)("div",F,[(0,o.Wm)(d,{outlined:"",modelValue:e.website,"onUpdate:modelValue":l[24]||(l[24]=l=>e.website=l),label:"WEB site"},null,8,["modelValue"])]),(0,o._)("div",N,[(0,o.Wm)(d,{outlined:"",modelValue:e.directorGeneral,"onUpdate:modelValue":l[25]||(l[25]=l=>e.directorGeneral=l),label:"Director (Nume Prenume)"},null,8,["modelValue"])]),Q,(0,o._)("div",R,[(0,o.Wm)(d,{outlined:"",error:e.addressJurHasError,onBlur:l[26]||(l[26]=l=>e.addressJurHasError=!1),onFocus:l[27]||(l[27]=l=>e.addressJurHasError=!1),modelValue:e.bankName,"onUpdate:modelValue":l[28]||(l[28]=l=>e.bankName=l),label:"Nume bancă, filiala"},null,8,["error","modelValue"])]),(0,o._)("div",O,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankCb,"onUpdate:modelValue":l[29]||(l[29]=l=>e.bankCb=l),label:"c/b"},null,8,["modelValue"])]),(0,o._)("div",j,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankIban,"onUpdate:modelValue":l[30]||(l[30]=l=>e.bankIban=l),label:"IBAN"},null,8,["modelValue"])]),(0,o._)("div",I,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankSwift,"onUpdate:modelValue":l[31]||(l[31]=l=>e.bankSwift=l),label:"SWIFT"},null,8,["modelValue"])]),(0,o._)("div",L,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankValuta,"onUpdate:modelValue":l[32]||(l[32]=l=>e.bankValuta=l),label:"Valuta"},null,8,["modelValue"])]),(0,o._)("div",T,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankTva,"onUpdate:modelValue":l[33]||(l[33]=l=>e.bankTva=l),label:"TVA"},null,8,["modelValue"])]),e.id>0?((0,o.wg)(),(0,o.iD)("div",B," Contract de colaborare ")):(0,o.kq)("",!0),(0,o._)("div",A,[(0,o.Wm)(d,{outlined:"",modelValue:e.contractDate,"onUpdate:modelValue":l[34]||(l[34]=l=>e.contractDate=l),label:"Data"},null,8,["modelValue"])]),e.id>0?((0,o.wg)(),(0,o.iD)("div",S," Produse ")):(0,o.kq)("",!0),e.id>0?((0,o.wg)(),(0,o.iD)("div",z,[(0,o.Wm)(i,{outlined:"",modelValue:e.dealerProducts,"onUpdate:modelValue":l[35]||(l[35]=l=>e.dealerProducts=l),multiple:"",options:e.dealerProductsOptions,"use-chips":"","stack-label":"","emit-value":"","map-options":"","option-value":"id","option-label":"name",label:""},null,8,["modelValue","options"])])):(0,o.kq)("",!0),e.id>0?((0,o.wg)(),(0,o.iD)("div",G,[J,e.addUserPressed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:0,color:"primary",icon:"add",class:"q-ml-lg",onClick:l[36]||(l[36]=l=>e.addUserPressed=!0),label:"Adaugă utilizator"}))])):(0,o.kq)("",!0),(0,o._)("div",$,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(d,{key:0,outlined:"",dense:"",error:e.newUserError,onBlur:l[37]||(l[37]=l=>e.newUserError=!1),onFocus:l[38]||(l[38]=l=>e.newUserError=!1),modelValue:e.newUser,"onUpdate:modelValue":l[39]||(l[39]=l=>e.newUser=l),rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["error","modelValue","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",M,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(d,{key:0,outlined:"",dense:"",modelValue:e.newPassword,"onUpdate:modelValue":l[40]||(l[40]=l=>e.newPassword=l),error:e.newPasswordError,onBlur:l[41]||(l[41]=l=>e.newPasswordError=!1),onFocus:l[42]||(l[42]=l=>e.newPasswordError=!1),rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["modelValue","error","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",K,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(u,{key:0,color:"positive",icon:"save",onClick:e.addNewUser,label:"Adaugă"},null,8,["onClick"])):(0,o.kq)("",!0)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.allUsers,((l,a)=>((0,o.wg)(),(0,o.iD)("div",{key:`user-${a}`,class:"col-xs-12 row"},[(0,o._)("div",Y,[(0,o.Wm)(d,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,modelValue:e.allUsers[a].email,"onUpdate:modelValue":l=>e.allUsers[a].email=l,rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["readonly","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",X,[(0,o.Wm)(d,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,disable:!e.allUsers[a].edit,modelValue:e.allUsers[a].password,"onUpdate:modelValue":l=>e.allUsers[a].password=l,rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["readonly","disable","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",ee,[e.allUsers[a].edit?((0,o.wg)(),(0,o.j4)(u,{key:1,icon:"save",label:"Salvează",onClick:l=>e.saveUser(a),color:"positive"},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(c,{key:0,name:"edit",class:"cursor-pointer q-mt-xs",size:"sm",onClick:l=>e.allUsers[a].edit=!e.allUsers[a].edit,color:"indigo-4"},null,8,["onClick"]))])])))),128))])}a(246);var ae=a(9517);const oe=(0,o.aZ)({name:"DealerGeneral",components:{AvatarUploadField:ae.Z},setup(){const e=(0,p.oR)(),l=(0,m.iH)(""),a=(0,m.iH)(!1),r=(0,m.iH)(""),s=(0,m.iH)(!1),n=(0,m.iH)(""),t=(0,m.iH)(!1),d=(0,m.iH)(""),i=(0,m.iH)(!1),u=(0,m.iH)(""),c=(0,m.iH)(!1),b=(0,m.iH)(""),w=(0,m.iH)(""),x=(0,m.iH)(""),f=(0,m.iH)(""),k=(0,m.iH)(""),_=(0,m.iH)(""),H=(0,m.iH)(""),h=(0,m.iH)(!1),V=(0,m.iH)(""),q=(0,m.iH)(!1),D=(0,m.iH)(""),U=(0,m.iH)(!1),W=(0,m.iH)(""),C=(0,m.iH)(""),y=(0,m.iH)(""),E=(0,m.iH)(""),Z=(0,m.iH)(!1),P=(0,m.iH)(0),F=(0,m.iH)({}),N=(0,m.iH)(""),Q=(0,m.iH)(""),R=(0,m.iH)(!1),O=(0,m.iH)(""),j=(0,m.iH)(!1),I=(0,m.iH)(!1),L=(0,m.iH)([]),T=(0,m.iH)([]),B=(0,m.iH)([]),A=()=>{v.api.get(`/dealer-products/${P.value}`).then((e=>{e.data.success&&(T.value=[],e.data.data.DealerProducts.forEach((e=>{T.value.push(e.product_id)})),B.value=e.data.data.Products)}))};(0,o.bv)((()=>{A()}));const S=()=>{P.value>0&&v.api.get(`/users-get-by-dealer/${P.value}`).then((e=>{e.data.success&&(L.value=e.data.data)})).catch((()=>{}))},z=e=>{P.value>0&&v.api.put(`/users-edit-user-for-dealer/${P.value}`,{username:L.value[e].email,password:L.value[e].password,user_id:L.value[e].id}).then((e=>{e.data.success&&S()})).catch((()=>{}))};(0,o.m0)((()=>{F.value=e.getters["dealers/getOpenedDealerData"]})),(0,o.m0)((()=>{P.value=F.value.id||0,l.value=F.value.name||"",r.value=F.value.full_name||"",N.value=F.value.logo||"",n.value=F.value.idno||"",d.value=F.value.address_jju||"",u.value=F.value.bank_name||"",b.value=F.value.bank_cb||"",w.value=F.value.bank_iban||"",x.value=F.value.bank_swift||"",f.value=F.value.bank_valuta||"",k.value=F.value.bank_tva||"",_.value=F.value.contract_date||"",H.value=F.value.phone1||"",V.value=F.value.phone2||"",V.value=F.value.phone2||"",D.value=F.value.fax||"",W.value=F.value.website||"",C.value=F.value.director_general||"",y.value=F.value.email||"",E.value=F.value.description||""})),(0,o.m0)((()=>{P.value&&(S(),A())}));const G=()=>{if(l.value||(a.value=!0),r.value||(s.value=!0),n.value||(t.value=!0),H.value||(h.value=!0),!a.value&&!s.value&&!t.value&&!h.value){const a={name:l.value,full_name:r.value,idno:n.value,address_jju:d.value,address_fiz:null,phone1:H.value,phone2:H.value,fax:D.value,website:W.value,director_general:C.value,email:y.value,description:E.value,bank_name:u.value,bank_cb:b.value,bank_iban:w.value,bank_swift:x.value,bank_valuta:f.value,bank_tva:k.value,contract_date:_.value,products:T.value};(0,g.QP)();const o=parseInt(String(P.value),10);v.api.post(`/dealer-add-or-edit/${o}`,a).then((l=>{(0,g.Zk)(),l.data.success?(o>0?(e.commit("dealers/updateOpenedDealerData",{}),e.commit("dealers/updateOpenedDealerForm",!1)):(e.commit("dealers/updateOpenedDealerData",l.data.data),e.commit("dealers/updateOpenedDealerForm",!0)),e.commit("dealers/updateRefreshGrid",!0)):(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))}},J=()=>{R.value=!1,j.value=!1,Q.value.length<5&&(R.value=!0),O.value.length<8&&(j.value=!0),R.value||j.value||((0,g.QP)(),v.api.post("/users-add-new-for-dealer",{username:Q.value,password:O.value,dealer_id:P.value}).then((e=>{(0,g.Zk)(),e.data.success?(S(),I.value=!1,Q.value="",O.value=""):(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)})))};return{id:P,name:l,logo:N,fullName:r,idno:n,addressJur:d,nameHasError:a,fullNameHasError:s,idnoHasError:t,addressJurHasError:i,phone1:H,phone1HasError:h,phone2:V,phone2HasError:q,website:W,directorGeneral:C,fax:D,faxHasError:U,email:y,emailHasError:Z,bankName:u,bankNameHasError:c,bankCb:b,bankIban:w,bankSwift:x,bankValuta:f,bankTva:k,contractDate:_,save:G,newPassword:O,newUser:Q,addUserPressed:I,dealerProducts:T,dealerProductsOptions:B,addNewUser:J,newUserError:R,newPasswordError:j,allUsers:L,saveUser:z}}});var re=a(4260),se=a(4842),ne=a(8516),te=a(2165),de=a(4554),ie=a(7518),ue=a.n(ie);const ce=(0,re.Z)(oe,[["render",le]]),me=ce;ue()(oe,"components",{QInput:se.Z,QSelect:ne.Z,QBtn:te.Z,QIcon:de.Z});var pe=a(9548),ve=a(3225),ge=a(6824);const be={name:"Dealer",components:{Payments:ge["default"],LogsTableForForms:ve.Z,FilesForm:pe.Z,DealerGeneral:me,HeaderTabsForForms:_.Z},props:{},emits:[...k.Z.emits,"onCloseDialog"],setup(e,l){const a="https://retail-php.creditbox.md/acord_dealer.docx",r="https://retail-php.creditbox.md/acord_dealer.pdf",s=(0,m.iH)(!1),n=(0,m.iH)(null),t=(0,m.iH)([{name:"general",icon:"store",label:"Date generale"},{name:"bids",icon:"warning_amber",label:"Cereri"},{name:"contracte",icon:"gavel",label:"Contracte"},{name:"payments",icon:"payments",label:"Plăți"},{name:"files",icon:"folder_open",label:"Fișiere"},{name:"logs",icon:"history",label:"Log"}]),d=(0,m.iH)("general"),i=(0,m.iH)(0),u=(0,p.oR)(),c=(0,m.iH)({}),{dialogRef:b,onDialogHide:w,onDialogCancel:x}=(0,k.Z)();(0,o.m0)((()=>{s.value=u.getters["dealers/getOpenedDealerForm"]})),(0,o.m0)((()=>{c.value=u.getters["dealers/getOpenedDealerData"],c.value&&(d.value="general")})),(0,o.m0)((()=>{i.value=c.value.id}));const f=(e=null)=>{const l={...u.getters["dealers/getOpenedDealerData"]};l.id=e,u.commit("dealers/updateOpenedDealerData",l),(0,g.QP)(),v.api.get(`/dealers/get-data-by-id/${e}`).then((e=>{(0,g.Zk)(),e.data.success?u.commit("dealers/updateOpenedDealerData",e.data.data):(0,g.NU)({message:e.data.data.message})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))},_=()=>{l.emit("onCloseDialog",!1),w()},H=()=>{"undefined"!==typeof n.value&&"undefined"!==typeof n.value.save&&n.value.save()},h=()=>{(0,g.WW)(i.value,"/print/contractDealer","contract_colaborare")},V=()=>{(0,g.WW)(i.value,"/print/contractDealerConsimtamant","contract_consimtamant")},q=()=>{(0,g.WW)(i.value,"/print/contractDealerAcord","contract_acord")};return{dialogRef:b,onDialogHide:_,onOKClick:H,onCancelClick:x,isOpenedLocal:s,printContract:h,printConsimtamant:V,printAcord:q,printAcord2:r,id:i,tab:d,tabs:t,DealerGeneralRef:n,acordWordLink:a,getDataById:f}}};var we=a(6778),xe=a(151),fe=a(9570),ke=a(3747),_e=a(2025),He=a(5869),he=a(5589),Ve=a(5906),qe=a(6602),De=a(9367);const Ue=(0,re.Z)(be,[["render",f]]),We=Ue;ue()(be,"components",{QDialog:we.Z,QCard:xe.Z,QToolbar:fe.Z,QToolbarTitle:ke.Z,QSpace:_e.Z,QBtn:te.Z,QSeparator:He.Z,QCardSection:he.Z,QTabPanels:Ve.Z,QTabPanel:qe.Z,QCardActions:De.Z});var Ce=a(8825);const ye=[{name:"id",label:"ID",field:"id",sortable:!0,style:"width: 50px"},{name:"logo",label:"",align:"center",style:"width: 80px"},{name:"name",label:"Nume",field:"name",sortable:!0,align:"left"},{name:"idno",label:"IDNO",field:"idno",sortable:!0,align:"left"},{name:"phone1",label:"Telefon",field:"phone1",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"created_at2",label:"Adăugat",field:"created_at2",sortable:!0},{name:"actions",label:"",align:"center",style:"width: 60px"}],Ee=(0,o.aZ)({name:"Dealers",components:{Dealer:We},setup(){const e=(0,Ce.Z)(),l=(0,m.iH)([]),a=(0,m.iH)(null),r=(0,m.iH)(""),s=(0,m.iH)(!1),n=(0,m.iH)(null),t=(0,p.oR)();t.commit("auth/updateActiveModule","Dealers");const d=(0,m.iH)({sortBy:"id",descending:!0,page:1,rowsPerPage:30}),i=e=>{if(e.row.logo){const l=(0,g.LO)(e.row.logo);let a=`${g.v2.replace("/api","")}/${l}`;return a=a.replace("//uploads","/uploads"),a}return""},u=e=>(0,g.Qm)(e),c=e=>(0,g.Zx)(e),b=e=>{s.value=!0,n.value=e,t.commit("dealers/updateRefreshGrid",!1),v.api.post("/dealers-list",{...e}).then((e=>{s.value=!1,e.data.success&&(l.value=e.data.data.data,d.value.page=e.data.data.current_page,d.value.rowsPerPage=e.data.data.per_page,d.value.rowsNumber=e.data.data.total)})).catch((e=>{s.value=!1,(0,g.NU)({},e)}))},w=()=>{b(n.value)},x=(e,l=0)=>{t.commit("dealers/updateOpenedDealerForm",e),t.commit("dealers/updateOpenedDealerData",{}),e&&l>0&&a.value&&a.value.getDataById(l)},f=e=>{x(!0,e.row.id)},k=l=>{e.dialog({title:"Atenție",message:"Sunteți sigur că doriți să ștergeți?",cancel:!0,persistent:!0}).onOk((()=>{v.api["delete"](`/dealers/${l.row.id}`).then((()=>{b(n.value)}))}))};return(0,o.m0)((()=>{t.getters["dealers/getRefreshGrid"]&&b(n.value)})),(0,o.bv)((()=>{b({pagination:d.value,filter:void 0})})),{filter:r,loading:s,pagination:d,columns:ye,rows:l,showDealerModalSetValue:x,editRow:f,deleteRow:k,onRequest:b,DealerRef:a,getLogo:i,getColorForLogo:c,getInitialsForLogo:u,onRequestWithLast:w}}});var Ze=a(4379),Pe=a(8107),Fe=a(8870),Ne=a(3884),Qe=a(5096),Re=a(4027);const Oe=(0,re.Z)(Ee,[["render",c]]),je=Oe;ue()(Ee,"components",{QPage:Ze.Z,QTable:Pe.Z,QInput:se.Z,QIcon:de.Z,QBtn:te.Z,QTooltip:Fe.Z,QTd:Ne.Z,QAvatar:Qe.Z,QImg:Re.Z})}}]);