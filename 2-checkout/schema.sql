DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS user_deets;
DROP TABLE IF EXISTS user_pmt;

CREATE TABLE user (
  id INT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  userPW TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user_deets (
  userid INT NOT NULL,
  addr TEXT NOT NULL,
  addr2 TEXT,
  city TEXT NOT NULL,
  st TEXT NOT NULL,
  zip INT NOT NULL,
  phone INT NOT NULL,
  FOREIGN KEY (userid) REFERENCES user (id)
);

CREATE TABLE user_pmt (
  userpmtid INT NOT NULL,
  cc_num INT NOT NULL,
  exp_date INT NOT NULL,
  cvv INT NOT NULL,
  pmt_zip INT NOT NULL,
  FOREIGN KEY (userpmtid) REFERENCES user (id)
);
