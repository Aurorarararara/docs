import{_ as l,c as a,o as t,m as i,a as s}from"./chunks/framework.BS5Zd73-.js";const o=JSON.parse('{"title":"12.事件委托","description":"","frontmatter":{},"headers":[],"relativePath":"study/WebApI/事件委托.md","filePath":"study/WebApI/事件委托.md","lastUpdated":null}'),h={name:"study/WebApI/事件委托.md"},k=i("div",null,[i("h1",{id:"_12-事件委托",tabindex:"-1"},[s("12.事件委托 "),i("a",{class:"header-anchor",href:"#_12-事件委托","aria-label":'Permalink to "12.事件委托"'},"​")]),i("ul",null,[i("li",null,"事件委托是利用事件流的特征解决一些开发需求的只是技巧")]),i("p",null,"快递送给80个同学 --> 快递送给班主任 （委托）"),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ul"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">我是第1个小li</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">我是第1个小li</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">	")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">我是第1个小li</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">我是第1个小li</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">我是第1个小li</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"li"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"ul"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	// 不要每个小li注册事件了 而是把事件委托给他的爸爸")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	// 事件委托是给父级添加事件 而不是孩子添加事件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    let ul = document.querySelector('ul')")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	ul.addEventListener('click',function(){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"        alert"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'我点击了'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })	")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("p",null,"总结："),i("ul",null,[i("li",null,"优点：给父级元素加事件(可以提高性能)"),i("li",null,"原理：事件委托其实是利用事件冒泡的特点，给父亲元素添加事件，子元素可以触发"),i("li",null,"实现：事件对象.target可以获得真正触发事件的元素")])],-1),E=[k];function n(e,p,r,d,g,y){return t(),a("div",null,E)}const u=l(h,[["render",n]]);export{o as __pageData,u as default};
