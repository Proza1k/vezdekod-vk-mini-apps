(this.webpackJsonp30=this.webpackJsonp30||[]).push([[0],{127:function(e,t,c){},128:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(17),s=c.n(r),a=c(10),i=c.n(a),o=c(14),d=c.n(o),j=c(18),u=c(15),l=c(8),b=(c(125),c(3)),h=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(b.jsxs)(l.j,{id:t,children:[Object(b.jsx)(l.k,{children:"Example"}),n&&Object(b.jsx)(l.g,{header:Object(b.jsx)(l.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(b.jsx)(l.e,{before:n.photo_200?Object(b.jsx)(l.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(b.jsx)(l.g,{header:Object(b.jsx)(l.h,{mode:"secondary",children:"Navigation Example"}),children:Object(b.jsx)(l.f,{children:Object(b.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"friends-list",children:"Show me the Friends, please"})})})]})},p=c.p+"static/media/persik.ae9f0072.png",f=(c(127),function(e){return Object(b.jsxs)(l.j,{id:e.id,children:[Object(b.jsx)(l.k,{left:Object(b.jsx)(l.l,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(b.jsx)("img",{className:"Persik",src:p,alt:"Persik The Cat"})]})}),O=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,bridge.send("VKWebAppGetFriends",{});case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)(View,{activePanel:"header",children:[Object(b.jsx)(Panel,{id:"header",children:"\u0412\u0438\u0431\u0440\u0430\u043d\u0438\u043a\u0430"}),Object(b.jsx)(l.g,{children:c.data.users.map((function(e){l.n,l.c,e.photo_200,Icon12Verified,l.i,Icon28MessageOutline,e.first_name,e.last_name}))})]})},x=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),a=Object(u.a)(s,2),o=a[0],p=a[1],x=Object(n.useState)(Object(b.jsx)(l.m,{size:"large"})),m=Object(u.a)(x,2),g=m[0],v=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,p(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return Object(b.jsx)(l.a,{children:Object(b.jsx)(l.b,{children:Object(b.jsxs)(l.o,{activePanel:c,popout:g,children:[Object(b.jsx)(h,{id:"home",fetchedUser:o,go:k}),Object(b.jsx)(O,{id:"friends-list",go:k}),Object(b.jsx)(f,{id:"persik",go:k})]})})})};i.a.send("VKWebAppInit"),s.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.6beca3bc.chunk.js.map