import v from"./TabsHeader.a13ebb76.js";import{a as x,a9 as h,v as n,M as g,o as r,f as l,c as S,u as c,h as y,k}from"./entry.9c23c9c2.js";const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,u=h(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${u.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${u.value}`},p=Object.keys(o).map(t=>({label:t})),d=n(-1),_=n(),s=n(""),a=n(""),b=t=>{a.value=t,s.value=e.src||o[a.value](),localStorage.setItem("docus_sandbox",t)},f=t=>{d.value=t,b(p[t].label)};return g(()=>{a.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[a.value](),d.value=Object.keys(o).indexOf(a.value)}),(t,I)=>{const m=v;return r(),l("div",$,[i.src?y("",!0):(r(),S(m,{key:0,ref_key:"tabs",ref:_,"active-tab-index":c(d),tabs:c(p),"onUpdate:activeTabIndex":f},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}});const O=k(C,[["__scopeId","data-v-7f872710"]]);export{O as default};
