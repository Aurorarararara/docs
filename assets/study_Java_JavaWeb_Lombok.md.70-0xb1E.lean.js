import{_ as l,c as a,o as h,m as i,a as s}from"./chunks/framework.BS5Zd73-.js";const o=JSON.parse('{"title":"Lombok","description":"","frontmatter":{},"headers":[],"relativePath":"study/Java/JavaWeb/Lombok.md","filePath":"study/Java/JavaWeb/Lombok.md","lastUpdated":null}'),t={name:"study/Java/JavaWeb/Lombok.md"},k=i("div",null,[i("h1",{id:"lombok",tabindex:"-1"},[s("Lombok "),i("a",{class:"header-anchor",href:"#lombok","aria-label":'Permalink to "Lombok"'},"​")]),i("h2",{id:"基本操作",tabindex:"-1"},[s("基本操作 "),i("a",{class:"header-anchor",href:"#基本操作","aria-label":'Permalink to "基本操作"'},"​")]),i("p",null,"我们发现，在以往编写项目时，尤其是在类进行类内部成员字段封装时，需要编写大量的get/set方法，这不仅使得我们类定义中充满了get和set方法，同时如果字段名称发生改变，又要挨个进行修改，甚至当字段变得很多时，构造方法的编写会非常麻烦！"),i("p",null,"通过使用Lombok（小辣椒）就可以解决这样的问题！"),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Student"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    private"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Integer sid;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    private"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String name;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    private"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String sex;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Student"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Integer "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"sid"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"sex"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"        this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".sid "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sid;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"        this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".name "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," name;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"        this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".sex "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sex;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Integer "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getSid"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {             ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sid;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setSid"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Integer "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"sid"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {     ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"        this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".sid "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sid;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {             ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," name;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"        this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".name "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," name;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getSex"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sex;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setSex"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"sex"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"        this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".sex "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," sex;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("p",null,"使用Lombok之后："),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Getter")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Setter")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"AllArgsConstructor")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Student"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    private"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Integer sid;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    private"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String name;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    private"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String sex;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("p",null,"使用Lombok之后，只需要添加几个注解，就能够解决掉我们之前长长的一串代码！"),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"package"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," com.test;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"String"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[] "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Student student "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Student"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"小明"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"男"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(student."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("h2",{id:"使用lombok",tabindex:"-1"},[s("使用Lombok "),i("a",{class:"header-anchor",href:"#使用lombok","aria-label":'Permalink to "使用Lombok"'},"​")]),i("ul",null,[i("li",null,[s("我们通过添加"),i("code",null,"@Getter"),s("和"),i("code",null,"@Setter"),s("来为当前类的所有字段生成get/set方法，他们可以添加到类或是字段上，注意静态字段不会生成，final字段无法生成set方法。 "),i("ul",null,[i("li",null,"我们还可以使用@Accessors来控制生成Getter和Setter的样式。")])]),i("li",null,[s("我们通过添加"),i("code",null,"@ToString"),s("来为当前类生成预设的toString方法。")]),i("li",null,[s("我们可以通过添加"),i("code",null,"@EqualsAndHashCode"),s("来快速生成比较和哈希值方法。")]),i("li",null,[s("我们可以通过添加"),i("code",null,"@AllArgsConstructor"),s("和"),i("code",null,"@NoArgsConstructor"),s("来快速生成全参构造和无参构造。")]),i("li",null,[s("我们可以添加"),i("code",null,"@RequiredArgsConstructor"),s("来快速生成参数只包含"),i("code",null,"final"),s("或被标记为"),i("code",null,"@NonNull"),s("的成员字段。")]),i("li",null,[s("使用"),i("code",null,"@Data"),s("能代表"),i("code",null,"@Setter"),s("、"),i("code",null,"@Getter"),s("、"),i("code",null,"@RequiredArgsConstructor"),s("、"),i("code",null,"@ToString"),s("、"),i("code",null,"@EqualsAndHashCode"),s("全部注解。 "),i("ul",null,[i("li",null,[s("一旦使用"),i("code",null,"@Data"),s("就不建议此类有继承关系，因为"),i("code",null,"equal"),s("方法可能不符合预期结果（尤其是仅比较子类属性）。")])])]),i("li",null,[s("使用"),i("code",null,"@Value"),s("与"),i("code",null,"@Data"),s("类似，但是并不会生成setter并且成员属性都是final的。")]),i("li",null,[s("使用"),i("code",null,"@SneakyThrows"),s("来自动生成try-catch代码块。")]),i("li",null,[s("使用"),i("code",null,"@Cleanup"),s("作用与局部变量，在最后自动调用其"),i("code",null,"close()"),s("方法（可以自由更换）")]),i("li",null,[s("使用"),i("code",null,"@Builder"),s("来快速生成建造者模式。 "),i("ul",null,[i("li",null,[s("通过使用"),i("code",null,"@Builder.Default"),s("来指定默认值。")]),i("li",null,[s("通过使用"),i("code",null,"@Builder.ObtainVia"),s("来指定默认值的获取方式。")])])])]),i("blockquote",null,[i("p",null,"详细内容见博客Java工具")])],-1),n=[k];function e(E,p,r,d,g,c){return h(),a("div",null,n)}const u=l(t,[["render",e]]);export{o as __pageData,u as default};