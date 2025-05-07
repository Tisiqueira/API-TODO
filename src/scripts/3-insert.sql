\c pgtodo

--INSERT INTO tasks VALUES(DEFAULT,'requirements for software development','IN PROGRESS','requirements to project',DEFAULT,'TIAGO SIQUEIRA');

INSERT INTO tasks(title, status_task, describe, user_task)
VALUES
('To finish frontend','IN PROGRESS','requirements to project','FABIO SILVA'),
('To finish backend','IN PROGRESS','requirements to project','ANDREI PARRA')
RETURNING id, created_at
;
