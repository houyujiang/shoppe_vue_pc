(function(e){function t(t){for(var n,i,a=t[0],c=t[1],u=t[2],l=0,p=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==s[a]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},i={app:0},s={app:0},o=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0b860ded":"1f10e81b","chunk-102fa6c7":"9d737f96","chunk-207d675a":"9ef791fa","chunk-31f8af38":"63588a6c","chunk-55adf198":"2ab05ebc","chunk-5dbc91e2":"8fd907d9","chunk-6c0851c2":"6f13a894","chunk-e6ee55e4":"5663226f","chunk-f8059cfe":"f3a8fc0a"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-0b860ded":1,"chunk-102fa6c7":1,"chunk-207d675a":1,"chunk-31f8af38":1,"chunk-55adf198":1,"chunk-5dbc91e2":1,"chunk-6c0851c2":1,"chunk-e6ee55e4":1,"chunk-f8059cfe":1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-0b860ded":"e011a452","chunk-102fa6c7":"e30051ac","chunk-207d675a":"0d974836","chunk-31f8af38":"09f7d5e3","chunk-55adf198":"f132a057","chunk-5dbc91e2":"a42fe968","chunk-6c0851c2":"41d025c7","chunk-e6ee55e4":"b670c1eb","chunk-f8059cfe":"fdd832bc"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){u=p[a],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[e],f.parentNode.removeChild(f),r(o)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,r[1](p)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),i=r.n(n);i.a},"242f":function(e,t,r){"use strict";var n=r("286b"),i=r.n(n);i.a},"286b":function(e,t,r){},"379d":function(e,t){t.install=function(e){e.prototype.$target="http://47.115.85.237:3000/",e.prototype.notifySucceed=function(e){this.$notify({title:"成功",message:e,type:"success",offset:100})},e.prototype.notifyError=function(e){this.$notify.error({title:"错误",message:e,offset:100})}}},"43e5":function(e,t,r){"use strict";var n=r("571b"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("0d03"),r("b0c0"),r("d3b7"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app",name:"app"}},[n("el-container",[n("div",{staticClass:"topbar"},[n("div",{staticClass:"nav"},[n("ul",[this.$store.getters.getUser?n("li",[e._v(" 欢迎 "),n("el-popover",{attrs:{placement:"top",width:"180"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("p",[e._v("确定退出登录吗？")]),n("div",{staticStyle:{"text-align":"right",margin:"10px 0 0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.logout}},[e._v("确定")])],1),n("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v(e._s(this.$store.getters.getUser.userName))])],1)],1):n("li",[n("el-button",{attrs:{type:"text"},on:{click:e.login}},[e._v("登录")]),n("span",{staticClass:"sep"},[e._v("|")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.register=!0}}},[e._v("注册")])],1),n("li",[n("router-link",{attrs:{to:"/order"}},[e._v("我的订单")])],1),n("li",[n("router-link",{attrs:{to:"/collect"}},[e._v("我的收藏")])],1),n("li",{class:e.getNum>0?"shopCart-full":"shopCart"},[n("router-link",{attrs:{to:"/shoppingCart"}},[n("i",{staticClass:"el-icon-shopping-cart-full"}),e._v(" 购物车 "),n("span",{staticClass:"num"},[e._v("("+e._s(e.getNum)+")")])])],1)])])]),n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal","active-text-color":"#409eff",router:""}},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:r("ede7"),alt:""}})])],1),n("el-menu-item",{attrs:{index:"/"}},[e._v("首页")]),n("el-menu-item",{attrs:{index:"/goods"}},[e._v("全部商品")]),n("el-menu-item",{attrs:{index:"/about"}},[e._v("关于我们")]),n("div",{staticClass:"so"},[n("el-input",{attrs:{placeholder:"请输入搜索内容"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchClick},slot:"append"})],1)],1)],1)],1),n("MyLogin"),n("MyRegister",{attrs:{register:e.register},on:{fromChild:e.isRegister}}),n("el-main",[n("keep-alive",[n("router-view")],1)],1),n("el-footer",[n("div",{staticClass:"footer"},[n("div",{staticClass:"ng-promise-box"},[n("div",{staticClass:"ng-promise"},[n("p",{staticClass:"text"},[n("a",{staticClass:"icon1",attrs:{href:"javascript:;"}},[e._v("7天无理由退换货")]),n("a",{staticClass:"icon2",attrs:{href:"javascript:;"}},[e._v("满99元全场免邮")]),n("a",{staticClass:"icon3",staticStyle:{"margin-right":"0"},attrs:{href:"javascript:;"}},[e._v("100%品质保证")])])])]),n("div",{staticClass:"github"},[n("a",{attrs:{href:"https://github.com/hai-27/vue-store",target:"_blank"}},[n("div",{staticClass:"github-but"})])]),n("div",{staticClass:"mod_help"},[n("p",[n("router-link",{attrs:{to:"/"}},[e._v("首页")]),n("span",[e._v("|")]),n("router-link",{attrs:{to:"/goods"}},[e._v("全部商品")]),n("span",[e._v("|")]),n("router-link",{attrs:{to:"/about"}},[e._v("关于我们")])],1),n("p",{staticClass:"coty"},[e._v("商城版权所有 © 2012-2021")])])])])],1)],1)},s=[],o=(r("a4d3"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("841c"),r("159b"),r("ade3")),a=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={beforeUpdate:function(){this.activeIndex=this.$route.path},data:function(){return{activeIndex:"",search:"",register:!1,visible:!1}},created:function(){localStorage.getItem("user")&&this.setUser(JSON.parse(localStorage.getItem("user")))},computed:u({},Object(a["c"])(["getUser","getNum"])),watch:{getUser:function(e){var t=this;""===e?this.setShoppingCart([]):this.$axios.post("/api/user/shoppingCart/getShoppingCart",{user_id:e.user_id}).then((function(e){"001"===e.data.code?t.setShoppingCart(e.data.shoppingCartData):t.notifyError(e.data.msg)})).catch((function(e){return Promise.reject(e)}))}},methods:u({},Object(a["b"])(["setUser","setShowLogin","setShoppingCart"]),{login:function(){this.setShowLogin(!0)},logout:function(){this.visible=!1,localStorage.setItem("user",""),this.setUser(""),this.notifySucceed("成功退出登录")},isRegister:function(e){this.register=e},searchClick:function(){""!=this.search&&(this.$router.push({path:"/goods",query:{search:this.search}}),this.search="")}})},p=l,f=(r("034f"),r("2877")),h=Object(f["a"])(p,i,s,!1,null,null,null),d=h.exports,g=r("8c4f");n["default"].use(g["a"]);var m=[{path:"/",name:"Home",component:function(){return r.e("chunk-102fa6c7").then(r.bind(null,"bb51"))}},{path:"/error",name:"Error",component:function(){return r.e("chunk-6c0851c2").then(r.bind(null,"3fb9"))}},{path:"/goods",name:"Goods",component:function(){return r.e("chunk-55adf198").then(r.bind(null,"8629"))}},{path:"/about",name:"About",component:function(){return r.e("chunk-e6ee55e4").then(r.bind(null,"f820"))}},{path:"/goods/details",name:"Details",component:function(){return r.e("chunk-207d675a").then(r.bind(null,"9f52"))}},{path:"/shoppingCart",name:"ShoppingCart",component:function(){return r.e("chunk-5dbc91e2").then(r.bind(null,"8c6e"))},meta:{requireAuth:!0}},{path:"/collect",name:"Collect",component:function(){return r.e("chunk-0b860ded").then(r.bind(null,"0c03"))},meta:{requireAuth:!0}},{path:"/order",name:"Order",component:function(){return r.e("chunk-31f8af38").then(r.bind(null,"cf2a"))},meta:{requireAuth:!0}},{path:"/confirmOrder",name:"ConfirmOrder",component:function(){return r.e("chunk-f8059cfe").then(r.bind(null,"8873"))},meta:{requireAuth:!0}}],v=new g["a"]({routes:m}),b=g["a"].prototype.push;g["a"].prototype.push=function(e,t,r){return t||r?b.call(this,e,t,r):b.call(this,e).catch((function(e){return e}))};var y=v,C={state:{user:"",showLogin:!1},getters:{getUser:function(e){return e.user},getShowLogin:function(e){return e.showLogin}},mutations:{setUser:function(e,t){e.user=t},setShowLogin:function(e,t){e.showLogin=t}},actions:{setUser:function(e,t){var r=e.commit;r("setUser",t)},setShowLogin:function(e,t){var r=e.commit;r("setShowLogin",t)}}},k=(r("a434"),{state:{shoppingCart:[]},getters:{getShoppingCart:function(e){return e.shoppingCart},getNum:function(e){for(var t=0,r=0;r<e.shoppingCart.length;r++){var n=e.shoppingCart[r];t+=n.num}return t},getIsAllCheck:function(e){for(var t=!0,r=0;r<e.shoppingCart.length;r++){var n=e.shoppingCart[r];if(!n.check)return t=!1,t}return t},getCheckGoods:function(e){for(var t=[],r=0;r<e.shoppingCart.length;r++){var n=e.shoppingCart[r];n.check&&t.push(n)}return t},getCheckNum:function(e){for(var t=0,r=0;r<e.shoppingCart.length;r++){var n=e.shoppingCart[r];n.check&&(t+=n.num)}return t},getTotalPrice:function(e){for(var t=0,r=0;r<e.shoppingCart.length;r++){var n=e.shoppingCart[r];n.check&&(t+=n.price*n.num)}return t}},mutations:{setShoppingCart:function(e,t){e.shoppingCart=t},unshiftShoppingCart:function(e,t){e.shoppingCart.unshift(t)},updateShoppingCart:function(e,t){if("num"==t.prop){if(e.shoppingCart[t.key].maxNum<t.val)return;if(t.val<1)return}e.shoppingCart[t.key][t.prop]=t.val},addShoppingCartNum:function(e,t){for(var r=0;r<e.shoppingCart.length;r++){var n=e.shoppingCart[r];n.productID==t&&n.num<n.maxNum&&n.num++}},deleteShoppingCart:function(e,t){for(var r=0;r<e.shoppingCart.length;r++){var n=e.shoppingCart[r];n.id==t&&e.shoppingCart.splice(r,1)}},checkAll:function(e,t){for(var r=0;r<e.shoppingCart.length;r++)e.shoppingCart[r].check=t}},actions:{setShoppingCart:function(e,t){var r=e.commit;r("setShoppingCart",t)},unshiftShoppingCart:function(e,t){var r=e.commit;r("unshiftShoppingCart",t)},updateShoppingCart:function(e,t){var r=e.commit;r("updateShoppingCart",t)},addShoppingCartNum:function(e,t){var r=e.commit;r("addShoppingCartNum",t)},deleteShoppingCart:function(e,t){var r=e.commit;r("deleteShoppingCart",t)},checkAll:function(e,t){var r=e.commit;r("checkAll",t)}}});n["default"].use(a["a"]);var _=new a["a"].Store({strict:!0,modules:{user:C,shoppingCart:k}}),w=r("5c96"),S=r.n(w),O=(r("0fae"),r("379d")),x=r.n(O),j=r("bc3a"),P=r.n(j),U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"myMenu",attrs:{id:"myMenu"}},[r("ul",e._l(e.val,(function(t){return r("li",{key:t,class:e.activeClass==t?"active":"",on:{mouseover:function(r){return e.mouseover(r,t)}}},[r("router-link",{attrs:{to:""}},[e._t(t)],2)],1)})),0)])},$=[],L={props:["val"],name:"MyMenu",data:function(){return{activeClass:1}},methods:{mouseover:function(e,t){this.activeClass=t}},watch:{activeClass:function(e){this.$emit("fromChild",e)}}},E=L,R=(r("242f"),Object(f["a"])(E,U,$,!1,null,"5b2ea07a",null)),F=R.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"myList",attrs:{id:"myList"}},[r("ul",[e._l(e.list,(function(t){return r("li",{key:t.product_id},[r("el-popover",{attrs:{placement:"top"}},[r("p",[e._v("确定删除吗？")]),r("div",{staticStyle:{"text-align":"right",margin:"10px 0 0"}},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.deleteCollect(t.product_id)}}},[e._v("确定")])],1),r("i",{directives:[{name:"show",rawName:"v-show",value:e.isDelete,expression:"isDelete"}],staticClass:"el-icon-close delete",attrs:{slot:"reference"},slot:"reference"})]),r("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.product_id}}}},[r("img",{attrs:{src:e.$target+t.product_picture,alt:""}}),r("h2",[e._v(e._s(t.product_name))]),r("h3",[e._v(e._s(t.product_title))]),r("p",[r("span",[e._v(e._s(t.product_selling_price)+"元")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.product_price!=t.product_selling_price,expression:"item.product_price != item.product_selling_price"}],staticClass:"del"},[e._v(e._s(t.product_price)+"元")])])])],1)})),r("li",{directives:[{name:"show",rawName:"v-show",value:e.isMore&&e.list.length>=1,expression:"isMore && list.length>=1"}],attrs:{id:"more"}},[r("router-link",{attrs:{to:{path:"/goods",query:{categoryID:e.categoryID}}}},[e._v(" 浏览更多 "),r("i",{staticClass:"el-icon-d-arrow-right"})])],1)],2)])},A=[],D=(r("caad"),{name:"MyList",props:["list","isMore","isDelete"],data:function(){return{}},computed:{categoryID:function(){var e=[];if(""!=this.list)for(var t=0;t<this.list.length;t++){var r=this.list[t].category_id;e.includes(r)||e.push(r)}return e}},methods:{deleteCollect:function(e){var t=this;this.$axios.post("/api/user/collect/deleteCollect",{user_id:this.$store.getters.getUser.user_id,product_id:e}).then((function(r){switch(r.data.code){case"001":for(var n=0;n<t.list.length;n++){var i=t.list[n];i.product_id==e&&t.list.splice(n,1)}t.notifySucceed(r.data.msg);break;default:t.notifyError(r.data.msg)}})).catch((function(e){return Promise.reject(e)}))}}}),M=D,I=(r("43e5"),Object(f["a"])(M,N,A,!1,null,"7de90b99",null)),z=I.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"myLogin"}},[r("el-dialog",{attrs:{title:"登录",width:"300px",center:"",visible:e.isLogin},on:{"update:visible":function(t){e.isLogin=t}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.LoginUser,rules:e.rules,"status-icon":""}},[r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"请输入账号"},model:{value:e.LoginUser.name,callback:function(t){e.$set(e.LoginUser,"name",t)},expression:"LoginUser.name"}})],1),r("el-form-item",{attrs:{prop:"pass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-view",type:"password",placeholder:"请输入密码"},model:{value:e.LoginUser.pass,callback:function(t){e.$set(e.LoginUser,"pass",t)},expression:"LoginUser.pass"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{size:"medium",type:"primary"},on:{click:e.Login}},[e._v("登录")])],1)],1)],1)],1)},T=[];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B={name:"MyLogin",data:function(){var e=this,t=function(t,r,n){if(!r)return n(new Error("请输入用户名"));var i=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;return i.test(r)?(e.$refs.ruleForm.validateField("checkPass"),n()):n(new Error("字母开头,长度5-16之间,允许字母数字下划线"))},r=function(t,r,n){if(""===r)return n(new Error("请输入密码"));var i=/^[a-zA-Z]\w{5,17}$/;return i.test(r)?(e.$refs.ruleForm.validateField("checkPass"),n()):n(new Error("字母开头,长度6-18之间,允许字母数字和下划线"))};return{LoginUser:{name:"",pass:""},rules:{name:[{validator:t,trigger:"blur"}],pass:[{validator:r,trigger:"blur"}]}}},computed:{isLogin:{get:function(){return this.$store.getters.getShowLogin},set:function(e){this.$refs["ruleForm"].resetFields(),this.setShowLogin(e)}}},methods:J({},Object(a["b"])(["setUser","setShowLogin"]),{Login:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.$axios.post("/api/users/login",{userName:e.LoginUser.name,password:e.LoginUser.pass}).then((function(t){if("001"===t.data.code){e.isLogin=!1;var r=JSON.stringify(t.data.user);localStorage.setItem("user",r),e.setUser(t.data.user),e.notifySucceed(t.data.msg)}else e.$refs["ruleForm"].resetFields(),e.notifyError(t.data.msg)})).catch((function(e){return Promise.reject(e)}))}))}})},H=B,G=Object(f["a"])(H,q,T,!1,null,null,null),K=G.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("el-dialog",{attrs:{title:"注册",width:"300px",center:"",visible:e.isRegister},on:{"update:visible":function(t){e.isRegister=t}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.RegisterUser,rules:e.rules,"status-icon":""}},[r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"请输入账号"},model:{value:e.RegisterUser.name,callback:function(t){e.$set(e.RegisterUser,"name",t)},expression:"RegisterUser.name"}})],1),r("el-form-item",{attrs:{prop:"pass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-view",type:"password",placeholder:"请输入密码"},model:{value:e.RegisterUser.pass,callback:function(t){e.$set(e.RegisterUser,"pass",t)},expression:"RegisterUser.pass"}})],1),r("el-form-item",{attrs:{prop:"confirmPass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-view",type:"password",placeholder:"请再次输入密码"},model:{value:e.RegisterUser.confirmPass,callback:function(t){e.$set(e.RegisterUser,"confirmPass",t)},expression:"RegisterUser.confirmPass"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{size:"medium",type:"primary"},on:{click:e.Register}},[e._v("注册")])],1)],1)],1)],1)},Q=[],V={name:"MyRegister",props:["register"],data:function(){var e=this,t=function(t,r,n){if(!r)return n(new Error("请输入用户名"));var i=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;if(!i.test(r))return n(new Error("字母开头,长度5-16之间,允许字母数字下划线"));e.$axios.post("/api/users/findUserName",{userName:e.RegisterUser.name}).then((function(t){return"001"==t.data.code?(e.$refs.ruleForm.validateField("checkPass"),n()):n(new Error(t.data.msg))})).catch((function(e){return Promise.reject(e)}))},r=function(t,r,n){if(""===r)return n(new Error("请输入密码"));var i=/^[a-zA-Z]\w{5,17}$/;return i.test(r)?(e.$refs.ruleForm.validateField("checkPass"),n()):n(new Error("字母开头,长度6-18之间,允许字母数字和下划线"))},n=function(t,r,n){return""===r?n(new Error("请输入确认密码")):""!=e.RegisterUser.pass&&r===e.RegisterUser.pass?(e.$refs.ruleForm.validateField("checkPass"),n()):n(new Error("两次输入的密码不一致"))};return{isRegister:!1,RegisterUser:{name:"",pass:"",confirmPass:""},rules:{name:[{validator:t,trigger:"blur"}],pass:[{validator:r,trigger:"blur"}],confirmPass:[{validator:n,trigger:"blur"}]}}},watch:{register:function(e){e&&(this.isRegister=e)},isRegister:function(e){e||(this.$refs["ruleForm"].resetFields(),this.$emit("fromChild",e))}},methods:{Register:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.$axios.post("/api/users/register",{userName:e.RegisterUser.name,password:e.RegisterUser.pass}).then((function(t){"001"===t.data.code?(e.isRegister=!1,e.notifySucceed(t.data.msg)):e.notifyError(t.data.msg)})).catch((function(e){return Promise.reject(e)}))}))}}},W=V,X=Object(f["a"])(W,Y,Q,!1,null,null,null),ee=X.exports;n["default"].use(S.a),n["default"].use(x.a),n["default"].prototype.$axios=P.a,P.a.interceptors.request.use((function(e){return e}),(function(e){return y.push({path:"/error"}),Promise.reject(e)})),P.a.interceptors.response.use((function(e){return"401"===e.data.code&&(n["default"].prototype.notifyError(e.data.msg),_.dispatch("setShowLogin",!0)),"500"===e.data.code&&y.push({path:"/error"}),e}),(function(e){return y.push({path:"/error"}),Promise.reject(e)})),y.beforeResolve((function(e,t,r){var n=_.state.user.user;if(e.meta.requireAuth&&!n)return _.dispatch("setShowLogin",!0),null==t.name?void r("/"):void r(!1);r()})),n["default"].filter("dateFormat",(function(e){var t=new Date(e);function r(e){return e<10&&(e="0"+e),e}var n=t.getFullYear(),i=t.getMonth()+1,s=t.getDate(),o=t.getHours(),a=t.getMinutes(),c=t.getSeconds();return n+"-"+r(i)+"-"+r(s)+" "+r(o)+":"+r(a)+":"+r(c)})),n["default"].component(F.name,F),n["default"].component(z.name,z),n["default"].component(K.name,K),n["default"].component(ee.name,ee),n["default"].config.productionTip=!1,new n["default"]({router:y,store:_,render:function(e){return e(d)}}).$mount("#app")},"571b":function(e,t,r){},"85ec":function(e,t,r){},ede7:function(e,t,r){e.exports=r.p+"img/logo.c8999c02.png"}});
//# sourceMappingURL=app.8c9ca469.js.map