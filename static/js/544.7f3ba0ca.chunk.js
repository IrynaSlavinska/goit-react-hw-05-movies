"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{3082:function(n,t,r){r.d(t,{Z:function(){return m}});var e,a,c,u,i=r(7689),o=r(1087),s=r(168),f=r(6873),p=f.Z.ul(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 20px;\n"]))),d=f.Z.li(a||(a=(0,s.Z)(["\n  width: 250px;\n  background-color: rgb(50, 50, 87);\n  padding: 10px;\n  transition: transform 0.3s linear;\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),h=f.Z.img(c||(c=(0,s.Z)(["\n    width: 250px\n    height: 350px\n  "]))),v=f.Z.h3(u||(u=(0,s.Z)(["\n  margin-top: 12px;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n"]))),l=r(8978),x=r(184),m=function(n){var t=n.movies,r=(0,i.TH)();return(0,x.jsx)(p,{children:t.map((function(n){var t=n.id,e=n.poster_path,a=n.title;return(0,x.jsx)(d,{children:(0,x.jsxs)(o.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,x.jsx)(h,{src:e?"".concat("https://image.tmdb.org/t/p/w300/").concat(e):l,alt:a,width:"250",height:"350"}),(0,x.jsx)(v,{children:a})]})},t)}))})}},6436:function(n,t,r){r.d(t,{IR:function(){return o},XT:function(){return i},YJ:function(){return s},jP:function(){return p},rZ:function(){return f}});var e=r(5861),a=r(4687),c=r.n(a),u=r(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"d2aabebb930fa1a823002bbd5c0c00b2"};var i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9544:function(n,t,r){r.r(t);var e=r(9439),a=r(2791),c=r(6436),u=r(3082),i=r(184);t.default=function(){var n=(0,a.useState)([]),t=(0,e.Z)(n,2),r=t[0],o=t[1];return(0,a.useEffect)((function(){(0,c.XT)().then((function(n){o(n)})).catch((function(n){return console.log(n)}))}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{movies:r})})}},8978:function(n,t,r){n.exports=r.p+"static/media/popcorn.5460021ba1aea35c25a4.jpg"}}]);
//# sourceMappingURL=544.7f3ba0ca.chunk.js.map