# Todo-App

## Description

The **Todo-App** is a simple application for managing tasks. With this app, you can add and delete tasks and keep track of your daily to-dos. It consists of a **Frontend** (React) and a **Backend** (Express) that manages the data. The goal of the app is to provide a lightweight, self-hosted solution for managing todos.

## Features

- **Frontend:**
  - Add new tasks
  - Delete tasks
  - Responsive design

- **Backend:**
  - Server for managing tasks (to be expanded later)

## Installation

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download the latest version of [Node.js](https://nodejs.org/) here.

### Step 1: Clone the repository

```bash
git clone https://github.com/Lucentix/todo-app.git
cd todo-app
```

### Step 2: Install dependencies

To install both frontend and backend dependencies, run the following command:

#### 2.1 Install backend and frontend dependencies

```bash
npm install
```

#### 2.2 Start the server

```bash
npm start
```

### Step 3: Use the App

Once both the backend and frontend are successfully started, you can open the app in your web browser. The frontend is typically available at [http://localhost:3000](http://localhost:3000), and the backend will run at [http://localhost:5000](http://localhost:5000) (depending on the server settings).

### Step 4: Future Development

Currently, tasks are managed in the frontend, but the backend will be expanded in the future to store and persist tasks (e.g., in a database).

## What’s Coming?

- **Data Persistence**: Currently, tasks are only stored in the frontend. In the future, a backend database (e.g., MongoDB or MySQL) will be integrated to store tasks permanently.
- **Authentication**: Users will be able to register and log in to manage their own to-do lists.
- **Improved Error Handling and Validation**: Future versions will include stronger error handling and validation to provide a better user experience.
- **Mobile Optimization**: The design will be further optimized to display better on mobile devices.

## Contributing

Feel free to contribute to this project! Fork the repository and create pull requests to add improvements, bug fixes, or new features. If you have ideas on how the project can be further developed, open an issue!

## License

This project is licensed under the [License](LICENSE).