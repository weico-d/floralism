(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{3903:function(e,o,t){"use strict";t.d(o,{e:function(){return i}}),t(3409);let i=(e,o,t)=>{let i=[];for(let t=0;t<e.length/o;t++){let l=e.slice(o*t,o*(t+1));i.push(l)}return t?i:i[0]}},8932:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return a}});var i=t(5893),l=t(5152),s=t.n(l),n=t(1955),r=t(1163);let c=s()(()=>Promise.all([t.e(664),t.e(991)]).then(t.bind(t,6991)),{loadableGenerated:{webpack:()=>[6991]},ssr:!1});function a(e){return(0,r.useRouter)(),(0,i.jsx)(c,{list:e.cateList,login:()=>{n.Z.get("token")?alert("你要退出嗎?"):e.setLogin(!0)}})}},7602:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return c}});var i=t(5893),l=t(2770),s=t.n(l),n=t(3409),r=t(7294);function c(){let e=async()=>{let e=await fetch("".concat(n.a.api_url,"/api/Flowercategory/allIndex"),{mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Request-Method":"GET,POST","Access-Control-Request-Headers":"Content-Type"}});return await e.json()},[o,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{e().then(e=>t(e.data)).catch(e=>{console.log("cat_list error:"),console.log(e)})},[]),console.log(o),(0,i.jsxs)("div",{className:s().footer,style:{width:"100%"},children:[(0,i.jsxs)("div",{className:s().footer_three_column,style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{className:s().footer_column,style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)("p",{children:"產品"}),o.map((e,o)=>o>5?null:(0,i.jsx)("a",{href:"/category/".concat(e.id),children:e.categoryname},o))]}),(0,i.jsxs)("div",{className:s().footer_column,style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)("p",{children:"幫助"}),(0,i.jsx)("a",{children:"購物指南"}),(0,i.jsx)("a",{children:"訂製服務"}),(0,i.jsx)("a",{children:"送貨服務"}),(0,i.jsx)("a",{href:"/ContactPage",children:"關於我們"})]}),(0,i.jsxs)("div",{className:s().footer_column,style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)("p",{children:"聯絡我們"}),(0,i.jsx)("div",{children:"香港新界葵涌國瑞路116-122號"}),(0,i.jsx)("div",{style:{marginTop:4},children:"城市工業中心1樓H&J室"}),(0,i.jsxs)("div",{children:["T ",(0,i.jsx)("a",{href:"tel:+85265818053",children:"+852 65818053"})]}),(0,i.jsxs)("div",{children:["F ",(0,i.jsx)("a",{href:"",children:"+852 65818053"})]}),(0,i.jsxs)("div",{children:["E ",(0,i.jsx)("a",{href:"mailto:info@floralismhk.com",children:"info@floralismhk.com"})]}),(0,i.jsx)("div",{children:"對我們的產品及服務有興趣？"}),(0,i.jsx)("div",{style:{marginTop:4},children:"請聯係我們"})]}),(0,i.jsx)("div",{className:"".concat(s().special_column),style:{display:"flex",flexDirection:"column",minWidth:163},children:(0,i.jsxs)("div",{className:s().footer_contactList,style:{display:"flex",justifyContent:"center",backgroundColor:"black",flexWrap:"wrap",alignItems:"center",flexDirection:"column",padding:14},children:[(0,i.jsx)("div",{style:{flex:1,fontSize:20},children:"FOLLOW US"}),(0,i.jsxs)("div",{className:s().icon_group,style:{flex:1,display:"flex",alignItems:"center",flexWrap:"wrap",marginTop:16,justifyContent:"space-between"},children:[(0,i.jsx)("div",{style:{cursor:"pointer"},children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"/矢量智能对象-3.png",className:s().footer_Image})})}),(0,i.jsx)("div",{style:{cursor:"pointer"},children:(0,i.jsx)("img",{src:"/矢量智能对象-2.png",className:s().footer_Image})}),(0,i.jsx)("div",{style:{cursor:"pointer"},children:(0,i.jsx)("img",{src:"/矢量智能对象-1.png",className:s().footer_Image})}),(0,i.jsx)("div",{style:{cursor:"pointer"},children:(0,i.jsx)("a",{href:"https://wa.me/85263396652",children:(0,i.jsx)("img",{src:"/矢量智能对象.png",className:{...s().footer_Image,marginRight:0}})})})]})]})})]}),(0,i.jsx)("div",{style:{width:"100%",textAlign:"center",marginTop:16,marginBottom:16,fontSize:12,whiteSpace:"nowrap"},children:"\xa92023 floralismhk Ins All rights reserved"})]})}},751:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return n}});var i=t(5893),l=t(2897),s=t.n(l);function n(e){var o,t,l,n,r,c,a,d,_,m,g,p,u,h,v,f,y,x,j,w,b,I,N,H,S,T;return"category"!==e.type&&"carsouel"!==e.type?(0,i.jsxs)("div",{className:"".concat(s().GoodsItem),onClick:()=>{location.href="/production/".concat(e.item.id)},style:{padding:"2%",...e.top_style},children:[(0,i.jsxs)("div",{className:e.animation&&("category"===e.type||"carsouel"===e.type)?s().goods_img_cover:"",style:{position:"relative",...e.imgTopStyle},children:[(0,i.jsx)("img",{src:null==e?void 0:null===(m=e.item)||void 0===m?void 0:m.photoimage,style:{width:"100%",display:"block",...e.imgStyle},className:"toLarge"===e.animation?"".concat(s().goods_img," ").concat(s().an_fangda):"".concat(s().goods_img)}),(null===(g=e.item)||void 0===g?void 0:null===(p=g.photoimages)||void 0===p?void 0:p.length)&&(null===(u=e.item)||void 0===u?void 0:u.photoimages[0])&&(0,i.jsx)("img",{src:null==e?void 0:null===(h=e.item)||void 0===h?void 0:h.photoimages[0],style:{borderRadius:16},className:s().goods_hover_img}),(0,i.jsx)("button",{className:s().buy_goods_btn,children:"點擊購買"})]}),"category"===e.type?(0,i.jsx)("div",{style:{width:"100%",marginTop:16,display:"flex"},children:(0,i.jsx)("div",{style:{...e.style},className:s().goods_title,children:e.item.categoryname})}):"carsouel"===e.type?(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:16,paddingLeft:"10%",paddingRight:"10%",alignItems:"center"},children:[(0,i.jsx)("div",{style:{width:"100%",textOverflow:"ellipsis",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap"},children:null!==(j=null==e?void 0:null===(v=e.item)||void 0===v?void 0:v.flowername)&&void 0!==j?j:""}),(0,i.jsx)("div",{className:s().goods_carsouel_price,style:{width:"100%",textAlign:"center",whiteSpace:"nowrap"},children:"HK$ "+(null==e?void 0:null===(f=e.item)||void 0===f?void 0:f.price)})]}):(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:16,paddingLeft:"10%",paddingRight:"10%",alignItems:"center"},children:[(0,i.jsx)("div",{style:{width:"100%",textOverflow:"ellipsis",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden"},children:null!==(b=null==e?void 0:null===(y=e.item)||void 0===y?void 0:y.flowername)&&void 0!==b?b:""}),(0,i.jsx)("div",{className:s().goods_price,style:{width:"100%",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden"},children:"HK$ "+(null==e?void 0:null===(x=e.item)||void 0===x?void 0:x.price)})]})]}):(0,i.jsxs)("div",{className:"".concat(s().GoodsItem," ").concat("category"===e.type&&s().Iscategory),onClick:()=>{"category"!==e.type?location.href="/production/".concat(e.item.id):location.href="/category/".concat(e.item.id)},style:{padding:"2%",...e.top_style},children:[(0,i.jsxs)("div",{className:"category"===e.type||"carsouel"===e.type?s().goods_img_cover:"",style:{position:"relative",...e.imgTopStyle},children:[(0,i.jsx)("img",{src:null==e?void 0:null===(o=e.item)||void 0===o?void 0:o.photoimage,style:{width:"100%",display:"block",...e.imgStyle},className:"toLarge"===e.animation?"".concat(s().goods_img," ").concat(s().an_fangda):"".concat(s().goods_img)}),"category"!==e.type&&"carsouel"!==e.type&&(null===(t=e.item)||void 0===t?void 0:null===(l=t.photoimages)||void 0===l?void 0:l.length)&&(null===(n=e.item)||void 0===n?void 0:n.photoimages[0])&&(0,i.jsx)("img",{src:null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.photoimages[0],style:{borderRadius:16},className:s().goods_hover_img}),"carsouel"===e.type&&(0,i.jsx)("button",{className:s().buy_btn,children:"點擊購買"})]}),"category"===e.type?(0,i.jsx)("div",{style:{width:"100%",marginTop:16,display:"flex"},children:(0,i.jsx)("div",{style:{...e.style},className:s().goods_title,children:e.item.categoryname})}):"carsouel"===e.type?(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:16,paddingLeft:"10%",paddingRight:"10%",alignItems:"center"},children:[(0,i.jsx)("div",{style:{width:"100%",textOverflow:"ellipsis",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap"},children:null!==(N=null==e?void 0:null===(c=e.item)||void 0===c?void 0:c.flowername)&&void 0!==N?N:""}),(0,i.jsx)("div",{className:s().goods_carsouel_price,style:{width:"100%",textAlign:"center",whiteSpace:"nowrap"},children:"HK$ "+(null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.price)})]}):(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:16,paddingLeft:"10%",paddingRight:"10%",alignItems:"center"},children:[(0,i.jsx)("div",{style:{width:"100%",textOverflow:"ellipsis",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden"},children:null!==(S=null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.flowername)&&void 0!==S?S:""}),(0,i.jsx)("div",{className:s().goods_price,style:{width:"100%",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden"},children:"HK$ "+(null==e?void 0:null===(_=e.item)||void 0===_?void 0:_.price)})]})]})}},9854:function(e){e.exports={banner:"Home_banner__Ehv0A",banner_layout:"Home_banner_layout__2wkb8",banner_buttom:"Home_banner_buttom__ejiXV",search_area:"Home_search_area__REPE_",input:"Home_input__OUvlA",top_banner_area:"Home_top_banner_area__DaFqi",scroll_left:"Home_scroll_left__wJBAa",scroll_right:"Home_scroll_right__TP3yF",main_body:"Home_main_body__I0JZ7",goods_list:"Home_goods_list__wPEwe",contactus:"Home_contactus__c_Yxp",goods_scroll:"Home_goods_scroll__u1eh1",goods_view:"Home_goods_view__zsvaR",distance:"Home_distance__KJyqT",title:"Home_title__FX7xZ",distance_pic:"Home_distance_pic__vMG_s",serach_icon:"Home_serach_icon__Xgk0L",banner_desc:"Home_banner_desc__eIGHc"}},2770:function(e){e.exports={footer:"footer_footer__uSNcK",footer_column:"footer_footer_column__BHwLV",footer_contactList:"footer_footer_contactList__tOCzW",icon_group:"footer_icon_group__2B7IN",footer_Image:"footer_footer_Image__srQen",footer_three_column:"footer_footer_three_column__69nmD",footer_icon_group:"footer_footer_icon_group__DYK07",special_column:"footer_special_column__9lacd"}},2897:function(e){e.exports={GoodsItem:"goodsItem_GoodsItem__MXINy",goods_img_cover:"goodsItem_goods_img_cover__jEOT9",goods_hover_img:"goodsItem_goods_hover_img__3EVbb",buy_goods_btn:"goodsItem_buy_goods_btn__soAMN",an_fangda:"goodsItem_an_fangda__4vw9J",fangda:"goodsItem_fangda__3Fzv7",buy_btn:"goodsItem_buy_btn__MHuB_",selector:"goodsItem_selector__gAyb2",Iscategory:"goodsItem_Iscategory__FPyCL",goods_title:"goodsItem_goods_title__AocWN",littletransition:"goodsItem_littletransition__uOyya",goods_carsouel_price:"goodsItem_goods_carsouel_price___LJ5n",goods_price:"goodsItem_goods_price__vLd1V",goods_img:"goodsItem_goods_img__wvQdu"}},9627:function(e){e.exports={btn_list:"goodsScroll_btn_list__j5Nx4",select:"goodsScroll_select__qCLsK"}}}]);