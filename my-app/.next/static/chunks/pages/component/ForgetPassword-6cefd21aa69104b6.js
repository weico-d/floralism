(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{3006:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/ForgetPassword",function(){return s(2852)}])},3409:function(e,t,s){"use strict";s.d(t,{a:function(){return o}});let o={api_url:"https://admin.floralismhk.com"}},5829:function(e,t,s){"use strict";var o=s(3409);t.Z={sendEmail:e=>fetch("".concat(o.a.api_url,"/api/ems/send"),{body:JSON.stringify(e),method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),register:e=>fetch("".concat(o.a.api_url,"/api/user/registerByEmail"),{body:JSON.stringify(e),method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),loginByCode:e=>fetch("".concat(o.a.api_url,"/api/user/loginByCode"),{body:JSON.stringify(e),method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),loginByPassword:e=>fetch("".concat(o.a.api_url,"/api/user/passwordLogin/"),{body:JSON.stringify(e),method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),verifyCode:e=>fetch("".concat(o.a.api_url,"/api/user/verifyCode"),{body:JSON.stringify(e),method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),resetPassword:e=>fetch("".concat(o.a.api_url,"/api/user/resetPassword"),{body:JSON.stringify(e),method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),AddToCart:e=>fetch("".concat(o.a.api_url,"/api/cart/create"),{body:JSON.stringify({flower_specs_id:e.flower_specs_id,num:e.num,cardtype:e.cardtype,cardcontent:e.cardcontent}),method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),changeShopCarNumber:e=>fetch("".concat(o.a.api_url,"/api/cart/updateNum"),{body:JSON.stringify({id:e.id,num:e.num}),method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),deleteProductionFromShopCar:e=>fetch("".concat(o.a.api_url,"/api/cart/delete"),{body:JSON.stringify({ids:e.ids}),method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),addAddress:e=>fetch("".concat(o.a.api_url,"/api/address/create"),{body:JSON.stringify({mobile:e.mobile,name:e.username,location:e.address}),method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),updateAddress:e=>fetch("".concat(o.a.api_url,"/api/address/update"),{body:JSON.stringify({id:e.id,mobile:e.mobile,name:e.username,location:e.position}),method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),setDefaultAddress:e=>fetch("".concat(o.a.api_url,"/api/address/setDefault"),{body:JSON.stringify({id:e.id}),method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),createOrder:e=>fetch("".concat(o.a.api_url,"/api/order/create"),{body:JSON.stringify(e),method:"POST",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),deleteAddress:e=>fetch("".concat(o.a.api_url,"/api/address/delete"),{body:JSON.stringify({id:e.id}),method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"}}),fetchGoods:e=>fetch("".concat(o.a.api_url,"/api/flowers/index?keyword=").concat(e.keyword,"&flower_category_id=").concat(e.flower_category_id,"&listRows=").concat(e.listRows,"&page=").concat(e.page),{method:"GET",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"GET,POST","Access-Control-Request-Headers":"Content-Type"}}),fetchOrderDetail:async e=>await fetch("".concat(o.a.api_url,"/api/order/detail?order_id=").concat(e.id),{method:"GET",headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"GET,POST","Access-Control-Request-Headers":"Content-Type"}}),updateUserMessage:async e=>await fetch("".concat(o.a.api_url,"/api/User/changeUserInfo"),{method:"POST",body:JSON.stringify(e),headers:{Authorization:"Bearer ".concat(e.cookie),"Content-Type":"application/json","Access-Control-Request-Method":"GET,POST","Access-Control-Request-Headers":"Content-Type"}})}},2852:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var o=s(5893),n=s(263),r=s.n(n),i=s(7294),a=s(2673),c=s(5829);function l(e){let[t,s]=(0,i.useState)(0),[n,l]=(0,i.useState)(""),[u,d]=(0,i.useState)(""),[p,h]=(0,i.useState)(0),[y,m]=(0,i.useState)(!1),[_,f]=(0,i.useState)(""),[g,C]=(0,i.useState)(""),T=(0,a.D)({mutationFn:e=>c.Z.sendEmail(e),mutationKey:["sendEmailByForgot"]}),S=(0,a.D)({mutationFn:e=>c.Z.verifyCode(e),mutationKey:["verifyCode"]}),v=(0,a.D)({mutationFn:e=>c.Z.resetPassword(e),mutationKey:["resetPassword"]}),O=()=>{if(!n.trim()){alert("請填寫郵箱以獲取驗證碼");return}T.mutate({email:n.trim(),event:"resetpwd"},{onSuccess:()=>{alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼")},onError:e=>{alert("發送驗證碼失敗")}}),h(60),m(!0)},b=()=>{v.mutate({email:n.trim(),password:_.trim(),confirmPassword:g.trim()},{onSuccess:async t=>{let s=await t.json();s.code?(alert("重置成功"),e.toLogin()):alert(s.msg)},onError:e=>{alert("重置失敗")}})},R=()=>{S.mutate({email:n.trim(),code:u.trim()},{onSuccess:async e=>{let t=await e.json();t.code?s(1):alert(t.msg)},onError:e=>{alert("驗證失敗")}})};return p&&setTimeout(()=>{h(p-1)},1e3),(0,o.jsx)("div",{className:r().login_total,style:{},children:(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("div",{style:{width:"100%",cursor:"pointer",alignItems:"flex-end",display:"flex",justifyContent:"flex-end"},children:(0,o.jsx)("span",{onClick:()=>{e.close(),s(0)},style:{color:"white"},className:"iconfont",children:""})}),0===t?(0,o.jsxs)("div",{style:{marginTop:"1.5%"},className:r().login_pannel,children:[(0,o.jsx)("div",{style:{letterSpacing:2,fontSize:24},children:"找回密碼"}),(0,o.jsx)("div",{style:{marginTop:"5%"},children:(0,o.jsx)("input",{type:"text",placeholder:"電郵/賬戶",onChange:e=>l(e.target.value.trim()),value:n,className:r().account_input})}),(0,o.jsx)("div",{style:{marginTop:"5%"},children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)("input",{type:"text",placeholder:"請輸入驗證碼",value:u,onChange:e=>d(e.target.value.trim()),style:{flex:1,marginRight:24},className:r().account_input}),(0,o.jsx)("div",{className:r().send_btn,style:{width:"25%",textAlign:"center"},children:p?(0,o.jsxs)("div",{children:[p,"秒后重新發送"]}):y?(0,o.jsx)("div",{onClick:O,children:"重新發送"}):(0,o.jsx)("div",{onClick:O,children:"獲取驗證碼"})})]})}),(0,o.jsx)("div",{style:{marginTop:"5%"},children:(0,o.jsx)("input",{type:"button",onClick:R,className:r().submit_button,value:"提交"})}),(0,o.jsx)("div",{style:{marginTop:"5%",paddingLeft:"3%",display:"flex"},children:(0,o.jsx)("div",{onClick:()=>{s(0),d(""),l(""),e.toLogin()},className:r().changebtn,children:"前往登錄"})})]}):(0,o.jsxs)("div",{style:{marginTop:"1.5%"},className:r().login_pannel,children:[(0,o.jsx)("div",{style:{letterSpacing:2,fontSize:24},children:"重設密碼"}),(0,o.jsx)("div",{style:{marginTop:"2.5%"},children:(0,o.jsx)("input",{type:"password",placeholder:"密碼",value:_,onChange:e=>f(e.target.value),className:r().account_input})}),(0,o.jsx)("div",{style:{marginTop:"2.5%"},children:(0,o.jsx)("input",{type:"password",placeholder:"确认密碼",value:g,onChange:e=>C(e.target.value),className:r().account_input})}),(0,o.jsx)("div",{style:{marginTop:"2.5%"},children:(0,o.jsx)("input",{type:"button",onClick:b,className:r().submit_button,value:"提交"})})]})]})})}},263:function(e){e.exports={register_total:"login_register_total__0tDXn",login_total:"login_login_total__lm3Ff",address_layout:"login_address_layout__t9jHI",login_layout:"login_login_layout__7VdzG",register_layout:"login_register_layout__iMTWw",login_pannel:"login_login_pannel__r20UK",account_input:"login_account_input__lnLIx",forget_password:"login_forget_password__vPv79",submit_button:"login_submit_button__J_G_N",to_register:"login_to_register__IQmmJ",to_login:"login_to_login___ttPg",register_btn:"login_register_btn___U_95",send_btn:"login_send_btn__O1cLJ",changebtn:"login_changebtn__rsIPs"}},3250:function(e,t,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=s(7294),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=o.useState,i=o.useEffect,a=o.useLayoutEffect,c=o.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!n(e,s)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var s=t(),o=r({inst:{value:s,getSnapshot:t}}),n=o[0].inst,u=o[1];return a(function(){n.value=s,n.getSnapshot=t,l(n)&&u({inst:n})},[e,s,t]),i(function(){return l(n)&&u({inst:n}),e(function(){l(n)&&u({inst:n})})},[e]),c(s),s};t.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:u},1688:function(e,t,s){"use strict";e.exports=s(3250)},2673:function(e,t,s){"use strict";s.d(t,{D:function(){return p}});var o=s(7294),n=s(1688);let r=n.useSyncExternalStore;var i=s(2161),a=s(9886),c=s(81),l=s(3989);class u extends l.l{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let s=this.options;this.options=this.client.defaultMutationOptions(e),(0,i.VS)(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:(0,a.R)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){c.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,s,o,n,r,i,a,c;e.onSuccess?(null==(t=(s=this.mutateOptions).onSuccess)||t.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(o=(n=this.mutateOptions).onSettled)||o.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(r=(i=this.mutateOptions).onError)||r.call(i,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(a=(c=this.mutateOptions).onSettled)||a.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}var d=s(5945);function p(e,t,s){var n,a;let l=(0,i.lV)(e,t,s),p=(0,d.NL)({context:l.context}),[y]=o.useState(()=>new u(p,l));o.useEffect(()=>{y.setOptions(l)},[y,l]);let m=r(o.useCallback(e=>y.subscribe(c.V.batchCalls(e)),[y]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),_=o.useCallback((e,t)=>{y.mutate(e,t).catch(h)},[y]);if(m.error&&(n=y.options.useErrorBoundary,a=[m.error],"function"==typeof n?n(...a):!!n))throw m.error;return{...m,mutate:_,mutateAsync:m.mutate}}function h(){}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3006)}),_N_E=e.O()}]);