import{_ as a,c as l,o as n,m as i,a as s}from"./chunks/framework.BS5Zd73-.js";const c=JSON.parse('{"title":"12. 友元函数和友元类","description":"","frontmatter":{},"headers":[],"relativePath":"study/C++/友元函数和友元类.md","filePath":"study/C++/友元函数和友元类.md","lastUpdated":1706078800000}'),h={name:"study/C++/友元函数和友元类.md"},k=i("div",null,[i("h1",{id:"_12-友元函数和友元类",tabindex:"-1"},[s("12. 友元函数和友元类 "),i("a",{class:"header-anchor",href:"#_12-友元函数和友元类","aria-label":'Permalink to "12. 友元函数和友元类"'},"​")]),i("p",null,[i("strong",null,"友元提供类类的成员函数与一般函数之间、不同类或成员函数之间进行数据共享的手段"),s(" 但在一定程度上会破坏类的成员函数，还可以是一个完整的类")]),i("h2",{id:"_12-1-友元函数",tabindex:"-1"},[s("12.1 友元函数 "),i("a",{class:"header-anchor",href:"#_12-1-友元函数","aria-label":'Permalink to "12.1 友元函数"'},"​")]),i("p",null,[s("友元函数是在类声明中用关键字friend说明的非成员函数。 可以访问当前类内私有或公有函数 普通函数的友元函数一般形式为： "),i("strong",null,"friend<数据类型><友元函数名>(参数表)；")]),i("div",{class:"language-c++ vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"c++"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//全局函数作友元")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//建筑物类")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Building")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"	//告诉编译器 goodGay全局函数 是 Building类的好朋友，可以访问类中的私有内容")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	friend"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Building"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," *"),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"		this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"->m_SittingRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "客厅"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"		this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"->m_BedRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "卧室"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	string m_SittingRoom;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," //客厅")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"private:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	string m_BedRoom;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," //卧室")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//全局函数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Building"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," *"),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	cout "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "好基友正在访问： "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," <<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," building->m_SittingRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," endl;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	cout "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "好基友正在访问： "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," <<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," building->m_BedRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," endl;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//私有属性")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," test01"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	Building b;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(){")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	test01"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	system"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"pause"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("h2",{id:"_12-2友元成员",tabindex:"-1"},[s("12.2友元成员 "),i("a",{class:"header-anchor",href:"#_12-2友元成员","aria-label":'Permalink to "12.2友元成员"'},"​")]),i("div",{class:"language-c++ vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"c++"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//成员函数做友元")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," goodGay")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	GoodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//让visit函数可以访问Building中私有函数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	Void visit2（）；"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//让visit2函数不可以访问Building中私有函数")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	Building "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," building;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}；")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," building")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	friend"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," GoodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"	//告诉编译器 GoodGay类下的visit成员函数作为本类的好朋友，可以访问私有属性")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	string m_SittingRoom;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//客厅")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"private:")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	string m_BedRoom;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//卧室")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//类外实现成员函数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	m_SittingRoom"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"客厅"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	m_BedRoom"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"卧室"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"GoodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"GoodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	building "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," building;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," GoodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	cout"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"visit函数正在访问"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"building->m_SittingRoom"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"endl;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	cout"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"visit函数正在访问""<<building->m_BedRoom<<endl;')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"void GoodGay::visit2()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'	cout<<"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"函数正在访问"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"<<building->m_SittingRoom<<endl;')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'	cout<<"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"函数正在访问"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"<<building->m_BedRoom<<endl;//无法访问')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"void test01()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"	GoodGay gg;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"	gg.visit();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"	gg.visit2();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}")])])])]),i("h2",{id:"_11-6-3友元类",tabindex:"-1"},[s("11.6.3友元类 "),i("a",{class:"header-anchor",href:"#_11-6-3友元类","aria-label":'Permalink to "11.6.3友元类"'},"​")]),i("div",{class:"language-C++ vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"C++"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//类做友元")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," goodGay")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//参观函数 访问Building中的属性")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"private:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	Building "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"building;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Building")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"	//告诉编译器 goodGay类是Building类的好朋友，可以访问到Building类中私有内容")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	friend"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	string m_SittingRoom;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," //客厅")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"private:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	string m_BedRoom;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//卧室")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//类外写成员函数")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Building"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"	this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"->m_SittingRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "客厅"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"	this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"->m_BedRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "卧室"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"	//创建一个建筑物的对象")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	building "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Building;"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//在堆区创建一个对象")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," goodGay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	cout "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "好基友正在访问"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," <<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," building->m_SittingRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," endl;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	cout "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "好基友正在访问"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," <<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," building->m_BedRoom "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," endl;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," test01"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	goodGay gg;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	gg."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"visit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(){")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	test01"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	system"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"pause"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"	return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])])],-1),t=[k];function e(E,p,d,g,r,y){return n(),l("div",null,t)}const o=a(h,[["render",e]]);export{c as __pageData,o as default};
