(this["webpackJsonpsimple-recipe"]=this["webpackJsonpsimple-recipe"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(6),i=c.n(r),o=(c(13),c(4)),l=c.n(o),u=c(7),j=c(2),p=(c(5),function(e){var t=e.foodName,c=e.calories,a=e.ingredients,s=e.image;return Object(n.jsxs)("div",{className:"show-recipe",children:[Object(n.jsx)("h1",{className:"title-syle",children:t}),Object(n.jsx)("hr",{className:"line"}),Object(n.jsxs)("p",{children:["Calories (kcal): ",c," per serving"]}),Object(n.jsx)("hr",{className:"line"}),Object(n.jsx)("ol",{children:a.map((function(e){return Object(n.jsx)("li",{children:e.text})}))}),Object(n.jsx)("img",{className:"image",src:s,alt:""})]})}),b=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),i=Object(j.a)(r,2),o=i[0],b=i[1],h=Object(a.useState)("fruits"),m=Object(j.a)(h,2),d=m[0],f=m[1];Object(a.useEffect)((function(){O()}),[d]);var O=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("a4517b9a","&app_key=").concat("e8d6460ce48524d6af86eacd9a4d4a44"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(o),b("")},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:o,onChange:function(e){b(e.target.value)}}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"wrap-recipes",children:c.map((function(e){return Object(n.jsx)(p,{foodName:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),h()},5:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.fdb9bbe7.chunk.js.map