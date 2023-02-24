# Write your MySQL query statement below

SELECT n.employee_id
FROM  
  (SELECT * FROM Employees LEFT JOIN Salaries USING(employee_id)
   UNION 
   SELECT * FROM Employees RIGHT JOIN Salaries USING(employee_id))
AS n
WHERE n.salary IS NULL OR n.name IS NULL
ORDER BY employee_id;