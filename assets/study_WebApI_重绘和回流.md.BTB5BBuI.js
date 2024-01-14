import{_ as a,c as t,o as e,U as l}from"./chunks/framework.BS5Zd73-.js";const i="/assets/5.sQRQ33Vl.png",f=JSON.parse('{"title":"9.重绘和回流","description":"","frontmatter":{},"headers":[],"relativePath":"study/WebApI/重绘和回流.md","filePath":"study/WebApI/重绘和回流.md","lastUpdated":null}'),o={name:"study/WebApI/重绘和回流.md"},r=l('<div><h1 id="_9-重绘和回流" tabindex="-1">9.重绘和回流 <a class="header-anchor" href="#_9-重绘和回流" aria-label="Permalink to &quot;9.重绘和回流&quot;">​</a></h1><h2 id="浏览器是如何进行界面渲染的" tabindex="-1">浏览器是如何进行界面渲染的 <a class="header-anchor" href="#浏览器是如何进行界面渲染的" aria-label="Permalink to &quot;浏览器是如何进行界面渲染的&quot;">​</a></h2><p><img src="'+i+'" alt="Alt text"></p><ul><li>解析HML，生成DOM树</li><li>同时解析CSS，生成样式规则</li><li>根据DOM树和样式规则，生成渲染树</li><li>进行布局Layout(回流/重排):根据生成的渲染树，得到节点的几何信息(位置，大小)</li><li>进行绘制Painting(重绘)：根据计算和获取的信息进行整个页面的绘制</li><li>Display:展示在这页面上</li></ul><h2 id="重绘和回流-重排" tabindex="-1">重绘和回流(重排) <a class="header-anchor" href="#重绘和回流-重排" aria-label="Permalink to &quot;重绘和回流(重排)&quot;">​</a></h2><ul><li><p>回流(重排)</p><p>当Render Tree（渲染树）中部分或者全部元素的尺寸、结构、布局等发生改变时，浏览器就会重新渲染部分或全部文档的过程称为回流</p></li><li><p>重绘</p></li></ul><p>​ 由于节点（元素）的样式的改变并不影响她的文档流中的位置和文档布局时(比如：color、background-color、outline等)称为重绘</p><p><strong>重绘不一定会引起回流，但回流一定会引起重绘</strong></p></div>',1),s=[r];function n(_,d,c,p,u,h){return e(),t("div",null,s)}const b=a(o,[["render",n]]);export{f as __pageData,b as default};
