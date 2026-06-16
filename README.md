# TakeNotes

Introducing TakeNotes – your essential note-taking companion for seamless organization and productivity. With its intuitive interface, TakeNotes allows you to effortlessly capture and categorize your ideas, tasks, and reminders. Whether you're brainstorming for a project or making a simple to-do list, TakeNotes simplifies your workflow, keeping you focused and organized on the go.

Experience the synergy of ambient music, task management, and disciplined work sessions.

## Features
- Create, view, edit, and delete notes
- Google OAuth 2.0 user authentication
- Session storage in MongoDB
- Search and pagination for notes

## Local Setup & Installation

### Prerequisites
- Node.js (v18.x recommended)
- Local MongoDB or MongoDB Atlas URI

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/poriyaparth/Take_Notes.git
   cd TakeNotes
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and configure the environment variables (see below).
4. Run the application:
   ```bash
   npm start
   ```
   Or in development mode:
   ```bash
   npm run dev
   ```

---

## Environment Variables

Configure these variables in your `.env` file:

```env
PORT=5001
MONGODB_URI=your_mongodb_atlas_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5001/google/callback
```

---

## Deployment (Free with Render & MongoDB Atlas)

### 1. Database Setup (MongoDB Atlas)
1. Register/Login at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and deploy a free **M0 cluster**.
2. Create a database user with a password.
3. In **Network Access**, add IP `0.0.0.0/0` (Allow Access From Anywhere) to let Render servers connect.
4. Copy the connection string (under Connect > Drivers) and substitute your username and password.

### 2. Web Service Setup (Render)
1. Push your repository to GitHub.
2. Sign up/Login to [Render](https://render.com/) and create a new **Web Service**.
3. Link your GitHub repository.
4. Set the following settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. Under **Environment**, add the environment variables from your `.env` file. Ensure `GOOGLE_CALLBACK_URL` is set to your production callback URL (e.g., `https://your-app-name.onrender.com/google/callback`).
6. Register the Render callback URL under **Authorized redirect URIs** in your Google Developer Console.

---

## Author

Parth Manoj Poriya

