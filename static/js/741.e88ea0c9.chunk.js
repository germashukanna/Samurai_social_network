"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[741],{4337:function(e,s,o){o.d(s,{S:function(){return u}});var t=o(1413),r=o(2791),i=o(5705),n=o(2860),a=o(9813),l="Form_formCustomButton__5kziB",c=o(184),u=r.memo((function(e){var s=(0,i.TA)({initialValues:{message:""},validate:function(e){var s={};return e.message?e.message.length>30&&(s.message="Invalid text"):s.message="Required",s},onSubmit:function(o){e.callback&&e.callback(o),s.resetForm()}});return(0,c.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(n.Z,(0,t.Z)((0,t.Z)({},s.getFieldProps("message")),{},{placeholder:"Enter yore message.",onBlur:s.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}})),s.errors.message&&s.touched.message&&(0,c.jsx)("div",{style:{color:"#DF204D"},children:s.errors.message})]}),(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)(a.o,{children:"Send"}),e.removeButton?(0,c.jsx)("button",{type:"button",children:"Remove"}):""]})]})}))},9753:function(e,s,o){o.r(s),o.d(s,{default:function(){return le},withRouter:function(){return ae}});var t=o(1413),r=o(5671),i=o(3144),n=o(9340),a=o(5716),l=o(2791),c=o(5571),u=o(885),d="ProfileInfo_descriptionBlock__AQSqX",p="ProfileInfo_mainPhoto__pu-Xb",h="ProfileInfo_inputTypeFile__pSWtk",f=o(3445),m=o(3960),x="ProfilIStatusWithHook_ProfilIStatusWithHook__-q88U",j=o(184),b=function(e){var s=(0,l.useState)(!1),o=(0,u.Z)(s,2),t=o[0],r=o[1],i=(0,l.useState)(e.status),n=(0,u.Z)(i,2),a=n[0],c=n[1];(0,l.useEffect)((function(){c(e.status)}),[e.status]);return(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("h3",{children:"User status:"}),!t&&(0,j.jsx)("div",{children:(0,j.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"------"})}),t&&(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},value:a,onBlur:function(){r(!1),e.updateStatusTC(a)},autoFocus:!0})})]})},v=o.p+"static/media/userFhoto.f4dc0b8ad6137734ba12.jpg",g=o(8528),P=o(5705),Z=o(6362),_=o(9012),k=o(9641),C=o(9174),F={formControl:"ProfileDataForm_formControl__niVxu",contacts:"ProfileDataForm_contacts__M56O0",ProfileDataFormCustomButton:"ProfileDataForm_ProfileDataFormCustomButton__oGaSN"},S=o(4695),B=o(916),N=o(8182),y=o(9650),T=o(104),w=o(8519),D=o(886),I=["className","component"];var A=o(5902),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.defaultTheme,o=e.defaultClassName,t=void 0===o?"MuiBox-root":o,r=e.generateClassName,i=e.styleFunctionSx,n=void 0===i?T.Z:i,a=(0,y.ZP)("div")(n),c=l.forwardRef((function(e,o){var i=(0,D.Z)(s),n=(0,w.Z)(e),l=n.className,c=n.component,u=void 0===c?"div":c,d=(0,B.Z)(n,I);return(0,j.jsx)(a,(0,S.Z)({as:u,ref:o,className:(0,N.Z)(l,r?r(t):t),theme:i},d))}));return c}({defaultTheme:(0,o(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:A.Z.generate}),O=M,J=o(9813),U=o(2860),E=function(e){var s=(0,g.T)(),o=(0,l.useState)(!1),r=(0,u.Z)(o,2),i=(r[0],r[1]),n=(0,P.TA)({initialValues:{aboutMe:"",lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",contacts:{github:"",website:"",facebook:"",instagram:""}},onSubmit:function(e){s((0,m.Ii)(e)),i(!0)}});return(0,j.jsx)("div",{className:F.wrapper,children:(0,j.jsx)("form",{onSubmit:n.handleSubmit,children:(0,j.jsx)(Z.Z,{className:F.formControl,children:(0,j.jsxs)(_.Z,{children:[(0,j.jsx)("div",{className:F.ProfileDataFormCustomButton,children:(0,j.jsx)(J.o,{children:"Save"})}),(0,j.jsx)(O,{children:(0,j.jsx)(U.Z,(0,t.Z)((0,t.Z)({},n.getFieldProps("fullName")),{},{placeholder:"Enter yore full name.",onBlur:n.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))}),(0,j.jsx)(O,{children:(0,j.jsx)(k.Z,{label:"looking for a job",control:(0,j.jsx)(C.Z,{color:"primary",onChange:n.handleChange,checked:n.values.lookingForAJob,name:"lookingForAJob"})})}),(0,j.jsx)(O,{children:(0,j.jsx)(U.Z,(0,t.Z)((0,t.Z)({},n.getFieldProps("lookingForAJobDescription")),{},{placeholder:"Description.",onBlur:n.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))}),(0,j.jsx)(O,{children:(0,j.jsx)(U.Z,(0,t.Z)((0,t.Z)({},n.getFieldProps("aboutMe")),{},{placeholder:"About me.",onBlur:n.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Contacts:"}),": ",(0,j.jsxs)("div",{className:F.contacts,children:[(0,j.jsx)("div",{children:(0,j.jsxs)("b",{children:["Github: ",(0,j.jsx)(U.Z,(0,t.Z)((0,t.Z)({},n.getFieldProps("contacts.github")),{},{placeholder:"Github.",onBlur:n.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})}),(0,j.jsx)("div",{children:(0,j.jsxs)("b",{children:["Facebook:",(0,j.jsx)(U.Z,(0,t.Z)((0,t.Z)({},n.getFieldProps("contacts.facebook")),{},{placeholder:"Facebook.",onBlur:n.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})}),(0,j.jsx)("div",{children:(0,j.jsxs)("b",{children:["Instagram: ",(0,j.jsx)(U.Z,(0,t.Z)((0,t.Z)({},n.getFieldProps("contacts.instagram")),{},{placeholder:"Instagram.",onBlur:n.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})}),(0,j.jsx)("div",{children:(0,j.jsxs)("b",{children:["Website: ",(0,j.jsx)(U.Z,(0,t.Z)((0,t.Z)({},n.getFieldProps("contacts.website")),{},{placeholder:"Website.",onBlur:n.handleBlur,color:"info",variant:"outlined",sx:{mb:"10px",ml:"10px"}}))]})})]})]})]})})})})},H="ProfileData_editProfileButton__tyEn3",z=function(e){return(0,j.jsxs)(j.Fragment,{children:[e.isOwner&&(0,j.jsx)("div",{className:H,children:(0,j.jsx)(J.o,{children:"Edit profile",onClick:e.goToEditMode})}),(0,j.jsx)("h2",{children:e.profile.fullName}),(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"About me: "})," ",e.profile.aboutMe]}),(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Looking for a job: "}),e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&(0,j.jsxs)("p",{children:[" ",e.profile.lookingForAJobDescription]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Contacts:"}),e.profile.contacts.facebook&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"FaceBook:"})," ",e.profile.contacts.facebook]}),e.profile.contacts.website&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Web-site:"})," ",e.profile.contacts.website]}),e.profile.contacts.vk&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Vk:"})," ",e.profile.contacts.vk]}),e.profile.contacts.twitter&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Twitter:"})," ",e.profile.contacts.twitter]}),e.profile.contacts.instagram&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Instagram:"})," ",e.profile.contacts.instagram]}),e.profile.contacts.youtube&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"YouTube:"})," ",e.profile.contacts.youtube]}),e.profile.contacts.github&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"GitHub:"})," ",e.profile.contacts.github]}),e.profile.contacts.mainLink&&(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"MainLink:"})," ",e.profile.contacts.mainLink]})]})]})},G=(0,o(9201).Z)((0,j.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline"),W=l.memo((function(e){var s=(0,l.useState)(!1),o=(0,u.Z)(s,2),t=o[0],r=o[1],i=(0,g.T)();if(!e.profile)return(0,j.jsx)(f.p,{});return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("img",{src:e.profile.photos.large||v,className:p}),e.isOwner&&(0,j.jsxs)("label",{className:h,children:[(0,j.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&i((0,m.Ju)(e.target.files[0]))},style:{display:"none"}}),(0,j.jsx)(G,{})]}),t?(0,j.jsx)(E,{profile:e.profile}):(0,j.jsx)(z,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){r(!0)}}),(0,j.jsx)(b,{status:e.status,updateStatusTC:e.updateStatusTC})]})})})),q="MyPosts_postsContainer__XIroL",L="MyPosts_imageDiv__xjOgG",V="MyPosts_postBlock__uJD6S",Q="MyPosts_posts__xC0Hj",R="Post_items__043ov",X="Post_like__Q+kHQ",$="Post_messagePost__r7dcB",Y=l.memo((function(e){return(0,j.jsxs)("div",{className:R,children:[(0,j.jsx)("img",{src:"https://classic.armadon-theme.com/wp-content/uploads/sites/11/avatars/6/6-bpfull.jpg",alt:""}),(0,j.jsx)("span",{className:$,children:e.message}),(0,j.jsx)("span",{className:X,children:e.likes})]})})),K=o(4337),ee=l.memo((function(e){var s=e.profilePage.posts.map((function(e){return(0,j.jsx)(Y,{message:e.post,likes:e.likesCount},e.id)}));return(0,j.jsx)("div",{className:q,children:(0,j.jsxs)("div",{className:L,children:[(0,j.jsx)("div",{className:V,children:(0,j.jsx)("h3",{children:"My post"})}),(0,j.jsx)(K.S,{callback:function(s){e.addPostToo(s.message)}}),(0,j.jsx)("div",{className:Q,children:s})]})})})),se=o(8687),oe=(0,se.$j)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPostToo:function(s){e((0,m.kq)(s))}}}))(ee),te=l.memo((function(e){return(0,j.jsxs)("div",{children:[(0,j.jsx)(W,{profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC,isOwner:e.isOwner,savePhoto:e.savePhoto}),(0,j.jsx)(oe,{})]})})),re=o(6871),ie=o(7781),ne=function(e){(0,n.Z)(o,e);var s=(0,a.Z)(o);function o(){return(0,r.Z)(this,o),s.apply(this,arguments)}return(0,i.Z)(o,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.setStatusTC(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,o){this.props.router.params.userId!=e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,j.jsx)("div",{children:(0,j.jsx)(te,(0,t.Z)((0,t.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatusTC:this.props.updateStatusTC,savePhoto:this.props.savePhoto}))})}}]),o}(l.Component),ae=function(e){return function(s){var o=(0,re.TH)(),r=(0,re.s0)(),i=(0,re.UO)();return(0,j.jsx)(e,(0,t.Z)((0,t.Z)({},s),{},{router:{location:o,navigate:r,params:i}}))}},le=(0,ie.qC)((0,se.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth,isOwner:e.profilePage.isOwner,savePhoto:e.profilePage.posts}}),{getUserProfile:m.et,setStatusTC:m.jQ,updateStatusTC:m.OG,savePhoto:m.Ju}),ae,c.D)(ne)}}]);
//# sourceMappingURL=741.e88ea0c9.chunk.js.map