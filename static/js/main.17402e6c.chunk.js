(this["webpackJsonpleo-moviegas"]=this["webpackJsonpleo-moviegas"]||[]).push([[0],{144:function(n,e,t){},145:function(n,e,t){"use strict";t.r(e);var r,i,a,o,c,s,d,l=t(0),u=t.n(l),b=t(47),p=t.n(b),h=t(20),j=t.n(h),x=t(1),f=function(n){var e=n.children;return Object(x.jsx)(x.Fragment,{children:e})},m=t(22),g=t(9),O=t(2),v=t(3),w=Object(v.a)(r||(r=Object(O.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;        \n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    *, button, input, textarea {\n        border: 0;\n        outline: 0;\n        font-family: Raleway, sans-serif;\n        line-height: 20px;\n    }\n\n    #root {\n      --primary-color: #032541;\n      --secondary-color: #00506E;\n      --primary-gradient-color: linear-gradient(90deg, #032541, #00506E );\n      --secondary-gradient-color: linear-gradient(90deg, #00506E, #032541);\n      --background-color: #fff;\n      --navbar-height: 127px;\n    }\n\n"]))),y=v.b.div(i||(i=Object(O.a)(["\n  padding: var(--navbar-height) 0 0;\n  width: 100%;\n  max-width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: var(--background-color);\n"]))),k=v.b.div(a||(a=Object(O.a)(["\n  margin: 0 auto;\n  padding: 0 15px;\n  width: 100%;\n  position: relative;\n\n  @media (min-width: 480px) {\n    max-width: 728px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n"]))),S=v.b.h2(o||(o=Object(O.a)(["\n  margin: 0 0 35px;\n  color: #333;\n\n  @media screen and (max-width: 575px) {\n    text-align: center;\n  }\n"]))),z=Object(v.b)(k)(c||(c=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  min-height: 70vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #414141;\n"]))),C=v.b.h1(s||(s=Object(O.a)(["\n  margin: 10px;\n  text-align: center;\n  line-height: 32px;\n"]))),N=v.b.i(d||(d=Object(O.a)(["\n  margin: 10px;\n  font-size: 48px;\n"]))),_=function(){return Object(x.jsx)(y,{children:Object(x.jsxs)(z,{children:[Object(x.jsx)(C,{children:"P\xe1gina n\xe3o encontrada"}),Object(x.jsx)(N,{className:"fas fa-frown-open"})]})})},P=t(13),I=t.n(P),T=t(19),M=t(6),Y=t(5),A={type:"default",insert:"center",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0,showIcon:!0}},V=function(n){var e=n.title,t=n.message,r=n.duration;h.store.addNotification(Object(Y.a)(Object(Y.a)({},A),{},{type:"danger",title:e,message:t,dismiss:Object(Y.a)(Object(Y.a)({},A.dismiss),{},{duration:r||A.dismiss.duration})}))},E=t(49),J={baseURL:"https://api.themoviedb.org"},W=t.n(E).a.create(J);W.interceptors.request.use((function(n){return Object(Y.a)(Object(Y.a)({},n),{},{headers:Object(Y.a)(Object(Y.a)({},n.headers),{},{Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlOWQzMDhjYmNmOTYwYWI4Y2E0M2NhYjkwMDkwYiIsInN1YiI6IjYwMjMzMTZmYzY2OWFkMDA0MGMyN2Q1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LtaUua7U3a4usJY2vQBc81NQxf-Q7n6vp6rh-0WVP0s"}),params:Object(Y.a)(Object(Y.a)({},n.params),{},{api_key:"f57e9d308cbcf960ab8ca43cab90090b"})})}),(function(n){return Promise.reject(n)})),W.interceptors.response.use((function(n){return n}),(function(n){return Promise.reject(n)}));var H,D,Q,F,U,B,G,L,X,Z,R,q,K,$,nn,en,tn,rn,an,on,cn,sn,dn,ln,un,bn,pn,hn,jn,xn,fn,mn,gn,On,vn,wn,yn,kn,Sn,zn,Cn,Nn,_n,Pn,In,Tn,Mn,Yn=W,An=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Yn.get("3/movie/popular",{params:Object(Y.a)({},n)})},Vn=function(){var n=Object(T.a)(I.a.mark((function n(e){var t,r,i,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,An(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",(null===r||void 0===r?void 0:r.results)||[]);case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),V({message:null===n.t0||void 0===n.t0||null===(i=n.t0.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.status_message}),n.abrupt("return",[]);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),En=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Yn.get("3/person/popular",{params:Object(Y.a)({},n)})},Jn=function(){var n=Object(T.a)(I.a.mark((function n(e){var t,r,i,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,En(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",(null===r||void 0===r?void 0:r.results)||[]);case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),V({message:null===n.t0||void 0===n.t0||null===(i=n.t0.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.status_message}),n.abrupt("return",[]);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),Wn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Yn.get("3/tv/popular",{params:Object(Y.a)({},n)})},Hn=function(){var n=Object(T.a)(I.a.mark((function n(e){var t,r,i,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Wn(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",(null===r||void 0===r?void 0:r.results)||[]);case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),V({message:null===n.t0||void 0===n.t0||null===(i=n.t0.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.status_message}),n.abrupt("return",[]);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),Dn=function(n){if(n){return/http:|https:|www\./g.test(n)}return!1},Qn=function(n,e){var t=[];return n&&n.length&&Number.isInteger(e)&&n.forEach((function(n,r){r<=e&&t.push(n)})),t},Fn=function(n,e,t){var r,i,a=(null===n||void 0===n||null===(r=n.split("?"))||void 0===r||null===(i=r[1])||void 0===i?void 0:i.split("&"))||[],o=!1,c=a.map((function(n){var r;return(null===n||void 0===n||null===(r=n.split("="))||void 0===r?void 0:r[0])===e?(o=!0,"".concat(e,"=").concat(t)):n}));return o||c.push("".concat(e,"=").concat(t)),"?".concat((null===c||void 0===c?void 0:c.join("&"))||"")},Un=Object(v.b)(k)(H||(H=Object(O.a)(["\n  margin: 50px auto;\n"]))),Bn=t(157),Gn=t.p+"static/media/placeholder.cd8d9dd0.jpg",Ln=v.b.div(D||(D=Object(O.a)(["\n  margin: 0 auto;\n  width: 150px;\n  height: 225px;\n  border-radius: 6px;\n  cursor: pointer;\n\n  & > .skeleton-body {\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n  }\n\n  @media screen and (max-width: 575px) {\n    width: 225px;\n    height: 337.5px;\n  }\n"]))),Xn=v.b.img(Q||(Q=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n"]))),Zn=Object(v.b)(Ln)(F||(F=Object(O.a)([""]))),Rn=Object(v.b)(Xn)(U||(U=Object(O.a)([""]))),qn=function(n){var e=n.preview,t=Object(l.useState)(""),r=Object(M.a)(t,2),i=r[0],a=r[1];return Object(l.useEffect)((function(){e&&setTimeout((function(){a(e.poster_path?"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path):Gn)}),[0])}),[e]),Object(x.jsx)(Zn,{children:i?Object(x.jsx)(Rn,{src:i,alt:"popular movie preview poster"}):Object(x.jsx)(Bn.a,{className:"skeleton-body",variant:"rect",animation:"wave"})})},Kn=Object(v.b)(Ln)(B||(B=Object(O.a)([""]))),$n=Object(v.b)(Xn)(G||(G=Object(O.a)([""]))),ne=function(n){var e=n.preview,t=Object(l.useState)(""),r=Object(M.a)(t,2),i=r[0],a=r[1];return Object(l.useEffect)((function(){e&&setTimeout((function(){a(e.profile_path?"".concat("https://image.tmdb.org/t/p/original").concat(e.profile_path):Gn)}),[0])}),[e]),Object(x.jsx)(Kn,{children:i?Object(x.jsx)($n,{src:i,alt:"popular person preview poster"}):Object(x.jsx)(Bn.a,{className:"skeleton-body",variant:"rect",animation:"wave"})})},ee=Object(v.b)(Ln)(L||(L=Object(O.a)([""]))),te=Object(v.b)(Xn)(X||(X=Object(O.a)([""]))),re=function(n){var e=n.preview,t=Object(l.useState)(""),r=Object(M.a)(t,2),i=r[0],a=r[1];return Object(l.useEffect)((function(){e&&setTimeout((function(){a(e.poster_path?"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path):Gn)}),[0])}),[e]),Object(x.jsx)(ee,{children:i?Object(x.jsx)(te,{src:i,alt:"popular tv show preview poster"}):Object(x.jsx)(Bn.a,{className:"skeleton-body",variant:"rect",animation:"wave"})})},ie=function(n){var e=n.movies;return Object(x.jsxs)(Un,{children:[Object(x.jsx)(S,{children:"Most Popular Movies"}),Object(x.jsx)(et,{previews:Qn(e,9),PreviewCard:qn})]})},ae=Object(v.b)(k)(Z||(Z=Object(O.a)(["\n  margin: 50px auto;\n"]))),oe=function(n){var e=n.tvShows;return Object(x.jsxs)(ae,{children:[Object(x.jsx)(S,{children:"Most Popular TvShows"}),Object(x.jsx)(et,{previews:Qn(e,9),PreviewCard:re})]})},ce=Object(v.b)(k)(R||(R=Object(O.a)(["\n  margin: 50px auto;\n"]))),se=function(n){var e=n.persons;return Object(x.jsxs)(ce,{children:[Object(x.jsx)(S,{children:"Most Popular Persons"}),Object(x.jsx)(et,{previews:Qn(e,9),PreviewCard:ne})]})},de=v.b.div(q||(q=Object(O.a)(["\n  z-index: 100;\n  width: 100%;\n  min-height: var(--navbar-height);\n  position: fixed;\n  left: 0%;\n  top: 0%;\n  right: 0%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--secondary-gradient-color);\n  box-shadow: 3px 3px 14px -9px rgba(0, 0, 0, 0.51);\n"]))),le=Object(v.b)(k)(K||(K=Object(O.a)(["\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"]))),ue=v.b.div($||($=Object(O.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),be=v.b.img(nn||(nn=Object(O.a)(["\n  width: auto;\n  height: auto;\n  max-width: 170px;\n  max-height: calc(var(--navbar-height) - 20px);\n\n  @media screen and (max-width: 768px) {\n    max-width: 130px;\n    max-height: calc(var(--navbar-height));\n  }\n\n  @media screen and (max-width: 360px) {\n    max-width: 100px;\n  }\n"]))),pe=v.b.div(en||(en=Object(O.a)(["\n  width: ",";\n  & a {\n    all: unset;\n    margin: ",";\n    padding: ",";\n    width: ",";\n    height: ",";\n    display: ",";\n    align-items: center;\n    justify-content: ",";\n\n    color: ",";\n    font-size: ",";\n    font-weight: ",";\n    cursor: pointer;\n\n    &:hover {\n      ",";\n    }\n  }\n"])),(function(n){return n.width||"auto"}),(function(n){return n.margin||"0"}),(function(n){return n.padding||"0"}),(function(n){return n.width||"auto"}),(function(n){return n.height||"auto"}),(function(n){return n.display||"flex"}),(function(n){switch(n.childrenPosition){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}),(function(n){return n.color||"#000"}),(function(n){return n.fontSize||"14px"}),(function(n){return n.fontWeight||"500"}),(function(n){var e=n.colorOnHover;return e&&"color: ".concat(e)})),he=v.b.a(tn||(tn=Object(O.a)([""]))),je=v.b.p(rn||(rn=Object(O.a)([""]))),xe=function(n){var e=n.url,t=n.target,r=n.title,i=n.children,a=n.childrenPosition,o=n.color,c=n.colorOnHover,s=n.margin,d=n.padding,l=n.width,u=n.height,b=n.setHasClicked;return Object(x.jsx)(pe,{childrenPosition:a,color:o,colorOnHover:c,margin:s,padding:d,width:l,height:u,children:Dn(e)?Object(x.jsxs)(he,{href:e||"#",target:t||"_self",children:[r&&Object(x.jsx)(je,{children:r||""}),i]}):Object(x.jsxs)(m.b,{to:e||"#",target:t||"_self",onClick:function(n){b&&b(!0)},children:[r&&Object(x.jsx)(je,{children:r||""}),i]})})},fe=(v.b.div(an||(an=Object(O.a)(["\n  z-index: 99999;\n  padding: 0 15px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 575px) {\n    padding: 0;\n    height: 100vh;\n  }\n"]))),Object(v.c)(on||(on=Object(O.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"])))),me=Object(v.c)(cn||(cn=Object(O.a)(["\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"]))),ge=(v.b.div(sn||(sn=Object(O.a)(["\n  z-index: 99999;\n  margin: auto;\n  position: relative;\n  border-radius: 6px;\n  background-color: transparent;\n  animation: ","\n    0.5s ease-in-out;\n\n  width: ",";\n\n  @media (min-width: 480px) {\n    max-width: 728px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n"])),(function(n){return n.isOpen?fe:me}),(function(n){switch(n.size){case"lg":return"800px";case"md":return"600px";case"sm":return"400px";default:return"auto"}})),v.b.button(dn||(dn=Object(O.a)(["\n  z-index: 999999;\n  margin: 0 5px 0 30px;\n  width: 38px;\n  height: 38px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  cursor: pointer;\n  border: 2px solid #8f9bb3;\n  border-radius: 1000px;\n  background: #f7f9fc;\n"]))),v.b.i(ln||(ln=Object(O.a)(["\n  color: #2e3a59;\n  font-size: 24px;\n  font-weight: 300p;\n"]))),v.b.div(un||(un=Object(O.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(51, 51, 51, 0.92);\n"]))),"per_page"),Oe="page",ve=(v.b.div(bn||(bn=Object(O.a)(["\n  margin: 20px 0;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  --pagination-color: ",";\n"])),(function(n){return n.color||"#31217C"})),v.b.i(pn||(pn=Object(O.a)(["\n  margin: 0 5px;\n  padding: 10px 14px;\n  cursor: pointer;\n  background-color: transparent;\n\n  &:hover {\n    border-radius: 3px;\n    background-color: var(--pagination-color);\n    color: #fff;\n    transition: background-color 2s ease-int-out;\n  }\n\n  @media screen and (max-width: 350px) {\n    padding: 10px;\n  }\n"]))),v.b.div(hn||(hn=Object(O.a)(["\n  margin: 0 2px;\n  padding: 9px 15px;\n  display: inline-block;\n  color: ",";\n  font-size: 15px;\n  line-height: inherit;\n  background-color: ",";\n  border: 0;\n  border-radius: 3px;\n  text-decoration: none;\n  text-shadow: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--pagination-color);\n    opacity: 0.8;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgb(190, 190, 190);\n  }\n  }\n"])),(function(n){return n.isActive?"#fff":"#212366"}),(function(n){return n.isActive?"var(--pagination-color)":"transparent"}),(function(n){return n.isActive?"1px 1px 1px rgb(190, 190, 190)":"none"})),t(50)),we=t.n(ve),ye=(t(115),t(116),{width:"100%",maxWidth:"100%"}),ke=v.b.button(jn||(jn=Object(O.a)(['\n  z-index: 2;\n  width: 40px;\n  height: 40px;\n  background-color: #e5e3e3;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: #cdcbcb;\n  }\n\n  &:before {\n    content: "";\n    color: var(--primary-color, #333);\n    font-size: 30px;\n    font-family: "Font Awesome 5 Free";\n    font-weight: 700;\n    text-align: center;\n  }\n']))),Se=Object(v.b)(ke)(xn||(xn=Object(O.a)(['\n  left: -5%;\n\n  &:before {\n    content: "\f104";\n  }\n\n  @media screen and (max-width: 768px) {\n    left: -1%;\n  }\n\n  @media screen and (max-width: 575px) {\n    left: -2%;\n  }\n'],['\n  left: -5%;\n\n  &:before {\n    content: "\\f104";\n  }\n\n  @media screen and (max-width: 768px) {\n    left: -1%;\n  }\n\n  @media screen and (max-width: 575px) {\n    left: -2%;\n  }\n']))),ze=Object(v.b)(ke)(fn||(fn=Object(O.a)(['\n  right: -5%;\n\n  &:before {\n    content: "\f105";\n  }\n\n  @media screen and (max-width: 768px) {\n    right: -1%;\n  }\n\n  @media screen and (max-width: 575px) {\n    right: -2%;\n  }\n'],['\n  right: -5%;\n\n  &:before {\n    content: "\\f105";\n  }\n\n  @media screen and (max-width: 768px) {\n    right: -1%;\n  }\n\n  @media screen and (max-width: 575px) {\n    right: -2%;\n  }\n']))),Ce=v.b.ul(mn||(mn=Object(O.a)(["\n  z-index: 2;\n  top: 105%;\n  list-style-type: none;\n\n  & li {\n    margin: 0 2px;\n  }\n\n  & li button:before {\n    color: var(--primary-color, #000);\n    font-size: 13px;\n  }\n\n  & li.slick-active button:before {\n    opacity: 1;\n    color: var(--secondary-color, #00368a);\n\n    font-size: 13px;\n  }\n"]))),Ne=function(n){var e=n.className,t=n.onClick,r=n.CustomPrevArrow;return r?Object(x.jsx)(r,{className:e,"aria-label":"previous slide",onClick:t}):Object(x.jsx)(Se,{className:e,"aria-label":"previous slide",onClick:t})},_e=function(n){var e=n.className,t=n.onClick,r=n.CustomNextArrow;return r?Object(x.jsx)(r,{className:e,"aria-label":"next slide",onClick:t}):Object(x.jsx)(ze,{className:e,"aria-label":"next slide",onClick:t})},Pe=function(n){var e=n.children,t=n.settings,r=n.slidesToShow,i=n.hasDots,a=n.responsive,o=n.CustomPrevArrow,c=n.CustomNextArrow,s=Object(Y.a)({arrows:!0,dots:i,infinite:!0,speed:500,slidesToShow:r||1,slidesToScroll:1,prevArrow:Object(x.jsx)(Ne,{CustomPrevArrow:o}),nextArrow:Object(x.jsx)(_e,{CustomNextArrow:c}),responsive:a||[],appendDots:function(n){return Object(x.jsx)(Ce,{children:n})}},t);return Object(x.jsx)(we.a,Object(Y.a)(Object(Y.a)({},s),{},{style:ye,children:e}))},Ie=(t(51),v.b.div(gn||(gn=Object(O.a)(["\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),t.p+"static/media/logo.7bf3e845.png"),Te=function(){return Object(x.jsx)(ue,{children:Object(x.jsx)(xe,{url:"/",children:Object(x.jsx)(be,{src:Ie,alt:"logo do site"})})})},Me="search",Ye=v.b.form(On||(On=Object(O.a)(["\n  flex-grow: 1;\n  width: auto;\n  max-width: ",";\n  padding: 20px;\n  margin: 0 0 0 auto;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 800ms ease;\n\n  @media screen and (max-width: 975px) {\n    flex-grow: 1;\n    width: 100%;\n    max-width: 100%;\n  }\n"])),(function(n){return n.isVisible?"1000px":"0"})),Ae=v.b.input(vn||(vn=Object(O.a)(["\n  width: 100%;\n  padding: ",";\n  max-width: ",";\n  border-radius: 18px;\n  box-shadow: inset 1px 1px 3px 0 rgba(79, 82, 88, 0.34);\n  transition: all 800ms ease;\n\n  @media screen and (max-width: 975px) {\n    padding: 10px;\n    max-width: 100%;\n  }\n\n  &::-webkit-search-cancel-button {\n    position: relative;\n    right: 40px;\n  }\n"])),(function(n){return n.isVisible?"10px":"0"}),(function(n){return n.isVisible?"1000px":"0"})),Ve=v.b.button(wn||(wn=Object(O.a)(["\n  padding: 10px;\n  position: absolute;\n  right: 25px;\n  background-color: transparent;\n  cursor: pointer;\n"]))),Ee=v.b.i(yn||(yn=Object(O.a)(["\n  color: ",";\n  font-size: 18px;\n\n  @media screen and (max-width: 975px) {\n    color: #333;\n  }\n"])),(function(n){return n.isVisible?"#333":"#fff"})),Je=function(){var n=Object(g.f)(),e=Object(l.useState)(""),t=Object(M.a)(e,2),r=t[0],i=t[1],a=Object(l.useState)(!1),o=Object(M.a)(a,2),c=o[0],s=o[1];return Object(x.jsxs)(Ye,{isVisible:c,onSubmit:function(e){if(e.preventDefault(),r){!function(n){var e=Fn(n.location.search,ge,12);e=Fn(e,Oe,1),null===n||void 0===n||n.push({pathname:n.location.pathame,search:e})}(n);var t;t=Fn(n.location.search,Me,r),n.push("".concat("/search").concat(t))}},children:[Object(x.jsx)(Ae,{type:"search","aria-label":"search input",placeholder:"Search",isVisible:c,onChange:function(n){return i(n.target.value)}}),Object(x.jsx)(Ve,{type:"submit","aria-label":"search button",isVisible:c,onClick:function(n){n.preventDefault(),s((function(n){return!n}))},children:Object(x.jsx)(Ee,{isVisible:c,className:"fas fa-search"})})]})},We=v.b.div(kn||(kn=Object(O.a)(["\n  margin: 0 15px;\n  width: auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),He=v.b.div(Sn||(Sn=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 991px) {\n    display: none;\n  }\n"]))),De=(v.b.div(zn||(zn=Object(O.a)(["\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 1px;\n  border: 1px solid #d85859;\n  transform: rotate(45deg);\n"]))),v.b.div(Cn||(Cn=Object(O.a)(["\n  & a {\n    color: #fff;\n    padding: 10px 20px;\n    font-size: 16px;\n    font-weight: 600;\n\n    &:hover {\n      color: #dfdfdf;\n    }\n  }\n"])))),Qe=function(n){var e=n.link;return e?Object(x.jsx)(De,{children:Object(x.jsx)(xe,{url:e.url,target:e.target,title:e.title})}):null},Fe=function(n){var e=n.menu;return e&&e.length?Object(x.jsx)(He,{children:e.map((function(n,e){return Object(x.jsx)(Qe,{link:n},"defaultMenu-".concat(e))}))}):null},Ue=v.b.div(Nn||(Nn=Object(O.a)(["\n  position: relative;\n\n  @media screen and (min-width: 991px) {\n    display: none;\n  }\n"]))),Be=v.b.i(_n||(_n=Object(O.a)(["\n  padding: 20px;\n  font-size: 20px;\n  color: #fff;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n"]))),Ge=v.b.div(Pn||(Pn=Object(O.a)(["\n  z-index: 200;\n  padding: 20px;\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: var(--navbar-height);\n  right: 0;\n  transform: ",";\n  transition: transform 0.5s ease-in-out;\n  background: var(--primary-gradient-color);\n"])),(function(n){return n.isVisible?"translateX(0%)":"translateX(200%)"})),Le=v.b.div(In||(In=Object(O.a)(["\n  margin: 0 0 10px;\n  width: 100%;\n  background: var(--secondary-color);\n  border-radius: 6px;\n\n  & a {\n    color: #fff;\n    padding: 15px 20px;\n    font-size: 14px;\n    font-weight: 700;\n\n    &:hover {\n      color: #dfdfdf;\n    }\n  }\n"]))),Xe=(v.b.i(Tn||(Tn=Object(O.a)([""]))),function(n){var e=n.link,t=n.setHasClicked;return e?Object(x.jsx)(Le,{children:Object(x.jsx)(xe,{url:e.url,target:e.target,title:e.title,childrenPosition:"left",setHasClicked:t})}):null}),Ze=function(n){var e=n.menu,t=Object(l.useState)(!1),r=Object(M.a)(t,2),i=r[0],a=r[1],o=Object(l.useState)(!1),c=Object(M.a)(o,2),s=c[0],d=c[1];return Object(l.useEffect)((function(){s&&(d(!1),a(!1))}),[s]),e&&e.length?Object(x.jsxs)(Ue,{children:[Object(x.jsx)(Be,{className:"fas fa-bars",onClick:function(n){return a((function(n){return!n}))}}),Object(x.jsx)(Ge,{isVisible:i,children:e.map((function(n,e){return Object(x.jsx)(Xe,{link:n,setIsVisible:a,setHasClicked:d},"mobilemenu-".concat(e))}))})]}):null},Re=[{url:"/",title:"Home"},{url:"/movies",title:"Movies"},{url:"/tv",title:"TV Shows"},{url:"/persons",title:"Persons"}],qe=function(){return Object(x.jsxs)(We,{children:[Object(x.jsx)(Fe,{menu:Re}),Object(x.jsx)(Ze,{menu:Re})]})},Ke=function(){return Object(x.jsx)(de,{children:Object(x.jsxs)(le,{children:[Object(x.jsx)(Te,{}),Object(x.jsx)(qe,{}),Object(x.jsx)(Je,{})]})})},$e={slidesToShow:6,dots:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}}]},nt=v.b.div(Mn||(Mn=Object(O.a)(["\n  width: 100%;\n"]))),et=function(n){var e=n.previews,t=n.PreviewCard,r=Object(l.useState)(function(n,e){var t;switch(e){case"object":t={};break;case"undefined":t=void 0;break;case"string":t="";break;default:t=null}var r=[];if(n&&Number.isInteger(n))for(var i=0;i<n;i++)r.push(t);return r}(6)),i=Object(M.a)(r,2),a=i[0],o=i[1];return Object(l.useEffect)((function(){e&&e.length&&o(e)}),[e]),Object(x.jsx)(nt,{children:Object(x.jsx)(Pe,{settings:$e,children:a.map((function(n,e){return Object(x.jsx)(t,{preview:n},"preview-".concat((null===n||void 0===n?void 0:n.id)||e))}))})})},tt=function(){var n=Object(l.useState)([]),e=Object(M.a)(n,2),t=e[0],r=e[1],i=Object(l.useState)([]),a=Object(M.a)(i,2),o=a[0],c=a[1],s=Object(l.useState)([]),d=Object(M.a)(s,2),u=d[0],b=d[1],p=Object(l.useState)({page:1}),h=Object(M.a)(p,1)[0],j=function(){var n=Object(T.a)(I.a.mark((function n(e){var t,i,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Vn(e);case 2:return t=n.sent,n.next=5,Hn(e);case 5:return i=n.sent,n.next=8,Jn(e);case 8:a=n.sent,r(t),c(i),b(a);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(l.useEffect)((function(){j(h)}),[h]),Object(x.jsxs)(y,{children:[Object(x.jsx)(ie,{movies:t}),Object(x.jsx)(oe,{tvShows:o}),Object(x.jsx)(se,{persons:u})]})},rt=function(){return Object(x.jsxs)(m.a,{basename:"/",children:[Object(x.jsx)(Ke,{}),Object(x.jsxs)(g.c,{children:[Object(x.jsx)(g.a,{exact:!0,path:"/",component:tt}),Object(x.jsx)(g.a,{exact:!0,path:"*",component:_})]})]})},it=(t(144),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(f,{children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(rt,{})]}),Object(x.jsx)(w,{})]})});p.a.render(Object(x.jsx)(u.a.StrictMode,{children:Object(x.jsx)(it,{})}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.17402e6c.chunk.js.map