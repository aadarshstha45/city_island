import{g as B,j as e,d as n,p as H,r as E,f as Y,h as F,o as _,e as Z,k as G,n as T,F as v,a as C,q as d,s as P,T as A}from"./index-1uPE0xTC.js";import{S as V}from"./chunk-NEK3OOAM-CsIjU6c7.js";var[q,z]=B({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function R(t){var a;const r=t.split(" "),o=(a=r[0])!=null?a:"",s=r.length>1?r[r.length-1]:"";return o&&s?`${o.charAt(0)}${s.charAt(0)}`:o.charAt(0)}function k(t){const{name:a,getInitials:r,...o}=t,s=z();return e.jsx(n.div,{role:"img","aria-label":a,...o,__css:s.label,children:a?r==null?void 0:r(a):null})}k.displayName="AvatarName";var S=t=>e.jsxs(n.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...t,children:[e.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),e.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});function I(t){const{src:a,srcSet:r,onError:o,onLoad:s,getInitials:h,name:i,borderRadius:m,loading:f,iconLabel:c,icon:u=e.jsx(S,{}),ignoreFallback:x,referrerPolicy:g,crossOrigin:l}=t,p=H({src:a,onError:o,crossOrigin:l,ignoreFallback:x})==="loaded";return!a||!p?i?e.jsx(k,{className:"chakra-avatar__initials",getInitials:h,name:i}):E.cloneElement(u,{role:"img","aria-label":c}):e.jsx(n.img,{src:a,srcSet:r,alt:i,onLoad:s,referrerPolicy:g,crossOrigin:l??void 0,className:"chakra-avatar__img",loading:f,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:m}})}I.displayName="AvatarImage";var O={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},M=Y((t,a)=>{const r=F("Avatar",t),[o,s]=E.useState(!1),{src:h,srcSet:i,name:m,showBorder:f,borderRadius:c="full",onError:u,onLoad:x,getInitials:g=R,icon:l=e.jsx(S,{}),iconLabel:b=" avatar",loading:p,children:y,borderColor:w,ignoreFallback:W,crossOrigin:L,referrerPolicy:D,...N}=_(t),j={borderRadius:c,borderWidth:f?"2px":void 0,...O,...r.container};return w&&(j.borderColor=w),e.jsx(n.span,{ref:a,...N,className:Z("chakra-avatar",t.className),"data-loaded":G(o),__css:j,children:e.jsxs(q,{value:r,children:[e.jsx(I,{src:h,srcSet:i,loading:p,onLoad:T(x,()=>{s(!0)}),onError:u,getInitials:g,name:m,borderRadius:c,icon:l,iconLabel:b,ignoreFallback:W,crossOrigin:L,referrerPolicy:D}),y]})})});M.displayName="Avatar";const X=[{name:"Brandon P.",role:"Chief Marketing Officer",content:"It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",avatar:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"Krysta B.",role:"Entrepreneur",content:"I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",avatar:"https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{name:"Darcy L.",role:"Movie star",content:"Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"},{name:"Daniel T.",role:"Musician",content:"I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!",avatar:"https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}];function $(t){const{name:a,role:r,content:o,avatar:s}=t;return e.jsxs(v,{boxShadow:"lg",maxW:"640px",flexDir:{base:"column-reverse",md:"row"},width:"full",rounded:"xl",p:10,justifyContent:"space-between",position:"relative",bg:d("white","gray.800"),children:[e.jsxs(v,{direction:"column",textAlign:"left",justifyContent:"space-between",children:[e.jsx(n.p,{fontFamily:"Inter",fontWeight:"medium",fontSize:"15px",pb:4,children:o}),e.jsxs(A,{fontFamily:"Work Sans",fontWeight:"bold",fontSize:14,children:[a,e.jsxs(A,{as:"span",fontFamily:"Inter",fontWeight:"medium",color:"gray.500",children:[" ","- ",r]})]})]}),e.jsx(M,{src:s,height:"80px",width:"80px",alignSelf:"center",m:{base:"0 0 35px 0",md:"0 0 0 50px"}})]})}function Q(){return e.jsxs(v,{textAlign:"center",pt:10,justifyContent:"center",direction:"column",width:"full",overflow:"hidden",children:[e.jsxs(C,{width:{base:"full",sm:"lg",lg:"xl"},margin:"auto",children:[e.jsx(n.h3,{fontFamily:"Work Sans",fontWeight:"bold",fontSize:20,textTransform:"uppercase",color:"purple.400",children:"People love us"}),e.jsx(n.h1,{py:5,fontSize:48,fontFamily:"Work Sans",fontWeight:"bold",color:d("gray.700","gray.50"),children:"You're in good company"}),e.jsxs(n.h2,{margin:"auto",width:"70%",fontFamily:"Inter",fontWeight:"medium",color:d("gray.500","gray.400"),children:["See why over"," ",e.jsx(n.strong,{color:d("gray.700","gray.50"),children:"150,000+"})," ","influencers use EEZY to manage their social media content!"]})]}),e.jsx(V,{columns:{base:1,xl:2},spacing:"20",mt:16,mb:16,mx:"auto",children:X.map((t,a)=>e.jsx($,{...t,index:a},a))}),e.jsx(C,{children:e.jsx(P,{viewBox:"0 0 40 35",mt:14,boxSize:10,color:"purple.400",children:e.jsx("path",{fill:"currentColor",d:"M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"})})})]})}export{Q as default};