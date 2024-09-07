<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
Fitness-Tracker-MVP-Social-Community
</h1>
<h4 align="center">A user-centric fitness platform for personalized goal setting, detailed progress tracking, and a thriving social community.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="">
  <img src="https://img.shields.io/badge/Frontend-React,_Javascript,_HTML,_CSS-red" alt="">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/Fitness-Tracker-MVP-Social-Community?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/Fitness-Tracker-MVP-Social-Community?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/Fitness-Tracker-MVP-Social-Community?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) called "Fitness-Tracker-MVP-Social-Community" that provides a comprehensive solution for users to set personalized fitness goals, track their progress, and connect with a supportive community. The MVP is built using a robust technology stack, including:

* **Frontend:** React.js, Next.js, Tailwind CSS, Zustand 
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** NextAuth.js
* **Error Handling:** Sentry

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🔐 | **User Authentication**   | Users can register and log in securely using an email-based authentication system. |
| 🎯 | **Goal Setting**   | Users can set personalized fitness goals tailored to their individual needs and preferences. |
| 📊 | **Progress Tracking**  | Users can log their workouts, activities, and nutritional intake to track their progress towards their goals. |
| 💬 | **Social Engagement** | Users can share their progress, motivate each other, and connect with like-minded individuals in a supportive community. |
| 📈 | **Data Visualization** | The platform provides visually appealing charts and graphs to help users understand their progress and identify trends. |

## 📂 Structure
```text
└── src
    ├── components
    │   ├── Button.tsx
    │   ├── Header.tsx
    │   ├── Layout.tsx
    │   ├── GoalInput.tsx
    │   ├── ProgressChart.tsx
    │   └── SocialShareButton.tsx
    ├── pages
    │   ├── api
    │   │   ├── auth.ts
    │   │   ├── goals.ts
    │   │   └── progress.ts
    │   ├── _app.tsx
    │   ├── index.tsx
    │   ├── dashboard.tsx
    │   └── login.tsx
    ├── styles
    │   └── global.css
    ├── utils
    │   ├── helpers.ts
    │   ├── api.ts
    │   ├── auth.ts
    │   └── validation.ts
    ├── config
    │   └── next-auth.config.ts
    └── middleware
        └── authentication.ts
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/coslynx/Fitness-Tracker-MVP-Social-Community.git`
2. Navigate to the project directory:
   - `cd Fitness-Tracker-MVP-Social-Community`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
1. Start the development server:
   - `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `next.config.js`, `tailwind.config.js`, and `.env`.

### 📚 Examples
- **Registering a new user:**
  - Navigate to the login page.
  - Click the "Sign Up" button.
  - Fill in the required details (email, password) and submit the form.
- **Setting a fitness goal:**
  - Log in to your account.
  - Navigate to the dashboard page.
  - Click the "Add Goal" button.
  - Enter the goal details (name, target, deadline) and click "Save".
- **Tracking your progress:**
  - Log in to your account.
  - Navigate to the dashboard page.
  - Select a goal from the list.
  - Click the "Log Workout" button to record your activity.
  - View your progress in the interactive chart.
- **Sharing your progress:**
  - Log in to your account.
  - Navigate to the dashboard page.
  - Select a goal from the list.
  - Click the "Share Progress" button.
  - Choose a social media platform and share your progress.

## 🌐 Hosting
### 🚀 Deployment Instructions
1. **Create a Vercel account:**
   - [https://vercel.com/](https://vercel.com/)
2. **Initialize Vercel:**
   - `vercel init`
3. **Connect to your GitHub repository:**
   - Follow the prompts to connect your repository.
4. **Deploy:**
   - `vercel deploy`

### 🔑 Environment Variables
- `NEXT_PUBLIC_API_KEY`: API key for external services.
- `DATABASE_URL`: Database connection URL for PostgreSQL.
- `AUTH_SECRET`: Authentication secret for NextAuth.js.

## 📜 License
This MVP is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## 👥 Authors
- **Author Name** - [CosLynx.com](https://coslynx.com)
- **Creator Name** - [CosLynxAI](https://github.com/coslynx)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
</div>