## Works:

* UserSubmit
* Button, with basic functionality. only has a deleteUser method so far, but can support more later on.
* ItemRow, basically no functionality so far. but it IS demonstrating how this.props works, to me.
* All /users methods in server.js.

## To Get This Thing Running:
* 'yarn start' in one terminal window.
* 'npm run dev' in another terminal window.
* 'postgres://postgres@localhost:5432/eventonica'
* The functioning table is 'users'.
* Its columns are 'id', 'username' and 'title'.
* The delete button is currently hardcoded on App.js line 43. It works, if you replace "testUser3" with the username you wish to delete from the database.
*I ran out of time, trying to display all users on the page. You'll have to manually reload localhost:3001/users and check the terminal to see that the delete button works

## Thank you for taking the time to look at my project!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
