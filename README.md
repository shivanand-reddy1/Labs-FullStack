# Full Stack Labs - Student Marks Dashboard

A collection of lab exercises demonstrating the progression from static HTML to dynamic React applications for a Student Marks Dashboard.

## Project Structure

```
Labs-FullStack/
├── Lab1/          # Static HTML + Tailwind CSS
├── Lab2/          # React + Vite + Tailwind CSS
└── Lab3/          # React with Dynamic Data Reloading
```

---

## Lab 1: Static HTML Dashboard

A static Student Marks Dashboard built with pure HTML and Tailwind CSS (via CDN).

### Features

- Responsive sidebar navigation
- Mobile-friendly menu toggle
- Dashboard layout with header, sidebar, and main content area
- User profile and notification UI components

### How to Run

Simply open `Lab1/dashboard.html` in a web browser.

---

## Lab 2: React Component-Based Dashboard

The same dashboard rebuilt using React with component-based architecture.

### Tech Stack

- **React** 18.2
- **Vite** 5.0
- **Tailwind CSS** 3.4
- **PostCSS** & **Autoprefixer**

### Components

| Component           | Description                        |
| ------------------- | ---------------------------------- |
| `App.jsx`           | Main application with page routing |
| `Header.jsx`        | Top navigation bar                 |
| `Sidebar.jsx`       | Side navigation menu               |
| `DashboardPage.jsx` | Dashboard overview page            |
| `StudentsPage.jsx`  | Student listing page               |
| `StudentTable.jsx`  | Table component for students       |
| `StudentRow.jsx`    | Individual student row             |
| `SummaryCard.jsx`   | Summary statistics card            |
| `ReportsPage.jsx`   | Reports page                       |
| `SettingsPage.jsx`  | Settings page                      |

### How to Run

```bash
cd Lab2
npm install
npm run dev
```

---

## Lab 3: React with Dynamic Data Reloading

An enhanced version of Lab 2 with dynamic data reloading capabilities.

### Additional Features

- Dynamic data reload without page refresh
- Cache-busting for updated data imports
- Floating reload button for quick data refresh

### Tech Stack

Same as Lab 2

### How to Run

```bash
cd Lab3
npm install
npm run dev
```

---

## Available Scripts

For Lab 2 and Lab 3:

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

---

## Author

Full Stack Development Lab Exercises
