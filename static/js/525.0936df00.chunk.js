"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[525],{3525:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var a=n(3558),t=n(2791),r={dialogs:"Dialogs_dialogs__lkRRk"},i="DialogItem_dialogItemNavLink__mnxjt",o="DialogItem_dialog__MOBP6",l=n(501),u=n(184),c=t.memo((function(e){return(0,u.jsx)("div",{className:o,children:(0,u.jsx)(l.OL,{className:i,to:"/dialogs/".concat(e.id),children:e.name})})})),m="Message_message__45sKr",d=t.memo((function(e){return(0,u.jsx)("div",{className:m,children:e.message})})),g=n(4839),f=t.memo((function(e){var s=e.dialogsPage.dialogsData.map((function(e){return(0,u.jsx)(c,{name:e.name,id:e.id},e.id)})),n=e.dialogsPage.messagesData.map((function(e){return(0,u.jsx)(d,{message:e.message},e.id)}));return(0,u.jsxs)("div",{className:r.dialogs,children:[(0,u.jsx)("div",{className:r.dialogsItems,children:s}),(0,u.jsxs)("div",{className:r.messagesDialogs,children:[(0,u.jsx)("div",{children:n}),(0,u.jsx)("div",{children:(0,u.jsx)(g.S,{callback:function(s){e.sendMessage(s.message)}})})]})]})})),h=n(8687),j=n(7781),v=n(5571),x=(0,j.qC)((0,h.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,a.X)(s))}}})),v.D)(f)},4839:function(e,s,n){n.d(s,{S:function(){return c}});var a=n(1413),t=n(2791),r=n(5705),i=n(4530),o=n(9813),l="Form_formCustomButton__E6wPZ",u=n(184),c=t.memo((function(e){var s=(0,r.TA)({initialValues:{message:""},validate:function(e){var s={};return e.message?e.message.length>30&&(s.message="Invalid text"):s.message="Required",s},onSubmit:function(n){e.callback&&e.callback(n),s.resetForm()}});return(0,u.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(i.Z,(0,a.Z)((0,a.Z)({},s.getFieldProps("message")),{},{placeholder:"Enter yore message.",onBlur:s.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}})),s.errors.message&&s.touched.message&&(0,u.jsx)("div",{style:{color:"#DF204D"},children:s.errors.message})]}),(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)(o.o,{children:"Send"}),e.removeButton?(0,u.jsx)("button",{type:"button",children:"Remove"}):""]})]})}))},5571:function(e,s,n){n.d(s,{D:function(){return c}});var a=n(1413),t=n(3366);n(2791);var r=n(8687),i=n(6871),o=n(184),l=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,r.$j)(u)((function(s){var n=s.isAuth,r=function(e,s){if(null==e)return{};var n,a,r=(0,t.Z)(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(s,l);return n?(0,o.jsx)(e,(0,a.Z)({},r)):(0,o.jsx)(i.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=525.0936df00.chunk.js.map