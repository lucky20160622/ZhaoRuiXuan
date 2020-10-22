 CREATE TABLE emp(
	empno		INT, 			-- 员工号
	ename		VARCHAR(50),    -- 员工姓名
	job		VARCHAR(50),   	    -- 员工职位
	mgr		INT,     			-- 管理者工号
	hiredate	DATE,           -- 入职时间
	sal		DECIMAL(7,2),		-- 薪水
	comm		DECIMAL(7,2),   -- 奖金 
	deptno		INT				-- 部门编号 
) ;  
                    
CREATE TABLE dept(            
	deptno		INT,			 -- 部门编号
	dname		VARCHAR(14),    -- 部门名称
	loc		VARCHAR(13)         -- 部门位置       
);                 
      
#1.列出至少有4个员工的所有部门
SELECT deptno,dname,loc FROM dept WHERE deptno IN(SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(deptno)>=4);
#2.列出薪金比“SMITH”多的所有员工。
SELECT * FROM emp WHERE sal >(SELECT sal FROM emp WHERE ename='smith');
#3.列出所有员工的姓名及其直接上级的姓名
SELECT e.ename,em.ename AS mgr_name FROM emp e,emp em WHERE e.mgr=em.empno;
#4.列出受雇日期早于其直接上级的所有员工
SELECT a.ename,(SELECT ename FROM emp AS b WHERE b.empno=a.mgr AND  b.hiredate>a.hiredate ) AS mar_name FROM emp AS a  HAVING mar_name IS NOT NULL;
#5.列出部门名称和这些部门的员工信息，同时列出那些没有员工的部门
SELECT * FROM dept LEFT JOIN emp ON(emp.deptno=dept.deptno);
#6.列出所有“CLERK”（办事员）的姓名及其部门名称
SELECT emp.ename,dept.dname FROM dept LEFT JOIN emp ON(emp.deptno=dept.deptno)WHERE job='clerk';
#7.列出最低薪金大于1500的各种工作
SELECT DISTINCT(job) AS highjob FROM emp GROUP BY job HAVING MIN(sal)>1500; 
#8.列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号
SELECT * FROM dept LEFT JOIN emp ON(emp.deptno=dept.deptno)WHERE dname='sales';
#9.列出薪金高于公司平均薪金的所有员工
SELECT * FROM emp WHERE sal>(SELECT AVG(sal) FROM emp );
#10.列出与“SCOTT”从事相同工作的所有员工
SELECT * FROM emp WHERE job IN(SELECT job FROM emp WHERE ename='scott');
#11.列出薪金等于部门30中任意一个员工的薪金的所有员工的姓名和薪金
SELECT * FROM emp WHERE sal IN(SELECT sal FROM emp WHERE deptno=30);
#12.列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金
SELECT * FROM emp WHERE sal>(SELECT MAX(sal) FROM emp WHERE deptno=30)
#13.列出在每个部门工作的员工数量、平均工资
SELECT deptno,COUNT(*),AVG(sal) FROM emp GROUP BY deptno;
#14.列出所有员工的姓名、部门名称和工资
SELECT ename,dname,sal FROM emp e,dept d WHERE e.deptno=d.deptno;
#15.列出所有部门的详细信息和部门人数
SELECT dept.*,COUNT(*) AS rs FROM dept LEFT JOIN emp ON(emp.deptno=dept.deptno) WHERE emp.ename IS NOT NULL GROUP BY deptno;
#16.列出各种工作的最低工资
SELECT job,MIN(sal) FROM emp GROUP BY job;
#17.列出各个部门的MANAGER（经理）的最低薪金
SELECT deptno,MIN(sal) FROM emp WHERE job='manager' GROUP BY deptno;
#18.列出所有员工的年工资,按年薪从低到高排序
SELECT ename,sal*12 FROM emp ORDER BY sal*12;
#19.查出emp表中薪水在3000以上（包括3000）的所有员工的员工号、姓名、薪水
SELECT empno,ename,sal FROM emp HAVING sal>=3000;
#20.查询出所有薪水在'ALLEN'之上的所有人员信息
SELECT * FROM emp WHERE sal>(SELECT sal FROM emp WHERE ename='allen');
#21.查询出emp表中部门编号为20，薪水在2000以上（不包括2000）的所有员工，显示他们的员工号，姓名以及薪水，以如下列名显示：员工编号 员工名字 薪水
SELECT empno AS 员工编号,ename AS 员工姓名,sal AS 薪水 FROM emp WHERE deptno=20 AND sal>=2000;
#22.查询出emp表中所有的工作种类（无重复）
SELECT  DISTINCT(job) FROM emp;
#23.查询出所有奖金（comm）字段不为空的人员的所有信息
SELECT * FROM emp WHERE comm IS NOT NULL;
#24.查询出薪水在800到2500之间（闭区间）所有员工的信息。（注：使用两种方式实现AND以及BETWEEN AND）
SELECT * FROM emp WHERE sal BETWEEN 800 AND 2500;
SELECT * FROM emp WHERE sal>=800 AND sal<=2500;
#25.查询出员工号为7521，7900，7782的所有员工的信息。（注：使用两种方式实现，OR以及IN）
SELECT * FROM emp WHERE empno IN(7521,7900,7782);
SELECT * FROM emp WHERE empno=7521 OR empno=7900 OR empno=7782;
#26.查询出名字中有“A”字符，并且薪水在1000以上（不包括1000）的所有员工信息
SELECT * FROM emp WHERE ename LIKE '%a%' AND sal>1000;
#27.查询出名字第三个字母是“M”的所有员工信息
SELECT * FROM emp WHERE ename LIKE '__m%';
#28.将所有员工按薪水升序排序，按照入职时间降序排序
SELECT * FROM emp  ORDER BY sal ASC,hiredate DESC;
#29.查询出最早工作的那个人的名字、入职时间和薪水
SELECT * FROM emp WHERE hiredate IN(SELECT MIN(hiredate) FROM emp);
#30.显示所有员工的名字、薪水、奖金，如果没有奖金，暂时显示100
UPDATE emp SET comm =100 WHERE comm IS NULL  
SELECT ename,sal,comm  FROM emp;  
#31.显示出薪水最高人的职位
SELECT job FROM emp WHERE sal=(SELECT MAX(sal) FROM emp);
#32.查出emp表中所有部门的最高薪水和最低薪水，部门编号为10的部门不显 示
SELECT deptno,MAX(sal),MIN(sal) FROM emp WHERE NOT(deptno=10) GROUP BY deptno 
#33.删除10号部门薪水最高的员工 
DELETE FROM emp WHERE deptno=10 AND sal IN(SELECT * FROM (SELECT MAX(sal) FROM emp WHERE deptno=10) AS max_sal);
#34.将薪水最高的员工的薪水降30%
UPDATE emp SET sal=sal*0.7 WHERE sal IN (SELECT * FROM (SELECT MAX(sal) FROM emp) emp);
#35.查询员工姓名，工资和 工资级别(工资>=3000 为3级，工资>2000 为2级，工资<=2000 为1级)
SELECT ename,sal,CASE WHEN sal>=3000 THEN '3级' WHEN sal>2000 THEN '2级' WHEN sal<=2000 THEN '1级' END AS '工资级别' FROM emp;