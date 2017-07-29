create database bamazon_db;

use bamazon_db;

create table products (
item_id int NOT NULL auto_increment,
product_name varchar(100) NULL,
department_name varchar(100),
price decimal(10, 2) null,
stock_quantity int null,
primary key (item_id)
);