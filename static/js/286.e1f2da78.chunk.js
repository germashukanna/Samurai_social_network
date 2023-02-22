"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[286],{4337:function(e,t,o){o.d(t,{S:function(){return u}});var r=o(1413),s=o(2791),n=o(5705),i=o(4530),a=o(9813),l="Form_formCustomButton__5kziB",c=o(184),u=s.memo((function(e){var t=(0,n.TA)({initialValues:{message:""},validate:function(e){var t={};return e.message?e.message.length>30&&(t.message="Invalid text"):t.message="Required",t},onSubmit:function(o){e.callback&&e.callback(o),t.resetForm()}});return(0,c.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(i.Z,(0,r.Z)((0,r.Z)({},t.getFieldProps("message")),{},{placeholder:"Enter yore message.",onBlur:t.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}})),t.errors.message&&t.touched.message&&(0,c.jsx)("div",{style:{color:"#DF204D"},children:t.errors.message})]}),(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)(a.o,{children:"Send"}),e.removeButton?(0,c.jsx)("button",{type:"button",children:"Remove"}):""]})]})}))},7286:function(e,t,o){o.r(t),o.d(t,{default:function(){return pe},withRouter:function(){return ue}});var r=o(1413),s=o(5671),n=o(3144);function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=a(e);if(t){var s=a(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return c(this,o)}}var p=o(2791),f=o(5571),d=o(885),h="ProfileInfo_descriptionBlock__AQSqX",m="ProfileInfo_mainPhoto__pu-Xb",x="ProfileInfo_inputTypeFile__pSWtk",j=o(3445),b=o(723),v="ProfilIStatusWithHook_ProfilIStatusWithHook__-q88U",g=o(184),y=function(e){var t=(0,p.useState)(!1),o=(0,d.Z)(t,2),r=o[0],s=o[1],n=(0,p.useState)(e.status),i=(0,d.Z)(n,2),a=i[0],l=i[1];(0,p.useEffect)((function(){l(e.status)}),[e.status]);return(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("h3",{children:"User status:"}),!r&&(0,g.jsx)("div",{children:(0,g.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"------"})}),r&&(0,g.jsx)("div",{children:(0,g.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},value:a,onBlur:function(){s(!1),e.updateStatusTC(a)},autoFocus:!0})})]})},P=o(6696),_=o(8528),Z=o(5705),k=o(6362),S=o(9012),C=o(5523),F=o(9174),w={formControl:"ProfileDataForm_formControl__niVxu",contacts:"ProfileDataForm_contacts__M56O0",ProfileDataFormCustomButton:"ProfileDataForm_ProfileDataFormCustomButton__oGaSN"},B=o(4695),O=o(916),N=o(8182),T=o(9650),D=o(104),A=o(8519),I=o(886),M=["className","component"];var E=o(5902),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,o=e.defaultClassName,r=void 0===o?"MuiBox-root":o,s=e.generateClassName,n=e.styleFunctionSx,i=void 0===n?D.Z:n,a=(0,T.ZP)("div")(i),l=p.forwardRef((function(e,o){var n=(0,I.Z)(t),i=(0,A.Z)(e),l=i.className,c=i.component,u=void 0===c?"div":c,p=(0,O.Z)(i,M);return(0,g.jsx)(a,(0,B.Z)({as:u,ref:o,className:(0,N.Z)(l,s?s(r):r),theme:n},p))}));return l}({defaultTheme:(0,o(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:E.Z.generate}),R=J,U=o(9813),H=o(4530),z=function(e){var t=(0,_.T)(),o=(0,p.useState)(!1),s=(0,d.Z)(o,2),n=(s[0],s[1]),i=(0,Z.TA)({initialValues:{aboutMe:"",lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",contacts:{github:"",website:"",facebook:"",instagram:""}},onSubmit:function(e){t((0,b.Ii)(e)),n(!0)}});return(0,g.jsx)("div",{className:w.wrapper,children:(0,g.jsx)("form",{onSubmit:i.handleSubmit,children:(0,g.jsx)(k.Z,{className:w.formControl,children:(0,g.jsxs)(S.Z,{children:[(0,g.jsx)("div",{className:w.ProfileDataFormCustomButton,children:(0,g.jsx)(U.o,{children:"Save"})}),(0,g.jsx)(R,{children:(0,g.jsx)(H.Z,(0,r.Z)((0,r.Z)({},i.getFieldProps("fullName")),{},{placeholder:"Enter yore full name.",onBlur:i.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))}),(0,g.jsx)(R,{children:(0,g.jsx)(C.Z,{label:"looking for a job",control:(0,g.jsx)(F.Z,{color:"primary",onChange:i.handleChange,checked:i.values.lookingForAJob,name:"lookingForAJob"})})}),(0,g.jsx)(R,{children:(0,g.jsx)(H.Z,(0,r.Z)((0,r.Z)({},i.getFieldProps("lookingForAJobDescription")),{},{placeholder:"Description.",onBlur:i.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))}),(0,g.jsx)(R,{children:(0,g.jsx)(H.Z,(0,r.Z)((0,r.Z)({},i.getFieldProps("aboutMe")),{},{placeholder:"About me.",onBlur:i.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Contacts:"}),": ",(0,g.jsxs)("div",{className:w.contacts,children:[(0,g.jsx)("div",{children:(0,g.jsxs)("b",{children:["Github: ",(0,g.jsx)(H.Z,(0,r.Z)((0,r.Z)({},i.getFieldProps("contacts.github")),{},{placeholder:"Github.",onBlur:i.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})}),(0,g.jsx)("div",{children:(0,g.jsxs)("b",{children:["Facebook:",(0,g.jsx)(H.Z,(0,r.Z)((0,r.Z)({},i.getFieldProps("contacts.facebook")),{},{placeholder:"Facebook.",onBlur:i.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})}),(0,g.jsx)("div",{children:(0,g.jsxs)("b",{children:["Instagram: ",(0,g.jsx)(H.Z,(0,r.Z)((0,r.Z)({},i.getFieldProps("contacts.instagram")),{},{placeholder:"Instagram.",onBlur:i.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})}),(0,g.jsx)("div",{children:(0,g.jsxs)("b",{children:["Website: ",(0,g.jsx)(H.Z,(0,r.Z)((0,r.Z)({},i.getFieldProps("contacts.website")),{},{placeholder:"Website.",onBlur:i.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})})]})]})]})})})})},G="ProfileData_editProfileButton__tyEn3",W=function(e){return(0,g.jsxs)(g.Fragment,{children:[e.isOwner&&(0,g.jsx)("div",{className:G,children:(0,g.jsx)(U.o,{children:"Edit profile",onClick:e.goToEditMode})}),(0,g.jsx)("h2",{children:e.profile.fullName}),(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"About me: "})," ",e.profile.aboutMe]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Looking for a job: "}),e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&(0,g.jsxs)("p",{children:[" ",e.profile.lookingForAJobDescription]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Contacts:"}),e.profile.contacts.facebook&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"FaceBook:"})," ",e.profile.contacts.facebook]}),e.profile.contacts.website&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Web-site:"})," ",e.profile.contacts.website]}),e.profile.contacts.vk&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Vk:"})," ",e.profile.contacts.vk]}),e.profile.contacts.twitter&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Twitter:"})," ",e.profile.contacts.twitter]}),e.profile.contacts.instagram&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Instagram:"})," ",e.profile.contacts.instagram]}),e.profile.contacts.youtube&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"YouTube:"})," ",e.profile.contacts.youtube]}),e.profile.contacts.github&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"GitHub:"})," ",e.profile.contacts.github]}),e.profile.contacts.mainLink&&(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"MainLink:"})," ",e.profile.contacts.mainLink]})]})]})},q=(0,o(9201).Z)((0,g.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline"),L=p.memo((function(e){var t=(0,p.useState)(!1),o=(0,d.Z)(t,2),r=o[0],s=o[1],n=(0,_.T)();if(!e.profile)return(0,g.jsx)(j.p,{});return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("img",{src:e.profile.photos.large||P,className:m}),e.isOwner&&(0,g.jsxs)("label",{className:x,children:[(0,g.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&n((0,b.Ju)(e.target.files[0]))},style:{display:"none"}}),(0,g.jsx)(q,{})]}),r?(0,g.jsx)(z,{profile:e.profile}):(0,g.jsx)(W,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){s(!0)}}),(0,g.jsx)(y,{status:e.status,updateStatusTC:e.updateStatusTC})]})})})),V="MyPosts_postsContainer__XIroL",Q="MyPosts_imageDiv__xjOgG",X="MyPosts_postBlock__uJD6S",$="MyPosts_posts__xC0Hj",Y="Post_items__043ov",K="Post_like__Q+kHQ",ee="Post_messagePost__r7dcB",te=p.memo((function(e){return(0,g.jsxs)("div",{className:Y,children:[(0,g.jsx)("img",{src:"https://classic.armadon-theme.com/wp-content/uploads/sites/11/avatars/6/6-bpfull.jpg",alt:""}),(0,g.jsx)("span",{className:ee,children:e.message}),(0,g.jsx)("span",{className:K,children:e.likes})]})})),oe=o(4337),re=p.memo((function(e){var t=e.profilePage.posts.map((function(e){return(0,g.jsx)(te,{message:e.post,likes:e.likesCount},e.id)}));return(0,g.jsx)("div",{className:V,children:(0,g.jsxs)("div",{className:Q,children:[(0,g.jsx)("div",{className:X,children:(0,g.jsx)("h3",{children:"My post"})}),(0,g.jsx)(oe.S,{callback:function(t){e.addPostToo(t.message)}}),(0,g.jsx)("div",{className:$,children:t})]})})})),se=o(8687),ne=(0,se.$j)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPostToo:function(t){e((0,b.kq)(t))}}}))(re),ie=p.memo((function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)(L,{profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC,isOwner:e.isOwner,savePhoto:e.savePhoto}),(0,g.jsx)(ne,{})]})})),ae=o(6871),le=o(7781),ce=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(o,e);var t=u(o);function o(){return(0,s.Z)(this,o),t.apply(this,arguments)}return(0,n.Z)(o,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.setStatusTC(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,o){this.props.router.params.userId!=e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,g.jsx)("div",{children:(0,g.jsx)(ie,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatusTC:this.props.updateStatusTC,savePhoto:this.props.savePhoto}))})}}]),o}(p.Component),ue=function(e){return function(t){var o=(0,ae.TH)(),s=(0,ae.s0)(),n=(0,ae.UO)();return(0,g.jsx)(e,(0,r.Z)((0,r.Z)({},t),{},{router:{location:o,navigate:s,params:n}}))}},pe=(0,le.qC)((0,se.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth,isOwner:e.profilePage.isOwner,savePhoto:e.profilePage.posts}}),{getUserProfile:b.et,setStatusTC:b.jQ,updateStatusTC:b.OG,savePhoto:b.Ju}),ue,f.D)(ce)},5571:function(e,t,o){o.d(t,{D:function(){return u}});var r=o(1413),s=o(3366);o(2791);var n=o(8687),i=o(6871),a=o(184),l=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,n.$j)(c)((function(t){var o=t.isAuth,n=function(e,t){if(null==e)return{};var o,r,n=(0,s.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(t,l);return o?(0,a.jsx)(e,(0,r.Z)({},n)):(0,a.jsx)(i.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=286.e1f2da78.chunk.js.map