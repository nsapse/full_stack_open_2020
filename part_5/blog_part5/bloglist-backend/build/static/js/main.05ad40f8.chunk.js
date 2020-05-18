(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),o=(n(21),n(2)),c=n.n(o),s=n(4),i=n(3),m=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},d=function(e){e.errorMessage;var t=e.handleLogin,n=e.handleUsernameChange,a=e.handlePasswordChange,l=e.username,u=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username:",r.a.createElement("input",{type:"text",value:l,name:"Username",onChange:n})),r.a.createElement("div",null,"password:",r.a.createElement("input",{type:"text",value:u,name:"Password",onChange:a})),r.a.createElement("button",{type:"submit"},"login")))},g=function(e){var t=e.successMessage,n=e.errorMessage;if(n){var a=n;return r.a.createElement("div",{className:"error"},a)}if(t){var l=t;return r.a.createElement("div",{className:"success"},l)}return null},f=function(e){var t=e.title,n=e.author,a=e.url,l=e.handlePost,u=e.handleTitleChange,o=e.handleAuthorChange,c=e.handleUrlChange;return r.a.createElement("div",null,r.a.createElement("h2",null,"Create New Blogs"),r.a.createElement("form",{onSubmit:l},r.a.createElement("div",null,"Title:",r.a.createElement("input",{type:"text",value:t,name:"Title",onChange:u})),r.a.createElement("div",null,"Author:",r.a.createElement("input",{type:"text",value:n,name:"Author",onChange:o})),r.a.createElement("div",null,"url:",r.a.createElement("input",{type:"text",value:a,name:"url",onChange:c})),r.a.createElement("button",{type:"submit"},"Submit")))},h=function(e){var t=e.handleLogout;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t},"Logout"))},v=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Blogs"),r.a.createElement(h,{handleLogout:e.handleLogout}),r.a.createElement("h3",null,"Posted Blogs"),e.blogs.map((function(e){return r.a.createElement(m,{key:e.id,blog:e})})),r.a.createElement("div",{className:"blog_form"},e.children))},p=n(5),b=n.n(p),E=null,w={getAll:function(){return b.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:E}},e.next=3,b.a.post("/api/blogs",t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){E="bearer ".concat(e),console.log("token set to ".concat(E))}},O={login:function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),m=o[0],h=o[1],p=Object(a.useState)(""),b=Object(i.a)(p,2),E=b[0],j=b[1],k=Object(a.useState)(null),S=Object(i.a)(k,2),x=S[0],C=S[1],y=Object(a.useState)(""),T=Object(i.a)(y,2),A=T[0],I=T[1],L=Object(a.useState)(""),U=Object(i.a)(L,2),B=U[0],N=U[1],P=Object(a.useState)(""),M=Object(i.a)(P,2),J=M[0],D=M[1],z=Object(a.useState)(null),W=Object(i.a)(z,2),_=W[0],q=W[1],F=Object(a.useState)(null),G=Object(i.a)(F,2),H=G[0],K=G[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedInUser");if(e){var t=JSON.parse(e);C(t),w.setToken(t.token)}}),[]),Object(a.useEffect)((function(){w.getAll().then((function(e){return l(e)}))}),[]);var Q=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.login({username:m,password:E});case 4:n=e.sent,window.localStorage.setItem("loggedInUser",JSON.stringify(n)),C(n),w.setToken(n.token),h(""),j(""),K("Logged in as ".concat(n.username)),setTimeout((function(){K(null)}),5e3),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("login failed"),q("Wrong username or password"),setTimeout((function(){q(null)}),5e3);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.localStorage.removeItem("loggedInUser"),window.localStorage.removeItem("loggedInBlogs"),C(null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"Authorization: Bearer "+x.token,e.prev=2,a={title:B,author:A,url:J},e.next=6,w.create(a);case 6:r=e.sent,K("Added ".concat(a.title," by ").concat(a.author)),l(n.concat(r)),setTimeout((function(){K(null)}),5e3),I(""),N(""),D(""),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),q("Addition of the new blog failed"),setTimeout((function(){q(null)}),5e3);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(g,{successMessage:H,errorMessage:_})),r.a.createElement("div",null,null===x?r.a.createElement(d,{username:m,password:E,handleUsernameChange:function(e){var t=e.target;return h(t.value)},handlePasswordChange:function(e){var t=e.target;return j(t.value)},handleLogin:Q}):r.a.createElement(v,{handleLogout:R,blogs:n},r.a.createElement(f,{title:B,author:A,url:J,handlePost:V,handleTitleChange:function(e){var t=e.target;return N(t.value)},handleAuthorChange:function(e){var t=e.target;return I(t.value)},handleUrlChange:function(e){var t=e.target;return D(t.value)}}))))};u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.05ad40f8.chunk.js.map