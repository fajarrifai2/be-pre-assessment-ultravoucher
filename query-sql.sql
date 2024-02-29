SELECT
  t1.id,
  t1.name,
  t2.name AS parent_name
FROM
  (
    SELECT
      id,
      name,
      parent_id
    FROM
      your_table
  ) AS t1
LEFT JOIN
  (
    SELECT
      id,
      name
    FROM
      your_table
  ) AS t2
ON
  t1.parent_id = t2.id
