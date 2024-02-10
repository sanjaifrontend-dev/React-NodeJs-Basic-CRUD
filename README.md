# React and Node.js Basic CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with React on the frontend and Node.js with Express on the backend. It uses Axios for API communication, Nodemon for automatic server restarts, CORS for handling cross-origin requests, MySQL2 for database interaction, and Tailwind CSS for styling.

## Live Demo

Check out the live demo: [React-Node.js Basic CRUD](https://react-nodejs-basic-crud.vercel.app/)

## Features

- Add, view, update, and delete users
- Responsive and user-friendly UI
- Real-time updates without page refresh
- Secure backend with MySQL database

## Technologies Used

- **Frontend:**
  - React.js
  - Axios for API calls
  - Tailwind CSS for styling

- **Backend:**
  - Node.js
  - Express.js for API development
  - Nodemon for automatic server restarts during development
  - CORS for handling cross-origin requests
  - MySQL2 for interacting with MySQL database

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL database server

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sanjayweb-dev/React-NodeJs-Basic-CRUD.git

2. **Navigate to the project folder:**

    cd react-nodejs-basic-crud

3. **Install dependencies for both frontend and backend:**

    **Frontend:**
       - cd client
       - npm install

    **Backend:**
       - cd server
       - npm install

4. **Setup MySQL Database:**

   - Create a new database.
   - Update the database configuration in client/config/db.config.js with your database details.

5. **Start the backend server:**

    cd server
    npm start
    The server will run on http://localhost:3001

6. **Start the frontend development server:**

    cd client
    npm start
    The server will run on http://localhost:3000


## API Endpoints

    GET /users: Get the list of all users.
    GET /user/:id: Get details of a specific user.
    POST /users: Add a new user.
    PUT /user/:id: Update details of a specific user.
    DELETE /user/:id: Delete a specific user.

## Usage
You can use this project as a starting point for building more complex Angular applications with CRUD functionality. Customize it to suit your specific requirements and expand upon it as needed.

## License
This project is licensed under the MIT License. Feel free to use and modify it according to your needs.

## Acknowledgments
    - [React] (https://react.dev/)
    - [Node.js] (https://nodejs.org/en)
    - [Express.js] (https://expressjs.com/)
    - [Tailwind CSS] (https://tailwindcss.com/)
    - [MySQL] (https://www.mysql.com/)
    - [Axios] (https://axios-http.com/)
    - [Nodemon] (https://nodemon.io/)

    Feel free to contribute, report issues, or suggest improvements!