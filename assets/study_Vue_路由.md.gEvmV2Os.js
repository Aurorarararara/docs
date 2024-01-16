import{_ as l,c as a,o as h,m as i,a as s}from"./chunks/framework.BS5Zd73-.js";const c=JSON.parse('{"title":"路由","description":"","frontmatter":{},"headers":[],"relativePath":"study/Vue/路由.md","filePath":"study/Vue/路由.md","lastUpdated":1705308995000}'),t={name:"study/Vue/路由.md"},e=i("div",null,[i("h1",{id:"路由",tabindex:"-1"},[s("路由 "),i("a",{class:"header-anchor",href:"#路由","aria-label":'Permalink to "路由"'},"​")]),i("h2",{id:"单页应用程序-spa",tabindex:"-1"},[s("单页应用程序(SPA) "),i("a",{class:"header-anchor",href:"#单页应用程序-spa","aria-label":'Permalink to "单页应用程序(SPA)"'},"​")]),i("p",null,"单页：系统类网站/内部网站/文档类网站/移动端站点"),i("p",null,"多页：公司官网/电商类网站"),i("h2",{id:"介绍",tabindex:"-1"},[s("介绍 "),i("a",{class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},"​")]),i("p",null,[s("生活中的路由：设备和ip的"),i("strong",null,"映射"),s("关系")]),i("p",null,[s("Vue中的路由："),i("strong",null,"路径"),s("和"),i("strong",null,"组件"),s("的"),i("strong",null,"映射"),s("关系")]),i("h2",{id:"vuerounter的介绍",tabindex:"-1"},[s("VueRounter的介绍 "),i("a",{class:"header-anchor",href:"#vuerounter的介绍","aria-label":'Permalink to "VueRounter的介绍"'},"​")]),i("p",null,[s("作用："),i("strong",null,"修改"),s("地址栏路径时，"),i("strong",null,"切换显示"),s("匹配的"),i("strong",null,"组件")]),i("p",null,"基本步骤："),i("p",null,"①下载：下载VueRouetr模块到当前工程，版本3.6.5"),i("div",{class:"language-sh vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"sh"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"yarn"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," add"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," vue-router@3.6.5")])])])]),i("p",null,"②引入"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," VueRouter "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue-router'")])])])]),i("p",null,"③安装注册"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"vue."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(VueRouter)")])])])]),i("p",null,"④创建路由对象"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," router"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," VueRouter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])]),i("p",null,"⑤注入，将路由对象注入到new Vue实例中，建立关联"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Vue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	render"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"h"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"h"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(App),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    router")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$mount"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'#app'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])]),i("p",null,"核心步骤："),i("p",null,"⑥创建需要的组件(views目录)，配置路由规则"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," router"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," VueRouter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	routes:[")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		{ path: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/find'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",component: Find },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		{ path: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/my'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",component: My },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		{ path: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/friend'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",component: Friend }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("p",null,"⑦配置导航，配置路由出口(路径匹配的组件显示的位置)"),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"footer_wrap"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    <a href="#/find">发现音乐</a>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    <a href="#/my">我的音乐</a>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'    <a href="#/friend">朋友</a>')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"top"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <router-view></router-view>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("h2",{id:"路由的封装抽离",tabindex:"-1"},[s("路由的封装抽离 "),i("a",{class:"header-anchor",href:"#路由的封装抽离","aria-label":'Permalink to "路由的封装抽离"'},"​")]),i("p",null,"目标：将路由模块抽离出来"),i("p",null,[s("好处："),i("strong",null,"拆分模块。利于维护")]),i("p",null,[s("写在"),i("code",null,"router/index.js"),s("目录下，由main.js导入")]),i("h2",{id:"声明式导航",tabindex:"-1"},[s("声明式导航 "),i("a",{class:"header-anchor",href:"#声明式导航","aria-label":'Permalink to "声明式导航"'},"​")]),i("h3",{id:"导航链接",tabindex:"-1"},[s("导航链接 "),i("a",{class:"header-anchor",href:"#导航链接","aria-label":'Permalink to "导航链接"'},"​")]),i("p",null,"需求：实现导航高亮效果"),i("p",null,"vue-router提供一个全局组件router-link(取代a标签)"),i("p",null,[s("①"),i("strong",null,"能跳转"),s("，配置to属性指定路径(必须)，本质还是a标签，"),i("strong",null,"to无需#")]),i("p",null,[s("②"),i("strong",null,"能高亮"),s("，默认就会提供"),i("strong",null,"高亮类名"),s("，可以直接设置高亮样式")]),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"footer_wrap"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"router-link"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," to"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/find"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">发现音乐</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"router-link"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"router-link"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," to"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/my"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">我的音乐</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"router-link"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"router-link"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," to"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/friend"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">朋友</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"router-link"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("h3",{id:"两个类名",tabindex:"-1"},[s("两个类名 "),i("a",{class:"header-anchor",href:"#两个类名","aria-label":'Permalink to "两个类名"'},"​")]),i("p",null,[s("说明：我们发现router-link自动给当前导航添加了"),i("strong",null,"两个高亮类名")]),i("p",null,[s("①router-link-active "),i("strong",null,"模糊匹配（用的多）")]),i("p",null,'​ to="/my" 可以匹配 /my /my/a /my/b'),i("p",null,[s("②router-link-exact-active "),i("strong",null,"精确匹配")]),i("p",null,'​ to="/my" 仅可以匹配 /my'),i("p",null,"自定义配置类名:"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," router"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," VueRouter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    routes:["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    linkActiveClass:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"类名1"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    linkExactActiveClass:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"类名2"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("h3",{id:"跳转传参",tabindex:"-1"},[s("跳转传参 "),i("a",{class:"header-anchor",href:"#跳转传参","aria-label":'Permalink to "跳转传参"'},"​")]),i("p",null,"目标：再跳转路由的同时，进行传值"),i("ol",null,[i("li",null,[s("查询参数传参(比较适合传"),i("strong",null,"多个参数"),s(")")])]),i("p",null,"①语法"),i("ul",null,[i("li",null,[s('to="/path?'),i("strong",null,"参数名1=值&参数名2=值"),s('"')])]),i("p",null,"②对应页面组件接收传递过来的值"),i("ul",null,[i("li",null,"$route.query.参数名")]),i("ol",{start:"2"},[i("li",null,"动态路由传参(简洁，传单个参数比较方便)")]),i("p",null,"①配置动态路由"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," router"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," VueRouter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    routes:[")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        ..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        	path:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/search/:words'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        	component: Search")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("p",null,"②配置导航链接"),i("ul",null,[i("li",null,'to="/path/参数值"')]),i("p",null,"③对应页面组件接收传递过来的值"),i("ul",null,[i("li",null,"$route.params.参数名")]),i("p",null,"动态路由可选符"),i("p",null,'问题：配置路由 **path:"/search/:words" **为什么按下面步骤操作，会未匹配到组件，显示空白？'),i("p",null,'原因：/search/:words表示，必须要传参数。如果不传参数，也希望匹配，可以加个可选符"?"'),i("h2",{id:"路由重定向",tabindex:"-1"},[s("路由重定向 "),i("a",{class:"header-anchor",href:"#路由重定向","aria-label":'Permalink to "路由重定向"'},"​")]),i("p",null,"问题：网页打开，url默认是/路径，未匹配到组件时，会出现空白"),i("p",null,"说明：重定向->匹配path后，强制跳转path路径"),i("p",null,"语法："),i("p",null,[i("code",null,"{path: 匹配路径，redirect：重定向到的路径}")]),i("h2",{id:"_404",tabindex:"-1"},[s("404 "),i("a",{class:"header-anchor",href:"#_404","aria-label":'Permalink to "404"'},"​")]),i("p",null,"作用：当路径找不到匹配时，给个提示页面"),i("p",null,"位置：配置在路由最后"),i("p",null,[s("语法："),i("code",null,'path:"*"(任意路径)'),s("-前面不匹配就命中最后这个")]),i("h2",{id:"模式设置",tabindex:"-1"},[s("模式设置 "),i("a",{class:"header-anchor",href:"#模式设置","aria-label":'Permalink to "模式设置"'},"​")]),i("ul",null,[i("li",null,[s("hash路由(默认) 例如："),i("code",null,"http://localhost:8080/#/home")]),i("li",null,[s("history路由(常用) 例如："),i("code",null,"http://localhost:8080/home")])]),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," router"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," VueRouter"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    routes,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    mode:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"history"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("h2",{id:"",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#","aria-label":'Permalink to ""'},"​")]),i("h2",{id:"两种路由的跳转方式",tabindex:"-1"},[s("两种路由的跳转方式 "),i("a",{class:"header-anchor",href:"#两种路由的跳转方式","aria-label":'Permalink to "两种路由的跳转方式"'},"​")]),i("p",null,"①path路径跳转（简易方便）"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".$router."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'路由路径'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".$router."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    path:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'路由路径'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("p",null,"②name命名路由跳转(适合path路径长的场景)"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".$rouetr."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'路由名'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{ "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'路由名'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"path"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/path/xxx'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"component"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":xxx }")])])])]),i("h2",{id:"组件分类",tabindex:"-1"},[s("组件分类 "),i("a",{class:"header-anchor",href:"#组件分类","aria-label":'Permalink to "组件分类"'},"​")]),i("p",null,[s("分类开来"),i("strong",null,"更易维护")]),i("ul",null,[i("li",null,[s("src/views文件夹 "),i("ul",null,[i("li",null,[i("strong",null,"页面组件"),s("-页面展示-配合路由用")])])]),i("li",null,[s("src/components "),i("ul",null,[i("li",null,[i("strong",null,"复用组件"),s("-展示数据-常用于复用")])])])])],-1),n=[e];function k(p,r,E,d,g,u){return h(),a("div",null,n)}const y=l(t,[["render",k]]);export{c as __pageData,y as default};
