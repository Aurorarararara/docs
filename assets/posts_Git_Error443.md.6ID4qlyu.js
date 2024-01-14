import{_ as s,c as i,o as a,U as t}from"./chunks/framework.oYL9Uvg6.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"posts/Git/Error443.md","filePath":"posts/Git/Error443.md","lastUpdated":null}'),h={name:"posts/Git/Error443.md"},n=t(`<h2 id="报错信息" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息" aria-label="Permalink to &quot;报错信息&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fatal:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> access</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://github.com/xxx.git/&#39;:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OpenSSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SSL_read:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Connection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> was</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> errno</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10054</span></span></code></pre></div><p>or</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fatal:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> access</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://github.com/xxx.git/&#39;:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Timed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> out</span></span></code></pre></div><p>因为git在拉取或者提交项目时，中间会有git的http和https代理，但是我们本地环境本身就有SSL协议了，所以取消git的https代理即可，不行再取消http的代理。</p><p>后续 原因还有一个，当前代理网速过慢，所以偶尔会成功，偶尔失败。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><ol><li></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//取消http代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//取消https代理</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https.proxy</span></span></code></pre></div><ol start="2"><li>科学上网</li></ol>`,10),p=[n];function l(e,k,F,r,d,o){return a(),i("div",null,p)}const C=s(h,[["render",l]]);export{c as __pageData,C as default};
