(this["webpackJsonpreact-products"]=this["webpackJsonpreact-products"]||[]).push([[0],{29:function(e,t,r){},30:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r.n(c),a=r(20),n=r.n(a),d=(r(29),r(30),r(24)),l=r(9),i=r(4),o=r(12),j=r(0),b=function(){return Object(j.jsx)("div",{className:"w-full bg-red-400",children:Object(j.jsxs)("div",{className:"container flex items-center justify-between mx-auto my-12",children:[Object(j.jsx)("div",{className:"text-9xl",children:Object(j.jsx)("i",{className:"fab fa-angrycreative"})}),Object(j.jsxs)("ul",{className:"flex text-xl",children:[Object(j.jsx)("li",{className:"mr-4",children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/productspage",children:"Products"})})]})]})})},u=r(2),m=function(e){var t=e.id,r=e.name,c=e.price,s=e.desc,a=e.img;return Object(j.jsxs)("div",{className:"border border-gray-300 rounded-xl flex flex-col shadow-lg max-w-lg items-center justify-between",children:[Object(j.jsx)("div",{className:" flex-1 w-20 flex items-center justify-center py-5",children:Object(j.jsx)("img",{src:a,alt:"",className:"max-w-xs"})}),Object(j.jsx)("div",{className:"px-10 w-full",children:Object(j.jsxs)("div",{className:"px-10 py-5 w-full",children:[Object(j.jsxs)("div",{className:"flex items-center justify-between",children:[Object(j.jsx)("span",{children:"Product ID"}),Object(j.jsx)("p",{className:"text-gray-400",children:t})]}),Object(j.jsxs)("div",{className:"flex items-start justify-between",children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)("h3",{children:r})]}),Object(j.jsxs)("div",{className:"flex items-start justify-between mb-5",children:[Object(j.jsx)("span",{children:"Price"}),Object(j.jsx)("p",{children:c})]}),Object(j.jsxs)("div",{className:"flex flex-col justify-between",children:[Object(j.jsx)("span",{className:"italic",children:"Product Description:"}),Object(j.jsx)("p",{className:"px-3",children:s})]})]})})]})},x=function(e){var t=e.products;e.singleProduct;return Object(j.jsxs)("div",{className:"container mx-auto mb-20",children:[Object(j.jsx)("h2",{className:"text-2xl text-center my-10",children:"Products"}),t.length>0?Object(j.jsx)("div",{className:"grid grid-cols-3 gap-10",children:t.map((function(e){return Object(j.jsx)(m,{id:e.id,name:e.prodName,price:e.prodPrice,desc:e.prodDesc,img:e.prodImg},e.id)}))}):Object(j.jsx)("p",{className:"text-center",children:"No products yet"})]})},p=function(e){var t=e.index,r=e.id,c=e.name,s=e.price,a=e.desc,n=e.img,d=e.featured,l=e.onDelete,i=e.onEdit;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("tr",{className:"text-center",children:[Object(j.jsx)("td",{className:"border border-green-600 px-3",children:r}),Object(j.jsx)("td",{className:"border border-green-600 px-3 py-2",children:Object(j.jsx)("img",{src:n,alt:"",className:"max-w-xs w-52"})}),Object(j.jsx)("td",{className:"border border-green-600 px-3",children:c}),Object(j.jsx)("td",{className:"border border-green-600 px-3",children:s}),Object(j.jsx)("td",{className:"border border-green-600 px-3",children:a}),Object(j.jsx)("td",{className:"border border-green-600 px-3",children:Object(j.jsx)("input",{type:"checkbox",value:d,checked:d,readOnly:!0})}),Object(j.jsx)("td",{className:"border border-green-600 px-3",children:Object(j.jsx)("button",{onClick:function(){return i(r,t,"edit")},children:Object(j.jsx)("i",{className:"far fa-edit text-blue-500 cursor-pointer"})})}),Object(j.jsx)("td",{className:"border border-green-600 px-3",children:Object(j.jsx)("button",{onClick:function(){return l(r)},children:Object(j.jsx)("i",{className:"fas fa-times text-red-500 cursor-pointer"})})})]})})},O=r(22),h=function(e){var t=e.image;return Object(j.jsxs)("div",{className:"flex flex-col items-center justify-center max-w-xs border border-gray-300 rounded-lg my-5 py-5 px-5",children:[Object(j.jsx)("img",{src:t,className:"w-52"}),Object(j.jsx)("h3",{children:"Current Image"})]})},f=function(e){var t=e.products,r=e.onAdd,s=e.onDelete,a=(e.onEdit,Object(c.useState)(null)),n=Object(i.a)(a,2),d=n[0],l=n[1],o=Object(c.useState)(""),b=Object(i.a)(o,2),u=b[0],m=b[1],x=Object(c.useState)("add"),f=Object(i.a)(x,2),g=f[0],N=f[1],v=Object(c.useState)(""),y=Object(i.a)(v,2),S=y[0],w=y[1],P=Object(c.useState)(""),D=Object(i.a)(P,2),F=D[0],I=D[1],C=Object(c.useState)(""),T=Object(i.a)(C,2),k=T[0],E=T[1],q=Object(c.useState)(""),A=Object(i.a)(q,2),H=A[0],M=A[1],J=Object(c.useState)(!1),L=Object(i.a)(J,2),R=L[0],B=L[1],U=Object(c.useState)(""),Y=Object(i.a)(U,2),z=Y[0],G=Y[1],K=Object(c.useState)([]),Q=Object(i.a)(K,2),V=(Q[0],Q[1]);Object(c.useEffect)((function(){var e=setTimeout((function(){V(t)}),5e3);return function(){return clearTimeout(e)}}),[t]),Object(c.useEffect)((function(){var e=Z();G(e)}),[]);var W=function(e,t,r){var c=X(t),s=(c.index,c.id,c.prodName),a=c.prodPrice,n=c.prodDesc,d=c.prodImg,i=c.prodFeatured,o=c.prodTimestamp;l(t),N(r),m(e),w(s),I(a),E(n),M(d),B(i),G(o),document.querySelector("#formHeader").innerHTML="Update Product"},X=function(e){try{return(localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[])[e]}catch(t){console.error(t)}},Z=function(){var e=new Date,t={dateSeparator:"-",timeSeparator:":",format:"YMD",showTime:"1",children:e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())};return Object(O.a)(t)};return Object(j.jsxs)("div",{className:"flex flex-col items-center justify-evenly",children:[Object(j.jsx)("h3",{className:"w-full text-center text-3xl mb-10",children:"Products Page"}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("div",{className:"text-center mr-10",children:[Object(j.jsx)("h3",{className:"mb-3",id:"formHeader",children:"Add a Product"}),Object(j.jsxs)("div",{className:"max-w-lg mx-auto border border-gray-300 rounded-lg py-5 px-3 mb-20 bg-white",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S?(r("add"===g?{prodName:S,prodPrice:F,prodDesc:k,prodImg:H,prodFeatured:R,prodTimestamp:z}:{id:u,prodName:S,prodPrice:F,prodDesc:k,prodImg:H,prodFeatured:R,prodTimestamp:z},g,d),w(""),E(""),M(null),I(""),B(!1),G(""),N("add")):alert("Please add product name")},className:"max-w-2xl mx-auto",encType:"multipart/form-data",children:[Object(j.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Product Name"}),Object(j.jsx)("input",{id:"form-name",type:"text",name:"name",placeholder:"Product Name*",className:"border border-gray-300 py-1 px-2",value:S,onChange:function(e){return w(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[Object(j.jsx)("label",{htmlFor:"price",children:"Price"}),Object(j.jsx)("input",{id:"form-price",type:"text",name:"price",placeholder:"Price*",className:"border border-gray-300 py-1 px-2",value:F,onChange:function(e){return I(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Description"}),Object(j.jsx)("input",{id:"form-desc",type:"text",name:"description",placeholder:"Description*",className:"border border-gray-300 py-1 px-2",value:k,onChange:function(e){return E(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex flex-col items-center justify-between mb-3",children:[Object(j.jsx)("input",{id:"form-img",type:"file",name:"file",accept:"image/*",onChange:function(e){var t=new FileReader;t.addEventListener("load",(function(){M(t.result)})),t.readAsDataURL(e.target.files[0])}}),H&&Object(j.jsx)(h,{image:H})]}),Object(j.jsxs)("div",{className:"flex items-center justify-between mb-3",disabled:!0,children:[Object(j.jsx)("label",{htmlFor:"featured",children:"Set Product as Featured"}),Object(j.jsx)("input",{id:"form-featured",type:"checkbox",value:R,checked:R,onChange:function(e){return B(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{id:"form-submit",type:"submit",value:"Save",className:"cursor-pointer py-4 px-3 w-full mb-2 rounded-sm mr-3 bg-green-200"})]}),Object(j.jsx)("button",{className:"cursor-pointer py-4 px-3 w-full mb-2 rounded-sm bg-red-200",onClick:function(){document.querySelector("#form-name").value="",document.querySelector("#form-price").value="",document.querySelector("#form-desc").value="",document.querySelector("#form-img").value="",document.querySelector("#form-featured").checked="",document.querySelector("#form-submit").value="Add",w(""),E(""),M(null),I(""),B(!1),G(""),N("add"),document.querySelector("#formHeader").innerHTML="Add a Product"},children:"Cancel"})]})]}),Object(j.jsxs)("div",{className:"flex flex-col flex-between mx-auto h-full",children:[Object(j.jsx)("div",{className:"mb-5 text-center",children:Object(j.jsx)("h2",{className:"font-semibold",children:"Products List"})}),Object(j.jsx)("div",{children:t.length>0?Object(j.jsxs)("table",{className:"table-auto border-collapse border border-green-800 max-w-7xl mx-auto mb-20",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Product ID"}),Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Image"}),Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Product Name"}),Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Price"}),Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Description"}),Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Featured"}),Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Edit"}),Object(j.jsx)("th",{className:"border border-green-600 px-5",children:"Delete"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsx)(p,{index:t,id:e.id,name:e.prodName,price:e.prodPrice,desc:e.prodDesc,img:e.prodImg,featured:e.prodFeatured,timestamp:e.prodTimestamp,onDelete:s,onEdit:W},e.id)}))})]}):Object(j.jsx)("p",{className:"max-w-xs bg-red-300 py-3 px-5 mb-10 mx-auto",children:"No products yet"})})]})]})]})},g=function(){return Object(j.jsx)("div",{className:"bg-red-800 text-center text-white py-5",children:Object(j.jsx)("p",{children:"React Products 2021 All rights Reserved"})})},N=r(18),v=(r(37),r.p+"static/media/default-bg.d54e7d29.jpg"),y=s.a.memo((function(e){var t=e.products,r=Object(c.useState)(["../images/default-bg.jpg"]),s=Object(i.a)(r,2),a=s[0],n=(s[1],t.filter((function(e){return!0===e.prodFeatured}))),d={duration:3e3,pauseOnHover:!0};return console.log(n),Object(j.jsx)("div",{className:"border-b-4 border-gray-300",children:0===n.length?Object(j.jsx)(N.Slide,Object(l.a)(Object(l.a)({},d),{},{children:a.map((function(e,t){return Object(j.jsx)("div",{className:"each-slide",children:Object(j.jsx)("img",{src:v,alt:"",className:"w-full mx-auto h-auto",style:{height:"100vh"}})},t)}))})):Object(j.jsx)(N.Slide,Object(l.a)(Object(l.a)({},d),{},{children:n.map((function(e,t){return Object(j.jsx)("div",{className:"each-slide",children:Object(j.jsx)("img",{src:e.prodImg,alt:"",className:"max-w-lg mx-auto h-auto",style:{height:"70vh"}})},t)}))}))})})),S=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),r=t[0],s=t[1],a=Object(c.useState)(),n=Object(i.a)(a,2),m=n[0];n[1];Object(c.useEffect)((function(){!function(){var e=O();s(e)}()}),[]);var p=function(e,t,r){if("add"===t){console.log(m,t);var c=Math.floor(1e4*Math.random()+1),a=Object(l.a)({id:c},e),n=O(),i=[].concat(Object(d.a)(n),[a]);localStorage.setItem("products",JSON.stringify(i)),s(i)}else{var o=O().map((function(t,c){return c===r?e:t}));localStorage.setItem("products",JSON.stringify(o)),s(o)}},O=function(){return localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]},h=function(e){var t=O().filter((function(t){return t.id!==e}));localStorage.setItem("products",JSON.stringify(t)),s(t)};return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"App relative",children:[Object(j.jsx)(b,{}),Object(j.jsx)(u.a,{path:"/",exact:!0,render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{products:r}),Object(j.jsx)(x,{products:r})]})}}),Object(j.jsx)(u.a,{path:"/productspage/:id?",render:function(e){return Object(j.jsx)(f,{products:r,onAdd:p,onDelete:h,props:e})}}),Object(j.jsx)(g,{})]})})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,39)).then((function(t){var r=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;r(e),c(e),s(e),a(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.c573fee8.chunk.js.map