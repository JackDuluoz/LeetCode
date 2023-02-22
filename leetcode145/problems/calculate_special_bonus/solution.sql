# Write your MySQL query statement below

SELECT employee_id, salary AS bonus FROM employees
WHERE employee_id MOD 2 != 0 AND employees.name NOT LIKE 'M%'
UNION
SELECT employee_id, salary*0 AS bonus FROM employees
WHERE employee_id MOD 2 = 0 OR employees.name LIKE 'M%'
ORDER BY employee_id;