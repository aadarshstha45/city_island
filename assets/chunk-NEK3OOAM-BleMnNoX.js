import{f as p,j as d,e as R,w as T,v as c,x as h}from"./index-B3S855Hh.js";var g=p(function(t,r){const{templateAreas:s,gap:n,rowGap:a,columnGap:i,column:e,row:m,autoFlow:u,autoRows:l,templateRows:w,autoColumns:G,templateColumns:f,...x}=t,C={display:"grid",gridTemplateAreas:s,gridGap:n,gridRowGap:a,gridColumnGap:i,gridAutoColumns:G,gridColumn:e,gridRow:m,gridAutoFlow:u,gridAutoRows:l,gridTemplateRows:w,gridTemplateColumns:f};return d.jsx(R.div,{ref:r,__css:C,...x})});g.displayName="Grid";var y=p(function(t,r){const{columns:s,spacingX:n,spacingY:a,spacing:i,minChildWidth:e,...m}=t,u=T(),l=e?j(e,u):S(s);return d.jsx(g,{ref:r,gap:i,columnGap:n,rowGap:a,templateColumns:l,...m})});y.displayName="SimpleGrid";function A(o){return typeof o=="number"?`${o}px`:o}function j(o,t){return c(o,r=>{const s=h("sizes",r,A(r))(t);return r===null?null:`repeat(auto-fit, minmax(${s}, 1fr))`})}function S(o){return c(o,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}export{g as G,y as S};
