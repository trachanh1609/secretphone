(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,n,a){},103:function(e,n,a){},253:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),l=a(14),c=a.n(l),o=(a(101),a(81)),i=a(82),m=a(83),s=a(94),u=a(84),h=a(95),p=(a(103),a(31)),d=a.n(p),g=a(16),E=a(91),v=a.n(E),f=a(92),y=a.n(f),w=a(49),b=a.n(w),C=a(51),N=a.n(C),S=a(48),k=a.n(S),j=a(93),O=a.n(j),x=a(86),T=a.n(x),q=a(88),A=a.n(q),W=a(90),B=a.n(W),H=a(89),L=a.n(H),F=a(32),I=a.n(F),M=a(85),V=a.n(M);var Y=Object(g.withStyles)({card:{maxWidth:400},media:{objectFit:"cover"}})(function(e){var n=e.classes,a=e.name;return r.a.createElement(T.a,{className:n.card},r.a.createElement("h4",null,"Hello ",a,"! Nice to meet you"),r.a.createElement(A.a,null,r.a.createElement(L.a,{component:"img",className:n.media,height:"400",image:V.a,title:"Contemplative Reptile"}),r.a.createElement(B.a,null,r.a.createElement(I.a,{gutterBottom:!0,variant:"headline",component:"h2"},"Vu Nguyen"),r.a.createElement(I.a,{component:"p"},"Country : Finland"),r.a.createElement(I.a,{component:"p"},"Zalo : ",r.a.createElement("strong",null,"+358 442048050")))))});var G=function(e){return r.a.createElement("div",null,r.a.createElement("h4",null,"Xin l\u1ed7i ! B\u1ea1n kh\xf4ng n\u1eb1m trong danh s\xe1ch \u0111\u01b0\u1ee3c bi\u1ebft s\u1ed1 \u0111t c\u1ee7a m\xecnh. Vui l\xf2ng g\xf5 c\xf3 d\u1ea5u \u0111\xfang t\xean v\xe0 th\xe0nh ph\u1ed1."),r.a.createElement("p",null,'\u0110\xfang : "Huy\u1ec1n Trang" ho\u1eb7c "Huy\u1ec1nTrang"'),r.a.createElement("p",null,"Sai : Huyen Trang"))},J=function(){return r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"red"}},"Kh\xf4ng load \u0111\u01b0\u1ee3c th\xe0nh ph\u1ed1, vui l\xf2ng refresh l\u1ea1i c\u1ea3 trang !"))},K=a(50),X=a.n(K),_="1_4pP2I8ordpGL3L_9hpAp0G1K3OhhYnfTNYrWtrXemM",D=Object(g.createMuiTheme)({typography:{useNextVariants:!0}}),P=function(e){function n(){var e,a;Object(i.a)(this,n);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",location:"",accquainted:null,persons:[],cities:[]},a.componentDidMount=function(){X.a.labeledCols(_,1).then(function(e){a.setState({persons:e.data})}),X.a.raw(_,2).then(function(e){a.setState({cities:e.data[0]})})},a.handleChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.checkAccquainted=function(){var e=a.state,n=e.name,t=e.location,r=e.persons,l=null,c=!0,o=!1,i=void 0;try{for(var m,s=r[Symbol.iterator]();!(c=(m=s.next()).done);c=!0){var u=m.value;n.toLowerCase()===u.name.toLowerCase()&&t===u.location&&(console.log("I know this person"),l=!0)}}catch(h){o=!0,i=h}finally{try{c||null==s.return||s.return()}finally{if(o)throw i}}l?a.setState({accquainted:l}):a.setState({accquainted:!1})},a}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state,a=n.accquainted,t=n.cities;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:""},r.a.createElement("h4",null,"B\u1ea1n h\xe3y \u0111i\u1ec1n v\xe0o th\xf4ng tin, n\u1ebfu \u0111\xfang th\xec m\xecnh s\u1ebd \u0111\u01b0a s\u1ed1 \u0111t c\u1ee7a m\xecnh cho b\u1ea1n")),r.a.createElement("main",{className:e.root},r.a.createElement("div",{className:e.wrapper},r.a.createElement(d.a,{className:e.paper},r.a.createElement(v.a,{container:!0,wrap:"nowrap",spacing:16},r.a.createElement("form",{onSubmit:this.handleFormSubit,className:e.form},r.a.createElement(k.a,{className:e.formControl},r.a.createElement(y.a,{value:this.state.name,name:"name",label:"T\xean c\u1ee7a b\u1ea1n tr\xean Ymeetme",margin:"normal",onChange:this.handleChange}),r.a.createElement(b.a,{value:this.state.location,onChange:this.handleChange,name:"location",id:"location",displayEmpty:!0},r.a.createElement(N.a,{value:""},r.a.createElement("em",null,"Th\xe0nh ph\u1ed1")),t.map(function(e,n){return r.a.createElement(N.a,{key:n,value:e},e)})),r.a.createElement(O.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.checkAccquainted},"Send"))))),r.a.createElement("br",null),0===t.length&&r.a.createElement(J,null),!0===a?r.a.createElement(Y,{name:this.state.name}):null,!1===a?r.a.createElement(G,null):null)))}}]),n}(t.Component),R=Object(g.withStyles)(function(e){return{root:{overflow:"hidden",padding:"0 ".concat(3*e.spacing.unit,"px")},wrapper:{maxWidth:400,margin:"0 auto"},paper:{margin:e.spacing.unit,padding:2*e.spacing.unit},form:{width:"100%"},formControl:{minWidth:120,margin:"0 auto"},button:{margin:e.spacing.unit}}}(D))(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,n,a){e.exports=a.p+"static/media/myAvatar.12e6b97d.png"},96:function(e,n,a){e.exports=a(253)}},[[96,2,1]]]);
//# sourceMappingURL=main.873f7351.chunk.js.map