var mysql = require('mysql');

var connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: 'root',
database: 'bamazon_db'
});

connection.connect(function(err) {
    createProduct();
});

function createProduct() {
    var query = connection.query(
        'insert into products set ?',
        {
            product_name: 'shake weight',
            department_name: 'fitness',
            price: 19.99,
            stock_quantity: 999
        },
        function(err, res) {
            console.log(res.affectedRows + ' product inserted');
        }
    )
}