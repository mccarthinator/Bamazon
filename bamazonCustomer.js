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
    productQuestions();
});

//////// need to first display in the console all of the items available for sale. Include the ids, names, and prices of products for sale ////////////
function displayProductTable() {
    console.log('Here are all the products currently for sale');
    
    connection.query("SELECT item_id, product_name, price FROM products", function(err, response) {
        if (err) throw err;
    
         for (var i = 0; i < response.length; i++) {
              console.log("ID: " + response[i].item_id + " || Product: " + response[i].product_name + " || Price: " + response[i].price);
            }
          });
    }

function productQuestions() { 
    inquirer.prompt ([
        {
            type: "input",
            name: "itemID",
            message: "What is the ID of the product you want?"
        },
        {
            type: "input",
            name: "quantity",
            message: "How many of this product would you like to buy?"
        }
    ]).then(function(response) {
		
		var prodId = response.itemID; 
		var id = parseInt(prodId) -1; 
		var amount = parseInt(response.quantity); 	

		connection.query("SELECT * FROM products", function(err, result) {

			var cost = result[id].price;
			var inStock = result[id].stock_quantity;
			var stockUpdate = inStock - amount;

			//check if item is in stock
			if(inStock === 0 && amount > inStock) {
				console.log("Sorry, we're out of that item.")
				displayProductTable();
			}

		    else if(amount > inStock) {
				console.log("We don't have enough of this item for your order.");
				displayProductTable();
			} 
			else {
				//total
				var total = amount * cost;

				//update the database
				connection.query("UPDATE products SET ? WHERE ?", [
					{
						stock_quantity: stockUpdate
					}, {
						item_id: prodId
					}
				]);

				console.log("Your total bill is: $" + total);

				//end the connection.
				connection.end();
			}
		});

	});

}
