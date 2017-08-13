# Bamazon
Northwestern University Coding Bootcamp homework

## File Structure
![Alt text](/file-structure.png?raw=true "File Structure")


**bamazon.sql**
* This is my schema for my bamazon database which contains all of my store's product information

**bamazonCustomer.js**
* This contains all logic for creating my express server, the logic for running the inquirer questions, and the logic for altering/updating/returning information to and from my database back to the user.

**package.json**
* Stores my npm packages that are necessary to run this app. 

**NPM packages used**
* inquirer and mysql

## What the working app looks like in your console
![Alt text](/working-bamazon.png?raw=true "Working App screenshot")

**The order of the working app:**
* 1: run "node bamazonCustomer.js"
* 2: displayed in the console is the entire table of available products (product ID's, names, and prices)
* 3: user is asked "what is the ID of the product you want?"
* 4: user enters a number, 1-10
* 5: console then asks user how many of that product user would like
* 6: user enters a number, any amount
* 7: depending on if product is in stock in the database, or if the database does or does not have a sufficient quantity, console will return a message to the user with accurate information. If in stock, that means the price is returned to the user. If not in stock, user is alerted of this. If insufficient quantity, user is alerted of this as well.
* 8: step 7 works because the app checks the database based on the user's response. This is done through of the logic contained in bamazonCustomer.js
* 9: lastly, the product table is again displayed after the user completes their inputs.

