import{r as l,R as f,j as i,F as _,a as b,I as w,T as L,L as M}from"./index-C0IUTlp1.js";import{G as S,M as O}from"./index-C1SYQTO_.js";import{C as T}from"./chunk-5MKCW436-7Tebf1Nu.js";import"./chunk-NEK3OOAM-D8P-hedM.js";import"./chunk-ZPFGWTBB-DXV7SpBx.js";import"./chunk-4IH3O7BJ-C1ZT-Hhx.js";const W=r=>{const[t,o]=l.useState(null),[n,e]=l.useState(!0),[s,u]=l.useState(null);return l.useEffect(()=>{fetch(r).then(a=>a.json()).then(a=>{o(a),e(!1)}).catch(a=>{u(a),e(!1)})},[r]),{data:t,loading:n,error:s}};function y(){return y=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r},y.apply(this,arguments)}function P(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,g(r,t)}function g(r,t){return g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},g(r,t)}var x=function(r){P(t,r);function t(){return r.apply(this,arguments)||this}var o=t.prototype;return o.getColumns=function(){var e=this.props,s=e.children,u=e.columnsCount,a=Array.from({length:u},function(){return[]}),c=0;return f.Children.forEach(s,function(d){d&&f.isValidElement(d)&&(a[c%u].push(d),c++)}),a},o.renderColumns=function(){var e=this.props,s=e.gutter,u=e.itemTag,a=e.itemStyle;return this.getColumns().map(function(c,d){return f.createElement(u,{key:d,style:y({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:s},a)},c.map(function(v){return v}))})},o.render=function(){var e=this.props,s=e.gutter,u=e.className,a=e.style,c=e.containerTag;return f.createElement(c,{style:y({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:s},a),className:u},this.renderColumns())},t}(f.Component);x.propTypes={};x.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};var R=1,j=typeof window<"u"?l.useLayoutEffect:l.useEffect,k=function(){var t=l.useState(!1),o=t[0],n=t[1];return j(function(){n(!0)},[]),o},N=function(){var t=k(),o=l.useState(typeof window<"u"?window.innerWidth:0),n=o[0],e=o[1],s=l.useCallback(function(){t&&e(window.innerWidth)},[t]);return j(function(){if(t)return window.addEventListener("resize",s),s(),function(){return window.removeEventListener("resize",s)}},[t,s]),n},C=function(t){var o=t.columnsCountBreakPoints,n=o===void 0?{350:1,750:2,900:3}:o,e=t.children,s=t.className,u=s===void 0?null:s,a=t.style,c=a===void 0?null:a,d=N(),v=l.useMemo(function(){var p=Object.keys(n).sort(function(h,E){return h-E}),m=p.length>0?n[p[0]]:R;return p.forEach(function(h){h<d&&(m=n[h])}),m},[d,n]);return f.createElement("div",{className:u,style:c},f.Children.map(e,function(p,m){return f.cloneElement(p,{key:m,columnsCount:v})}))};C.propTypes={};const U=()=>{const r="35795333-e80e96c5fd05c4e055a498f16",{data:t,loading:o,error:n}=W(`https://pixabay.com/api/?key=${r}&q=restaurant&page=3&per_page=24`);return i.jsxs(_,{flexDir:"column",children:[i.jsxs(b,{position:"relative",children:[i.jsx(w,{src:S,alt:"banner",w:"full",aspectRatio:{base:4/3,sm:16/9,md:16/5},objectFit:"cover"}),i.jsx(L,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"2xl",fontWeight:"bold",children:"Gallery"})]}),i.jsx(T,{maxW:{base:"98vw",sm:"95vw",md:"90vw",xl:"85vw"},py:10,children:o?i.jsx("p",{children:"Loading..."}):n?i.jsx("p",{children:"Error"}):t&&i.jsx(C,{columnsCountBreakPoints:{0:1,550:2,900:3,1200:4},children:i.jsx(x,{gutter:"20px",children:t==null?void 0:t.hits.map(e=>i.jsx(O.Flex,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,ease:"easeOut"},children:i.jsx(M,{to:e.webformatURL,target:"_blank",children:i.jsx(w,{loading:"lazy",src:e.webformatURL,alt:e.tags,borderRadius:10},e.id)},e.id)},e.id))})})})]})};export{U as default};
