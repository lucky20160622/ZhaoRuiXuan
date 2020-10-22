 CREATE TABLE emp(
	empno		INT, 			-- 员工号
	ename		VARCHAR(50),    -- 员工姓名
	job		VARCHAR(50),   	    -- 员工职位
	mgr		INT,     			-- 管理者工号
	hiredate	DATE,           -- 入职时间
	sal		DECIMAL(7,2),		-- 薪水
	comm		DECIMAL(7,2),   -- 奖金
	deptno		INT	 			-- 部门编号
) ;
  
CREATE TABLE dept(
	deptno		INT,			-- 部门编号
	dname		VARCHAR(14),    -- 部门名称
	loc		VARCHAR(13)         -- 部门位置       
);

INSERT INTO emp VALUES(7369,'SMITH','CLERK',7902,'1980-12-17',800,NULL,20);
INSERT INTO emp VALUES(7499,'ALLEN','SALESMAN',7698,'1981-02-20',1600,300,30);
INSERT INTO emp VALUES(7521,'WARD','SALESMAN',7698,'1981-02-22',1250,500,30);
INSERT INTO emp VALUES(7566,'JONES','MANAGER',7839,'1981-04-02',2975,NULL,20);
INSERT INTO emp VALUES(7654,'MARTIN','SALESMAN',7698,'1981-09-28',1250,1400,30);
INSERT INTO emp VALUES(7698,'BLAKE','MANAGER',7839,'1981-05-01',2850,NULL,30);
INSERT INTO emp VALUES(7782,'CLARK','MANAGER',7839,'1981-06-09',2450,NULL,10);
INSERT INTO emp VALUES(7788,'SCOTT','ANALYST',7566,'1987-04-19',3000,NULL,20);
INSERT INTO emp VALUES(7839,'KING','PRESIDENT',NULL,'1981-11-17',5000,NULL,10);
INSERT INTO emp VALUES(7844,'TURNER','SALESMAN',7698,'1981-09-08',1500,0,30);
INSERT INTO emp VALUES(7876,'ADAMS','CLERK',7788,'1987-05-23',1100,NULL,20);
INSERT INTO emp VALUES(7900,'JAMES','CLERK',7698,'1981-12-03',950,NULL,30);
INSERT INTO emp VALUES(7902,'FORD','ANALYST',7566,'1981-12-03',3000,NULL,20);
INSERT INTO emp VALUES(7934,'MILLER','CLERK',7782,'1982-01-23',1300,NULL,10);

INSERT INTO dept VALUES(10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO dept VALUES(20, 'RESEARCH', 'DALLAS');
INSERT INTO dept VALUES(30, 'SALES', 'CHICAGO');
INSERT INTO dept VALUES(40, 'OPERATIONS', 'BOSTON');

SELECT * FROM emp
SELECT * FROM dept
#1.按员工编号升序排列不在10号部门工作的员工信息
SELECT * FROM emp WHERE NOT(deptno=10) ORDER BY empno ASC;
SELECT e.* FROM emp e JOIN dept d ON e.deptno=d.deptno WHERE NOT(d.deptno=10)ORDER BY empno ASC;
#2.查询姓名第二个字母不是”A”且薪水大于800元的员工信息，按年薪降序排列
SELECT * FROM emp  WHERE NOT(ename='_a%') AND sal>800 ORDER BY sal DESC;
#3.求每个部门的平均薪水
SELECT deptno,AVG(sal) FROM emp GROUP BY deptno;
#4.求各个部门的最高薪水
SELECT deptno,MAX(sal) FROM emp GROUP BY deptno;
#5.求每个部门每个岗位的最高薪水
SELECT deptno,job,MAX(sal)FROM emp GROUP  BY deptno,job;
#6.求平均薪水大于2000的部门编号
SELECT deptno,AVG(sal) FROM emp  GROUP BY deptno HAVING AVG(sal)>2000;
#7.将员工薪水大于1200且部门平均薪水大于1500的部门编号列出来，按部门平均薪水降序排列
SELECT empno,AVG(sal) FROM emp WHERE sal>1200 GROUP BY deptno HAVING 1500<AVG(sal) ORDER BY AVG(sal) DESC;
#8.求最高薪水的员工信息
SELECT * FROM emp WHERE sal=(SELECT MAX(sal) FROM emp);
#9.求多于平均薪水的员工信息
SELECT * FROM emp WHERE sal>(SELECT AVG(sal) FROM emp )
#10.求各个部门薪水最高的员工信息
SELECT * FROM emp WHERE sal IN (SELECT MAX(sal) FROM emp GROUP BY deptno);
#11.查询和Scott相同部门的员工姓名和雇用日期
SELECT ename,hiredate FROM emp WHERE deptno=(SELECT deptno FROM emp WHERE ename='scott');
#12.查询工资比公司平均工资高的员工的员工号，姓名和工资。
SELECT empno,ename,sal FROM emp WHERE sal>(SELECT AVG(sal) FROM emp );
#13.查询各部门中工资比本部门平均工资高的员工的员工号, 姓名和工资
SELECT empno,ename,sal FROM emp e,(SELECT deptno,AVG(sal) ssal FROM emp GROUP BY deptno) s WHERE e.deptno=s.deptno AND e.sal>s.ssal;
#14.查询和姓名中包含字母u的员工在相同部门的员工的员工号和姓名
SELECT empno,ename FROM emp WHERE deptno=(SELECT deptno FROM emp WHERE ename LIKE '%u%');
SELECT emp.* FROM emp WHERE deptno=(SELECT deptno FROM emp WHERE ename LIKE'%u%');
#15.查询在部门的loc为 DALLAS 的部门工作的员工的员工号
SELECT emp.empno,emp.ename FROM emp LEFT JOIN dept ON(dept.deptno=emp.deptno) WHERE loc='dallas';
#16.查询管理者是King的员工姓名和工资 
SELECT ename,sal FROM emp WHERE ename='king';
#17.查询所有部门的名字，loc，员工数量 和 工资平均值
SELECT dept.dname,loc,COUNT(emp.ename),AVG(sal) FROM emp LEFT JOIN dept ON(dept.deptno=emp.deptno) GROUP BY emp.deptno;