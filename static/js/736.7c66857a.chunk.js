"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,c,u,i,s=r(9439),o=r(2791),p=r(7689),f=r(1087),d=r(6436),h=r(168),l=r(6873),v=l.Z.ul(e||(e=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n"]))),x=l.Z.li(a||(a=(0,h.Z)(["\n  background-color: rgb(50, 50, 87);\n  width: 200px;\n  height: 320px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Z=l.Z.img(c||(c=(0,h.Z)(["\n  width: 170px;\n  height: 240px;\n  margin-bottom: 12px;\n"]))),m=l.Z.div(u||(u=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),w=l.Z.p(i||(i=(0,h.Z)(["\n  color: #ffffff;\n"]))),g=r(775),b=r(184),k=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),r=(0,s.Z)(t,2),e=r[0],a=r[1];return(0,o.useEffect)((function(){(0,d.rZ)(n).then((function(n){a(n.cast)})).catch((function(n){return console.log(n)}))}),[n]),0!==e.length?(0,b.jsx)(v,{children:e.map((function(n){var t=n.id,r=n.profile_path,e=n.character,a=n.name;return(0,b.jsx)(f.rU,{to:"/actors/".concat(t),children:(0,b.jsxs)(x,{children:[(0,b.jsx)(Z,{src:r?"".concat("https://image.tmdb.org/t/p/w300").concat(r):g,alt:a,width:"150",height:"250"}),(0,b.jsxs)(m,{children:[(0,b.jsxs)(w,{children:["Character: ",(0,b.jsx)("span",{children:e})]}),(0,b.jsxs)(w,{children:["Actor: ",(0,b.jsx)("span",{children:a})]})]})]})},t)}))}):(0,b.jsx)("p",{children:"Unknown"})}},6436:function(n,t,r){r.d(t,{CK:function(){return h},IR:function(){return s},NM:function(){return l},XT:function(){return i},YJ:function(){return o},bp:function(){return d},fH:function(){return v},jP:function(){return f},rZ:function(){return p}});var e=r(5861),a=r(4687),c=r.n(a),u=r(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"d2aabebb930fa1a823002bbd5c0c00b2"};var i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/popular");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/".concat(t,"/movie_credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/".concat(t,"/images"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},775:function(n,t,r){n.exports=r.p+"static/media/popcorn.5460021ba1aea35c25a4.jpg"}}]);
//# sourceMappingURL=736.7c66857a.chunk.js.map