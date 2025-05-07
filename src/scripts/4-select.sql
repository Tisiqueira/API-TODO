\c pgtodo

--SELECT * FROM tasks;
--SELECT title, status_task, user_task FROM tasks;

--SELECT title AS "Title activity", status_task AS "Status",user_task AS User" FROM tasks ;

SELECT id,
title AS "Title activity",
status_task AS "Status",
user_task AS "User"
FROM tasks
;
