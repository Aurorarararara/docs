import{j as o,a5 as p,a6 as u,a7 as c,a8 as l,a9 as f,aa as d,ab as m,ac as h,ad as A,ae as g,X as v,d as P,u as w,l as y,z as C,af as R,ag as _,ah as b,a4 as E}from"./chunks/framework.BS5Zd73-.js";import{R as D}from"./chunks/theme.w6S69URE.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(D),T=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=w();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),_(),b(),s.setup&&s.setup(),()=>E(s.Layout)}});async function j(){const e=O(),a=L();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function L(){return h(T)}function O(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{j as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
