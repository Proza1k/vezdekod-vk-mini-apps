(this.webpackJsonp30=this.webpackJsonp30||[]).push([[0],{130:function(e,t,c){},131:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),a=c.n(s),r=c(12),i=c.n(r),o=c(17),d=c.n(o),j=c(23),l=c(18),h=c(10),b=(c(128),c(4)),u=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(b.jsxs)(h.j,{id:t,children:[Object(b.jsx)(h.k,{children:"Example"}),n&&Object(b.jsx)(h.g,{header:Object(b.jsx)(h.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(b.jsx)(h.e,{before:n.photo_200?Object(b.jsx)(h.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(b.jsx)(h.g,{header:Object(b.jsx)(h.h,{mode:"secondary",children:"Navigation Example"}),children:Object(b.jsx)(h.f,{children:Object(b.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"friends-list",children:"Show me the Friends, please"})})})]})},f=c.p+"static/media/persik.ae9f0072.png",p=(c(130),function(e){return Object(b.jsxs)(h.j,{id:e.id,children:[Object(b.jsx)(h.k,{left:Object(b.jsx)(h.l,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(b.jsx)("img",{className:"Persik",src:f,alt:"Persik The Cat"})]})}),O=c(132),m=function(e){var t=e.id,c=e.friendsData,n=e.go;return Object(b.jsxs)(h.j,{id:t,children:[Object(b.jsx)(h.k,{id:"header",left:Object(b.jsx)(h.l,{onClick:n,"data-to":"home"}),children:"\u0412\u0438\u0431\u0440\u0430\u043d\u0438\u043a\u0430"}),Object(b.jsx)(h.g,{header:Object(b.jsx)(h.h,{mode:"secondary",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"}),children:c&&c.items.map((function(e){h.n,h.c,e.photo_50,h.i,O.a,e.first_name,e.last_name}))})]})},x=function(){var e=Object(n.useState)("home"),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(l.a)(a,2),o=r[0],f=r[1],O=Object(n.useState)(Object(b.jsx)(h.m,{size:"large"})),x=Object(l.a)(O,2),g=x[0],k=x[1],v=Object(n.useState)(null),y=Object(l.a)(v,2),_=y[0],w=y[1];Object(n.useEffect)((function(){function e(){return e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo").then(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(t),k(null),e.next=4,i.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:{v:"5.131",access_token:"32f5043b32f5043b32f5043b6f328cf2e4332f532f5043b5376e588f7413606c42c0332",user_id:t.id,fields:"nickname,photo_50"}}).then((function(e){w(e),console.log(e)}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:e.sent;case 3:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var A=function(e){s(e.currentTarget.dataset.to)};return Object(b.jsx)(h.a,{children:Object(b.jsx)(h.b,{children:Object(b.jsxs)(h.o,{activePanel:c,popout:g,children:[Object(b.jsx)(u,{id:"home",fetchedUser:o,go:A}),Object(b.jsx)(m,{id:"friends-list",friendsData:_,go:A}),Object(b.jsx)(p,{id:"persik",go:A})]})})})};i.a.send("VKWebAppInit"),a.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.34e93fd0.chunk.js.map