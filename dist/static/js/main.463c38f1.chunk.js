(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{133:function(e,t,a){e.exports=a.p+"static/media/book.35afe9e2.png"},134:function(e,t,a){e.exports=a.p+"static/media/notebook.a0a02c9b.png"},151:function(e,t,a){e.exports=a(210)},209:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(13),i=a(44),s=a(127),u=a(42),p=a(7),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},d=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"END_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});case"FETCH_ALL":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case"FETCH_BY_SEARCH":case"FETCH_BY_CREATOR":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data});case"FETCH_POST":return Object(p.a)(Object(p.a)({},e),{},{post:t.payload.post});case"LIKE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"COMMENT":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id==+t.payload._id?t.payload:e}))});case"CREATE":return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[t.payload])});case"UPDATE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"DELETE":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:m}),f=a(245),g=a(25),b=a(15),v=a(143),h=a(235),E=a(213),O=a(236),y=a(76),j=a.n(y),x=a(9),w=a.n(x),C=a(16),k=a(128),N=a.n(k).a.create({baseURL:"https://abkk.herokuapp.com"});N.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var S=function(e){return N.get("/posts/".concat(e))},I=function(e){return N.get("/posts?page=".concat(e))},T=function(e){return N.get("/posts/creator?name=".concat(e))},A=function(e){return N.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},_=function(e){return N.patch("/posts/".concat(e,"/likePost"))},D=function(e,t){return N.post("/posts/".concat(t,"/commentPost"),{value:e})},L=function(e,t){return N.patch("/posts/".concat(e),t)},B=function(e){return N.delete("/posts/".concat(e))},P=function(e){return N.post("/user/signin",e)},R=function(e){return N.post("/user/signup",e)},F=function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,A(e);case 4:n=t.sent,r=n.data.data,a({type:"FETCH_BY_SEARCH",payload:{data:r}}),a({type:"END_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},W=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"START_LOADING"}),a.next=4,c=e,N.post("/posts",c);case 4:r=a.sent,o=r.data,n({type:"CREATE",payload:o}),t.push("/posts/".concat(o._id)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}var c}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},H=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L(e,t);case 3:r=a.sent,o=r.data,n({type:"UPDATE",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,_(e,null===n||void 0===n||n.token);case 4:r=t.sent,o=r.data,a({type:"LIKE",payload:o}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},z=function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D(e,t);case 3:return r=a.sent,o=r.data,n({type:"COMMENT",payload:o}),a.abrupt("return",o.comments);case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},U=a(23),J=a(248),M=a(234),Y=a(22),V=a(232),q=Object(V.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(Y.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(Y.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(Y.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",overflowY:"auto",marginRight:"30px"}}})),K=function(e){var t=e.post,a=JSON.parse(localStorage.getItem("profile")),o=Object(n.useState)(""),c=Object(U.a)(o,2),i=c[0],s=c[1],u=Object(l.b)(),p=Object(n.useState)(null===t||void 0===t?void 0:t.comments),m=Object(U.a)(p,2),d=m[0],f=m[1],g=q(),b=Object(n.useRef)(),v=function(){var e=Object(C.a)(w.a.mark((function e(){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(z("".concat(null===a||void 0===a||null===(n=a.result)||void 0===n?void 0:n.name,": ").concat(i),t._id));case 2:r=e.sent,s(""),f(r),b.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:g.commentsOuterContainer},r.a.createElement("div",{className:g.commentsInnerContainer},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},"Comments"),null===d||void 0===d?void 0:d.map((function(e,t){return r.a.createElement(E.a,{key:t,gutterBottom:!0,variant:"subtitle1"},r.a.createElement("strong",null,e.split(": ")[0]),e.split(":")[1])})),r.a.createElement("div",{ref:b})),r.a.createElement("div",{style:{width:"70%"}},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},"Write a comment"),r.a.createElement(J.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(M.a,{style:{marginTop:"10px"},fullWidth:!0,disabled:!i.length,color:"primary",variant:"contained",onClick:v},"Comment"))))},Q=function(){var e=Object(l.c)((function(e){return e.posts})),t=e.post,a=e.posts,o=e.isLoading,c=Object(l.b)(),i=Object(b.g)(),s=q(),u=Object(b.i)().id;if(Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,S(e);case 4:n=t.sent,r=n.data,a({type:"FETCH_POST",payload:{post:r}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(u))}),[u]),Object(n.useEffect)((function(){t&&c(F({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;if(o)return r.a.createElement(v.a,{elevation:6,className:s.loadingPaper},r.a.createElement(h.a,{size:"7em"}));var p=a.filter((function(e){return e._id!==t._id}));return r.a.createElement(v.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},r.a.createElement("div",{className:s.card},r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{variant:"h3",component:"h2"},t.title),r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},t.tags.map((function(e){return r.a.createElement(g.b,{to:"/tags/".concat(e),style:{textDecoration:"none",color:"#3f51b5"}}," #".concat(e," "))}))),r.a.createElement(E.a,{gutterBottom:!0,variant:"body1",component:"p"},t.message),r.a.createElement(E.a,{variant:"h6"},"Posted by:",r.a.createElement(g.b,{to:"/creators/".concat(t.name),style:{textDecoration:"none",color:"#3f51b5"}}," ".concat(t.name))),r.a.createElement(E.a,{variant:"body1"},j()(t.createdAt).fromNow()),r.a.createElement(O.a,{style:{margin:"20px 0"}}),r.a.createElement(K,{post:t}),r.a.createElement(O.a,{style:{margin:"20px 0"}}))),!!p.length&&r.a.createElement("div",{className:s.section},r.a.createElement(E.a,{gutterBottom:!0,variant:"h5"},"You might also like:"),r.a.createElement(O.a,null),r.a.createElement("div",{className:s.recommendedPosts},p.map((function(e){var a=e.title,n=e.name,o=(e.message,e.likes),c=e._id;return r.a.createElement("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(c)},key:c},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},a),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},n),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},t.message.split(" ").splice(0,50).join(" "),"..."),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},"Likes: ",o.length))})))))},Z=a(238),X=a(239),$=a(251),ee=a(132),te=a(133),ae=a.n(te),ne=a(237),re=Object(V.a)((function(e){return{appBar:Object(Y.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300,fontFamily:"cursive"},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(Y.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(Y.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(ne.a[500]),backgroundColor:ne.a[500]}}})),oe=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(U.a)(e,2),a=t[0],o=t[1],c=Object(l.b)(),i=Object(b.h)(),s=Object(b.g)(),u=re(),p=function(){c({type:"LOGOUT"}),s.push("/auth"),o(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(ee.a)(e).exp<(new Date).getTime()&&p());o(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(Z.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{to:"/",className:u.brandContainer},r.a.createElement(E.a,{component:g.b,to:"/",className:u.heading,variant:"h2",align:"center"},r.a.createElement("h4",null,r.a.createElement("span",{className:"abk"},"Abhay's")," Story"," ",r.a.createElement("span",{className:"about"},"Blog")),r.a.createElement("p",{className:"hidden-mobile"},"Friends Fictions Fantasies...")),r.a.createElement("img",{className:u.image,src:ae.a,alt:"icon",height:"200px"})),r.a.createElement(X.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement($.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(E.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(M.a,{variant:"contained",className:u.logout,color:"secondary",onClick:p},"Logout")):r.a.createElement(M.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},ce=a(250),le=a(244),ie=a(83),se=a.n(ie),ue=a(240),pe=a(145),me=a(241),de=a(242),fe=a(243),ge=a(135),be=a.n(ge),ve=a(137),he=a.n(ve),Ee=a(136),Oe=a.n(Ee),ye=a(96),je=a.n(ye),xe=Object(V.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),we=a(134),Ce=a.n(we),ke=function(e){var t,a,o,c,i,s=e.post,p=e.setCurrentId,m=JSON.parse(localStorage.getItem("profile")),d=Object(n.useState)(null===s||void 0===s?void 0:s.likes),f=Object(U.a)(d,2),g=f[0],v=f[1],h=Object(l.b)(),O=Object(b.g)(),y=xe(),x=(null===m||void 0===m?void 0:m.result.googleId)||(null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t._id),k=s.likes.find((function(e){return e===x})),N=function(){var e=Object(C.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(G(s._id)),v(k?s.likes.filter((function(e){return e!==x})):[].concat(Object(u.a)(s.likes),[x]));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){return g.length>0?g.find((function(e){return e===x}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(be.a,{fontSize:"small"}),"\xa0",g.length>2?"You and ".concat(g.length-1," others"):"".concat(g.length," like").concat(g.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{fontSize:"small"}),"\xa0",g.length," ",1===g.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(ue.a,{className:y.card,raised:!0,elevation:6},r.a.createElement(pe.a,{component:"span",name:"test",className:y.cardAction,onClick:function(e){O.push("/posts/".concat(s._id))}},r.a.createElement(me.a,{className:y.media,image:Ce.a,title:s.title}),r.a.createElement("div",{className:y.overlay},r.a.createElement(E.a,{variant:"h6"},s.name),r.a.createElement(E.a,{variant:"body2"},j()(s.createdAt).fromNow())),((null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===m||void 0===m||null===(o=m.result)||void 0===o?void 0:o._id)===(null===s||void 0===s?void 0:s.creator))&&r.a.createElement("div",{className:y.overlay2,name:"edit"},r.a.createElement(M.a,{onClick:function(e){e.stopPropagation(),p(s._id)},style:{color:"white"},size:"small"},r.a.createElement(Oe.a,{fontSize:"default"}))),r.a.createElement("div",{className:y.details},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},s.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:y.title,gutterBottom:!0,variant:"h5",component:"h2"},s.title),r.a.createElement(de.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},s.message.split(" ").splice(0,20).join(" "),"..."))),r.a.createElement(fe.a,{className:y.cardActions},r.a.createElement(M.a,{size:"small",color:"primary",disabled:!(null===m||void 0===m?void 0:m.result),onClick:N},r.a.createElement(S,null)),((null===m||void 0===m||null===(c=m.result)||void 0===c?void 0:c.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===m||void 0===m||null===(i=m.result)||void 0===i?void 0:i._id)===(null===s||void 0===s?void 0:s.creator))&&r.a.createElement(M.a,{size:"small",color:"secondary",onClick:function(){return h((e=s._id,function(){var t=Object(C.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(he.a,{fontSize:"small"})," \xa0 Delete")))},Ne=Object(V.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(ne.a[500]),backgroundColor:ne.a[500]}},Object(Y.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(Y.a)(t,"actionDiv",{textAlign:"center"}),t})),Se=function(e){var t=e.setCurrentId,a=Object(l.c)((function(e){return e.posts})),n=a.posts,o=a.isLoading,c=Ne();return n.length||o?o?r.a.createElement(h.a,null):r.a.createElement(le.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3},null===n||void 0===n?void 0:n.map((function(e){return r.a.createElement(le.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},r.a.createElement(ke,{post:e,setCurrentId:t}))}))):"No posts"},Ie=(a(208),Object(V.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}}))),Te=function(e){var t,a=e.currentId,o=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:[]}),i=Object(U.a)(c,2),s=i[0],m=i[1],d=Object(l.c)((function(e){return a?e.posts.posts.find((function(e){return e._id===a})):null})),f=Object(l.b)(),g=Ie(),h=JSON.parse(localStorage.getItem("profile")),O=Object(b.g)(),y=function(){o(0),m({title:"",message:"",tags:[]})};Object(n.useEffect)((function(){(null===d||void 0===d?void 0:d.title)||y(),d&&m(d)}),[d]);var j=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(f(W(Object(p.a)(Object(p.a)({},s),{},{name:null===h||void 0===h||null===(n=h.result)||void 0===n?void 0:n.name}),O)),y()):(f(H(a,Object(p.a)(Object(p.a)({},s),{},{name:null===h||void 0===h||null===(r=h.result)||void 0===r?void 0:r.name}))),y());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!(null===h||void 0===h||null===(t=h.result)||void 0===t?void 0:t.name))return r.a.createElement(v.a,{className:g.paper,elevation:6},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to create your own stories and to like other's."));return r.a.createElement(v.a,{className:g.paper,elevation:6},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(g.root," ").concat(g.form),onSubmit:j},r.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(null===d||void 0===d?void 0:d.title,'"'):"Creating a Story"),r.a.createElement(J.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return m(Object(p.a)(Object(p.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(J.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return m(Object(p.a)(Object(p.a)({},s),{},{message:e.target.value}))}}),r.a.createElement("div",{style:{padding:"5px 0",width:"94%"}},r.a.createElement(se.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onAdd:function(e){return t=e,void m(Object(p.a)(Object(p.a)({},s),{},{tags:[].concat(Object(u.a)(s.tags),[t])}));var t},onDelete:function(e){return t=e,void m(Object(p.a)(Object(p.a)({},s),{},{tags:s.tags.filter((function(e){return e!==t}))}));var t}})),r.a.createElement(M.a,{className:g.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(M.a,{variant:"contained",color:"secondary",size:"small",onClick:y,fullWidth:!0},"Clear")))},Ae=a(252),_e=a(249),De=Object(V.a)((function(){return{ul:{justifyContent:"space-around"}}})),Le=function(e){var t=e.page,a=Object(l.c)((function(e){return e.posts})).numberOfPages,o=Object(l.b)(),c=De();return Object(n.useEffect)((function(){t&&o(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r,o,c,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,I(e);case 4:n=t.sent,r=n.data,o=r.data,c=r.currentPage,l=r.numberOfPages,a({type:"FETCH_ALL",payload:{data:o,currentPage:c,numberOfPages:l}}),a({type:"END_LOADING"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[o,t]),r.a.createElement(Ae.a,{classes:{ul:c.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return r.a.createElement(_e.a,Object.assign({},e,{component:g.b,to:"/posts?page=".concat(e.page)}))}})},Be=Object(V.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(Y.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var Pe=function(){var e=Be(),t=new URLSearchParams(Object(b.h)().search),a=t.get("page")||1,o=t.get("searchQuery"),c=Object(n.useState)(0),i=Object(U.a)(c,2),s=i[0],p=i[1],m=Object(l.b)(),d=Object(n.useState)(""),g=Object(U.a)(d,2),h=g[0],E=g[1],O=Object(n.useState)([]),y=Object(U.a)(O,2),j=y[0],x=y[1],w=Object(b.g)(),C=function(){h.trim()||j?(m(F({search:h,tags:j.join(",")})),w.push("/posts/search?searchQuery=".concat(h||"none","&tags=").concat(j.join(",")))):w.push("/")};return r.a.createElement(ce.a,{in:!0},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(le.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer},r.a.createElement(le.a,{item:!0,xs:12,sm:6,md:9},r.a.createElement(Se,{setCurrentId:p})),r.a.createElement(le.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(Z.a,{className:e.appBarSearch,position:"static",color:"inherit"},r.a.createElement(J.a,{onKeyDown:function(e){13===e.keyCode&&C()},name:"search",variant:"outlined",label:"Search Stories",fullWidth:!0,value:h,onChange:function(e){return E(e.target.value)}}),r.a.createElement(se.a,{style:{margin:"10px 0"},value:j,onAdd:function(e){return t=e,x([].concat(Object(u.a)(j),[t]));var t},onDelete:function(e){return t=e,x(j.filter((function(e){return e!==t})));var t},label:"Search Tags",variant:"outlined"}),r.a.createElement(M.a,{onClick:C,className:e.searchButton,variant:"contained",color:"primary"},"Search")),r.a.createElement(Te,{currentId:s,setCurrentId:p}),!o&&!j.length&&r.a.createElement(v.a,{className:e.pagination,elevation:6},r.a.createElement(Le,{page:a}))))))},Re=a(138),Fe=a(141),We=a.n(Fe),He=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},Ge=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),ze=a(246),Ue=a(247),Je=a(139),Me=a.n(Je),Ye=a(140),Ve=a.n(Ye),qe=function(e){var t=e.name,a=e.handleChange,n=e.label,o=e.half,c=e.autoFocus,l=e.type,i=e.handleShowPassword;return r.a.createElement(le.a,{item:!0,xs:12,sm:o?6:12},r.a.createElement(J.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:l,InputProps:"password"===t?{endAdornment:r.a.createElement(ze.a,{position:"end"},r.a.createElement(Ue.a,{onClick:i},"password"===l?r.a.createElement(Me.a,null):r.a.createElement(Ve.a,null)))}:null}))},Ke={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Qe=function(){var e=Object(n.useState)(Ke),t=Object(U.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(U.a)(c,2),s=i[0],u=i[1],m=Object(l.b)(),d=Object(b.g)(),g=Ge(),h=Object(n.useState)(!1),O=Object(U.a)(h,2),y=O[0],j=O[1],x=function(){var e=Object(C.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{m({type:"AUTH",data:{result:a,token:n}}),d.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return o(Object(p.a)(Object(p.a)({},a),{},Object(Y.a)({},e.target.name,e.target.value)))};return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,{className:g.paper,elevation:6},r.a.createElement($.a,{className:g.avatar},r.a.createElement(We.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:g.form,onSubmit:function(e){var t,n;e.preventDefault(),m(s?(t=a,n=d,function(){var e=Object(C.a)(w.a.mark((function e(a){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:r=e.sent,o=r.data,a({type:"AUTH",data:o}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(C.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P(e);case 3:r=a.sent,o=r.data,n({type:"AUTH",data:o}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,d))}},r.a.createElement(le.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,{name:"firstName",label:"First Name",handleChange:k,autoFocus:!0,half:!0}),r.a.createElement(qe,{name:"lastName",label:"Last Name",handleChange:k,half:!0})),r.a.createElement(qe,{name:"email",label:"Email Address",handleChange:k,type:"email"}),r.a.createElement(qe,{name:"password",label:"Password",handleChange:k,type:y?"text":"password",handleShowPassword:function(){return j(!y)}}),s&&r.a.createElement(qe,{name:"confirmPassword",label:"Repeat Password",handleChange:k,type:"password"})),r.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit},s?"Sign Up":"Sign In"),r.a.createElement(Re.GoogleLogin,{clientId:"358812015474-2n5jjjr7n99m6vj0tedfs86g1q51ejp0.apps.googleusercontent.com",render:function(e){return r.a.createElement(M.a,{className:g.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:r.a.createElement(He,null),variant:"contained"},"Google Sign In")},onSuccess:x,onFailure:function(){return console.log("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(le.a,{container:!0,justify:"flex-end"},r.a.createElement(le.a,{item:!0},r.a.createElement(M.a,{onClick:function(){o(Ke),u((function(e){return!e})),j(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},Ze=function(){var e=Object(b.i)().name,t=Object(l.b)(),a=Object(l.c)((function(e){return e.posts})),o=a.posts,c=a.isLoading,i=Object(b.h)();return Object(n.useEffect)((function(){i.pathname.startsWith("/tags")?t(F({tags:e})):t(function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,T(e);case 4:n=t.sent,r=n.data.data,a({type:"FETCH_BY_CREATOR",payload:{data:r}}),a({type:"END_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]),o.length||c?r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h2"},e),r.a.createElement(O.a,{style:{margin:"20px 0 50px 0"}}),c?r.a.createElement(h.a,null):r.a.createElement(le.a,{container:!0,alignItems:"stretch",spacing:3},null===o||void 0===o?void 0:o.map((function(e){return r.a.createElement(le.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},r.a.createElement(ke,{post:e}))})))):"No posts"},Xe=function(){var e=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(oe,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",exact:!0,component:function(){return r.a.createElement(b.a,{to:"/posts"})}}),r.a.createElement(b.b,{path:"/posts",exact:!0,component:Pe}),r.a.createElement(b.b,{path:"/posts/search",exact:!0,component:Pe}),r.a.createElement(b.b,{path:"/posts/:id",exact:!0,component:Q}),r.a.createElement(b.b,{path:["/creators/:name","/tags/:name"],component:Ze}),r.a.createElement(b.b,{path:"/auth",exact:!0,component:function(){return e?r.a.createElement(b.a,{to:"/posts"}):r.a.createElement(Qe,null)}}))))},$e=(a(209),Object(i.e)(d,{},Object(i.d)(Object(i.a)(s.a))));c.a.render(r.a.createElement(l.a,{store:$e},r.a.createElement(Xe,null)),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.463c38f1.chunk.js.map