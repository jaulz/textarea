"use strict";(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[433],{54239:function(de,g,e){e.r(g),e.d(g,{default:function(){return b}});var O=e(5574),u=e.n(O),y=e(39595),E=e(67294),r=e(85893);function b(){var W=(0,E.useState)(`hello
world`),l=u()(W,2),j=l[0],M=l[1],T=function(U){var d=U.target.value;M(d)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Uncontrolled"}),(0,r.jsx)(y.Z,{autoSize:!0,allowClear:!0}),(0,r.jsx)("p",{children:"controlled"}),(0,r.jsx)(y.Z,{value:j,onChange:T,allowClear:!0})]})}},31797:function(de,g,e){e.r(g),e.d(g,{default:function(){return b}});var O=e(5574),u=e.n(O),y=e(67294),E=e(39595),r=e(85893);function b(){var W=(0,y.useState)(`hello
world`),l=u()(W,2),j=l[0],M=l[1],T=function(d){var p=d.target.value;M(p)},z=function(d){var p=d.width,D=d.height;console.log("size is changed, width:".concat(p," height:").concat(D))};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"when set to true"}),(0,r.jsx)(E.Z,{autoSize:!0,onResize:z,value:j,onChange:T}),(0,r.jsx)("p",{children:"when set to object of minRows and maxRows"}),(0,r.jsx)(E.Z,{autoSize:{minRows:5,maxRows:15},onResize:z,value:j,onChange:T})]})}},39919:function(de,g,e){e.r(g),e.d(g,{default:function(){return b}});var O=e(5574),u=e.n(O),y=e(39595),E=e(67294),r=e(85893);function b(){var W=(0,E.useState)(`hello
world`),l=u()(W,2),j=l[0],M=l[1],T=function(U){var d=U.target.value;M(d)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Uncontrolled"}),(0,r.jsx)(y.Z,{autoSize:!0,showCount:!0}),(0,r.jsx)("p",{children:"controlled"}),(0,r.jsx)(y.Z,{value:j,onChange:T,showCount:!0,maxLength:100})]})}},11289:function(de,g,e){e.r(g),e.d(g,{default:function(){return b}});var O=e(5574),u=e.n(O),y=e(67294),E=e(39595),r=e(85893);function b(){var W=(0,y.useState)(""),l=u()(W,2),j=l[0],M=l[1],T=function(p){var D=p.target.value;console.log(p.target.value),M(D)},z=function(p){var D=p.width,ce=p.height;console.log("size is changed, width:".concat(D," height:").concat(ce))},U=function(p){console.log("enter key is pressed")};return(0,r.jsx)("div",{children:(0,r.jsx)(E.Z,{prefixCls:"custom-textarea",onPressEnter:U,onResize:z,value:j,onChange:T,autoFocus:!0,onFocus:function(){return console.log("focus")}})})}},39595:function(de,g,e){e.d(g,{Z:function(){return Ze}});var O=e(97857),u=e.n(O),y=e(9783),E=e.n(y),r=e(52677),b=e.n(r),W=e(5574),l=e.n(W),j=e(13769),M=e.n(j),T=e(19632),z=e.n(T),U=e(94184),d=e.n(U),p=e(59775),D=e(80133),ce=e(60869),c=e(67294),De=e(9220),ze=e(82546),Pe=e(64543),Ie=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Oe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],he={},C;function We(t){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=t.getAttribute("id")||t.getAttribute("data-reactid")||t.getAttribute("name");if(x&&he[n])return he[n];var o=window.getComputedStyle(t),v=o.getPropertyValue("box-sizing")||o.getPropertyValue("-moz-box-sizing")||o.getPropertyValue("-webkit-box-sizing"),_=parseFloat(o.getPropertyValue("padding-bottom"))+parseFloat(o.getPropertyValue("padding-top")),R=parseFloat(o.getPropertyValue("border-bottom-width"))+parseFloat(o.getPropertyValue("border-top-width")),i=Oe.map(function(s){return"".concat(s,":").concat(o.getPropertyValue(s))}).join(";"),A={sizingStyle:i,paddingSize:_,borderSize:R,boxSizing:v};return x&&n&&(he[n]=A),A}function Ue(t){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;C||(C=document.createElement("textarea"),C.setAttribute("tab-index","-1"),C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),t.getAttribute("wrap")?C.setAttribute("wrap",t.getAttribute("wrap")):C.removeAttribute("wrap");var v=We(t,x),_=v.paddingSize,R=v.borderSize,i=v.boxSizing,A=v.sizingStyle;C.setAttribute("style","".concat(A,";").concat(Ie)),C.value=t.value||t.placeholder||"";var s=void 0,S=void 0,L,f=C.scrollHeight;if(i==="border-box"?f+=R:i==="content-box"&&(f-=_),n!==null||o!==null){C.value=" ";var J=C.scrollHeight-_;n!==null&&(s=J*n,i==="border-box"&&(s=s+_+R),f=Math.max(s,f)),o!==null&&(S=J*o,i==="border-box"&&(S=S+_+R),L=f>S?"":"hidden",f=Math.min(S,f))}var P={height:f,overflowY:L,resize:"none"};return s&&(P.minHeight=s),S&&(P.maxHeight=S),P}var H=e(85893),Le=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],ge=0,xe=1,Se=2,Be=c.forwardRef(function(t,x){var n=t,o=n.prefixCls,v=n.onPressEnter,_=n.defaultValue,R=n.value,i=n.autoSize,A=n.onResize,s=n.className,S=n.style,L=n.disabled,f=n.onChange,J=n.onInternalAutoSize,P=M()(n,Le),ae=(0,ce.Z)(_,{value:R,postState:function(m){return m!=null?m:""}}),Y=l()(ae,2),Ee=Y[0],G=Y[1],X=function(m){G(m.target.value),f==null||f(m)},B=c.useRef();c.useImperativeHandle(x,function(){return{textArea:B.current}});var F=c.useMemo(function(){return i&&b()(i)==="object"?[i.minRows,i.maxRows]:[]},[i]),V=l()(F,2),Q=V[0],ve=V[1],k=!!i,q=function(){try{if(document.activeElement===B.current){var m=B.current,_e=m.selectionStart,Re=m.selectionEnd,Ae=m.scrollTop;B.current.setSelectionRange(_e,Re),B.current.scrollTop=Ae}}catch(Me){}},re=c.useState(Se),Z=l()(re,2),N=Z[0],ee=Z[1],pe=c.useState(),te=l()(pe,2),Ce=te[0],fe=te[1],oe=function(){ee(ge)};(0,ze.default)(function(){k&&oe()},[R,Q,ve,k]),(0,ze.default)(function(){if(N===ge)ee(xe);else if(N===xe){var K=Ue(B.current,!1,Q,ve);ee(Se),fe(K)}else q()},[N]);var se=c.useRef(),ne=function(){Pe.Z.cancel(se.current)},le=function(m){N===Se&&(A==null||A(m),i&&(ne(),se.current=(0,Pe.Z)(function(){oe()})))};c.useEffect(function(){return ne},[]);var me=k?Ce:null,$=u()(u()({},S),me);return(N===ge||N===xe)&&($.overflowY="hidden",$.overflowX="hidden"),(0,H.jsx)(De.Z,{onResize:le,disabled:!(i||A),children:(0,H.jsx)("textarea",u()(u()({},P),{},{ref:B,style:$,className:d()(o,s,E()({},"".concat(o,"-disabled"),L)),disabled:L,value:Ee,onChange:X}))})}),Ve=Be,Ke=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled","hidden","classNames","styles"];function be(t,x){return z()(t||"").slice(0,x).join("")}function je(t,x,n,o){var v=n;return t?v=be(n,o):z()(x||"").length<n.length&&z()(n||"").length>o&&(v=x),v}var we=c.forwardRef(function(t,x){var n,o=t.defaultValue,v=t.value,_=t.onFocus,R=t.onBlur,i=t.onChange,A=t.allowClear,s=t.maxLength,S=t.onCompositionStart,L=t.onCompositionEnd,f=t.suffix,J=t.prefixCls,P=J===void 0?"rc-textarea":J,ae=t.classes,Y=t.showCount,Ee=t.className,G=t.style,X=t.disabled,B=t.hidden,F=t.classNames,V=t.styles,Q=M()(t,Ke),ve=(0,ce.Z)(o,{value:v,defaultValue:o}),k=l()(ve,2),q=k[0],re=k[1],Z=(0,c.useRef)(null),N=c.useState(!1),ee=l()(N,2),pe=ee[0],te=ee[1],Ce=c.useState(!1),fe=l()(Ce,2),oe=fe[0],se=fe[1],ne=c.useRef(),le=c.useRef(0),me=function(){Z.current.textArea.focus()};(0,c.useImperativeHandle)(x,function(){return{resizableTextArea:Z.current,focus:me,blur:function(){Z.current.textArea.blur()}}}),(0,c.useEffect)(function(){te(function(I){return!X&&I})},[X]);var $=Number(s)>0,K=function(a){se(!0),ne.current=q,le.current=a.currentTarget.selectionStart,S==null||S(a)},m=function(a){se(!1);var h=a.currentTarget.value;if($){var w,He=le.current>=s+1||le.current===((w=ne.current)===null||w===void 0?void 0:w.length);h=je(He,ne.current,h,s)}h!==q&&(re(h),(0,D.rJ)(a.currentTarget,a,i,h)),L==null||L(a)},_e=function(a){var h=a.target.value;if(!oe&&$){var w=a.target.selectionStart>=s+1||a.target.selectionStart===h.length||!a.target.selectionStart;h=je(w,q,h,s)}re(h),(0,D.rJ)(a.currentTarget,a,i,h)},Re=function(a){var h=Q.onPressEnter,w=Q.onKeyDown;a.key==="Enter"&&h&&h(a),w==null||w(a)},Ae=function(a){te(!0),_==null||_(a)},Me=function(a){te(!1),R==null||R(a)},Ne=function(a){re(""),me(),(0,D.rJ)(Z.current.textArea,a,i)},ie=(0,D.D7)(q);!oe&&$&&v==null&&(ie=be(ie,s));var ye=f,ue;if(Y){var Te=z()(ie).length;b()(Y)==="object"?ue=Y.formatter({value:ie,count:Te,maxLength:s}):ue="".concat(Te).concat($?" / ".concat(s):""),ye=(0,H.jsxs)(H.Fragment,{children:[ye,(0,H.jsx)("span",{className:d()("".concat(P,"-data-count"),F==null?void 0:F.count),style:V==null?void 0:V.count,children:ue})]})}var $e=(0,H.jsx)(p.Q,{value:ie,allowClear:A,handleReset:Ne,suffix:ye,prefixCls:P,classes:{affixWrapper:d()(ae==null?void 0:ae.affixWrapper,(n={},E()(n,"".concat(P,"-show-count"),Y),E()(n,"".concat(P,"-textarea-allow-clear"),A),n))},disabled:X,focused:pe,className:Ee,style:G,dataAttrs:{affixWrapper:{"data-count":typeof ue=="string"?ue:void 0}},hidden:B,inputElement:(0,H.jsx)(Ve,u()(u()({},Q),{},{onKeyDown:Re,onChange:_e,onFocus:Ae,onBlur:Me,onCompositionStart:K,onCompositionEnd:m,className:F==null?void 0:F.textarea,style:u()(u()({},V==null?void 0:V.textarea),{},{resize:G==null?void 0:G.resize}),disabled:X,prefixCls:P,ref:Z}))});return $e}),Fe=we,Ze=Fe}}]);
