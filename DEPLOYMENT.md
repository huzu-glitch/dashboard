Here is a guide to help you deploy your project.

### Prerequisites

- A GitHub account.
- A Vercel account.
- A Neon account.
- `git` installed on your machine.

### Step 1: Prepare your project for GitHub

1.  **Initialize a Git repository**

    If you haven't already, initialize a git repository in your project's root directory (`DASHBOARD`):

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a GitHub repository**

    Go to GitHub and create a new repository. Do not initialize it with a `README` or `.gitignore`.

3.  **Push your code to GitHub**

    Follow the instructions on GitHub to push your local repository to the remote one. It will look something like this:

    ```bash
    git remote add origin <your-github-repo-url>
    git branch -M main
    git push -u origin main
    ```

### Step 2: Deploy the Database to Neon

1.  **Create a Neon Project**

    - Go to [Neon](https://neon.tech/) and sign up or log in.
    - Create a new project.

2.  **Get the Database Connection String**

    - In your Neon project dashboard, find the **Connection Details**.
    - You will need the connection string that looks like this:
      `postgres://<user>:<password>@<host>/<dbname>`

3.  **Update your Backend Environment Variables**

    Your `backend/.env` file contains the connection details for your local database. You will use the details from your Neon connection string to set the environment variables for your deployed backend in the next step. The variables are:
    - `DB_USER`
    - `DB_HOST`
    - `DB_DATABASE`
    - `DB_PASSWORD`
    - `DB_PORT`

4.  **Run the SQL script**

    - In the Neon SQL Editor, copy and paste the content of `backend/database.sql` and run it to create the `user_settings` table.

### Step 3: Deploy the Frontend and Backend to Vercel

Vercel can deploy both your frontend and your Node.js backend from the same repository.

1.  **Import your project in Vercel**

    - Go to your Vercel dashboard and click **Add New...** > **Project**.
    - Select your GitHub repository.

2.  **Deploy the Frontend**

    - Vercel should automatically detect that you have a Vite project in the `frontend` directory.
    - Set the **Root Directory** to `frontend`.
    - Vercel will pre-fill the build settings. They should be correct:
      - **Build Command:** `npm run build`
      - **Output Directory:** `dist`
    - Before deploying, go to the **Environment Variables** section. You need to add the URL of your backend.
      - **Name:** `VITE_BACKEND_URL`
      - **Value:** This will be the URL of your Vercel deployment for the backend. You can come back and add this later. For now, you can leave it empty.

3.  **Deploy the Backend**

    - In Vercel, go back to your projects and click **Add New...** > **Project** again.
    - Select the same GitHub repository.
    - This time, set the **Root Directory** to `backend`.
    - Vercel will detect the `backend/index.js` file and set it up as a serverless function.
    - Go to the **Environment Variables** section and add the connection details from your Neon database:
      - `DB_USER`
      - `DB_HOST`
      - `DB_DATABASE`
      - `DB_PASSWORD`
      - `DB_PORT`
    - Deploy the backend. Vercel will give you a URL for it.

4.  **Connect Frontend and Backend**

    - Go back to your frontend project settings in Vercel.
    - In the **Environment Variables**, set `VITE_BACKEND_URL` to the URL of your deployed backend.
    - Redeploy the frontend.

Now your website should be live!
