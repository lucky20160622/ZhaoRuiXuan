CREATE TABLE student(
   SID INT(2) AUTO_INCREMENT PRIMARY KEY NOT NULL,
   Sname VARCHAR(10) NOT NULL,
   Sage DATETIME NOT NULL,
   Ssex ENUM('男','女') NOT NULL COMMENT '性别' 
)DEFAULT CHARSET=utf8


INSERT INTO student(SID,Sname,Sage,Ssex) VALUES 
(01,"赵雷","1990-01-01 00:00:00",'男'),
(02,"钱电","1990-12-21 00:00:00",'男'),
(03,"孙风","1990-05-20 00:00:00",'男'),
(04,"李云","1990-08-06 00:00:00",'男'),
(05,"周梅","1991-12-01 00:00:00",'女'),
(06,"吴兰","1992-03-01 00:00:00",'女'),
(07,"郑竹","1989-07-01 00:00:00",'女'),
(08,"王橘","1990-01-20 00:00:00",'女') 


  
#修改需求1： 把sid=01的人名字修改为 “韩梅梅”？
UPDATE student SET Sname='韩梅梅' WHERE sid=1;
#修改需求2： 把出生日期在90年之前的，性别全部改为 “男”？
UPDATE student SET Ssex='男' WHERE Sage<'1990-01-01-01 00:00:00';
#删除需求： 把出生日期在90年之前的删除？
DELETE FROM student WHERE Sage<'1990-01-01-01 00:00:00';
#1.查询所有学生数据
SELECT * FROM student;
#2.查询学生性别，且使用distinct去重
SELECT DISTINCT Ssex FROM student ;
#3.查询出在1990年之后的出生的学生？
SELECT * FROM student WHERE Sage>'1990-01-01-01 00:00:00';
#4.查询出在1990年之后的出生且性别为男的学生？
SELECT * FROM student WHERE Sage>'1990-01-01-01 00:00:00' && Ssex='女';
#5.查询出在1990年之后的出生或性别为男的学生？
SELECT * FROM student WHERE Sage>'1990-01-01-01 00:00:00' || Ssex='男';
#6.查询出在1990年之后的出生且性别为男的学生，并根据出生日期从小到大显示？
SELECT * FROM student WHERE Sage>'1990-01-01-01 00:00:00' || Ssex='男' ORDER BY Sage DESC;
#7.查询学生总数量？
SELECT COUNT(*)AS '总数' FROM student;
#8.统计学生性别为男的学生数量？
SELECT COUNT(*)AS '男' FROM student WHERE Ssex='男';
#9.查询姓赵的学生？
SELECT * FROM student WHERE Sname LIKE '赵%';
#10.查询sid=01、06、03 的学生？
SELECT * FROM student WHERE SID IN (1,6,3);
#11.查询出生日期在 90年 到 91年之间的学生？
SELECT * FROM student WHERE Sage BETWEEN '1990-01-01-01 00:00:00' AND '1991-12-31 00:00:00';