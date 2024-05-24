# Task Flow

This is a web application for managing a simple to-do list with user authentication. The application allows users to sign up, log in, and manage their tasks. Each user has their own task list that they can create, read, update, and delete.

## Technologies Used

### Frontend

- **Framework/Library:** React
- **CSS Framework:** TailwindCSS
- **State Management:** Redux Toolkit
- **Routing:** React Router

### Backend

- **Framework:** Node.js with Express.js
- **Database:** MongoDB
- **ORM:** Mongoose
- **Authentication:** JWT-based authentication

## Features

### User Authentication

- **Sign Up:** Users can create an account with a username, email, and password.
- **Login:** Users can log in with their email and password.
- **JWT:** JSON Web Tokens (JWT) are used to maintain user sessions.

### Task Management

- **CRUD Operations:** Logged-in users can create, read, update, and delete their tasks.
- **User-Specific Tasks:** Each user can only access their own tasks.
- **Validation:** Form validation on server.

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB

### Installation Steps

- Clone the repository:

```sh
    git clone https://github.com/solobarine/taskflow.git
    cd taskflow
```

- Install dependencies for the backend:

```sh
    cd backend
    npm install
```

- Install dependencies for the frontend:

```sh
    cd ../frontend
    yarn
```

- Set up environment variables:
  Create a .env file in the backend directory and add the following:

```sh
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRES_IN=jwt_lifespan
    PORT=your_desired_port
```

- Run the backend server:

```sh
    cd backend
    npm start
```

- Run the frontend server:

```sh
    cd ../frontend
    yarn dev
```

- Open the application:
  Navigate to http://localhost:3000 in your browser.

## Usage

- **Register:** Go to the Register page to create a new account.
- **Login:** Log in using your email and password.
- **Manage Tasks:** Once logged in, you can create, read, update, and delete tasks from the To-Do List page.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.

## ✍️ Author

Name: Solomon Barine Akpuru
GitHub: [GitHub Handle](https://github.com/solobarine)
LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/solomon-akpuru)
Wellfound: [Wellfound Handle](https://wellfound.com/u/solomon-akpuru)

## License

This project is licensed under the [MIT](./LICENSE) License. See the [LICENSE](./LICENSE) file for details.
