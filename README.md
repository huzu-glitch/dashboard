## Live project is deployed(frontend and backend both) on Vercel and Neon postgre DB was utilized to store theme data of the user.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)
- A running [PostgreSQL](https://www.postgresql.org/) database instance (either locally or from a cloud provider like Neon).

## Local Development Setup

Follow these steps to get the application running on your local machine.

### 1. Backend Setup

The backend server connects to a PostgreSQL database to store user theme preferences.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env` in the `backend` directory and add your database connection string:
    ```env
    # .env
    DATABASE_URL="your_postgresql_connection_string"
    ```
    Replace `"your_postgresql_connection_string"` with the actual connection string for your database (e.g., `postgres://user:password@host:port/database`).

4.  **Set up the database schema:**
    Run the SQL commands in `database.sql` against your PostgreSQL database. This will create the `user_settings` table required by the application.

5.  **Start the backend server:**
    ```bash
    npm start
    ```
    The backend server will start on `http://localhost:3001`.

### 2. Frontend Setup

The frontend is a React application built with Vite.

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    The `frontend` directory should contain a `.env` file for local development. Ensure it has the following content:
    ```env
    # .env
    VITE_BACKEND_URL="http://localhost:3001"
    ```
    This tells the frontend to send API requests to the local backend server.

4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend application will be available at `http://localhost:5173` (or another port if 5173 is busy).

You should now be able to access the application in your browser and have your theme preferences persist between sessions.
