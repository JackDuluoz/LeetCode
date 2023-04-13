# Write your MySQL query statement below

SELECT name AS Customers FROM customers
LEFT JOIN orders
ON customers.id = orders.customerId
WHERE customerId IS null;