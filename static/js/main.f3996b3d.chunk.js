(this["webpackJsonpfood-library"]=this["webpackJsonpfood-library"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(5),i=c.n(s),o=(c(12),c(4)),l=c.n(o),j=c(6),u=c(2),b=(c(14),function(e){return Object(n.jsxs)("div",{className:"Recipe",onClick:e.onClick,children:[Object(n.jsx)("img",{src:e.image,alt:"nothing"}),Object(n.jsx)("h1",{children:e.title})]})}),h=function(e){return Object(n.jsxs)("div",{className:"ExtendedRecipe",children:[Object(n.jsx)("img",{src:e.image,alt:"nothing"}),Object(n.jsx)("h1",{children:e.title})]})},d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],d=i[1],p=Object(a.useState)(""),m=Object(u.a)(p,2),O=m[0],f=m[1],x=Object(a.useState)("none"),g=Object(u.a)(x,2),v=g[0],S=g[1];Object(a.useEffect)((function(){N()}),[O]);var N=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(O,"&app_id=").concat("10860fdf","&app_key=").concat("daa9cae076e037855097584d65ab1055","&from=0&to=20"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),r(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=e.target;console.log(t),S(e.target)};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"Header",children:[Object(n.jsx)("h1",{className:"Logo",onClick:function(){S("none")},children:"Food Library"}),Object(n.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),f(o),d(""),S("none")},children:[Object(n.jsx)("input",{className:"SearchInput",type:"text",placeholder:"Search",value:o,onChange:function(e){d(e.target.value)}}),Object(n.jsx)("button",{className:"SearchButton",type:"submit",children:"Search"})]})]}),"none"==v?Object(n.jsx)("div",{className:"RecipesContainer",children:0==!c.length?c.map((function(e){return Object(n.jsx)(b,{title:e.recipe.label,image:e.recipe.image,onClick:k})})):Object(n.jsx)("h1",{className:"NoResultsText",children:"Search a recipe"})}):Object(n.jsx)(h,{title:c[0].recipe.label,image:c[0].recipe.image})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f3996b3d.chunk.js.map