CREATE TABLE products (
  product_id int(11) NOT NULL AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  product_categories int(5) NOT NULL,
  product_price int(11) NOT NULL,
  product_instock int(10) NOT NULL DEFAULT 0,
  product_desc varchar(255) NOT NULL,
  create_user varchar(20) NOT NULL,
  create_date datetime NOT NULL,
  update_user varchar(20) NOT NULL,
  update_date datetime NOT NULL,
  product_picture1 varchar(255) NOT NULL,
  product_picture2 varchar(255) NOT NULL,
  product_picture3 varchar(255) NOT NULL,
  product_picture4 varchar(255) NOT NULL,

  PRIMARY KEY (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


ALTER TABLE products
ADD FOREIGN KEY(category_id)
REFERENCES categories(category_id)
ON DELETE RESTRICT ON UPDATE RESTRICT;