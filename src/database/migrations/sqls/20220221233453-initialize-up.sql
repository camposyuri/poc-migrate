/* Replace with your SQL commands */
DROP SEQUENCE IF EXISTS users_coduser_seq;
CREATE SEQUENCE users_coduser_seq;

CREATE TABLE IF NOT EXISTS users (
	codUser INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('users_coduser_seq'),
	userName VARCHAR(100) NOT NULL,
	lastName VARCHAR(100) NOT NULL
);