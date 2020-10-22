/*
SQLyog Ultimate v8.32 
MySQL - 5.5.49 : Database - day03
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`day03` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `day03`;

/*Table structure for table `course` */

DROP TABLE IF EXISTS `course`;

CREATE TABLE `course` (
  `cid` VARCHAR(10) NOT NULL,
  `cName` VARCHAR(10) DEFAULT NULL,
  `tid` INT(20) DEFAULT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `course` */

INSERT  INTO `course`(`cid`,`cName`,`tid`) VALUES ('001','企业管理',3),('002','马克思',3),('003','UML',2),('004','数据库',1),('005','英语',1);

/*Table structure for table `sc` */

DROP TABLE IF EXISTS `sc`;

CREATE TABLE `sc` (
  `sid` VARCHAR(10) DEFAULT NULL,
  `cid` VARCHAR(10) DEFAULT NULL,
  `score` INT(10) DEFAULT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `sc` */

INSERT  INTO `sc`(`sid`,`cid`,`score`) VALUES ('1001','001',80),('1001','002',60),('1001','003',75),('1002','001',85),('1002','002',70),('1003','004',100),('1003','001',90),('1003','002',55),('1004','002',65),('1004','003',60);

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `sid` VARCHAR(10) NOT NULL,
  `sName` VARCHAR(20) DEFAULT NULL,
  `sAge` DATETIME DEFAULT '1980-10-12 23:12:36',
  `sSex` VARCHAR(10) DEFAULT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `student` */

INSERT  INTO `student`(`sid`,`sName`,`sAge`,`sSex`) VALUES ('1001','张三丰','1980-10-12 23:12:36','男'),('1002','张无极','1995-10-12 23:12:36','男'),('1003','李奎','1992-10-12 23:12:36','女'),('1004','李元宝','1980-10-12 23:12:36','女'),('1005','李世明','1981-10-12 23:12:36','男'),('1006','赵六','1986-10-12 23:12:36','男'),('1007','田七','1981-10-12 23:12:36','女');

/*Table structure for table `teacher` */

DROP TABLE IF EXISTS `teacher`;

CREATE TABLE `teacher` (
  `tid` INT(10) DEFAULT NULL,
  `tName` VARCHAR(10) DEFAULT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `teacher` */

INSERT  INTO `teacher`(`tid`,`tName`) VALUES (1,'李老师'),(2,'何以琛'),(3,'叶平');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

#1.查询出只选修了一门课程的全部学生的学号和姓名
SELECT student.sid,student.sname FROM student INNER JOIN sc ON(sc.sid=student.sid)WHERE sc.sid IN(SELECT sid FROM sc GROUP BY sid HAVING COUNT(sid)=1);
#2.查询不同课程成绩相同的学生的学号、课程号、学生成绩
SELECT sid,cid,score FROM sc WHERE score=(SELECT score FROM sc GROUP BY score HAVING COUNT(score)>1)AND cid IN (SELECT a.cid FROM sc AS a,sc AS b WHERE a.cid!=b.cid)
#3.查询平均成绩大于70 的所有学生的学号、姓名和平均成绩
SELECT student.sid,student.sname,AVG(score)AS avgs FROM student INNER JOIN sc ON(student.sid=sc.sid) INNER JOIN course ON (course.cid=sc.cid);
#4.查询所有学生的选课情况
SELECT student.sname,student.sid,course.cid,course.cname FROM student INNER JOIN sc ON(student.sid=sc.sid)INNER JOIN course ON(course.cid=sc.cid)
#5.查询课程名称为“数据库”，且分数低于60的学生姓名和分数;
SELECT student.sname,sc.score FROM student INNER JOIN sc ON(student.sid=sc.sid)INNER JOIN course ON(course.cid=sc.cid) WHERE score<60 AND cname='数据库'
#6.查询任何一门课程成绩在70分以上的姓名、课程名称和分数
SELECT student.sname,course.cname,sc.score FROM student INNER JOIN sc ON(student.sid=sc.sid)INNER JOIN course ON(course.cid=sc.cid)WHERE score>70
#7.查询有不及格的课程的课程编号，课程名称，成绩，并按课程号从大到小排列
SELECT course.cid,course.cname,sc.score FROM course INNER JOIN sc ON(course.cid=sc.cid) WHERE score<60 ORDER BY cid DESC;
#8.查询选了课程编号为003且课程成绩在70分以上的学生的学号和姓名
SELECT student.sid,student.sname FROM student INNER JOIN sc ON(student.sid=sc.sid)WHERE score>70 AND cid=003;