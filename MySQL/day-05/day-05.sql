SELECT * FROM teacher; 
SELECT * FROM student;
SELECT * FROM score;
#1.查询student表中的所有记录的sname、ssex和class列。
SELECT sname,ssex,class FROM student;
#2、 查询教师所有的单位即不重复的depart列。
 SELECT DISTINCT(depart) FROM teacher;
#3、 查询student表的所有记录
SELECT * FROM student;
#4、 查询score表中成绩在60到80之间的所有记录。
SELECT * FROM score WHERE degree BETWEEN 60 AND 80;
#5、 查询score表中成绩为85，86或88的记录。
SELECT * FROM score WHERE degree IN(85,86,88);
#6、  查询存在有85分以上成绩的课程cno.
SELECT cno FROM score WHERE degree>85;
#7、查询“计算 机系”与“电子工程系“不同职称的教师的tname和prof。
SELECT tname,prof FROM teacher WHERE depart='计算机系' OR depart='电子工程系';
SELECT tname,prof FROM teacher WHERE depart IN('计算机系','电子工程系');
#8、 查询student表中“95031”班或性别为“女”的同学记录。
SELECT * FROM student WHERE class=95031 || ssex='女';
#9、 以class降序查询student表的所有记录
SELECT * FROM student ORDER BY class DESC;
#10、 以cno升序、degree降序查询score表的所有记录。
SELECT * FROM score ORDER BY cno ASC,degree DESC;
#11、 查询“95031”班的学生人数。
SELECT COUNT(*) FROM student WHERE class=95031;
#12、查询分数大于70，小于90的sno列。
 SELECT sno FROM score WHERE degree BETWEEN 70 AND 90;
#13、查询score表中的最高分的学生学号和课程号。（如果还没有学过子查询,则用排序查）
SELECT sno,cno FROM score ORDER BY degree LIMIT 1;
SELECT sno,cno FROM score WHERE degree IN(SELECT MAX(degree) FROM score);
#14、查询每门课的平均成绩。
SELECT cno,AVG(degree) FROM score  GROUP BY cno;
#15、查询95033班和95031班全体学生的记录。
SELECT * FROM student WHERE class=95033 OR class=95031;
#16、查询student表中不姓“王”的同学记录。
SELECT * FROM student WHERE NOT(sname LIKE '王%');
#17、查询student表中最大和最小的sbirthday日期值。
SELECT MAX(sbirthday) AS 最小,MIN(sbirthday) AS 最大 FROM student; 
#18、以班号和年龄从大到小的顺序查询student表中的全部记录。
SELECT * FROM student ORDER BY sbirthday ASC,class DESC;
#19、查询score表中至少有5个成绩记录的课程的平均分数。
SELECT cno,AVG(degree) FROM score GROUP BY cno HAVING COUNT(*)>5;
#20、查询所有学生的sname、cno和degree列(两表连接)。
SELECT sname,cno,degree FROM score,student WHERE score.sno=student.sno;
#21、查询“男”教师及其所上的课程。
SELECT depart FROM teacher WHERE tsex='男'; 
#22、查询所有学生的sno、cname和degree列。
SELECT student.sno,course.cname,score.degree FROM student LEFT OUTER JOIN score 
ON(student.sno=score.sno)LEFT OUTER JOIN course ON(course.cno=score.cno);
#23、查询所有学生的sname、cname和degree列。
SELECT student.sname,course.cname,score.degree FROM student LEFT OUTER JOIN score 
ON(student.sno=score.sno) LEFT OUTER JOIN course ON(course.cno=score.cno);
#24、查询“95031”班学生的平均分
SELECT AVG(degree) FROM student LEFT OUTER JOIN score
 ON(student.sno=score.sno)WHERE class=95031;
#25、查询最高分同学的sno、cno和degree列。
SELECT student.sno,score.cno,score.degree FROM student LEFT OUTER JOIN score 
ON(student.sno=score.sno)WHERE degree=(SELECT MAX(degree)FROM score);
#26、查询和“李军”同性别的所有同学的sname.
SELECT sname FROM student WHERE ssex=(SELECT ssex FROM student WHERE sname='李军');
#27、查询和“李军”同性别并同班的同学sname.
SELECT sname FROM student WHERE ssex=(SELECT ssex FROM student WHERE sname='李军') AND class=(SELECT class FROM student WHERE sname='李军');

