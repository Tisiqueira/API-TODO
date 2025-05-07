\c pgtodo

DROP TABLE IF EXISTS tasks;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS tasks(
  --id SERIAL,
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  title VARCHAR(60),
  status_task VARCHAR(20),
  describe VARCHAR(256),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
