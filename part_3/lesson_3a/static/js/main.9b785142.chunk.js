(this.webpackJsonpnotes_project=this.webpackJsonpnotes_project||[]).push([[0],{15:function(t,e,n){"use strict";var a=n(16),o=n(3),r=n(0),c=n.n(r),u=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return c.a.createElement("li",{className:"note"},e.content,c.a.createElement("button",{onClick:n},a))},i=n(2),l=n.n(i),s=function(){return l.a.get("/api/notes").then((function(t){return t.data}))},m=function(t){return l.a.post("/api/notes",t).then((function(t){return t.data}))},f=function(t,e){return l.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},p=function(t){var e=t.message;return null===e?null:c.a.createElement("div",{className:"error"},e)};e.a=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],i=e[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),v=d[0],b=d[1],h=Object(r.useState)(!0),g=Object(o.a)(h,2),E=g[0],j=g[1],O=Object(r.useState)(null),S=Object(o.a)(O,2),k=S[0],w=S[1];Object(r.useEffect)((function(){s().then((function(t){i(t)}))}),[]);var y=E?n:n.filter((function(t){return!0===t.important}));return c.a.createElement("div",null,c.a.createElement("h1",null,"Notes"),c.a.createElement(p,{message:k}),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return j(!E)}},"show ",E?"important":"all")),c.a.createElement("ul",null,y.map((function(t,e){return c.a.createElement(u,{key:e,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),o=Object(a.a)({},e,{important:!e.important});f(t,o).then((function(e){i(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){w("Note ".concat(e.content," was already removed from the server")),setTimeout((function(){w(null)}),5e3),i(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:v,date:(new Date).toISOString(),important:Math.random()>.5};m(e).then((function(t){i(n.concat(t)),b("")}))}},c.a.createElement("input",{value:v,onChange:function(t){b(t.target.value)}}),c.a.createElement("button",{type:"submit"},"Save")))}},17:function(t,e,n){t.exports=n(18)},18:function(t,e,n){"use strict";n.r(e),function(t){var e=n(14),a=n.n(e),o=n(15),r=n(2),c=n.n(r),u=(n(39),n(0)),i=n.n(u),l=n(40),s=t.argv[2],m="mongodb+srv://full_stack_projects:".concat(s,"@cluster0-rs6zo.mongodb.net/test?retryWrites=true&w=majority");l.connect(m,{useNewUrlParser:!0,useUnifiedTopology:!0});var f=new l.Schema({content:String,Date:Date,important:Boolean});l.model("Note",f);c.a.get("/api/notes").then((function(t){var e=t.data;a.a.render(i.a.createElement(o.a,{notes:e}),document.getElementById("root"))}))}.call(this,n(4))},39:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.9b785142.chunk.js.map