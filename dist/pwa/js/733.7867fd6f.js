"use strict";(self["webpackChunkretail_creditbox_md"]=self["webpackChunkretail_creditbox_md"]||[]).push([[733],{2733:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Fe});var o=a(3673),r=a(8880),s=a(2323);const n=(0,o.Uk)("Caută"),t=(0,o.Uk)("Adaugă"),d=(0,o.Uk)("Redactează"),u=(0,o.Uk)("Șterge"),i=(0,o.Uk)("Deschide");function c(e,l,a,c,m,p){const v=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),b=(0,o.up)("q-tooltip"),w=(0,o.up)("q-btn"),x=(0,o.up)("q-td"),f=(0,o.up)("q-img"),k=(0,o.up)("q-avatar"),_=(0,o.up)("q-table"),H=(0,o.up)("Dealer"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{class:"flex flex-block"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"full-width sticky-header-table",flat:!0,title:"Dealeri",rows:e.rows,columns:e.columns,"row-key":"id",pagination:e.pagination,"onUpdate:pagination":l[2]||(l[2]=l=>e.pagination=l),loading:e.loading,filter:e.filter,"binary-state-sort":"","no-data-label":"Nu sunt înregistrări","rows-per-page-label":"Înregistrări pe pagină","rows-per-page-options":[30,50,100,200,500,1e3,0],onRequest:e.onRequest},{"top-right":(0,o.w5)((()=>[(0,o.Wm)(g,{outlined:"","bg-color":"white",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[0]||(l[0]=l=>e.filter=l),onKeyup:(0,r.D2)(e.onRequest,["enter"]),placeholder:"Caută"},{append:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"search"})])),_:1},8,["modelValue","onKeyup"]),(0,o.Wm)(w,{icon:"search",round:"",onClick:e.onRequestWithLast,class:"q-ml-lg",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(w,{icon:"add",round:"",onClick:l[1]||(l[1]=l=>e.showDealerModalSetValue(!0)),class:"q-ml-lg",color:"positive"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[t])),_:1})])),_:1})])),"body-cell-actions":(0,o.w5)((l=>[(0,o.Wm)(x,{props:l,class:"actions-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"positive",onClick:a=>e.editRow(l),icon:"edit"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[d])),_:1})])),_:2},1032,["onClick"]),(0,o.Wm)(w,{dense:"",round:"",flat:"",size:"sm",color:"negative",onClick:a=>e.deleteRow(l),icon:"delete"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[u])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),"body-cell-logo":(0,o.w5)((l=>[(0,o.Wm)(x,{props:l,class:"props-td"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{onClick:a=>e.editRow(l),class:"cursor-pointer",style:{border:"1px solid #dddddd"}},{default:(0,o.w5)((()=>[e.getLogo(l)?((0,o.wg)(),(0,o.j4)(f,{key:0,src:e.getLogo(l),alt:""},null,8,["src"])):((0,o.wg)(),(0,o.iD)("div",{key:1,style:(0,s.j5)(`color: ${e.getColorForLogo(l.row.name)}`)},(0,s.zw)(e.getInitialsForLogo(l.row.name)),5)),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[i])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","loading","filter","onRequest"]),(0,o.Wm)(H,{ref:"DealerRef",onOnCloseDialog:l[3]||(l[3]=l=>e.showDealerModalSetValue(!1))},null,512)])),_:1})}a(5363);var m=a(1959),p=a(3617),v=a(5474),g=a(3413);const b={class:"text-subtitle1"},w=(0,o._)("span",{class:"text-blue-grey"},"Dealer",-1),x={class:(0,s.C_)("q-ml-md")};function f(e,l,a,r,n,t){const d=(0,o.up)("q-toolbar-title"),u=(0,o.up)("header-tabs-for-forms"),i=(0,o.up)("q-space"),c=(0,o.up)("q-btn"),m=(0,o.up)("q-toolbar"),p=(0,o.up)("q-separator"),v=(0,o.up)("DealerGeneral"),g=(0,o.up)("q-tab-panel"),f=(0,o.up)("files-form"),k=(0,o.up)("logs-table-for-forms"),_=(0,o.up)("q-tab-panels"),H=(0,o.up)("q-card-section"),h=(0,o.up)("q-card-actions"),q=(0,o.up)("q-card"),V=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(V,{ref:"dialogRef",modelValue:r.isOpenedLocal,"onUpdate:modelValue":l[4]||(l[4]=e=>r.isOpenedLocal=e),onHide:r.onDialogHide,"full-height":"",persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"q-dialog-plugin",style:{width:"100%","max-width":"1300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:(0,s.C_)("q-pr-xs")},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("span",b,[w,(0,o._)("strong",x,(0,s.zw)(r.id),1)])])),_:1}),(0,o.Wm)(u,{modelValue:r.tab,"onUpdate:modelValue":l[0]||(l[0]=e=>r.tab=e),tabs:r.tabs},null,8,["modelValue","tabs"]),(0,o.Wm)(i),(0,o.Wm)(c,{icon:"close",flat:"",round:"",dense:"",onClick:r.onCancelClick},null,8,["onClick"])])),_:1}),(0,o.Wm)(p),(0,o.Wm)(H,{style:{"min-height":"calc(100vh - 165px)","max-height":"calc(100vh - 165px)"},class:"scroll"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{modelValue:r.tab,"onUpdate:modelValue":l[1]||(l[1]=e=>r.tab=e),animated:"","keep-alive":""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{name:"general",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{ref:"DealerGeneralRef"},null,512)])),_:1}),(0,o.Wm)(g,{name:"files",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{ref:"FilesForm",dealer_id:r.id},null,8,["dealer_id"])])),_:1}),(0,o.Wm)(g,{name:"user_tab_logs",class:"q-pa-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{entity_id:r.id,entity_name:"dealers"},null,8,["entity_id"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),"general"===r.tab?((0,o.wg)(),(0,o.j4)(p,{key:0})):(0,o.kq)("",!0),"general"===r.tab?((0,o.wg)(),(0,o.j4)(h,{key:1,align:"right"},{default:(0,o.w5)((()=>[r.id?((0,o.wg)(),(0,o.j4)(c,{key:0,onClick:l[2]||(l[2]=e=>r.printContract()),icon:"print",label:"Contract"})):(0,o.kq)("",!0),r.id?((0,o.wg)(),(0,o.j4)(c,{key:1,onClick:l[3]||(l[3]=e=>r.printAnexa()),icon:"print",label:"Anexa"})):(0,o.kq)("",!0),(0,o.Wm)(c,{color:"primary",icon:"save",label:"Salvează",onClick:r.onOKClick},null,8,["onClick"]),(0,o.Wm)(c,{label:"Închide",onClick:r.onCancelClick},null,8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1},8,["modelValue","onHide"])}a(71);var k=a(1701),_=a(7755);const H={class:"row"},h={class:"col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs"},q={class:"col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 row"},V={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},U={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},D={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},C={class:"col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs"},y=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Contacte ",-1),W={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},E={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},Z={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},P={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},F=(0,o._)("div",{class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"}," Date bancare ",-1),N={class:"col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pa-xs"},Q={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},R={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},O={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},I={key:0,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},j={class:"col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs"},B={key:1,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},L={key:2,class:"col-xs-12 q-pb-lg"},A={key:3,class:"col-xs-12 row text-subtitle1 text-primary q-pa-xs"},T=(0,o.Uk)(" Utilizatori / Login "),z={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},J={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},S={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"},$={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},G={class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs"},M={class:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs"};function K(e,l,a,r,s,n){const t=(0,o.up)("avatar-upload-field"),d=(0,o.up)("q-input"),u=(0,o.up)("q-select"),i=(0,o.up)("q-btn"),c=(0,o.up)("q-icon");return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",h,[(0,o.Wm)(t,{linkToCurrentImage:e.logo,isFor:"dealer",id:e.id},null,8,["linkToCurrentImage","id"])]),(0,o._)("div",q,[(0,o._)("div",V,[(0,o.Wm)(d,{outlined:"",error:e.nameHasError,onBlur:l[0]||(l[0]=l=>e.nameHasError=!1),onFocus:l[1]||(l[1]=l=>e.nameHasError=!1),modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=l=>e.name=l),label:"Nume (scurt)"},null,8,["error","modelValue"])]),(0,o._)("div",U,[(0,o.Wm)(d,{outlined:"",error:e.fullNameHasError,onBlur:l[3]||(l[3]=l=>e.fullNameHasError=!1),onFocus:l[4]||(l[4]=l=>e.fullNameHasError=!1),modelValue:e.fullName,"onUpdate:modelValue":l[5]||(l[5]=l=>e.fullName=l),label:"Nume Juridic"},null,8,["error","modelValue"])]),(0,o._)("div",D,[(0,o.Wm)(d,{outlined:"",error:e.idnoHasError,onBlur:l[6]||(l[6]=l=>e.idnoHasError=!1),onFocus:l[7]||(l[7]=l=>e.idnoHasError=!1),modelValue:e.idno,"onUpdate:modelValue":l[8]||(l[8]=l=>e.idno=l),label:"IDNO"},null,8,["error","modelValue"])]),(0,o._)("div",C,[(0,o.Wm)(d,{outlined:"",error:e.addressJurHasError,onBlur:l[9]||(l[9]=l=>e.addressJurHasError=!1),onFocus:l[10]||(l[10]=l=>e.addressJurHasError=!1),modelValue:e.addressJur,"onUpdate:modelValue":l[11]||(l[11]=l=>e.addressJur=l),label:"Adresa"},null,8,["error","modelValue"])])]),y,(0,o._)("div",W,[(0,o.Wm)(d,{outlined:"",error:e.phone1HasError,onBlur:l[12]||(l[12]=l=>e.phone1HasError=!1),onFocus:l[13]||(l[13]=l=>e.phone1HasError=!1),modelValue:e.phone1,"onUpdate:modelValue":l[14]||(l[14]=l=>e.phone1=l),label:"Telefon 1"},null,8,["error","modelValue"])]),(0,o._)("div",E,[(0,o.Wm)(d,{outlined:"",error:e.phone2HasError,onBlur:l[15]||(l[15]=l=>e.phone2HasError=!1),onFocus:l[16]||(l[16]=l=>e.phone2HasError=!1),modelValue:e.phone2,"onUpdate:modelValue":l[17]||(l[17]=l=>e.phone2=l),label:"Telefon 2"},null,8,["error","modelValue"])]),(0,o._)("div",Z,[(0,o.Wm)(d,{outlined:"",error:e.faxHasError,onBlur:l[18]||(l[18]=l=>e.faxHasError=!1),onFocus:l[19]||(l[19]=l=>e.faxHasError=!1),modelValue:e.fax,"onUpdate:modelValue":l[20]||(l[20]=l=>e.fax=l),label:"Fax"},null,8,["error","modelValue"])]),(0,o._)("div",P,[(0,o.Wm)(d,{outlined:"",error:e.emailHasError,onBlur:l[21]||(l[21]=l=>e.emailHasError=!1),onFocus:l[22]||(l[22]=l=>e.emailHasError=!1),modelValue:e.email,"onUpdate:modelValue":l[23]||(l[23]=l=>e.email=l),label:"Email"},null,8,["error","modelValue"])]),F,(0,o._)("div",N,[(0,o.Wm)(d,{outlined:"",error:e.addressJurHasError,onBlur:l[24]||(l[24]=l=>e.addressJurHasError=!1),onFocus:l[25]||(l[25]=l=>e.addressJurHasError=!1),modelValue:e.bankName,"onUpdate:modelValue":l[26]||(l[26]=l=>e.bankName=l),label:"Nume bancă"},null,8,["error","modelValue"])]),(0,o._)("div",Q,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankCb,"onUpdate:modelValue":l[27]||(l[27]=l=>e.bankCb=l),label:"c/b"},null,8,["modelValue"])]),(0,o._)("div",R,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankIban,"onUpdate:modelValue":l[28]||(l[28]=l=>e.bankIban=l),label:"IBAN"},null,8,["modelValue"])]),(0,o._)("div",O,[(0,o.Wm)(d,{outlined:"",modelValue:e.bankValuta,"onUpdate:modelValue":l[29]||(l[29]=l=>e.bankValuta=l),label:"Valuta"},null,8,["modelValue"])]),e.id>0?((0,o.wg)(),(0,o.iD)("div",I," Contract de colaborare ")):(0,o.kq)("",!0),(0,o._)("div",j,[(0,o.Wm)(d,{outlined:"",modelValue:e.contractDate,"onUpdate:modelValue":l[30]||(l[30]=l=>e.contractDate=l),label:"Data"},null,8,["modelValue"])]),e.id>0?((0,o.wg)(),(0,o.iD)("div",B," Produse ")):(0,o.kq)("",!0),e.id>0?((0,o.wg)(),(0,o.iD)("div",L,[(0,o.Wm)(u,{outlined:"",modelValue:e.dealerProducts,"onUpdate:modelValue":l[31]||(l[31]=l=>e.dealerProducts=l),multiple:"",options:e.dealerProductsOptions,"use-chips":"","stack-label":"","emit-value":"","map-options":"","option-value":"id","option-label":"name",label:""},null,8,["modelValue","options"])])):(0,o.kq)("",!0),e.id>0?((0,o.wg)(),(0,o.iD)("div",A,[T,e.addUserPressed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(i,{key:0,color:"primary",icon:"add",class:"q-ml-lg",onClick:l[32]||(l[32]=l=>e.addUserPressed=!0),label:"Adaugă utilizator"}))])):(0,o.kq)("",!0),(0,o._)("div",z,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(d,{key:0,outlined:"",dense:"",error:e.newUserError,onBlur:l[33]||(l[33]=l=>e.newUserError=!1),onFocus:l[34]||(l[34]=l=>e.newUserError=!1),modelValue:e.newUser,"onUpdate:modelValue":l[35]||(l[35]=l=>e.newUser=l),rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["error","modelValue","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",J,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(d,{key:0,outlined:"",dense:"",modelValue:e.newPassword,"onUpdate:modelValue":l[36]||(l[36]=l=>e.newPassword=l),error:e.newPasswordError,onBlur:l[37]||(l[37]=l=>e.newPasswordError=!1),onFocus:l[38]||(l[38]=l=>e.newPasswordError=!1),rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["modelValue","error","rules"])):(0,o.kq)("",!0)]),(0,o._)("div",S,[e.addUserPressed?((0,o.wg)(),(0,o.j4)(i,{key:0,color:"positive",icon:"save",onClick:e.addNewUser,label:"Adaugă"},null,8,["onClick"])):(0,o.kq)("",!0)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.allUsers,((l,a)=>((0,o.wg)(),(0,o.iD)("div",{key:`user-${a}`,class:"col-xs-12 row"},[(0,o._)("div",$,[(0,o.Wm)(d,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,modelValue:e.allUsers[a].email,"onUpdate:modelValue":l=>e.allUsers[a].email=l,rules:[e=>e.length>=5||"Minimum 5 caractere"],label:"Login"},null,8,["readonly","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",G,[(0,o.Wm)(d,{outlined:"",dense:"",readonly:!e.allUsers[a].edit,disable:!e.allUsers[a].edit,modelValue:e.allUsers[a].password,"onUpdate:modelValue":l=>e.allUsers[a].password=l,rules:[e=>e.length>=8||"Minimum 8 caractere"],label:"Parola"},null,8,["readonly","disable","modelValue","onUpdate:modelValue","rules"])]),(0,o._)("div",M,[e.allUsers[a].edit?((0,o.wg)(),(0,o.j4)(i,{key:1,icon:"save",label:"Salvează",onClick:l=>e.saveUser(a),color:"positive"},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(c,{key:0,name:"edit",class:"cursor-pointer q-mt-xs",size:"sm",onClick:l=>e.allUsers[a].edit=!e.allUsers[a].edit,color:"indigo-4"},null,8,["onClick"]))])])))),128))])}a(246);var Y=a(9517);const X=(0,o.aZ)({name:"DealerGeneral",components:{AvatarUploadField:Y.Z},setup(){const e=(0,p.oR)(),l=(0,m.iH)(""),a=(0,m.iH)(!1),r=(0,m.iH)(""),s=(0,m.iH)(!1),n=(0,m.iH)(""),t=(0,m.iH)(!1),d=(0,m.iH)(""),u=(0,m.iH)(!1),i=(0,m.iH)(""),c=(0,m.iH)(!1),b=(0,m.iH)(""),w=(0,m.iH)(""),x=(0,m.iH)(""),f=(0,m.iH)(""),k=(0,m.iH)(""),_=(0,m.iH)(!1),H=(0,m.iH)(""),h=(0,m.iH)(!1),q=(0,m.iH)(""),V=(0,m.iH)(!1),U=(0,m.iH)(""),D=(0,m.iH)(""),C=(0,m.iH)(!1),y=(0,m.iH)(0),W=(0,m.iH)({}),E=(0,m.iH)(""),Z=(0,m.iH)(""),P=(0,m.iH)(!1),F=(0,m.iH)(""),N=(0,m.iH)(!1),Q=(0,m.iH)(!1),R=(0,m.iH)([]),O=(0,m.iH)([]),I=(0,m.iH)([]),j=()=>{v.api.get(`/dealer-products/${y.value}`).then((e=>{e.data.success&&(O.value=[],e.data.data.DealerProducts.forEach((e=>{O.value.push(e.product_id)})),I.value=e.data.data.Products)}))};(0,o.bv)((()=>{j()}));const B=()=>{y.value>0&&v.api.get(`/users-get-by-dealer/${y.value}`).then((e=>{e.data.success&&(R.value=e.data.data)})).catch((()=>{}))},L=e=>{y.value>0&&v.api.put(`/users-edit-user-for-dealer/${y.value}`,{username:R.value[e].email,password:R.value[e].password,user_id:R.value[e].id}).then((e=>{e.data.success&&B()})).catch((()=>{}))};(0,o.m0)((()=>{W.value=e.getters["dealers/getOpenedDealerData"]})),(0,o.m0)((()=>{y.value=W.value.id||0,l.value=W.value.name||"",r.value=W.value.full_name||"",E.value=W.value.logo||"",n.value=W.value.idno||"",d.value=W.value.address_jju||"",i.value=W.value.bank_name||"",b.value=W.value.bank_cb||"",w.value=W.value.bank_iban||"",x.value=W.value.bank_valuta||"",f.value=W.value.contract_date||"",k.value=W.value.phone1||"",H.value=W.value.phone2||"",H.value=W.value.phone2||"",q.value=W.value.fax||"",U.value=W.value.email||"",D.value=W.value.description||""})),(0,o.m0)((()=>{y.value&&(B(),j())}));const A=()=>{if(l.value||(a.value=!0),r.value||(s.value=!0),n.value||(t.value=!0),k.value||(_.value=!0),!a.value&&!s.value&&!t.value&&!_.value){const a={name:l.value,full_name:r.value,idno:n.value,address_jju:d.value,address_fiz:null,phone1:k.value,phone2:k.value,fax:q.value,email:U.value,description:D.value,bank_name:i.value,bank_cb:b.value,bank_iban:w.value,bank_valuta:x.value,contract_date:f.value,products:O.value};(0,g.QP)();const o=parseInt(String(y.value),10);v.api.post(`/dealer-add-or-edit/${o}`,a).then((l=>{(0,g.Zk)(),l.data.success?(o>0?(e.commit("dealers/updateOpenedDealerData",{}),e.commit("dealers/updateOpenedDealerForm",!1)):(e.commit("dealers/updateOpenedDealerData",l.data.data),e.commit("dealers/updateOpenedDealerForm",!0)),e.commit("dealers/updateRefreshGrid",!0)):(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))}},T=()=>{P.value=!1,N.value=!1,Z.value.length<5&&(P.value=!0),F.value.length<8&&(N.value=!0),P.value||N.value||((0,g.QP)(),v.api.post("/users-add-new-for-dealer",{username:Z.value,password:F.value,dealer_id:y.value}).then((e=>{(0,g.Zk)(),e.data.success?(B(),Q.value=!1,Z.value="",F.value=""):(0,g.NU)({message:"Eroare de update"})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)})))};return{id:y,name:l,logo:E,fullName:r,idno:n,addressJur:d,nameHasError:a,fullNameHasError:s,idnoHasError:t,addressJurHasError:u,phone1:k,phone1HasError:_,phone2:H,phone2HasError:h,fax:q,faxHasError:V,email:U,emailHasError:C,bankName:i,bankNameHasError:c,bankCb:b,bankIban:w,bankValuta:x,contractDate:f,save:A,newPassword:F,newUser:Z,addUserPressed:Q,dealerProducts:O,dealerProductsOptions:I,addNewUser:T,newUserError:P,newPasswordError:N,allUsers:R,saveUser:L}}});var ee=a(4260),le=a(4842),ae=a(8516),oe=a(2165),re=a(4554),se=a(7518),ne=a.n(se);const te=(0,ee.Z)(X,[["render",K]]),de=te;ne()(X,"components",{QInput:le.Z,QSelect:ae.Z,QBtn:oe.Z,QIcon:re.Z});var ue=a(7333),ie=a(3225);const ce={name:"Dealer",components:{LogsTableForForms:ie.Z,FilesForm:ue.Z,DealerGeneral:de,HeaderTabsForForms:_.Z},props:{},emits:[...k.Z.emits,"onCloseDialog"],setup(e,l){const a=(0,m.iH)(!1),r=(0,m.iH)(null),s=(0,m.iH)([{name:"general",icon:"store",label:"Date generale"},{name:"bids",icon:"warning_amber",label:"Cereri"},{name:"contracte",icon:"gavel",label:"Contracte"},{name:"payments",icon:"payments",label:"Plăți"},{name:"files",icon:"folder_open",label:"Fișiere"},{name:"logs",icon:"history",label:"Log"}]),n=(0,m.iH)("general"),t=(0,m.iH)(0),d=(0,p.oR)(),u=(0,m.iH)({}),{dialogRef:i,onDialogHide:c,onDialogCancel:b}=(0,k.Z)();(0,o.m0)((()=>{a.value=d.getters["dealers/getOpenedDealerForm"]})),(0,o.m0)((()=>{u.value=d.getters["dealers/getOpenedDealerData"],u.value&&(n.value="general")})),(0,o.m0)((()=>{t.value=u.value.id}));const w=(e=null)=>{const l={...d.getters["dealers/getOpenedDealerData"]};l.id=e,d.commit("dealers/updateOpenedDealerData",l),(0,g.QP)(),v.api.get(`/dealers/get-data-by-id/${e}`).then((e=>{(0,g.Zk)(),e.data.success?d.commit("dealers/updateOpenedDealerData",e.data.data):(0,g.NU)({message:e.data.data.message})})).catch((e=>{(0,g.Zk)(),(0,g.NU)({},e)}))},x=()=>{l.emit("onCloseDialog",!1),c()},f=()=>{"undefined"!==typeof r.value&&"undefined"!==typeof r.value.save&&r.value.save()},_=()=>{(0,g.WW)(t.value,"/print/contractDealer","contract_colaborare")},H=()=>{(0,g.WW)(t.value,"/print/contractAnexa","contract_anexa")};return{dialogRef:i,onDialogHide:x,onOKClick:f,onCancelClick:b,isOpenedLocal:a,printContract:_,printAnexa:H,id:t,tab:n,tabs:s,DealerGeneralRef:r,getDataById:w}}};var me=a(6778),pe=a(151),ve=a(9570),ge=a(3747),be=a(2025),we=a(5869),xe=a(5589),fe=a(5906),ke=a(6602),_e=a(9367);const He=(0,ee.Z)(ce,[["render",f]]),he=He;ne()(ce,"components",{QDialog:me.Z,QCard:pe.Z,QToolbar:ve.Z,QToolbarTitle:ge.Z,QSpace:be.Z,QBtn:oe.Z,QSeparator:we.Z,QCardSection:xe.Z,QTabPanels:fe.Z,QTabPanel:ke.Z,QCardActions:_e.Z});var qe=a(8825);const Ve=[{name:"id",label:"ID",field:"id",sortable:!0,style:"width: 50px"},{name:"logo",label:"",align:"center",style:"width: 80px"},{name:"name",label:"Nume",field:"name",sortable:!0,align:"left"},{name:"idno",label:"IDNO",field:"idno",sortable:!0,align:"left"},{name:"phone1",label:"Telefon",field:"phone1",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"created_at2",label:"Adăugat",field:"created_at2",sortable:!0},{name:"actions",label:"",align:"center",style:"width: 60px"}],Ue=(0,o.aZ)({name:"Dealers",components:{Dealer:he},setup(){const e=(0,qe.Z)(),l=(0,m.iH)([]),a=(0,m.iH)(null),r=(0,m.iH)(""),s=(0,m.iH)(!1),n=(0,m.iH)(null),t=(0,p.oR)();t.commit("auth/updateActiveModule","Dealers");const d=(0,m.iH)({sortBy:"id",descending:!0,page:1,rowsPerPage:30}),u=e=>{if(e.row.logo){const l=(0,g.LO)(e.row.logo);let a=`${g.v2.replace("/api","")}/${l}`;return a=a.replace("//uploads","/uploads"),a}return""},i=e=>(0,g.Qm)(e),c=e=>(0,g.Zx)(e),b=e=>{s.value=!0,n.value=e,t.commit("dealers/updateRefreshGrid",!1),v.api.post("/dealers-list",{...e}).then((e=>{s.value=!1,e.data.success&&(l.value=e.data.data.data,d.value.page=e.data.data.current_page,d.value.rowsPerPage=e.data.data.per_page,d.value.rowsNumber=e.data.data.total)})).catch((e=>{s.value=!1,(0,g.NU)({},e)}))},w=()=>{b(n.value)},x=(e,l=0)=>{t.commit("dealers/updateOpenedDealerForm",e),t.commit("dealers/updateOpenedDealerData",{}),e&&l>0&&a.value&&a.value.getDataById(l)},f=e=>{x(!0,e.row.id)},k=l=>{e.dialog({title:"Atenție",message:"Sunteți sigur că doriți să ștergeți?",cancel:!0,persistent:!0}).onOk((()=>{v.api["delete"](`/dealers/${l.row.id}`).then((()=>{b(n.value)}))}))};return(0,o.m0)((()=>{t.getters["dealers/getRefreshGrid"]&&b(n.value)})),(0,o.bv)((()=>{b({pagination:d.value,filter:void 0})})),{filter:r,loading:s,pagination:d,columns:Ve,rows:l,showDealerModalSetValue:x,editRow:f,deleteRow:k,onRequest:b,DealerRef:a,getLogo:u,getColorForLogo:c,getInitialsForLogo:i,onRequestWithLast:w}}});var De=a(4379),Ce=a(8107),ye=a(8870),We=a(3884),Ee=a(5096),Ze=a(4027);const Pe=(0,ee.Z)(Ue,[["render",c]]),Fe=Pe;ne()(Ue,"components",{QPage:De.Z,QTable:Ce.Z,QInput:le.Z,QIcon:re.Z,QBtn:oe.Z,QTooltip:ye.Z,QTd:We.Z,QAvatar:Ee.Z,QImg:Ze.Z})}}]);