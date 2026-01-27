🔐 User Management API (Node.js + Express + JWT)

    A simple and secure User Management API built with Node.js, Express, and JWT authentication.
    This project demonstrates user registration, login, and protected routes using industry-standard practices.

🚀 Features

    User registration with validation

    User login with JWT token generation

    Protected routes using middleware

    RESTful API structure

    Clean and scalable project architecture

🛠️ Technologies Used

    Node.js

    Express.js

    JSON Web Token (JWT)

    JavaScript

    Insomnia (API testing)

📁 Project Structure

    login-system-js/
    │
    ├─ src/
    │   ├─ controllers/
    │   │   └─ authController.js
    │   │
    │   ├─ routes/
    │   │   └─ authRoutes.js
    │   │
    │   ├─ middlewares/
    │   │   └─ authMiddleware.js
    │   │
    │   ├─ data/
    │   │   └─ users.js
    │   │
    │   └─ app.js
    │
    ├─ server.js
    ├─ package.json
    └─ README.md

⚙️ How to Run the Project
    
    1️⃣ Clone the repository
        git clone https://github.com/your-username/login-system-js.git
    
    2️⃣ Install dependencies
        npm install
    
    3️⃣ Start the server
        node server.js
            The server will run at:
             http://localhost:3000

🔑 API Endpoints
    
    🟢 Register User
        POST /register

        Body (JSON):
            {
            "email": "user@email.com",
            "password": "123456"
            }

        Response:
            {
            "message": "User registered successfully!"
            }

    🔵 Login User
        POST /login

        Body (JSON):
            {
            "email": "user@email.com",
            "password": "123456"
            }
        Response:
            {
            "message": "Welcome back!",
            "token": "JWT_TOKEN"
            }

🔒 Protected Route
   
    GET /profile
        Headers:
            Authorization: Bearer JWT_TOKEN
        Response:
            {
            "message": "Protected data",
            "user": {
                "email": "user@email.com"
            }
            }
🧪 API Testing

    All endpoints were tested using Insomnia, including authentication flow and protected routes.

📌 Notes

    This project uses an in-memory data store for simplicity.

    JWT secret is hardcoded for learning purposes.

    Ideal for small projects, MVPs, and authentication demos.

👨‍💻 Author

    Developed by Andre Gonzaga
    Backend Developer | Node.js | APIs | Authentication
