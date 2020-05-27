(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),l=n.n(u),c=(n(22),n(1)),o=n.n(c),i=n(4),s=n(2),d=function(e){e.errorMessage;var t=e.handleLogin,n=e.handleUsernameChange,a=e.handlePasswordChange,u=e.username,l=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username:",r.a.createElement("input",{type:"text",value:u,name:"Username",onChange:n})),r.a.createElement("div",null,"password:",r.a.createElement("input",{type:"text",value:l,name:"Password",onChange:a})),r.a.createElement("button",{type:"submit"},"login")))},f=function(e){var t=e.successMessage,n=e.errorMessage;if(n){var a=n;return r.a.createElement("div",{className:"error"},a)}if(t){var u=t;return r.a.createElement("div",{className:"success"},u)}return null},m=function(e){var t=e.title,n=e.author,a=e.url,u=e.handlePost,l=e.handleTitleChange,c=e.handleAuthorChange,o=e.handleUrlChange;return r.a.createElement("div",null,r.a.createElement("h2",null,"Create New Blogs"),r.a.createElement("form",{onSubmit:u},r.a.createElement("div",null,"Title:",r.a.createElement("input",{type:"text",value:t,name:"Title",onChange:l})),r.a.createElement("div",null,"Author:",r.a.createElement("input",{type:"text",value:n,name:"Author",onChange:c})),r.a.createElement("div",null,"url:",r.a.createElement("input",{type:"text",value:a,name:"url",onChange:o})),r.a.createElement("button",{type:"submit"},"Submit")))},p=n(16),g=n(5),v=n.n(g),h=null,b={getAll:function(){return v.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,v.a.post("/api/blogs",t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){h="bearer ".concat(e),console.log("token set to ".concat(h))},update:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.a.put("".concat("/api/blogs","/").concat(t),n),e.abrupt("return",a.then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteOne:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Deleting blog id: ".concat(t)),n={headers:{Authorization:h}},e.next=4,v.a.delete("".concat("/api/blogs","/").concat(t),n);case 4:return a=e.sent,console.log("Response is",a),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=e.handleLogout;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t},"Logout"))},w=function(e){var t=e.blog,n=e.deleteEntry,u=e.incrementLikes,l=Object(a.useState)(!1),c=Object(s.a)(l,2),o=c[0],i=c[1],d=JSON.parse(window.localStorage.getItem("loggedInUser")).username,f=function(){i(!o)},m={display:t.user.username===d?"":"none"};return o?r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5}},r.a.createElement("p",null,"".concat(t.title," by ").concat(t.author)),r.a.createElement("p",null,"URL: ".concat(t.url)),r.a.createElement("div",null,r.a.createElement("p",null,"Likes: ".concat(t.likes)),r.a.createElement("button",{onClick:function(){return u(t.id)}},"Like")),r.a.createElement("p",null,"".concat(t.user.username)),r.a.createElement("button",{onClick:f},"Hide Full"),r.a.createElement("button",{style:m,onClick:function(){return n(t.id)}},"Delete Blog Entry")):r.a.createElement("div",null,t.title," ",t.author,r.a.createElement("button",{onClick:f},"View Full"))},O=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),u=n[0],l=n[1];Object(a.useEffect)((function(){b.getAll().then((function(e){return l(e.sort((function(e,t){return e.likes>t.likes?-1:1})))}))}),[]);var c=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.confirm("Are you sure you want to delete this post"),a=t,n&&(b.deleteOne(a),r=u.filter((function(e){return e.id!==a})),l(r)),e.abrupt("return",null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t,a=u.find((function(e){return e.id===t})),r=a.likes+1,c=Object(p.a)({},a,{likes:r}),e.next=7,b.update(n,c);case 7:i=e.sent,s=u.filter((function(e){return e.id!==t})).concat(i),l(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("the note could not be updated");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Blogs"),r.a.createElement(E,{handleLogout:e.handleLogout}),r.a.createElement("h3",null,"Posted Blogs"),u.map((function(e){return r.a.createElement(w,{key:e.id,blog:e,deleteEntry:c,incrementLikes:d})})),r.a.createElement("div",{className:"blog_form"},e.children))},k=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),u=Object(s.a)(n,2),l=u[0],c=u[1],o={display:l?"none":""},i={display:l?"":"none"},d=function(){c(!l)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:d}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:d},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:d},"Cancel")))})),j={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),c=Object(s.a)(l,2),p=c[0],g=c[1],v=Object(a.useState)(null),h=Object(s.a)(v,2),E=h[0],w=h[1],y=Object(a.useState)(""),x=Object(s.a)(y,2),C=x[0],S=x[1],L=Object(a.useState)(""),A=Object(s.a)(L,2),I=A[0],T=A[1],U=Object(a.useState)(""),B=Object(s.a)(U,2),N=B[0],P=B[1],D=Object(a.useState)(null),J=Object(s.a)(D,2),M=J[0],R=J[1],V=Object(a.useState)(null),z=Object(s.a)(V,2),F=z[0],H=z[1],W=r.a.createRef();Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedInUser");if(e){var t=JSON.parse(e);w(t),b.setToken(t.token)}}),[]);var _=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.login({username:n,password:p});case 4:a=e.sent,window.localStorage.setItem("loggedInUser",JSON.stringify(a)),w(a),b.setToken(a.token),u(""),g(""),H("Logged in as ".concat(a.username)),setTimeout((function(){H(null)}),5e3),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("login failed"),R("Wrong username or password"),setTimeout((function(){R(null)}),5e3);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.localStorage.removeItem("loggedInUser"),window.localStorage.removeItem("loggedInBlogs"),w(null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={title:I,author:C,url:N},W.current.toggleVisibility(),e.next=6,b.create(n);case 6:e.sent,H("Added ".concat(n.title," by ").concat(n.author)),setTimeout((function(){H(null)}),5e3),S(""),T(""),P(""),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),R("Addition of the new blog failed"),setTimeout((function(){R(null)}),5e3);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(f,{successMessage:F,errorMessage:M})),r.a.createElement("div",null,null===E?r.a.createElement(d,{username:n,password:p,handleUsernameChange:function(e){var t=e.target;return u(t.value)},handlePasswordChange:function(e){var t=e.target;return g(t.value)},handleLogin:_}):r.a.createElement(O,{handleLogout:q},r.a.createElement(k,{buttonLabel:"Add A New Blog",ref:W},r.a.createElement(m,{title:I,author:C,url:N,handlePost:G,handleTitleChange:function(e){var t=e.target;return T(t.value)},handleAuthorChange:function(e){var t=e.target;return S(t.value)},handleUrlChange:function(e){var t=e.target;return P(t.value)}})))))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2c7c8d6f.chunk.js.map