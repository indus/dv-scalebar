import{_ as t,c as l,a0 as i,j as s,o as h}from"./chunks/framework.CGHvQLJz.js";const E=JSON.parse('{"title":"Ticks","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ticks.md","filePath":"docs/ticks.md"}'),e={name:"docs/ticks.md"};function k(n,a,p,r,d,o){return h(),l("div",null,a[0]||(a[0]=[i('<h1 id="ticks" tabindex="-1">Ticks <a class="header-anchor" href="#ticks" aria-label="Permalink to &quot;Ticks&quot;">​</a></h1><p>The <a href="/docs/ticks.html"><code>ticks</code></a> attribute adds ticks to the scalebar. You can either provide an integer value to set the number of evenly spaced ticks or specify specific positions for placing the ticks.</p><p>If the <a href="/docs/labels.html"><code>labels</code></a> or <a href="/docs/classes.html"><code>classes</code></a> attributes are already present, and the number and positions of ticks match those, you can simply add an empty <a href="/docs/ticks.html"><code>ticks</code></a> attribute.</p><h2 id="no-value" tabindex="-1">No Value <a class="header-anchor" href="#no-value" aria-label="Permalink to &quot;No Value&quot;">​</a></h2><p>The <a href="/docs/ticks.html"><code>ticks</code></a> attribute without a value adds a tick at the minimum and maximum values.</p><p><strong>Code</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Viridis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Result</strong></p>',8),s("dv-scalebar",{colors:"Viridis",ticks:""},null,-1),i(`<h2 id="single-value" tabindex="-1">Single Value <a class="header-anchor" href="#single-value" aria-label="Permalink to &quot;Single Value&quot;">​</a></h2><p>A single integer value for the <a href="/docs/ticks.html"><code>ticks</code></a> attribute adds that number of ticks to the scalebar.</p><p><strong>Code</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Viridis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Viridis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Viridis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Viridis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;15&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Result</strong></p>`,5),s("dv-scalebar",{colors:"Viridis",ticks:"1"},null,-1),s("dv-scalebar",{colors:"Viridis",ticks:"3"},null,-1),s("dv-scalebar",{colors:"Viridis",ticks:"4"},null,-1),s("dv-scalebar",{colors:"Viridis",ticks:"15"},null,-1),i(`<h2 id="multiple-values" tabindex="-1">Multiple Values <a class="header-anchor" href="#multiple-values" aria-label="Permalink to &quot;Multiple Values&quot;">​</a></h2><p>Multiple values between 0 and 1 for the <a href="/docs/ticks.html"><code>ticks</code></a> attribute allow you to position them along the scalebar.</p><p><strong>Code</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Viridis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0,.4,.6,1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Viridis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0,.1,.3,.6,1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dv-scalebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Result</strong></p>`,5),s("dv-scalebar",{colors:"Viridis",ticks:"0,.4,.6,1"},null,-1),s("dv-scalebar",{colors:"Viridis",ticks:"0,.1,.3,.6,1"},null,-1)]))}const g=t(e,[["render",k]]);export{E as __pageData,g as default};