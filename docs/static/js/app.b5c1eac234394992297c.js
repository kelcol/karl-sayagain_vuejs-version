webpackJsonp([1],{FloB:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},i,!1,function(e){a("gsu9")},null,null).exports,r=a("/ocq"),o=a("yviF"),c=a.n(o),l=(a("kxiW"),c.a.initializeApp({apiKey:"AIzaSyCpSiezEAZFNIaPrqwbrBq-Cydu3PxcUaE",authDomain:"vue-firebase-test-53403.firebaseapp.com",databaseURL:"https://vue-firebase-test-53403.firebaseio.com",projectId:"vue-firebase-test-53403",storageBucket:"vue-firebase-test-53403.appspot.com",messagingSenderId:"244910969915"})),u=l.database(),p={db:u,recipesRef:u.ref("recipes"),firebaseApp:l},m={name:"Home",firebase:{recipes:p.recipesRef},data:function(){return{selected:null}},computed:{randomRecipe:function(){return Math.floor(30*Math.random())}},methods:{refreshPage:function(){this.$router.go(0)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"container recipe"},[a("div",{staticClass:"row"},e._l(e.recipes,function(t,n){return n==e.randomRecipe?a("div",{key:n},[a("div",{staticClass:"card-body"},[a("h1",[e._v("If you wish to make\n            "),a("span",{staticStyle:{color:"red"}},[e._v(e._s(t.name)+" ")]),e._v("from scratch, you must first create the universe.")]),e._v(" "),a("button",{on:{click:function(t){e.refreshPage()}}},[e._v("- Karl Sayagain")]),e._v(" "),a("p",[e._v("For a lesser challenge, you could start from here:\n              "),a("span",{staticStyle:{color:"red"}},[a("a",{attrs:{target:"_blank",href:t.link}},[e._v(e._s(t.link)+".")])])])])]):e._e()}))]),e._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Contribute"}}},[a("button",{staticClass:"button-primary"},[e._v("Contribute a Recipe")])])],1)},staticRenderFns:[]};var v=a("VU/8")(m,d,!1,function(e){a("FloB")},"data-v-3b92aa50",null).exports,f={data:function(){return{newRecipe:{name:"",link:""}}},methods:{onSubmit:function(){p.recipesRef.push(this.newRecipe),this.newRecipe.name="",this.newRecipe.link="",console.log("recipe added")}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"contribute"}},[a("section",[a("h1",[e._v("Contributing is easy. Just fill out the form below :)")]),e._v(" "),a("form",{attrs:{id:"form",method:"post"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"six columns"},[a("label",{staticClass:"label",attrs:{"label-for":"name"}},[e._v("Recipe Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.name,expression:"newRecipe.name"}],staticClass:"u-full-width",attrs:{placeholder:"Pineapple Upside-down Cake",id:"exampleTextInput",type:"text"},domProps:{value:e.newRecipe.name},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"six columns"},[a("label",{staticClass:"label",attrs:{"label-for":"link"}},[e._v("Recipe URL")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.link,expression:"newRecipe.link"}],staticClass:"u-full-width",attrs:{placeholder:"https://www.marthastewart.com/343591/pineapple-upside-down-cake",id:"exampleUrlInput",type:"url"},domProps:{value:e.newRecipe.link},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"link",t.target.value)}}})])]),e._v(" "),a("input",{staticClass:"button-primary",attrs:{value:"Submit",type:"submit"}})]),e._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[a("button",{staticClass:"button",attrs:{value:"submit"}},[e._v("Back to Home")])])],1)])},staticRenderFns:[]};var h=a("VU/8")(f,b,!1,function(e){a("bvYM")},"data-v-7f37bf95",null).exports;n.a.use(r.a);var _=new r.a({routes:[{path:"/",name:"Home",component:v},{path:"/contribute",name:"Contribute",component:h}]}),w=a("1mcD"),R=a.n(w);n.a.use(R.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},bvYM:function(e,t){},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b5c1eac234394992297c.js.map