DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS user_deets;
DROP TABLE IF EXISTS user_pmt;

CREATE TABLE user (
  id CHAR(255) NOT NULL,
  first_name CHAR(255) NOT NULL,
  last_name CHAR(255) NOT NULL,
  email CHAR(255) NOT NULL,
  userPW CHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user_deets (
  userid CHAR(255) NOT NULL,
  addr CHAR(255) NOT NULL,
  addr2 CHAR(255),
  city CHAR(255) NOT NULL,
  st CHAR(255) NOT NULL,
  zip CHAR(255) NOT NULL,
  phone CHAR(255) NOT NULL,
  FOREIGN KEY (userid) REFERENCES user (id)
);

CREATE TABLE user_pmt (
  userpmtid CHAR(255) NOT NULL,
  cc_num CHAR(255) NOT NULL,
  exp_date CHAR(255) NOT NULL,
  cvv CHAR(255) NOT NULL,
  pmt_zip CHAR(255) NOT NULL,
  FOREIGN KEY (userpmtid) REFERENCES user (id)
);
