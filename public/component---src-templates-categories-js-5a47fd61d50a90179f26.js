(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{m0YG:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),i=n("vOnD"),l=n("Bl7J"),r=n("vrFN"),c=n("YwZP"),m=function(e){return a.a.createElement("div",null,a.a.createElement(s,null,a.a.createElement(c.Link,{to:"p/"+e.slug},a.a.createElement(d,{srcSet:e.image}))),a.a.createElement(g,null,a.a.createElement(c.Link,{to:"p/"+e.slug},e.title)),a.a.createElement(c.Link,{style:{textDecoration:"none"},to:"p/"+e.slug},a.a.createElement(p,null,e.text)))},s=i.a.div.withConfig({displayName:"Post__BoxImagePost",componentId:"q8t9sj-0"})(["display:block;position:relative;z-index:1;margin-bottom:20px;text-align:center;a{display:block;position:relative;z-index:1;overflow:hidden;}"]),d=i.a.img.withConfig({displayName:"Post__ImagePost",componentId:"q8t9sj-1"})(["min-height:210px;max-height:210px;border-radius:0.2em;width:100%;opacity:1;transition:all 0.3s ease;backface-visibility:hidden;margin-bottom:-7px;:hover{transform:scale3d(1.05,1.05,1.05);}"]),g=i.a.p.withConfig({displayName:"Post__TitlePost",componentId:"q8t9sj-2"})(["font-size:22px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:normal;color:#242d3c;a{text-decoration:none;color:#242d3c;padding:1em 0;}@media (max-width:1200px){max-width:20em;}"]),p=i.a.p.withConfig({displayName:"Post__TextPost",componentId:"q8t9sj-3"})(["font-size:16px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.56;letter-spacing:normal;color:#999;@media (max-width:1200px){max-width:25em;}"]),h=function(e){return a.a.createElement(u,null,a.a.createElement(f,{style:{color:e.colorTitleCategory}},e.titleCategory))},u=i.a.div.withConfig({displayName:"ContentTitle__ContainerTitlePage",componentId:"sc-1gy91qu-0"})([""]),f=i.a.h1.withConfig({displayName:"ContentTitle__TitlePage",componentId:"sc-1gy91qu-1"})(["margin:0;font-size:38px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:normal;color:#666;"]);n("L6NH");n.d(t,"query",(function(){return C}));t.default=function(e){var t=e.data,n=Object(o.useState)(!1),i=n[0],c=n[1],s=Object(o.useState)(12),d=s[0],g=s[1],p=t.allContentfulPost.edges,u=p.slice(0,1)[0]||"Categorias";function f(){var e=document.querySelector("#containerList");e.scrollTop+e.clientHeight-window.scrollY<=500&&c(!0)}Object(o.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[]),Object(o.useEffect)((function(){i&&setTimeout((function(){C.length<p.length?(g(d+12),c(!1)):c(!1)}),500)}),[i]);var C=p.slice(0,d);return a.a.createElement(l.a,null,a.a.createElement(w,null,a.a.createElement(r.a,{title:u.node.category.category}),a.a.createElement(h,{titleCategory:u.node.category.category}),0===C.length?a.a.createElement(y,null,"Não há nenhum conteúdo para essa categoria !"):a.a.createElement(x,{id:"containerList"},C.map((function(e,t){return a.a.createElement(m,{slug:e.node.slug,key:t,image:e.node.imagePost?e.node.imagePost.fluid.srcSet:"",title:e.node.title,id:e.node.id,text:e.node.content.json.content[0].content[0].value.length>110?e.node.content.json.content[0].content[0].value.substring(0,110)+"...":e.node.content.json.content[0].content[0].value})}))),i&&C.length<p.length?a.a.createElement(v,null,"Carregando mais artigos..."):""))};var w=i.a.div.withConfig({displayName:"categories__Container",componentId:"sc-13dtebk-0"})(["padding:2em;margin:0 auto;max-width:1300px;min-height:100vh;"]),x=(i.a.p.withConfig({displayName:"categories__SubTitlePage",componentId:"sc-13dtebk-1"})(["margin-top:1em;max-width:500px;width:100%;font-size:18px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.61;letter-spacing:normal;color:#585f6b;"]),i.a.div.withConfig({displayName:"categories__ContainerPosts",componentId:"sc-13dtebk-2"})(["margin-top:2.5em;display:grid;grid-gap:2.5em;grid-template-columns:1fr 1fr 1fr;@media (max-width:1200px){grid-template-columns:1fr 1fr;}@media (max-width:700px){grid-template-columns:1fr;}@media (max-width:320px){margin-top:4.5em;}"])),y=i.a.h1.withConfig({displayName:"categories__NotFoundMessage",componentId:"sc-13dtebk-3"})(["margin-top:3em;font-size:2em;text-align:center;"]),v=i.a.h2.withConfig({displayName:"categories__LoadingArticles",componentId:"sc-13dtebk-4"})(["color:#fc5171;margin-top:1em;text-align:center;"]),C="2286792248"}}]);
//# sourceMappingURL=component---src-templates-categories-js-5a47fd61d50a90179f26.js.map