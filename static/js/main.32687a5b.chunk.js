(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{202:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(25),r=a.n(s),i=a(28),o=a(20),l=a(10),u=a(11),j=a(96),d=a(60),m=a.n(d),h=a(50),b=a.p+"static/media/eye.8e7e265e.svg",O=a.p+"static/media/eye-slash.0bed875c.svg",x=(a(202),a(3));function f(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],o=r[1],d=h.a().shape({email:h.b().email("Email address is invalid").required("Email required"),password:h.b().required("This field is required.").min(6,"Password should be 6 chars minimum.")}),f=Object(u.f)();return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(j.a,{initialValues:{email:"",password:""},validateOnBlur:!1,validateOnChange:a,validationSchema:d,onSubmit:function(){f.push("/welcome")},children:function(e){var t=e.values,a=e.errors,c=e.touched,s=e.handleChange,r=e.handleBlur,l=e.isValid,u=e.handleSubmit,j=e.dirty;return Object(x.jsxs)("form",{className:"form",onSubmit:u,children:[Object(x.jsxs)("div",{className:"form__inputs",children:[Object(x.jsx)("label",{className:"form__label",children:"E-mail"}),Object(x.jsx)("input",{className:m()("form__input",{"form__input-err":a.email&&c.email}),type:"email",name:"email",placeholder:"Enter your email",value:t.email,onChange:s,onBlur:r}),a.email&&c.email&&Object(x.jsx)("p",{className:"form__input-error",children:a.email})]}),Object(x.jsxs)("div",{className:"form__inputs",children:[Object(x.jsx)("label",{className:"form__label",children:"Create Password"}),Object(x.jsx)("input",{className:m()("form__input",{"form__input-err":a.password&&c.password}),type:i?"text":"password",name:"password",placeholder:"Enter your password",value:t.password,onChange:s,onBlur:r}),Object(x.jsx)("div",{onClick:function(){return o((function(e){return!e}))},className:"form__input-icon",children:i?Object(x.jsx)("img",{src:b,alt:"show"}):Object(x.jsx)("img",{src:O,alt:"hide"})}),a.password&&c.password&&Object(x.jsx)("p",{className:"form__input-error",children:a.password})]}),Object(x.jsx)("button",{disabled:!l&&!j,className:"form__input-btn",type:"submit",onClick:function(){n(!0)},children:"Login"})]})}})})}function p(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f,{})})}var _=a(15),N=a(98),v=n.a.createContext(),C=n.a.createContext(),g=a(226),w=(a(207),["active","setActive"]);function y(e){var t=e.active,a=e.setActive,n=Object(N.a)(e,w),s=Object(c.useContext)(C),r=(s.chat,s.handlerChatName),i=s.handlerChatDiscription,o=s.handlerChatId,u=Object(c.useState)(""),j=Object(l.a)(u,2),d=j[0],m=j[1],h=Object(c.useState)(""),b=Object(l.a)(h,2),O=b[0],f=b[1];return Object(x.jsx)("div",{className:t?"modal modal--active":"modal",onClick:function(){return a(!1)},children:Object(x.jsxs)("div",{className:t?"modal__content modal__content--active":"modal__content",onClick:function(e){return e.stopPropagation()},children:[Object(x.jsx)("h2",{className:"modal__title",children:"New channel"}),Object(x.jsxs)("form",{action:"",className:"form",onSubmit:function(e){e.preventDefault(),r(d),i(O),o(Object(g.a)()),n.onSubmit({id:Math.floor(1e4*Math.random()),chatName:d,chatDiscription:O}),m(""),f("")},children:[Object(x.jsx)("input",{type:"text",className:"form__input",value:d,onChange:function(e){m(e.target.value)},placeholder:"Channel tittle...",required:!0}),Object(x.jsx)("input",{type:"text",className:"form__input",value:O,onChange:function(e){f(e.target.value)},placeholder:"Channel description",required:!0}),Object(x.jsx)("button",{type:"submit",className:"modal__button",children:"Create"})]}),Object(x.jsx)("button",{className:"modal__button modal__button--close",type:"button",onClick:function(){return a(!1)},children:"Close"})]})})}function S(){var e=Object(c.useContext)(C).chat,t=Object(u.f)();return Object(x.jsxs)("div",{className:"x",onClick:function(){return t.push("/chat/:chatId")},children:[Object(x.jsx)("h3",{className:"x",children:e.chatName}),Object(x.jsx)("p",{className:"x",children:e.chatDiscription})]})}a(208);function k(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(c.useContext)(C).chat;return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("button",{className:"btn",type:"button",onClick:function(){return n(!0)},children:"Create a channel"}),Object(x.jsx)("h1",{children:"Welcome to awesome chat"}),Object(x.jsx)("div",{className:"x",children:i.map((function(e){return Object(x.jsx)(S,{chatOne:e},u.id)}))}),Object(x.jsx)(y,{onSubmit:function(){if(u.chatName&&(!/^\s*$/.test(u.chatName)||u.chatDiscription)&&!/^\s*$/.test(u.chatDiscription)){var e=[u].concat(Object(_.a)(i));o(e)}},active:a,setActive:n})]})}function U(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k,{})})}a(209);function D(e){var t=e.modalUserActive,a=e.setModalUserActive,n=Object(c.useContext)(v),s=n.userName,r=n.userLastName,i=n.handlerUserName,o=n.handlerUserLastName;return Object(x.jsx)("div",{className:t?"user user--active":"user",onClick:function(){return a(!1)},children:Object(x.jsxs)("div",{className:t?"modal__content modal__content--active":"modal__content",onClick:function(e){return e.stopPropagation()},children:[Object(x.jsx)("h2",{className:"modal__title",children:"User"}),Object(x.jsxs)("form",{action:"",className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(x.jsx)("input",{type:"text",className:"form__input",value:s,onChange:i,placeholder:"Name",required:!0}),Object(x.jsx)("input",{type:"text",className:"form__input",value:r,onChange:o,placeholder:"Last name",required:!0}),Object(x.jsx)("button",{type:"submit",className:"modal__button",children:"Create"})]}),Object(x.jsx)("button",{className:"modal__button modal__button--close",type:"button",onClick:function(){return a(!1)},children:"Close"})]})})}a(210);function q(e){var t=e.message,a=Object(c.useContext)(v).user;return Object(x.jsxs)("div",{className:"chat__message",children:[Object(x.jsx)("p",{className:"chat__message--user",children:""===a.userName?"User1":a.userName}),Object(x.jsx)("p",{className:"chat__message--info",children:t.text})]})}a(211);function L(){var e=Object(c.useContext)(v).user;return Object(x.jsxs)("div",{className:"chat__message",children:[Object(x.jsx)("p",{className:"chat__message--user",children:""===e.userName?"User1":e.userName}),Object(x.jsx)("p",{className:"chat__message--info",children:"hello ".concat(""===e.userName?"User1":e.userName)})]})}a(212);function A(e){var t=Object.assign({},e),a=Object(c.useState)(""),n=Object(l.a)(a,2),s=n[0],r=n[1],i=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:s}),r("")};return Object(x.jsxs)("form",{action:"",className:"chat__form",onSubmit:i,children:[Object(x.jsx)("textarea",{className:"chat__input--text",value:s,onChange:function(e){r(e.target.value)},wrap:"soft | hard"}),Object(x.jsx)("button",{className:"chat__btn",onClick:i,children:"Send"})]})}var I=a(97),M=a(38);a(222);function E(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),u=Object(l.a)(r,2),j=u[0],d=u[1],m=n.a.useRef(new M.c({fixedWidth:!0,defaultHeight:100})),h=Object(c.useState)({userName:"",userLastName:""}),b=Object(l.a)(h,2),O=b[0],f=b[1],p=Object(c.useContext)(C).chat;return Object(x.jsx)(v.Provider,{value:{user:O,handlerUserName:function(e){return f(Object(o.a)(Object(o.a)({},O),{},{userName:e.target.value}))},handlerUserLastName:function(e){return f(Object(o.a)(Object(o.a)({},O),{},{userLastName:e.target.value}))}},children:Object(x.jsxs)("div",{className:"chat",children:[Object(x.jsxs)("div",{className:"chat__header",children:[Object(x.jsx)("h2",{className:"chat__title",children:""===p.chatName?"Chat":p.chatName}),Object(x.jsxs)("div",{className:"chat__user",children:[Object(x.jsx)(I.a,{onClick:function(){return s(!0)},className:"icon-style"}),Object(x.jsx)("span",{children:""===O.userName?"User1":O.userName})]}),Object(x.jsx)(i.b,{to:"/",className:"chat__btn",children:"Logout"})]}),Object(x.jsx)("div",{className:"chat__input",children:Object(x.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(x.jsx)(M.a,{children:function(e){var t=e.width,a=e.height;return Object(x.jsx)(M.d,{width:t,height:a,rowHeight:m.current.rowHeight,deferredMeasurementCache:m.current,rowCount:j.length,rowRenderer:function(e){var t=e.key,a=e.index,c=e.style,n=e.parent,s=j[a];return Object(x.jsx)(M.b,{cache:m.current,parent:n,columnIndex:0,rowIndex:a,children:Object(x.jsxs)("div",{style:c,children:[Object(x.jsx)(q,{message:s},s.id),q?Object(x.jsx)(L,{}):null]})},t)}})}})})}),Object(x.jsx)(A,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[].concat(Object(_.a)(j),[e]);d(t)}}}),Object(x.jsx)(D,{modalUserActive:a,setModalUserActive:s})]})})}function P(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(E,{})})}a(223);var B=function(){var e=Object(c.useState)({chatName:"",chatDiscription:"",id:""}),t=Object(l.a)(e,2),a=t[0],n=t[1];return console.log(a),Object(x.jsx)(C.Provider,{value:{chat:a,handlerChatName:function(e){return n((function(t){return Object(o.a)(Object(o.a)({},t),{},{chatName:e})}))},handlerChatDiscription:function(e){return n((function(t){return Object(o.a)(Object(o.a)({},t),{},{chatDiscription:e})}))},handlerChatId:function(e){return n((function(t){return Object(o.a)(Object(o.a)({},t),{},{id:e})}))}},children:Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(x.jsx)(u.a,{exact:!0,path:"/welcome",component:U}),Object(x.jsx)(u.a,{exact:!0,path:"/chat/:chatId",component:P})]})})};r.a.render(Object(x.jsx)(i.a,{children:Object(x.jsx)(B,{})}),document.getElementById("root"))}},[[224,1,2]]]);
//# sourceMappingURL=main.32687a5b.chunk.js.map