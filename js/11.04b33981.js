(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{9882:function(A,t,a){"use strict";a.r(t);var s=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},e=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{},[s("div",{staticClass:"flex"},[s("img",{staticClass:"logo",attrs:{src:a("cf05")}}),s("img",{staticClass:"logot",attrs:{src:a("a9a4")}})])])}],n={name:"teach",data(){return{time:0}},methods:{countDown(){const A=this;A.time--}},mounted(){const A=this;A.time=3,setInterval(A.countDown,1e3)},watch:{time:function(A,t){0===A&&this.$router.push("/teach")}}},o=n,c=(a("bb9b"),a("2877")),p=Object(c["a"])(o,s,e,!1,null,null,null);t["default"]=p.exports},a9a4:function(A,t){A.exports="data:image/png;base64,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"},bb9b:function(A,t,a){"use strict";var s=a("d7d1"),e=a.n(s);e.a},d7d1:function(A,t,a){}}]);