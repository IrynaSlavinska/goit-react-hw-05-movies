"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[337],{9337:function(n,r,t){t.r(r);var e=t(9439),a=t(2791),c=t(7689),u=t(6436),o=t(4639),i=t(184);r.default=function(){var n=(0,c.UO)().actorId,r=(0,a.useState)([]),t=(0,e.Z)(r,2),s=t[0],p=t[1];return(0,a.useEffect)((function(){(0,u.NM)(n).then((function(n){return p(n.cast)})).catch((function(n){return console.log(n)}))}),[n]),(0,i.jsx)(o.Z,{movies:s})}},4639:function(n,r,t){var e=t(1087),a=t(2500),c=t(775),u=t(184);r.Z=function(n){var r=n.movies;return(0,u.jsx)(a.aV,{children:r.map((function(n){var r=n.id,t=n.poster_path,o=n.title,i=n.release_date,s=n.vote_average;return(0,u.jsx)(a.ck,{children:(0,u.jsxs)(e.rU,{to:"/movies/".concat(r),children:[(0,u.jsx)(a.y5,{src:t?"".concat("https://image.tmdb.org/t/p/w300/").concat(t):c,alt:o,width:"250",height:"350"}),(0,u.jsx)(a.Dx,{children:o}),(0,u.jsxs)(a.xv,{children:["Release date: ",i]}),(0,u.jsxs)(a.xv,{children:["Rating: ",s.toFixed(),"/10"]})]})},r)}))})}},6436:function(n,r,t){t.d(r,{CK:function(){return v},IR:function(){return i},NM:function(){return x},XT:function(){return o},YJ:function(){return s},bp:function(){return d},fH:function(){return l},jP:function(){return f},rZ:function(){return p}});var e=t(5861),a=t(4687),c=t.n(a),u=t(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"d2aabebb930fa1a823002bbd5c0c00b2"};var o=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/popular");case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/".concat(r,"/movie_credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/person/".concat(r,"/images"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2500:function(n,r,t){t.d(r,{Dx:function(){return x},aV:function(){return f},ck:function(){return d},xv:function(){return l},y5:function(){return v}});var e,a,c,u,o,i,s=t(168),p=t(6873),f=p.Z.ul(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    gap: 40px 32px;\n  }\n"]))),d=p.Z.li(a||(a=(0,s.Z)(["\n  background-color: rgb(50, 50, 87);\n  border-radius: 8px;\n  width: 100%;\n  padding: 10px;\n  transition: transform var(--transition), background-color var(--transition),\n    color var(--transition);\n\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 32px) / 2);\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: calc((100% - 32px * 4) / 5);\n    &:hover,\n    &:focus {\n      transform: scale(1.05);\n      background-color: var(--yellow);\n      & h3,\n      & p {\n        color: #130a2e;\n      }\n    }\n  }\n"]))),v=p.Z.img(c||(c=(0,s.Z)(["\n  width: 100%;\n  margin-bottom: 12px;\n  border-radius: 6px;\n"]))),x=p.Z.h3(u||(u=(0,s.Z)(["\n  font-size: 18px;\n  text-align: center;\n  color: var(--white);\n  margin-bottom: 8px;\n\n  @media screen and (min-width: 1440px) {\n    font-size: 20px;\n  }\n"]))),l=(p.Z.p(o||(o=(0,s.Z)(["\n  position: absolute;\n  content: '';\n  top: -10px;\n  right: -10px;\n  background-color: var(--yellow);\n  box-shadow: 0 0 5px var(--yellow), 0 0 5px var(--yellow) inset;\n  padding: 16px;\n  color: var(--background);\n  border-radius: 50%;\n"]))),p.Z.p(i||(i=(0,s.Z)(["\n  color: var(--white);\n  text-align: center;\n"]))))},775:function(n,r,t){n.exports=t.p+"static/media/popcorn.5460021ba1aea35c25a4.jpg"}}]);
//# sourceMappingURL=337.d5e2c8df.chunk.js.map