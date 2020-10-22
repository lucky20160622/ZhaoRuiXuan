#建学生信息表student
CREATE TABLE student
(
sno VARCHAR(20) NOT NULL PRIMARY KEY,
sname VARCHAR(20) NOT NULL,
ssex VARCHAR(20) NOT NULL,
sbirthday DATETIME,
class VARCHAR(20)

);

#建立教师表
CREATE TABLE teacher
(
tno VARCHAR(20) NOT NULL PRIMARY KEY,
tname VARCHAR(20) NOT NULL,
tsex VARCHAR(20) NOT NULL,
tbirthday DATETIME,
prof VARCHAR(20),
depart VARCHAR(20) NOT NULL

);

#建立课程表course
CREATE TABLE course
(
cno VARCHAR(20) NOT NULL PRIMARY KEY,
cname VARCHAR(20) NOT NULL,
tno VARCHAR(20) NOT NULL,
FOREIGN KEY(tno) REFERENCES teacher(tno)
);

#建立成绩表
CREATE TABLE score (
	sno VARCHAR (20) NOT NULL ,
	FOREIGN KEY (sno) REFERENCES student (sno),
	cno VARCHAR (20) NOT NULL,
	FOREIGN KEY (cno) REFERENCES course (cno),
	degree DECIMAL
);


#添加学生信息
INSERT INTO student VALUES('108','曾华','男','1977-09-01','95033');
INSERT INTO student VALUES('105','匡明','男','1975-10-02','95031');
INSERT INTO student VALUES('107','王丽','女','1976-01-23','95033');
INSERT INTO student VALUES('101','李军','男','1976-02-20','95033');
INSERT INTO student VALUES('109','王芳','女','1975-02-10','95031');
INSERT INTO student VALUES('103','陆君','男','1974-06-03','95031');

#添加教师表
INSERT INTO teacher VALUES('804','李诚','男','1958-12-02','副教授','计算机系');
INSERT INTO teacher VALUES('856','张旭','男','1969-03-12','讲师','电子工程系');
INSERT INTO teacher VALUES('825','王萍','女','1972-05-05','助教','计算机系');
INSERT INTO teacher VALUES('831','刘冰','女','1977-08-14','助教','电子工程系');

#添加课程表
INSERT INTO course VALUES('3-105','计算机导论','825');
INSERT INTO course VALUES('3-245','操作系统','804');
INSERT INTO course VALUES('6-166','数字电路','856');
INSERT INTO course VALUES('9-888','高等数学','831');

#添加成绩表
INSERT INTO score VALUES('103','3-245','86');
INSERT INTO score VALUES('105','3-245','75');
INSERT INTO score VALUES('109','3-245','68');
INSERT INTO score VALUES('103','3-105','92');
INSERT INTO score VALUES('105','3-105','88');
INSERT INTO score VALUES('109','3-105','76');
INSERT INTO score VALUES('103','3-105','64');
INSERT INTO score VALUES('105','3-105','91');
INSERT INTO score VALUES('109','3-105','78');
INSERT INTO score VALUES('103','6-166','85');
INSERT INTO score VALUES('105','6-166','79');
INSERT INTO score VALUES('109','6-166','81');


#1.查询Student表中Sname、Ssex和Class列的所有信息。
SELECT Sname,Ssex,Class FROM student;
#2.查询教师表中Depart列的所有信息并去除重复值。
SELECT DISTINCT(depart) FROM teacher;
#3、 查询Score表中成绩在60到80之间的所有信息。
SELECT * FROM score WHERE degree BETWEEN 60 AND 80;
#4、 查询Score表中成绩为85，86或88的所有信息。
SELECT * FROM score WHERE degree IN(85,86,88);
#5、 查询成绩存在有85分以上的课程的Cno列信息，并对课程Cno去重. 
SELECT DISTINCT(cno) FROM score WHERE degree>85;
#6、查询“计算机系”与“电子工程系“所有教师的Tname和Prof列信息。
SELECT tname,prof FROM teacher WHERE depart='计算机系' OR depart='电子工程系';
#7、 查询Student表中班级为“95031”班或性别为“女”的所有学生的信息。
SELECT * FROM student WHERE class=95031 || ssex='女';
#8、 查询Score表的所有信息吗，查询结果按照Cno升序、Degree降序排列。
SELECT * FROM score ORDER BY cno ASC, degree DESC;
#9、 查询“95031”班的学生人数。
SELECT COUNT(*) FROM student WHERE class=95031;
#10、查询Score表中的最高分的学生学号和课程号。（用子查询）
SELECT sno,cno FROM score WHERE degree IN(SELECT MAX(degree) FROM score);
#11、查询每门课程的平均成绩。
SELECT cno,AVG(degree) FROM score GROUP BY cno;
#12、查询Student表中不姓“王”的同学记录。（
SELECT * FROM student WHERE NOT(sname LIKE '王%');
#13、查询Student表中最大和最小的Sbirthday日期值。
SELECT MAX(sbirthday),MIN(sbirthday) FROM student;
#14、查询Student表中的所有学生的年龄
SELECT sname AS 姓名,YEAR(NOW())-YEAR(sbirthday) AS 年龄 FROM student;
#15、 查询Student表中男、女各有多少人
SELECT ssex,COUNT(*) FROM student GROUP BY ssex;
#16、在Teacher表中查询年龄最大的老师的信息
SELECT * FROM teacher ORDER BY tbirthday LIMIT 1;
#17、查询学生”王芳”没有选修的课程有哪些(子查询)

#18、查询Teacher表中所在系别是”电子工程系”并且职位是“讲师”的老师的信息
SELECT * FROM teacher WHERE depart='电子工程系' && prof='讲师';
#19、查询Score表中学号是103所选的课程，并按照降序的方式排序
SELECT * FROM score WHERE sno='103' ORDER BY degree DESC;
#20、查询和“李军”同性别的所有同学的Sname列信息
SELECT sname FROM student WHERE ssex='男';
#21、查询”王萍”老师所教授的课程有哪些（两表连接实现）
SELECT tname,cname FROM teacher,course WHERE teacher.tno=course.tno AND tname='王萍';
#22、查询Score表中每门课程的平均分数（要求查询的课程至少要有五个成绩）。
SELECT cno,AVG(degree) FROM score GROUP BY cno HAVING COUNT(*)>5;
#23.
SELECT sname,cno,degree FROM student,score WHERE score.sno=student.sno;
#24.
SELECT tname,cname FROM course,teacher WHERE course.tno=teacher.tno AND tesx='男';
#25.
SELECT sname,con,AVG(degree) FROM student,score WHERE student.sno=score.sno AND sname='陆君' GROUP BY cno;