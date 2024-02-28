import{_ as n,c as a,o as e,m as l,a as s}from"./chunks/framework.BS5Zd73-.js";const v=JSON.parse('{"title":"MySQL","description":"","frontmatter":{},"headers":[],"relativePath":"posts/database/mysql.md","filePath":"posts/database/mysql.md","lastUpdated":null}'),i={name:"posts/database/mysql.md"},p=l("div",null,[l("h1",{id:"mysql",tabindex:"-1"},[s("MySQL "),l("a",{class:"header-anchor",href:"#mysql","aria-label":'Permalink to "MySQL"'},"​")]),l("h2",{id:"sql语句",tabindex:"-1"},[s("SQL语句 "),l("a",{class:"header-anchor",href:"#sql语句","aria-label":'Permalink to "SQL语句"'},"​")]),l("p",null,"SQL：结构化的查询语句。由W3C组织制定。标准的数据库的操作语言，不区分数据库。"),l("p",null,"SQL语句的分类："),l("ul",null,[l("li",null,"DML：数据操纵语言，主要针对的是insert、update、delete操作"),l("li",null,"DCL：数据控制语言，主要针对的用户权限，表和库的权限，事务控制等等"),l("li",null,"DQL：数据查询语句，主要针对的是select语句"),l("li",null,"DDL：数据定义语言，主要针对的是库和表的CRUD（create, read, update, delete）语句。")]),l("h2",{id:"数据库操作",tabindex:"-1"},[s("数据库操作 "),l("a",{class:"header-anchor",href:"#数据库操作","aria-label":'Permalink to "数据库操作"'},"​")]),l("ol",null,[l("li",null,"查询数据库")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 查询所有数据库")]),s(`
`),l("span",{class:"line"},[l("span",null,"SHOW DATABASES;")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 查询某个数据库的编码")]),s(`
`),l("span",{class:"line"},[l("span",null,"SHOW CREATE DATABASE test;")])])])]),l("ol",{start:"2"},[l("li",null,"创建数据库")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 创建库")]),s(`
`),l("span",{class:"line"},[l("span",null,"CREATE DATABASE name;")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 创建数据库的时候指定编码表")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- GB2312、GBK、GB18030、UTF-8(unicode)、ISO-8859-1(拉丁文)")]),s(`
`),l("span",{class:"line"},[l("span",null,"CREATE DATABASE name CHARACTER SET gbk;")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 修改库的校对规则")]),s(`
`),l("span",{class:"line"},[l("span",null,"CREATE DATABASE name CHARACTER SET utf8 COLLATE utf8_bin;")])])])]),l("ol",{start:"3"},[l("li",null,"删除数据库")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 删除数据库")]),s(`
`),l("span",{class:"line"},[l("span",null,"DROP DATABASE name;")])])])]),l("ol",{start:"4"},[l("li",null,"修改数据库")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 修改数据库编码表")]),s(`
`),l("span",{class:"line"},[l("span",null,"ALTER DATABASE name CHARACTER SET gbk;")])])])]),l("h2",{id:"数据表的操作",tabindex:"-1"},[s("数据表的操作 "),l("a",{class:"header-anchor",href:"#数据表的操作","aria-label":'Permalink to "数据表的操作"'},"​")]),l("ol",null,[l("li",null,"切换库")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 切换数据")]),s(`
`),l("span",{class:"line"},[l("span",null,"use 库名;")])])])]),l("ol",{start:"2"},[l("li",null,"创建数据表")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 创建表")]),s(`
`),l("span",{class:"line"},[l("span",null,"CREATE TABLE tb_user(")]),s(`
`),l("span",{class:"line"},[l("span",null,"  id INT,")]),s(`
`),l("span",{class:"line"},[l("span",null,"  username VARCHAR(10),")]),s(`
`),l("span",{class:"line"},[l("span",null,"  age INT")]),s(`
`),l("span",{class:"line"},[l("span",null,");")])])])]),l("p",null,"创建表的时候，表的每个列名和表名不要和SQL中的关键字重名。"),l("p",null,"定义数据表中的每列都必须明确具体的数据类型"),l("ul",null,[l("li",null,"数字：TINYINT 、SMALLINT、INT、BIGINT、FLOAT、DOUBLE"),l("li",null,[s("字符串：char(长度)、varchar(长度) char(10)：数据表的列最多只能存放10字符数据，如果不足10个，使用空格补够10个，超过报错 "),l("ul",null,[l("li",null,"varchar(10):数据表的列最多只能存放10字符数据，如果不足10个，长度会发生变化，超过 报错")])]),l("li",null,[s("日期： "),l("ul",null,[l("li",null,"date (只有日期)"),l("li",null,"time(只有时间)"),l("li",null,"datetime(日期时间都有)"),l("li",null,"timestamp(日期时间都有 )：时间戳")])])]),l("ol",{start:"3"},[l("li",null,"单表约束")]),l("ul",null,[l("li",null,"主键约束：primary key , 它是保证当前这一行数据与其他行不重复。主键列的数据不能重复,也不能存放null."),l("li",null,"非空约束：not null , 这个列中不能包含null。"),l("li",null,"唯一约束：unique ， 这列的数据不能重复。")]),l("ol",{start:"4"},[l("li",null,"删除表")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 删除表")]),s(`
`),l("span",{class:"line"},[l("span",null,"drop table 表名;")])])])]),l("ol",{start:"5"},[l("li",null,"修改表")]),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"alter table 表名 增/删/改 列名 类型( 长度) 约束；")])])])]),l("ul",null,[l("li",null,"增加列： alter table 表名 add [column]列名 类型(长度) 约束;"),l("li",null,"修改现有列类型、长度和约束 语法：alter table 表名 modify 列名 类型(长度) 约束;"),l("li",null,"修改现有列名称 语法：alter table 表名 change 旧列名 新列名 类型(长度) 约束;"),l("li",null,"删除现有列 语法：alter table 表名 drop 列名 ;"),l("li",null,"修改表名 ：rename table 旧表名 to 新表名;"),l("li",null,"修改表的字符集：alter table 表名 character set 编码表名;")]),l("ol",{start:"6"},[l("li",null,"查询表结构")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 查看表结构")]),s(`
`),l("span",{class:"line"},[l("span",null,"desc 表名; ")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 查看当前库内所有表名")]),s(`
`),l("span",{class:"line"},[l("span",null,"show tables ; ")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 查看建表语句和字符集")]),s(`
`),l("span",{class:"line"},[l("span",null,"show create table 表名;")])])])]),l("h2",{id:"表中操作",tabindex:"-1"},[s("表中操作 "),l("a",{class:"header-anchor",href:"#表中操作","aria-label":'Permalink to "表中操作"'},"​")]),l("ol",null,[l("li",null,"创建数据表")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 创建学生表")]),s(`
`),l("span",{class:"line"},[l("span",null,"create table student(")]),s(`
`),l("span",{class:"line"},[l("span",null,"	id int primary key auto_increment,")]),s(`
`),l("span",{class:"line"},[l("span",null,"	sage int ,")]),s(`
`),l("span",{class:"line"},[l("span",null,"	sname varchar(32) not null,")]),s(`
`),l("span",{class:"line"},[l("span",null,"	gender varchar(10) not null,")]),s(`
`),l("span",{class:"line"},[l("span",null,"	score double not null,")]),s(`
`),l("span",{class:"line"},[l("span",null,"	birthday date")]),s(`
`),l("span",{class:"line"},[l("span",null,");")])])])]),l("ol",{start:"2"},[l("li",null,"表中插入数据")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"INSERT INTO student")]),s(`
`),l("span",{class:"line"},[l("span",null,"            (id,")]),s(`
`),l("span",{class:"line"},[l("span",null,"             sage,")]),s(`
`),l("span",{class:"line"},[l("span",null,"             sname,")]),s(`
`),l("span",{class:"line"},[l("span",null,"             gender,")]),s(`
`),l("span",{class:"line"},[l("span",null,"             score,")]),s(`
`),l("span",{class:"line"},[l("span",null,"             birthday)")]),s(`
`),l("span",{class:"line"},[l("span",null,"VALUES (NULL,")]),s(`
`),l("span",{class:"line"},[l("span",null,"        22,")]),s(`
`),l("span",{class:"line"},[l("span",null,"        '张三',")]),s(`
`),l("span",{class:"line"},[l("span",null,"        '男',")]),s(`
`),l("span",{class:"line"},[l("span",null,"        99.89,")]),s(`
`),l("span",{class:"line"},[l("span",null,"        '2020-07-18');")])])])]),l("p",null,"如果某些列不需要插入数据，可以在插入的时候省略这些列"),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"INSERT INTO student(sname , gender,score)VALUES('李四','男',89.00);")])])])]),l("p",null,"如果是给表中的所有列都插入数据，这时可以省略列名"),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"INSERT INTO student VALUES(NULL,18,'赵四','男',60,'1999-01-01');")])])])]),l("ol",{start:"3"},[l("li",null,"修改表的数据")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 修改表数据")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 不添加条件修改")]),s(`
`),l("span",{class:"line"},[l("span",null,"UPDATE student SET sage = 28;")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 添加条件修改")]),s(`
`),l("span",{class:"line"},[l("span",null,"UPDATE student SET sname = '王五' WHERE id = 1;")]),s(`
`),l("span",{class:"line"},[l("span",null,"UPDATE student SET sname = 'zhaoliu' , gender = '女' ,score = 100 WHERE id = 2;")]),s(`
`),l("span",{class:"line"},[l("span",null,"UPDATE student SET gender = '女' ,score = 100 WHERE sname = '赵四';")])])])]),l("ol",{start:"4"},[l("li",null,"删除表的数据")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 删除操作")]),s(`
`),l("span",{class:"line"},[l("span",null,"DELETE FROM student WHERE id = 5;")]),s(`
`),l("span",{class:"line"},[l("span",null,"INSERT INTO student VALUES(NULL,22,'张三','女',88,'2020-02-02');")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"DELETE FROM student WHERE sname = 'abc';")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 删除整张表中的数据")]),s(`
`),l("span",{class:"line"},[l("span",null,"DELETE FROM student ;")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 删除整张表中的数据")]),s(`
`),l("span",{class:"line"},[l("span",null,"TRUNCATE TABLE student;")])])])]),l("ol",{start:"5"},[l("li",null,"查询语句")]),l("div",{class:"language-mysql vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"mysql"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[l("code",null,[l("span",{class:"line"},[l("span",null,"-- 查询表中所有数据")]),s(`
`),l("span",{class:"line"},[l("span",null,"SELECT * FROM student;")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 添加条件查询")]),s(`
`),l("span",{class:"line"},[l("span",null,"SELECT * FROM student WHERE id = 1;")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 根据姓名查询")]),s(`
`),l("span",{class:"line"},[l("span",null,"SELECT * FROM student WHERE sname = 'lisi';")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 查询姓名和成绩")]),s(`
`),l("span",{class:"line"},[l("span",null,"SELECT sname ,score FROM student;")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 查询成绩，相同只显示一个")]),s(`
`),l("span",{class:"line"},[l("span",null,"SELECT score FROM student;")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"-- 使用DISTINCT去重")]),s(`
`),l("span",{class:"line"},[l("span",null,"SELECT  DISTINCT score FROM student;")])])])])],-1),t=[p];function u(c,d,o,r,h,g){return e(),a("div",null,t)}const E=n(i,[["render",u]]);export{v as __pageData,E as default};
