var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: 'root',
database: 'bamazon'
});

connection.connect(function(err) {
    displayProductTable();
});

//////// need to first display in the console all of the items available for sale. Include the ids, names, and prices of products for sale ////////////
function displayProductTable() {
    console.log('Here are all the products currently for sale');
    
    connection.query("SELECT item_id, product_name, price FROM products", function(err, response) {
    if (err) throw err;

     for (var i = 0; i < response.length; i++) {
          console.log("Product ID: " + response[i].item_id + " || Product Name: " + response[i].product_name + " || Product Price: " + response[i].price);
        }
  	});
};