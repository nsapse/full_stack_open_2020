(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),u=n.n(o),c=n(2),l=n.n(c),i=n(3),s=n(4),p=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},m=n(5),f=n.n(m),v=null,g={getAll:function(){return f.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,f.a.post("/api/blogs",t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){v="bearer ".concat(e),console.log("token set to ".concat(v))}},d={login:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),c=Object(s.a)(u,2),m=c[0],f=c[1],v=Object(a.useState)(""),b=Object(s.a)(v,2),h=b[0],E=b[1],w=Object(a.useState)(null),O=Object(s.a)(w,2),j=O[0],x=O[1],k=Object(a.useState)(""),y=Object(s.a)(k,2),S=y[0],I=y[1],A=Object(a.useState)(""),C=Object(s.a)(A,2),B=C[0],U=C[1],J=Object(a.useState)(""),L=Object(s.a)(J,2),T=L[0],D=L[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedInUser");if(e){var t=JSON.parse(e);x(t)}}),[]),Object(a.useEffect)((function(){g.getAll().then((function(e){return o(e)}))}),[]);var N=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with username: ".concat(m," password: ").concat(h)),e.prev=2,e.next=5,d.login({username:m,password:h});case 5:n=e.sent,window.localStorage.setItem("loggedInUser",JSON.stringify(n)),x(n),g.setToken(n.token),f(""),E(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("User Attempted Login With Invalid Credentials");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.localStorage.removeItem("loggedInUser"),window.localStorage.removeItem("loggedInBlogs"),x(null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Creating new post with Author: ".concat(S," and URL: ").concat(T)),n="Authorization: Bearer "+j.token,console.log("Header is ".concat(n)),e.prev=4,a={title:B,author:S,url:T},e.next=8,g.create(a);case 8:e.sent,I(""),U(""),D(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log("Addition of the new blog failed");case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,null===j?r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:N},r.a.createElement("div",null,"username:",r.a.createElement("input",{type:"text",value:m,name:"Username",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement("div",null,"password:",r.a.createElement("input",{type:"text",value:h,name:"Password",onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"Blogs"),r.a.createElement("div",null,r.a.createElement("button",{onClick:z},"Logout")),r.a.createElement("h3",null,"Posted By ",j.name),n.map((function(e){return r.a.createElement(p,{key:e.id,blog:e})})),r.a.createElement("div",null,r.a.createElement("h2",null,"Create New Blogs"),r.a.createElement("form",{onSubmit:P},r.a.createElement("div",null,"Title:",r.a.createElement("input",{type:"text",value:B,name:"Title",onChange:function(e){var t=e.target;return U(t.value)}})),r.a.createElement("div",null,"Author:",r.a.createElement("input",{type:"text",value:S,name:"Author",onChange:function(e){var t=e.target;return I(t.value)}})),r.a.createElement("div",null,"url:",r.a.createElement("input",{type:"text",value:T,name:"url",onChange:function(e){var t=e.target;return D(t.value)}})),r.a.createElement("button",{type:"submit"},"Submit")))))};u.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ac1fb3e0.chunk.js.map