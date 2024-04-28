# Authentication API with Node.js and MongoDB

This project demonstrates a simple authentication system using Node.js, Express.js, and MongoDB. It includes APIs for user registration, login, fetching user details, and updating user details, all protected by JWT-based authentication.

## Technologies

- Node.js
- Express.js
- MongoDB
- JsonWebToken (JWT)
- Bcryptjs

## Getting Started
Instructions to get the project up and running on your local machine.

### Prerequisites
- Node.js 
- MongoDB
- Postman (optional for testing APIs)
- MongoDB

### Installation
1. Clone the repository
```bash
git clone https:://github.com/UxHarshit/SecureLoginSystem.git
cd authentication-api
```
2. Install dependencies
```bash
npm install
```
3. Make a copy of `.env.example` file and rename it to `.env` and update the values
```bash
mv .env.example .env
```
4. Start the server or run the project
```bash
npm run dev
```
5. The server will start on `http://localhost:3000`

## API Endpoints
The following are the API endpoints available in the project.
User Registration
- URL: /api/auth/register
- Method: POST
- Data Params
    - name: string (required)
    - lastname: string (required)
    - username: string, unique (required)
    - email: string, unique (required)
    - password: string ,(required)
- Success Response
    - Code: 200
    - Content: { msg: 'User registered' }
- Error Response
    - Code: 400
    - Content: { msg: 'User already exists' }
    - Code: 500
    - Content: 'Internal server error'

User Login
- URL: /api/auth/login
- Method: POST
- Data Params
    - email: string (required)
    - password: string (required)
- Success Response
    - Code: 200
    - Content: { token: 'JWT token' }
- Error Response
    - Code: 400
    - Content: { msg: 'Invalid credentials' }
    - Code: 500
    - Content: 'Internal server error'

Get User Details
- URL: /api/auth/user
- Method: GET
- Headers
    - Authorization: Bearer <token>
- Success Response
    - Code: 200
    - Content: {name, lastname, username, email }
- Error Response
    - Code: 401
    - Content: { msg: 'Authorization denied' }
    - Code: 500
    - Content: 'Internal server error'

Update User Details
- URL: /api/auth/update
- Method: POST
- Headers
    - Authorization: Bearer <token>
- Data Params
    - name: string
    - lastname: string
    - email: string
- Success Response
    - Code: 200
    - Content: { msg: 'User updated' }
- Error Response
    - Code: 401
    - Content: { msg: 'Authorization denied' }
    - Code: 500
    - Content: 'Internal server error'

## Author
Harshit Katheria - [UxHarshit](https:://github.com/UxHarshit)

## Acknowledgements
- This project was created for a backend internship role assignment by Sky Goal.


