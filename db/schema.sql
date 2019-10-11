use kckwicbec2ar46zz;

create table burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT 0,
  primary key (id)
);