import{_ as l,c as a,o as n,m as i,a as s}from"./chunks/framework.BS5Zd73-.js";const u=JSON.parse('{"title":"6. 注解","description":"","frontmatter":{},"headers":[],"relativePath":"study/Java/JavaSE/注解.md","filePath":"study/Java/JavaSE/注解.md","lastUpdated":null}'),t={name:"study/Java/JavaSE/注解.md"},h=i("div",null,[i("h1",{id:"_6-注解",tabindex:"-1"},[s("6. 注解 "),i("a",{class:"header-anchor",href:"#_6-注解","aria-label":'Permalink to "6. 注解"'},"​")]),i("h2",{id:"_6-1-基本介绍",tabindex:"-1"},[s("6.1 基本介绍 "),i("a",{class:"header-anchor",href:"#_6-1-基本介绍","aria-label":'Permalink to "6.1 基本介绍"'},"​")]),i("ol",null,[i("li",null,"注解(Annotation)也被称为元数据，用于修饰解释 包、类、方法、属性、构造器、局部变量等数据信息"),i("li",null,"和注释一样，注解不影响程序逻辑，但注解可以被编译或运行，相当于嵌入再代码中的补充信息"),i("li",null,"在JavaSE中，注解的使用的目的比较简单，例如标记过的功能，忽略警告等。在JavaEE中注解占据了更重要的角色，例如用来配置应用程序的任何页面，代替Java EE旧版的繁杂代码和XML配置等")]),i("h2",{id:"_6-2-基本的annotation介绍",tabindex:"-1"},[s("6.2 基本的Annotation介绍 "),i("a",{class:"header-anchor",href:"#_6-2-基本的annotation介绍","aria-label":'Permalink to "6.2 基本的Annotation介绍"'},"​")]),i("p",null,"使用Annotation时要在前面增加@符号，并把该Annotation当成一个修饰符使用。用于修饰它支持的程序元素 ->三个基本的Annotation"),i("ol",null,[i("li",null,"@Override:限定某个方法，是重写父类方法，该注解只能用于方法"),i("li",null,"@Deprecated:用于表示某个程序元素(类，方法等)已过时"),i("li",null,"@SuppressWarnings:抑制编译器警告")]),i("h3",{id:"_6-2-1-override",tabindex:"-1"},[s("6.2.1 @Override "),i("a",{class:"header-anchor",href:"#_6-2-1-override","aria-label":'Permalink to "6.2.1 @Override"'},"​")]),i("p",null,"Override使用说明"),i("ol",null,[i("li",null,"@Override表示只当重写父类的方法(从编译层面验证)，如果父类没有fly方法，则会报错"),i("li",null,"如果不屑@Override注解，而父类仍有public void fly(){},则仍然构成重写"),i("li",null,"@Override 只修饰方法，不能修饰其他类，包，属性等等"),i("li",null,"查看@Override注解源码为@Target(ElementType.METHOD),说明只能修饰方法"),i("li",null,"@Target 是修饰注解的注解，称为元注解")]),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"package"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," com.cwz.annotation;  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/**  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@author"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 陈文臻  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Override"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"String"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[] "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }}  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Father"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//父类  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," fly"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(){  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"father fly..."'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Son"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," extends"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Father"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//子类  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //1.@Override 注解放在fly方法上，表示子类的fly方法重写了父类的fly方法  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //2.这里如果没有写 @Override 还是重写了父类fly  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //3.如果你写了 @Override注解，编译器就会检查该方法是否真的重写了父类的方法  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //  如果，的确重写了，则编译通过，否则，则编译错误  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"java"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".lang.Override"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//说明  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," fly"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Son fly..."'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("h3",{id:"_6-2-2-deprecated",tabindex:"-1"},[s("6.2.2 @Deprecated "),i("a",{class:"header-anchor",href:"#_6-2-2-deprecated","aria-label":'Permalink to "6.2.2 @Deprecated"'},"​")]),i("ol",null,[i("li",null,"用于表示某个程序元素(类，方法)已过时"),i("li",null,"可以修饰方法，类，字段，包，参数等等"),i("li",null,"@Target(value={CONSTRUCTOR,FIELD,LOCAL_VARIABLE,METHOD,PACKAGE,PARAMETER,TYPE})"),i("li",null,"@Deprecated的作用可以做到新旧版本的兼容过度")]),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"package"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," com.cwz.annotation;  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/**  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@author"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 陈文臻  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Deprecated"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"String"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[] "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        A a "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," A"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        a."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"hi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(a.n1);  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//1.@Deprecated 修饰某个元素，表示该元素已经过时  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//2，即不推荐使用，但是仍然可以使用  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"java"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".lang.Deprecated  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," A"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"java"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".lang.Deprecated  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," n1 "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"java"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".lang.Deprecated  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," hi"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(){  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("h3",{id:"_6-2-3-suppresswarnings",tabindex:"-1"},[s("6.2.3 @SuppressWarnings "),i("a",{class:"header-anchor",href:"#_6-2-3-suppresswarnings","aria-label":'Permalink to "6.2.3 @SuppressWarnings"'},"​")]),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"符号"),i("th",null,"作用"),i("th")])]),i("tbody",null,[i("tr",null,[i("td",null,"all"),i("td",null,"抑制所有警告"),i("td")]),i("tr",null,[i("td",null,"cast"),i("td",null,"抑制与强转型作业相关的警告"),i("td")]),i("tr",null,[i("td",null,"boxing"),i("td",null,"抑制与封装/拆装作业相关的警告"),i("td")]),i("tr",null,[i("td",null,"dep-ann"),i("td",null,"抑制与淘汰注释相关的警告"),i("td")]),i("tr",null,[i("td",null,"deprecation"),i("td",null,"抑制与淘汰相关的警告"),i("td")]),i("tr",null,[i("td",null,"fallthrough"),i("td",null,"抑制与switch陈述式中遗漏break相关的警告"),i("td")]),i("tr",null,[i("td",null,"finally"),i("td",null,"抑制与未传回finally区块相关的警告"),i("td")]),i("tr",null,[i("td",null,"hiding"),i("td",null,"抑制与以隐藏变数的区域相关的警告"),i("td")]),i("tr",null,[i("td",null,"incomplete-switch"),i("td",null,"抑制与switch陈述式(enum case)中遗漏项目相关的警告"),i("td")]),i("tr",null,[i("td",null,"javadoc"),i("td",null,"抑制与javadoc相关的警告"),i("td")]),i("tr",null,[i("td",null,"nls"),i("td",null,"抑制与非nls字串文字相关的警告"),i("td")]),i("tr",null,[i("td",null,"null"),i("td",null,"抑制与控制分析相关的警告"),i("td")]),i("tr",null,[i("td",null,"rawtypes"),i("td",null,"抑制与使用raw类型相关的警告"),i("td")]),i("tr",null,[i("td",null,"resource"),i("td",null,"抑制与使用Cloneable类型的资源相关的警告"),i("td")]),i("tr",null,[i("td",null,"restriction"),i("td",null,"抑制与使用不建议或禁止参照相关的警告"),i("td")]),i("tr",null,[i("td",null,"serial"),i("td",null,"抑制与可序列化的类别遗漏serialVersionUID栏位相关的警告"),i("td")]),i("tr",null,[i("td",null,"static-acess"),i("td",null,"抑制与存取不正确相关的警告"),i("td")]),i("tr",null,[i("td",null,"static-method"),i("td",null,"抑制与可能宣告为static的方法相关的警告"),i("td")]),i("tr",null,[i("td",null,"super"),i("td",null,"抑制与置换同步方法而遗漏同步化的警告"),i("td")]),i("tr",null,[i("td",null,"synthetic-access"),i("td",null,"抑制与内部类别的存取未最佳化相关的警告"),i("td")]),i("tr",null,[i("td",null,"sync-override"),i("td",null,"抑制因为置换同步方法而遗漏同步化的警告"),i("td")]),i("tr",null,[i("td",null,"unchecked"),i("td",null,"抑制与未检查的作业相关的警告"),i("td")]),i("tr",null,[i("td",null,"unqualified-ffield-access"),i("td",null,"抑制与栏位存取不合格相关的警告"),i("td")]),i("tr",null,[i("td",null,"unused"),i("td",null,"抑制与未用的程序码及停用的程序码相关的警告"),i("td")])])]),i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"package"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," com.cwz.annotation;  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," java.util.ArrayList;  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," java.util.List;  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/**  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@author"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 陈文臻  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," SuppressWarnings"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //1.当我们不希望看到这些警告的时候，可以使用 SuppressWarnings 注解来抑制警告信息  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //2.在大括号中可以写入你希望抑制(不显示)警告信息  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //3.关于SuppressWarnings的作用范围是和你放置的位置相关  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //  比如@SuppressWarnings放置在main方法，那么抑制警告的范围就是main  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //4.通常我们可以放在具体的语句、方法、类  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"java.lang.SuppressWarnings"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"all"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"String"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[] "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        List list "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ArrayList"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        list."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"add"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        list."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"add"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        list."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"add"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," i;  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(list."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"));  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("h2",{id:"_6-3-jdk的元",tabindex:"-1"},[s("6.3 JDK的元 "),i("a",{class:"header-anchor",href:"#_6-3-jdk的元","aria-label":'Permalink to "6.3 JDK的元"'},"​")]),i("h3",{id:"_6-3-1-基本介绍",tabindex:"-1"},[s("6.3.1 基本介绍 "),i("a",{class:"header-anchor",href:"#_6-3-1-基本介绍","aria-label":'Permalink to "6.3.1 基本介绍"'},"​")]),i("p",null,"JDK的元Annotation用于修饰其他Annotation ==修饰注解的注解=="),i("h3",{id:"_6-3-2元注解的种类",tabindex:"-1"},[s("6.3.2元注解的种类 "),i("a",{class:"header-anchor",href:"#_6-3-2元注解的种类","aria-label":'Permalink to "6.3.2元注解的种类"'},"​")]),i("p",null,"(使用不多，了解，不用深入研究)"),i("ol",null,[i("li",null,"Retention //指定注解的作用范围，三种SOURCE,CLASS,RUNTIME"),i("li",null,"Target //指定注解可以在哪些地方使用"),i("li",null,"Documented //指定该注解是否会在javadoc体现"),i("li",null,"Inherited //子类会继承父类注解")]),i("h3",{id:"_6-3-3-retention-注解",tabindex:"-1"},[s("6.3.3 @Retention 注解 "),i("a",{class:"header-anchor",href:"#_6-3-3-retention-注解","aria-label":'Permalink to "6.3.3 @Retention 注解"'},"​")]),i("h4",{id:"_6-3-3-1-说明",tabindex:"-1"},[s("6.3.3.1 说明: "),i("a",{class:"header-anchor",href:"#_6-3-3-1-说明","aria-label":'Permalink to "6.3.3.1 说明:"'},"​")]),i("p",null,"只能用于修饰一个Annotation定义，用于指定该Annotation可以保留多长时间，@Rentention包含一个 RetentionPolicy类型的成员变量，使用@Rentention时必须为该value成员变量指定值"),i("h4",{id:"_6-3-3-2-retention的三种值",tabindex:"-1"},[s("6.3.3.2 @Retention的三种值 "),i("a",{class:"header-anchor",href:"#_6-3-3-2-retention的三种值","aria-label":'Permalink to "6.3.3.2 @Retention的三种值"'},"​")]),i("ol",null,[i("li",null,"RetentionPolicy.SOURCE:编译器使用后，直接丢弃这种策略的注释"),i("li",null,"RetentionPolicy.CLASS:编译器将把注释记录在class文件中.当运行Java程序时，JVM不会保留注解。这是默认值"),i("li",null,"RetentionPolicy.RUNTIME:编译器将把注解记录在class文件中。当运行Java程序时，JVM会保留注释，程序可以通过反射获取该注解")]),i("h3",{id:"_6-3-4-target",tabindex:"-1"},[s("6.3.4 @Target "),i("a",{class:"header-anchor",href:"#_6-3-4-target","aria-label":'Permalink to "6.3.4 @Target"'},"​")]),i("h4",{id:"_6-3-4-1-基本说明",tabindex:"-1"},[s("6.3.4.1 基本说明 "),i("a",{class:"header-anchor",href:"#_6-3-4-1-基本说明","aria-label":'Permalink to "6.3.4.1 基本说明"'},"​")]),i("p",null,"用于修饰Annotation定义，用于指定被修饰的Annotation能用于修饰哪些程序元素。@Target也包含一个名为value的成员变量"),i("h3",{id:"_6-3-5-documented",tabindex:"-1"},[s("6.3.5 @Documented "),i("a",{class:"header-anchor",href:"#_6-3-5-documented","aria-label":'Permalink to "6.3.5 @Documented"'},"​")]),i("h4",{id:"_6-3-5-1-基本说明",tabindex:"-1"},[s("6.3.5.1 基本说明 "),i("a",{class:"header-anchor",href:"#_6-3-5-1-基本说明","aria-label":'Permalink to "6.3.5.1 基本说明"'},"​")]),i("p",null,"@Documented:用于指定被该元Annotation修饰的Annotation类将被Javadoc工具提取成文档，即在生成文档时，可以看到该注释"),i("p",null,"说明：定义为Documented的注解必须设置Retention值为RUNTIME"),i("h3",{id:"_6-3-6-inherited",tabindex:"-1"},[s("6.3.6@Inherited "),i("a",{class:"header-anchor",href:"#_6-3-6-inherited","aria-label":'Permalink to "6.3.6@Inherited"'},"​")]),i("p",null,"把它修饰的Annotation将具有继承性。如果某个类使用了被@Inherited修饰的Annotation，则其子类将自动具有该注解")],-1),e=[h];function k(r,d,E,p,g,y){return n(),a("div",null,e)}const o=l(t,[["render",k]]);export{u as __pageData,o as default};
