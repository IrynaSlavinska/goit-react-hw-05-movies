"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{639:function(n,t,r){var e=r(689),a=r(87),u=r(398),c=r(184);t.Z=function(n){var t=n.movies,r=(0,e.TH)();return(0,c.jsx)(u.OM,{children:t.map((function(n){var t=n.id,e=n.poster_path,i=n.title;return(0,c.jsx)(u.uA,{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,c.jsx)(u.y5,{src:"".concat("https://image.tmdb.org/t/p/w300/").concat(e),alt:i,width:"250",height:"350"}),(0,c.jsx)(u.rS,{children:i})]})},t)}))})}},436:function(n,t,r){r.d(t,{IR:function(){return o},XT:function(){return i},YJ:function(){return s},jP:function(){return f},rZ:function(){return p}});var e=r(861),a=r(687),u=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"d2aabebb930fa1a823002bbd5c0c00b2"};var i=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},398:function(n,t,r){r.d(t,{OM:function(){return f},cA:function(){return p},rS:function(){return l},uA:function(){return h},y5:function(){return d}});var e,a,u,c,i,o=r(766),s=r(873),p=s.Z.h1(e||(e=(0,o.Z)(["\n  text-align: center;\n  margin-bottom: 12px;\n"]))),f=s.Z.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 50px;\n"]))),h=s.Z.li(u||(u=(0,o.Z)(["\n  width: 250px;\n  border-radius: 16px;\n  background-color: rgb(149, 219, 237);\n  padding: 8px;\n"]))),d=s.Z.img(c||(c=(0,o.Z)(["\n    width: 250px\n    height: 350px\n  "]))),l=s.Z.h3(i||(i=(0,o.Z)(["\n  margin-top: 12px;\n  font-size: 18px;\n  text-align: center;\n"])))},278:function(n,t,r){r.r(t);var e=r(439),a=r(791),u=r(87),c=r(436),i=r(639),o=r(184);t.default=function(){var n=(0,u.lr)(),t=(0,e.Z)(n,2),r=t[0],s=t[1],p=(0,a.useState)([]),f=(0,e.Z)(p,2),h=f[0],d=f[1];(0,a.useEffect)((function(){var n,t=null!==(n=r.get("search"))&&void 0!==n?n:"";t&&(0,c.IR)(t).then((function(n){console.log(n.results),d(n.results)}))}),[r]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("form",{onSubmit:function(n){n.preventDefault()},children:(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"text",placeholder:"Enter movie name...",onChange:function(n){var t=n.target.value.trim().toLowerCase();if(""===t)return s({});s({search:t})},name:"search"}),(0,o.jsx)("button",{type:"submit",children:"search"})]})}),(0,o.jsx)(i.Z,{movies:h})]})}}}]);
//# sourceMappingURL=278.54933884.chunk.js.map