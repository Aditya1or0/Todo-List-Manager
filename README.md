# To-Do List Manager

A responsive web application built using **React.js** to manage tasks. The app allows users to view, create, and edit tasks. It fetches data from a dummy API, performs CRUD operations, and is styled using **Tailwind CSS**.

### Features:

- **Home Page**: Displays a list of tasks with their title, description, and status.
- **Add Task Page**: Lets users create a new task.
- **Edit Task Page**: Allows users to update a task's status.

### Tech Stack:

- **Frontend**: React.js
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Requests**: Axios
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/todos)

---

## Installation Instructions

### Prerequisites:

- **Node.js** 
- **npm** or **yarn**

### Steps to run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Aditya1or0/todo-list-manager.git
   cd todo-list-manager
   ```

2. **Install dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   ````node
   npm run dev

   Or with yarn:

   ```bash
   yarn start
   ````

4. Open your browser and go to `http://localhost:5173` to view the app.

---

## Project Structure

- **/src**: Main source directory containing all the app components.
  - **/components**: React components for the various pages.
  - **/context**: Context API for state management.
  - **/pages**: The page components (Home, Add Task, Edit Task).
  - **/services**: Axios configuration and API calls.
  - **/styles**: Tailwind CSS configurations and custom styles.

---

## How it Works

### 1. **Home Page**:

- Fetches task data from the dummy API using Axios.
- Displays a list of tasks with their titles, descriptions, and current statuses (completed or not).
- Tasks can be edited, and their status updated.

### 2. **Add Task Page**:

- Users can create new tasks by entering the title and description.
- New tasks are sent to the API for storage.

### 3. **Edit Task Page**:

- Users can update the status of existing tasks (mark as completed or not completed).

---

## Key Features

- **State Management**: Utilizes React's **Context API** to manage global state (tasks, their statuses, etc.) across the app.
- **Routing**: Implemented with **React Router DOM** to navigate between pages (Home, Add Task, Edit Task).
- **Axios**: Used to handle HTTP requests to interact with the **JSONPlaceholder** API (fetch, create, and update tasks).

---

## Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a free, fake REST API for testing and prototyping.
- [Tailwind CSS](https://tailwindcss.com/) for providing utility-first CSS for rapid UI development.
- [React](https://reactjs.org/) for the powerful frontend library.

---

If you encounter any issues or have questions, feel free to create an issue in the repository. Happy coding! 🎉
