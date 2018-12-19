(function(e){function t(t){for(var o,i,a=t[0],u=t[1],c=t[2],f=0,p=[];f<a.length;f++)i=a[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"012d":function(e,t,n){},"0584":function(e,t,n){},"08b0":function(e,t,n){},"11c5":function(e,t,n){},"1a37":function(e,t,n){"use strict";var o=n("8890"),r=n.n(o);r.a},"2b80":function(e,t,n){},4694:function(e,t,n){"use strict";var o=n("a4a0"),r=n.n(o);r.a},"4ac9":function(e,t,n){"use strict";var o=n("f5b6"),r=n.n(o);r.a},"50fb":function(e,t,n){},"53ee":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("8c4f"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("header",[e.user?o("span",[e._v("\n      Hello "+e._s(e.user.username)+"!\n    ")]):e._e(),e.user?o("nav",[o("RouterLink",{attrs:{to:"/"}},[e._v("Home")]),o("RouterLink",{attrs:{to:"/search"}},[e._v("Search")]),o("RouterLink",{attrs:{to:"/myset"}},[e._v("My Set")]),o("RouterLink",{attrs:{to:"/ratings"}},[e._v("Ratings")]),o("RouterLink",{attrs:{to:"/about"}},[e._v("About")]),o("a",{attrs:{href:"#"},on:{click:e.handleLogout}},[e._v("Logout")])],1):e._e()]),o("main",[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e.user?o("RouterView",{attrs:{user:e.user}}):o("Auth",{attrs:{onSignUp:e.handleSignUp,onSignIn:e.handleSignIn}})],1)])},i=[],a="",u=function(e,t){var n={method:e,headers:{}};return console.log(a),t&&(n.headers["Content-Type"]="application/json",n.body=JSON.stringify(t)),a&&(n.headers.Authorization=a),n},c={setToken:function(e){a=e},signUp:function(e){return fetch("/api/auth/signUp",u("POST",e)).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},signIn:function(e){return fetch("/api/auth/signIn",u("POST",e)).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},getJokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("https://icanhazdadjoke.com/search?term=".concat(e),{headers:{Accept:"application/json"}}).then(function(e){return e.json()})},addJoke:function(e){return fetch("/api/jokes",u("POST",e)).then(function(e){return e.json()})},getRatings:function(){return fetch("/api/ratings",u("GET")).then(function(e){return e.json()})},addRating:function(e){return fetch("/api/ratings",u("POST",e)).then(function(e){return e.json()})},getMyJokes:function(){return fetch("/api/jokes",u("GET")).then(function(e){return e.json()})},getRateJokes:function(e){return fetch("/api/jokes/".concat(e),{headers:{Accept:"application/json"}}).then(function(e){return e.json()})},deleteMyJoke:function(e){return fetch("/api/jokes/".concat(e),u("DELETE")).then(function(e){return e.json()})},getProfiles:function(){return fetch("/api/profiles",u("GET")).then(function(e){return e.json()})},addSearchJoke:function(e){return fetch("/api/jokes",u("POST",e)).then(function(e){return e.json()})}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",["signin"===e.method?n("div",[n("h2",[e._v("Sign In")]),n("p",[e._v("\n      Need to register?\n      "),n("button",{on:{click:function(t){e.method="signup"}}},[e._v("Sign Up")])]),n("CredentialsForm",{attrs:{prompt:"Sign In",onSubmit:e.handleSignIn}})],1):n("div",[n("h2",[e._v("Sign Up")]),n("p",[e._v("Already have an account?\n      "),n("button",{on:{click:function(t){e.method="signin"}}},[e._v("Sign In")])]),n("CredentialsForm",{attrs:{prompt:"Sign Up",onSubmit:e.handleSignUp}})],1),e.error?n("pre",[e._v(e._s(e.error))]):e._e()])},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){t.preventDefault(),e.onSubmit(e.profile)}}},[n("label",[e._v("\n    Username:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.username,expression:"profile.username"}],attrs:{required:""},domProps:{value:e.profile.username},on:{input:function(t){t.target.composing||e.$set(e.profile,"username",t.target.value)}}})]),n("label",[e._v("\n    Password:\n    "),"checkbox"===(e.showPassword?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],attrs:{required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.profile.password)?e._i(e.profile.password,null)>-1:e.profile.password},on:{change:function(t){var n=e.profile.password,o=t.target,r=!!o.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);o.checked?i<0&&e.$set(e.profile,"password",n.concat([s])):i>-1&&e.$set(e.profile,"password",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.profile,"password",r)}}}):"radio"===(e.showPassword?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],attrs:{required:"",type:"radio"},domProps:{checked:e._q(e.profile.password,null)},on:{change:function(t){e.$set(e.profile,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],attrs:{required:"",type:e.showPassword?"text":"password"},domProps:{value:e.profile.password},on:{input:function(t){t.target.composing||e.$set(e.profile,"password",t.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(t){e.showPassword=!e.showPassword}}},[e._v("\n      "+e._s(e.showPassword?"Hide":"Show")+"\n    ")])]),n("label",[n("button",[e._v(e._s(e.prompt))])])])},d=[],h={props:{onSubmit:Function,prompt:String},data:function(){return{profile:{username:"",password:""},showPassword:!1}}},v=h,m=(n("4ac9"),n("2877")),_=Object(m["a"])(v,p,d,!1,null,"2c1de180",null);_.options.__file="CredentialsForm.vue";var k=_.exports,g={props:{onSignIn:Function,onSignUp:Function},data:function(){return{method:"signin",error:""}},components:{CredentialsForm:k},methods:{handleSignIn:function(e){var t=this;this.error="",this.onSignIn(e).catch(function(e){t.error=e.error})},handleSignUp:function(e){var t=this;this.error="",this.onSignUp(e).catch(function(e){t.error=e.error})}}},b=g,j=(n("1a37"),Object(m["a"])(b,l,f,!1,null,"4e4bfcae",null));j.options.__file="Auth.vue";var w=j.exports,y={data:function(){return{user:null}},components:{Auth:w},created:function(){var e=window.localStorage.getItem("profile");e&&this.setUser(JSON.parse(e))},methods:{handleSignUp:function(e){var t=this;return c.signUp(e).then(function(e){t.setUser(e)})},handleSignIn:function(e){var t=this;return c.signIn(e).then(function(e){t.setUser(e)})},setUser:function(e){this.user=e,e?(c.setToken(e.token),window.localStorage.setItem("profile",JSON.stringify(e))):(c.setToken(),window.localStorage.removeItem("profile"))},handleLogout:function(){this.setUser(null),this.$router.push("/")}}},S=y,J=(n("a43b"),Object(m["a"])(S,s,i,!1,null,"5c0308a2",null));J.options.__file="App.vue";var O=J.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Welcome to Joke Project!")]),n("p",[e._v("\n      Jokes go here, not hooked to API yet.\n  ")])])}],A={},P=A,E=(n("91db"),Object(m["a"])(P,x,$,!1,null,"74846c24",null));E.options.__file="Home.vue";var R=E.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div"),n("h1",[e._v("This is a heading")]),n("Search",{attrs:{search:e.search}}),n("button",{on:{click:function(t){e.show=!0}}},[e._v("Add A Joke")]),e.show?n("AddJoke",{attrs:{onAdd:e.handleAdd,onClose:function(){return e.show=!1}}}):e._e(),e.jokes?n("JokesList",{attrs:{jokes:e.jokes}}):e._e()],1)},L=[],I=(n("386d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",[n("h2",[e._v("Search for a Joke")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{required:""},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),n("button",[e._v("Search")])])])])}),M=[],T={props:{search:String,onSearch:Function},data:function(){return{keyword:this.search||""}},watch:{search:function(e){this.keyword!==e&&(this.keyword=e)}},methods:{handleSubmit:function(){this.$router.push({query:{search:encodeURIComponent(this.keyword)}})}}},C=T,q=(n("aefe"),Object(m["a"])(C,I,M,!1,null,null,null));q.options.__file="Search.vue";var N=q.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h3",[e._v("Jokes List")]),n("ul",e._l(e.jokes,function(e){return n("Joke",{key:e.id,attrs:{joke:e}})}),1)])},D=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("li",[e._v("\n    "+e._s(e.joke.joke)+"\n    "),n("button",{on:{click:e.handleAdd}},[e._v("Add to My Set")])])])},G=[],z={props:{joke:Object},methods:{handleAdd:function(){var e={title:this.joke.joke,source:"search"};c.addSearchJoke(e).then(function(e){console.log("result",e)})}}},V=z,W=(n("9816"),Object(m["a"])(V,H,G,!1,null,null,null));W.options.__file="Joke.vue";var X=W.exports,Y={props:{jokes:Array},components:{Joke:X}},B=Y,K=(n("d1cb"),Object(m["a"])(B,F,D,!1,null,null,null));K.options.__file="JokesList.vue";var Q=K.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("button",{staticClass:"close",on:{click:e.onClose}},[e._v("X")]),n("h3",[e._v("Add Your Own Joke")]),e._m(0),n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.joke.title,expression:"joke.title"}],attrs:{autofocus:"",require:""},domProps:{value:e.joke.title},on:{input:function(t){t.target.composing||e.$set(e.joke,"title",t.target.value)}}}),n("button",[e._v("Add")])])])},ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("label",[e._v("Joke Text:")])])}];function te(){return{title:"",source:"custom"}}var ne={props:{onAdd:Function,onClose:Function},data:function(){return{joke:te()}},methods:{handleSubmit:function(){var e=this;this.onAdd(this.joke).then(function(){e.joke=te()})}},created:function(){var e=this;this.documentListener=function(t){27===t.keyCode&&e.onClose()},document.addEventListener("keyup",this.documentListener)},destroyed:function(){document.removeEventListener("keyup",this.documentListener)}},oe=ne,re=(n("a86f"),Object(m["a"])(oe,Z,ee,!1,null,"5ecb2d34",null));re.options.__file="AddJoke.vue";var se=re.exports,ie={data:function(){return{jokes:[],search:decodeURIComponent(this.$route.query.search=""),showModal:!1,show:!1}},components:{Search:N,JokesList:Q,AddJoke:se},watch:{$route:function(e,t){console.log("watch",this.search);var n=e.query.search,o=t.query.search;n!==o&&(this.search=decodeURIComponent(n),this.searchJokes())}},methods:{handleSearch:function(){this.searchJokes()},handleAdd:function(e){return console.log("joke is ",e),c.addJoke(e)},searchJokes:function(){var e=this;this.search&&(console.log("search",this.search),c.getJokes(this.search).then(function(t){e.jokes=t.results}))}}},ae=ie,ue=(n("a1eb"),Object(m["a"])(ae,U,L,!1,null,null,null));ue.options.__file="Jokes.vue";var ce=ue.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h3",[e._v("Joke Joke Joke")]),e.jokes?n("MySetList",{attrs:{jokes:e.jokes}}):e._e()],1)},fe=[],pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e.jokes?n("ul",e._l(e.jokes,function(e){return n("MyJoke",{key:e.id,attrs:{joke:e}})}),1):e._e()])},de=[],he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("li",{attrs:{joke:e.joke}},[e._v("\n        "+e._s(e.joke.title)+"\n        "),n("button",{on:{click:e.handleDelete}},[e._v("Remove from my set")])])])},ve=[],me={props:{joke:Object},methods:{handleDelete:function(){var e=this;c.deleteMyJoke(this.joke.id).then(function(){return[e.$router.push("/jokes")]})}}},_e=me,ke=(n("d1e5"),Object(m["a"])(_e,he,ve,!1,null,null,null));ke.options.__file="MyJoke.vue";var ge=ke.exports,be={props:{jokes:null},components:{MyJoke:ge}},je=be,we=(n("cfa3"),Object(m["a"])(je,pe,de,!1,null,null,null));we.options.__file="MySetList.vue";var ye=we.exports,Se={data:function(){return{jokes:null}},components:{MySetList:ye},created:function(){var e=this;c.getMyJokes().then(function(t){e.jokes=t}).catch(function(t){e.error=t})}},Je=Se,Oe=(n("f043"),Object(m["a"])(Je,le,fe,!1,null,null,null));Oe.options.__file="MySet.vue";var xe=Oe.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){t.preventDefault(),e.onSubmit(e.id)}}},[n("h2",[e._v("Rate Other User's Jokes")]),n("RatingList",{attrs:{jokes:e.jokes}}),n("span",[e._v("Other Sets: ")]),e.profiles?n("select",{directives:[{name:"model",rawName:"v-model",value:e.profiles.username,expression:"profiles.username"}],attrs:{required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.profiles,"username",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"-1",disabled:""}},[e._v("Select a User")]),e._l(e.profiles,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.username)+"\n        ")])})],2):e._e(),n("button",[e._v("Select")])],1)])},Ae=[],Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._v("\n    Rating list\n    "),e.jokes?n("ul",e._l(e.jokes,function(e){return n("Rating",{key:e.id,attrs:{joke:e}})}),1):e._e()])},Ee=[],Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("li",[e._v("\n      "+e._s(e.joke.title)+"\n      "),n("RateJoke")],1)])},Ue=[],Le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ie=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("li",[e._v("\n       Rate a Joke\n    ")])])}],Me={},Te=Me,Ce=(n("f329"),Object(m["a"])(Te,Le,Ie,!1,null,null,null));Ce.options.__file="RateJoke.vue";var qe=Ce.exports,Ne={props:{joke:null,onRate:Function},components:{RateJoke:qe}},Fe=Ne,De=(n("fa89"),Object(m["a"])(Fe,Re,Ue,!1,null,null,null));De.options.__file="Rating.vue";var He=De.exports,Ge={props:{jokes:null},components:{Rating:He}},ze=Ge,Ve=(n("4694"),Object(m["a"])(ze,Pe,Ee,!1,null,null,null));Ve.options.__file="RatingList.vue";var We=Ve.exports,Xe={data:function(){return{jokes:null,profiles:null}},components:{RatingList:We},created:function(){var e=this;c.getMyJokes().then(function(t){e.jokes=t}).catch(function(t){e.error=t}),c.getProfiles().then(function(t){e.profiles=t,console.log("profiles is ",t)}).catch(function(t){e.error=t})},methods:{}},Ye=Xe,Be=(n("fd03"),Object(m["a"])(Ye,$e,Ae,!1,null,null,null));Be.options.__file="Ratings.vue";var Ke=Be.exports,Qe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ze=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h3",[e._v("About Us")]),n("p",[e._v("Hans")]),n("p",[e._v("Teonna")]),n("p",[e._v("Jei")]),n("p",[e._v("Ivan")])])}],et={},tt=et,nt=(n("837d"),Object(m["a"])(tt,Qe,Ze,!1,null,null,null));nt.options.__file="About.vue";var ot=nt.exports,rt=new r["a"]({routes:[{path:"/",component:R},{path:"/search",component:ce},{path:"/myset",component:xe},{path:"/ratings",component:Ke},{path:"/about",component:ot},{path:"*",redirect:"/"}]});n("db43");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].directive("focus",{inserted:function(e){e.focus()}}),new o["a"]({router:rt,render:function(e){return e(O)}}).$mount("#app")},5990:function(e,t,n){},"837d":function(e,t,n){"use strict";var o=n("a2e3"),r=n.n(o);r.a},8890:function(e,t,n){},"91db":function(e,t,n){"use strict";var o=n("f752"),r=n.n(o);r.a},9816:function(e,t,n){"use strict";var o=n("2b80"),r=n.n(o);r.a},a1eb:function(e,t,n){"use strict";var o=n("c21a"),r=n.n(o);r.a},a2e3:function(e,t,n){},a43b:function(e,t,n){"use strict";var o=n("fe64"),r=n.n(o);r.a},a4a0:function(e,t,n){},a86f:function(e,t,n){"use strict";var o=n("08b0"),r=n.n(o);r.a},aefe:function(e,t,n){"use strict";var o=n("012d"),r=n.n(o);r.a},bb7e:function(e,t,n){},c21a:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},cfa3:function(e,t,n){"use strict";var o=n("50fb"),r=n.n(o);r.a},d1cb:function(e,t,n){"use strict";var o=n("0584"),r=n.n(o);r.a},d1e5:function(e,t,n){"use strict";var o=n("5990"),r=n.n(o);r.a},db43:function(e,t,n){},ec90:function(e,t,n){},f043:function(e,t,n){"use strict";var o=n("53ee"),r=n.n(o);r.a},f329:function(e,t,n){"use strict";var o=n("11c5"),r=n.n(o);r.a},f5b6:function(e,t,n){},f752:function(e,t,n){},fa89:function(e,t,n){"use strict";var o=n("bb7e"),r=n.n(o);r.a},fd03:function(e,t,n){"use strict";var o=n("ec90"),r=n.n(o);r.a},fe64:function(e,t,n){}});
//# sourceMappingURL=app.93a105ad.js.map