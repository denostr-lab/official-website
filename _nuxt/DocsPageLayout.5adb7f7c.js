import K from"./DocsAside.1913fe52.js";import R from"./ProseCodeInline.75bafdbd.js";import U from"./Alert.86d21bae.js";import G from"./DocsPageBottom.57275663.js";import J from"./DocsPrevNext.ec5c7d26.js";import{a as Q,I as W,b as X,K as Y,e as m,v as V,L as Z,M as ee,N as oe,o as u,c as A,w as h,u as t,f as g,y as r,h as y,s as p,t as te,A as x,z as se,F as ne,m as k,i as ae,O as ce,p as le,q as re,k as _e}from"./entry.9c23c9c2.js";import ie from"./DocsToc.83aee6e1.js";import"./ContentSlot.0f8cf55b.js";import"./ProseA.52708de0.js";import"./EditOnLink.vue.4324b92c.js";import"./DocsTocLinks.61fca048.js";const ue=d=>(le("data-v-19c38a56"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=Q({__name:"DocsPageLayout",setup(d){const{page:n}=W(),{config:f,tree:T}=X(),L=Y(),M=(e,o=!0)=>{var s;return typeof((s=n.value)==null?void 0:s[e])<"u"?n.value[e]:o},P=m(()=>{var e,o,s;return!n.value||((s=(o=(e=n.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:s.length)>0}),S=m(()=>{var e,o,s,c,l;return((e=n.value)==null?void 0:e.toc)!==!1&&((l=(c=(s=(o=n.value)==null?void 0:o.body)==null?void 0:s.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),b=m(()=>{var e,o,s,c,l;return((e=n.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(s=T.value)==null?void 0:s[0])==null?void 0:c.children)==null?void 0:l.length))}),z=m(()=>M("bottom",!0)),_=V(!1),a=V(null),v=()=>L.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,N,w,B,I,$;const s=K,c=R,l=U,F=G,H=J,O=ae,j=ie,q=ce;return u(),A(q,{fluid:(N=(D=t(f))==null?void 0:D.main)==null?void 0:N.fluid,padded:(B=(w=t(f))==null?void 0:w.main)==null?void 0:B.padded,class:k(["docs-page-content",{fluid:($=(I=t(f))==null?void 0:I.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(b)}])},{default:h(()=>[t(b)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(s,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(P)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+se(t(n)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(P)&&t(n)&&t(z)?(u(),g(ne,{key:2},[r(F),r(H)],64)):y("",!0)]),t(S)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=E=>_.value=!t(_))},[fe,r(O,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(j,{onMove:o[1]||(o[1]=E=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Ne=_e(ve,[["__scopeId","data-v-19c38a56"]]);export{Ne as default};
