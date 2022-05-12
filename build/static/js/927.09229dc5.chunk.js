"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[927],{2927:function(n,t,i){i.r(t),i.d(t,{ContactsPage:function(){return _}});var e=i(1413),r=i(885),a=i(2791),o=i(9782),c=i(4554),s=i(6151),l=i(4741),d=i(6445),u=i(2982),m=i(4942),x=i(3366),p=i(7462),g=i(8182),f=i(1184),h=i(8519),v=i(767),Z=i(7630),b=i(1046);var S=a.createContext(),w=i(5159);function j(n){return(0,w.Z)("MuiGrid",n)}var k=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],C=(0,i(208).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,u.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,u.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,u.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,u.Z)(k.map((function(n){return"grid-xs-".concat(n)}))),(0,u.Z)(k.map((function(n){return"grid-sm-".concat(n)}))),(0,u.Z)(k.map((function(n){return"grid-md-".concat(n)}))),(0,u.Z)(k.map((function(n){return"grid-lg-".concat(n)}))),(0,u.Z)(k.map((function(n){return"grid-xl-".concat(n)}))))),y=i(184),z=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function M(n){var t=parseFloat(n);return"".concat(t).concat(String(n).replace(String(t),"")||"px")}function W(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[i["spacing-xs-".concat(String(n))]||"spacing-xs-".concat(String(n))];var e=n.xs,r=n.sm,a=n.md,o=n.lg,c=n.xl;return[Number(e)>0&&(i["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))),Number(r)>0&&(i["spacing-sm-".concat(String(r))]||"spacing-sm-".concat(String(r))),Number(a)>0&&(i["spacing-md-".concat(String(a))]||"spacing-md-".concat(String(a))),Number(o)>0&&(i["spacing-lg-".concat(String(o))]||"spacing-lg-".concat(String(o))),Number(c)>0&&(i["spacing-xl-".concat(String(c))]||"spacing-xl-".concat(String(c)))]}var N=(0,Z.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,t){var i=n.ownerState,e=i.container,r=i.direction,a=i.item,o=i.lg,c=i.md,s=i.sm,l=i.spacing,d=i.wrap,m=i.xl,x=i.xs,p=i.zeroMinWidth;return[t.root,e&&t.container,a&&t.item,p&&t.zeroMinWidth].concat((0,u.Z)(W(l,e,t)),["row"!==r&&t["direction-xs-".concat(String(r))],"wrap"!==d&&t["wrap-xs-".concat(String(d))],!1!==x&&t["grid-xs-".concat(String(x))],!1!==s&&t["grid-sm-".concat(String(s))],!1!==c&&t["grid-md-".concat(String(c))],!1!==o&&t["grid-lg-".concat(String(o))],!1!==m&&t["grid-xl-".concat(String(m))]])}})((function(n){var t=n.ownerState;return(0,p.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(n){var t=n.theme,i=n.ownerState,e=(0,f.P$)({values:i.direction,breakpoints:t.breakpoints.values});return(0,f.k9)({theme:t},e,(function(n){var t={flexDirection:n};return 0===n.indexOf("column")&&(t["& > .".concat(C.item)]={maxWidth:"none"}),t}))}),(function(n){var t=n.theme,i=n.ownerState,e=i.container,r=i.rowSpacing,a={};if(e&&0!==r){var o=(0,f.P$)({values:r,breakpoints:t.breakpoints.values});a=(0,f.k9)({theme:t},o,(function(n){var i=t.spacing(n);return"0px"!==i?(0,m.Z)({marginTop:"-".concat(M(i))},"& > .".concat(C.item),{paddingTop:M(i)}):{}}))}return a}),(function(n){var t=n.theme,i=n.ownerState,e=i.container,r=i.columnSpacing,a={};if(e&&0!==r){var o=(0,f.P$)({values:r,breakpoints:t.breakpoints.values});a=(0,f.k9)({theme:t},o,(function(n){var i=t.spacing(n);return"0px"!==i?(0,m.Z)({width:"calc(100% + ".concat(M(i),")"),marginLeft:"-".concat(M(i))},"& > .".concat(C.item),{paddingLeft:M(i)}):{}}))}return a}),(function(n){var t,i=n.theme,e=n.ownerState;return i.breakpoints.keys.reduce((function(n,r){var a={};if(e[r]&&(t=e[r]),!t)return n;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,f.P$)({values:e.columns,breakpoints:i.breakpoints.values}),c="object"===typeof o?o[r]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(t/c*1e8)/1e6,"%"),l={};if(e.container&&e.item&&0!==e.columnSpacing){var d=i.spacing(e.columnSpacing);if("0px"!==d){var u="calc(".concat(s," + ").concat(M(d),")");l={flexBasis:u,maxWidth:u}}}a=(0,p.Z)({flexBasis:s,flexGrow:0,maxWidth:s},l)}return 0===i.breakpoints.values[r]?Object.assign(n,a):n[i.breakpoints.up(r)]=a,n}),{})})),L=a.forwardRef((function(n,t){var i=(0,b.Z)({props:n,name:"MuiGrid"}),e=(0,h.Z)(i),r=e.className,o=e.columns,c=e.columnSpacing,s=e.component,l=void 0===s?"div":s,d=e.container,m=void 0!==d&&d,f=e.direction,Z=void 0===f?"row":f,w=e.item,k=void 0!==w&&w,C=e.lg,M=void 0!==C&&C,L=e.md,F=void 0!==L&&L,P=e.rowSpacing,R=e.sm,A=void 0!==R&&R,B=e.spacing,G=void 0===B?0:B,T=e.wrap,I=void 0===T?"wrap":T,V=e.xl,$=void 0!==V&&V,E=e.xs,D=void 0!==E&&E,H=e.zeroMinWidth,J=void 0!==H&&H,q=(0,x.Z)(e,z),O=P||G,_=c||G,K=a.useContext(S),Q=m?o||12:K,U=(0,p.Z)({},e,{columns:Q,container:m,direction:Z,item:k,lg:M,md:F,sm:A,rowSpacing:O,columnSpacing:_,wrap:I,xl:$,xs:D,zeroMinWidth:J}),X=function(n){var t=n.classes,i=n.container,e=n.direction,r=n.item,a=n.lg,o=n.md,c=n.sm,s=n.spacing,l=n.wrap,d=n.xl,m=n.xs,x={root:["root",i&&"container",r&&"item",n.zeroMinWidth&&"zeroMinWidth"].concat((0,u.Z)(W(s,i)),["row"!==e&&"direction-xs-".concat(String(e)),"wrap"!==l&&"wrap-xs-".concat(String(l)),!1!==m&&"grid-xs-".concat(String(m)),!1!==c&&"grid-sm-".concat(String(c)),!1!==o&&"grid-md-".concat(String(o)),!1!==a&&"grid-lg-".concat(String(a)),!1!==d&&"grid-xl-".concat(String(d))])};return(0,v.Z)(x,j,t)}(U);return(0,y.jsx)(S.Provider,{value:Q,children:(0,y.jsx)(N,(0,p.Z)({ownerState:U,className:(0,g.Z)(X.root,r),as:l,ref:t},q))})})),F=i(9003),P=i(4039),R=i(3044),A=i(890),B=i(7247),G=i(8843),T=i(2739),I=i(4419),V=i(2003),$=i(5705),E=i(971),D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"300px",sm:"400px"},bgcolor:"background.paper",border:"2px solid #1976d2",borderRadius:"10px",boxShadow:24,p:4},H=function(n){var t=n.showModal,i=n.onClose,a=n.id,l=(0,o.Lr)(),d=(0,r.Z)(l,1)[0],u=(0,o.i)(),m=(0,r.Z)(u,1)[0],x=function(n){var t=(0,o.Jx)().data;return{fields:n?(0,e.Z)({title:"Edit contact: "},t.find((function(t){return t.id===n}))):{title:"Add Contact : ",name:"Sebastian Pereiro",number:"+38(000)000-00-00"},contacts:t}}(a),p=x.fields,g=x.contacts,f=p.title,h=p.name,v=p.number;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(I.Z,{"aria-labelledby":"Add or Edit Contact",open:t,onClose:function(){return i()},closeAfterTransition:!0,BackdropComponent:T.Z,BackdropProps:{timeout:500},children:(0,y.jsx)(V.Z,{in:t,children:(0,y.jsxs)(c.Z,{sx:D,children:[(0,y.jsx)(A.Z,{textAlign:"center",sx:{paddingTop:"16px",fontSize:"20px",color:"#1976d2"},children:"".concat(f)}),(0,y.jsx)($.J9,{initialValues:{name:h,number:v},validate:function(n){var t={};return n.name?0===g.filter((function(t){return t.name.toLowerCase().trim()===n.name.toLowerCase().trim()})).length||a||(t.name="This name is already in the list"):t.name="Required",n.number?/^(\+)?([- _():=+]?\d[- _():=+]?){10,14}$/i.test(n.number)||(t.number="Invalid phone number"):t.number="Required",t},onSubmit:function(n){!a&&d((0,e.Z)({},n)),a&&m((0,e.Z)({id:a},n)),i()},children:function(n){var t=n.submitForm,e=n.isSubmitting;return(0,y.jsx)(c.Z,{sx:{padding:{xs:"16px",sm:"16px 24px"},display:"flex",justifyContent:"center"},children:(0,y.jsxs)($.l0,{children:[(0,y.jsx)(c.Z,{sx:{height:"75px",marginTop:"15px"},children:(0,y.jsx)($.gN,{component:E.n,name:"name",type:"name",label:"Name",size:"small",placeholder:"".concat(h)})}),(0,y.jsx)(c.Z,{sx:{height:"75px"},children:(0,y.jsx)($.gN,{component:E.n,type:"tel",label:"Phone number",name:"number",size:"small",placeholder:"".concat(v)})}),(0,y.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,y.jsx)(s.Z,{variant:"contained",color:"primary",disabled:e,onClick:t,sx:{marginRight:"16px"},children:"Submit"}),(0,y.jsx)(s.Z,{variant:"contained",color:"primary",onClick:function(){return i()},children:"Cancel"})]})]})})}})]})})})})},J=function(n){var t=n.id,i=n.name,l=n.number,d=(0,o.Nt)(),u=(0,r.Z)(d,2),m=u[0],x=u[1].isLoading,p=(0,a.useState)(!1),g=(0,r.Z)(p,2),f=g[0],h=g[1];return(0,y.jsxs)(L,{item:!0,xs:4,sm:4,md:4,lg:3,children:[(0,y.jsxs)(c.Z,{sx:{border:"1px solid grey",width:"100%",display:"flex",alignItems:"center",padding:"16px",borderRadius:"5px"},children:[(0,y.jsx)(R.Z,(0,e.Z)({"aria-label":"Avatar"},(0,G.G)(i))),(0,y.jsxs)(c.Z,{sx:{marginLeft:"16px",width:"100%"},children:[(0,y.jsx)(A.Z,{variant:"subtitle1",component:"div",children:i}),(0,y.jsx)(A.Z,{sx:{marginBottom:"10px"},variant:"subtitle1",component:"div",children:l}),(0,y.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,y.jsx)(s.Z,{variant:"outlined",size:"small",sx:{marginRight:"10px"},onClick:function(){return h(!0)},children:"Edit"}),(0,y.jsx)(s.Z,{type:"button",variant:"outlined",size:"small",color:"error",onClick:function(){m({id:t,name:i})},disabled:x,startIcon:(0,y.jsx)(B.Z,{}),children:"Delete"})]})]})]}),f&&(0,y.jsx)(H,{showModal:!0,onClose:function(){return h(!1)},id:t})]})},q=function(){var n=(0,a.useState)(""),t=(0,r.Z)(n,2),i=t[0],u=t[1],m=function(n){var t=(0,a.useState)(null),i=(0,r.Z)(t,2),e=i[0],c=i[1],s=(0,o.Jx)(),l=s.data,d=s.isFetching,u=s.isLoading;return(0,a.useEffect)((function(){c(""!==n?l.filter((function(t){return t.name.toLowerCase().includes(n)})):l)}),[l,n]),{list:e,isFetching:d,isLoading:u}}(i),x=m.list,p=m.isFetching,g=m.isLoading,f=(0,a.useState)(!1),h=(0,r.Z)(f,2),v=h[0],Z=h[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(c.Z,{sx:{padding:{xs:"16px",sm:"24px"},display:"flex"},children:[(0,y.jsx)(s.Z,{variant:"contained",size:"small",sx:{display:{xs:"none",md:"flex"}},onClick:function(){return Z(!0)},children:"Add contact..."}),(0,y.jsx)(s.Z,{variant:"contained",size:"small","aria-label":"Add contact",sx:{position:"fixed",bottom:"16px",right:"16px",display:{xs:"flex",md:"none"}},onClick:function(){return Z(!0)},children:(0,y.jsx)(F.Z,{sx:{color:"white",fontSize:25}})}),x&&(0,y.jsx)(l.Z,{onChange:function(n){return u(n.target.value.toLowerCase().trim())},label:"Input search name...",type:"search",variant:"standard",size:"small",sx:{marginLeft:"20px"}})]}),p&&(0,y.jsx)(P.W0,{color:"#00BFFF",height:80,width:80}),x&&!p&&!g&&(0,y.jsx)(d.Z,{sx:{padding:"16px"},children:(0,y.jsx)(L,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12,lg:12},children:x.map((function(n){return(0,y.jsx)(J,(0,e.Z)({},n),n.id)}))})}),v&&(0,y.jsx)(H,{showModal:!0,onClose:function(){return Z(!1)},id:null})]})},O=i(6871),_=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)(q,{}),(0,y.jsx)(O.j3,{})]})}},9003:function(n,t,i){var e=i(5318);t.Z=void 0;var r=e(i(5649)),a=i(184),o=(0,r.default)((0,a.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall");t.Z=o},7247:function(n,t,i){var e=i(5318);t.Z=void 0;var r=e(i(5649)),a=i(184),o=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o}}]);
//# sourceMappingURL=927.09229dc5.chunk.js.map