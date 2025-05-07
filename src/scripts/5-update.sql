\c pgtodo

UPDATE tasks
SET user_task = 'TIAGO SIQUEIRA'
WHERE  user_task = 'FABIO SILVA' AND id = '8d886247-cb2f-4b55-9454-f09320d9ea98'
RETURNING user_task, id
;
