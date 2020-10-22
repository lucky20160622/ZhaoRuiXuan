##创建表
CREATE TABLE student(
id INT,
NAME VARCHAR(11),
chinese FLOAT,
english FLOAT,
math FLOAT
);
##插入数据
INSERT INTO student(id,NAME,chinese,english,math) VALUES(1,'张小明',89,78,90);
INSERT INTO student(id,NAME,chinese,english,math) VALUES(2,'李进',67,53,95);
INSERT INTO student(id,NAME,chinese,english,math) VALUES(3,'王五',87,78,77);
INSERT INTO student(id,NAME,chinese,english,math) VALUES(4,'李一',88,98,92);
INSERT INTO student(id,NAME,chinese,english,math) VALUES(5,'李来财',82,84,67);
INSERT INTO student(id,NAME,chinese,english,math) VALUES(6,'张进宝',55,85,45);
INSERT INTO student(id,NAME,chinese,english,math) VALUES(7,'黄蓉',75,65,30); 
##1.查询表中所有学生的姓名和对应的英语成绩
SELECT `name`,`english` FROM student;
##2.过滤表中重复数据（英语成绩）
SELECT `english` FROM student;
##3.使用别名表示学生分数
SELECT `name` AS `姓名`, `english` AS `英语`, `math` AS `数学`,`chinese` AS `语文` FROM student; 
##4.统计每个学生的总分
SELECT `name`,chinese+english+math AS `总分` FROM student;
##5.查询姓名为李一的学生成绩
SELECT * FROM student WHERE NAME LIKE '%李一';
##6.查询英语成绩大于90分的
SELECT *FROM student WHERE english>90;
##7.查询总分大于200分的所有同学
SELECT * FROM student WHERE english+chinese+math>200;
##8.查询英语分数在80－90之间的同学
SELECT * FROM student WHERE english<90 AND english>80;
##9.查询数学分数为89,90,91的同学
SELECT * FROM student WHERE math=90 OR math=89 OR math=91;
##10.查询所有姓李的学生英语成绩
SELECT `name`,`english` FROM student WHERE NAME LIKE '李%';
##11.查询数学成绩大于80并且语文成绩大于80的同学
SELECT * FROM student WHERE math>80 AND chinese>80;
##12.查询英语成绩大于80或者总分是200的同学
SELECT * FROM student WHERE english>80 OR chinese+math+english=200;
##13.对数学成绩排序(降序)后输出
SELECT * FROM student ORDER BY math DESC;
##14.对总成绩按从高到低的顺序输出
SELECT * FROM student ORDER BY math+chinese+english DESC;
##15.对姓李的学生总成绩按照从高到低的顺序输出
SELECT * FROM student WHERE NAME LIKE '李%' ORDER BY math+chinese+english DESC;