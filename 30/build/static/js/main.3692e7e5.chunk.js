(this.webpackJsonp30=this.webpackJsonp30||[]).push([[0],{130:function(e,t,c){},131:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),r=c.n(s),a=c(12),i=c.n(a),d=c(17),o=c.n(d),j=c(23),l=c(18),h=c(10),u=(c(128),c(4)),b=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(u.jsxs)(h.j,{id:t,children:[Object(u.jsx)(h.k,{children:"Example"}),n&&Object(u.jsx)(h.g,{header:Object(u.jsx)(h.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(u.jsx)(h.e,{before:n.photo_200?Object(u.jsx)(h.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(u.jsx)(h.g,{header:Object(u.jsx)(h.h,{mode:"secondary",children:"Navigation Example"}),children:Object(u.jsx)(h.f,{children:Object(u.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"friends-list",children:"Show me the Friends, please"})})})]})},p=c.p+"static/media/persik.ae9f0072.png",f=(c(130),function(e){return Object(u.jsxs)(h.j,{id:e.id,children:[Object(u.jsx)(h.k,{left:Object(u.jsx)(h.l,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(u.jsx)("img",{className:"Persik",src:p,alt:"Persik The Cat"})]})}),O=c(132),x=function(e){var t=e.id,c=e.friendsData;e.go;return Object(u.jsxs)(h.j,{id:t,children:[Object(u.jsx)(h.k,{id:"header",children:"\u0412\u0438\u0431\u0440\u0430\u043d\u0438\u043a\u0430"}),Object(u.jsx)(h.g,{header:Object(u.jsx)(h.h,{mode:"secondary",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439"}),children:c&&c.users.map((function(e){h.n,h.c,e.photo_200,h.i,O.a,e.first_name,e.last_name}))})]})},m=function(){var e=Object(n.useState)("home"),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(null),a=Object(l.a)(r,2),d=a[0],p=a[1],O=Object(n.useState)(Object(u.jsx)(h.m,{size:"large"})),m=Object(l.a)(O,2),g=m[0],k=m[1],v=Object(n.useState)(null),y=Object(l.a)(v,2),w=y[0],_=y[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,p(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetFriends",{multi:!0});case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){t.apply(this,arguments)}(),function(){e.apply(this,arguments)}()}),[]);var A=function(e){s(e.currentTarget.dataset.to)};return Object(u.jsx)(h.a,{children:Object(u.jsx)(h.b,{children:Object(u.jsxs)(h.o,{activePanel:c,popout:g,children:[Object(u.jsx)(b,{id:"home",fetchedUser:d,go:A}),Object(u.jsx)(x,{id:"friends-list",friendsData:w,friengo:A}),Object(u.jsx)(f,{id:"persik",go:A})]})})})};i.a.send("VKWebAppInit"),r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.3692e7e5.chunk.js.map