⚙️ Working Explanation
🔹 Backend

Node.js and Express.js are used to create the server and handle HTTP requests.

🔹 Database

MongoDB is used to store user data such as name, email, and age.

🔹 Mongoose

Mongoose is used to define schema and interact with MongoDB easily.

🔄 CRUD Operations
1. Create User (POST)
Adds new user to database
2. Read Users (GET)
Fetches all users from database
3. Update User (PUT)
Updates user data using ID
4. Delete User (DELETE)
Deletes user using ID
🌐 API Endpoints
Method	Endpoint	Description
POST	/addUser	Add new user
GET	/getUsers	Get all users
PUT	/updateUser/	Update user
DELETE	/deleteUser/	Delete user
🧪 Testing

All APIs are tested using Thunder Client / Postman by sending HTTP requests:

POST request with JSON body
GET request to fetch data
PUT request with ID to update
DELETE request with ID to remove data