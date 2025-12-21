# A lightweight Task Management application built with TypeScript, React.js, Tailwind CSS, Zustand and Shadcn UI

- [🧠 Application Overview](#-application-overview)
- [🧪 Database](#-database)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🧰 How to Run the Application](#-how-to-run-the-application)
- [🔐 Authentication](#-authentication)
- [🔐 Authenticated Pages](#-authenticated-pages)
- [🔐 Unauthenticated Pages](#-unauthenticated-pages)

## 🧠 Application Overview

- A scalable and modular Task Management application built with TypeScript, React JS, Tailwind CSS, Zustand and Shadcn-UI.
- Task Management is a simple todo application designed to help users organize and manage their daily tasks efficiently.
- The application allows users to create, complete, update and delete tasks through a clean and intuitive interface.
- Users can easily track their task progress by marking tasks as completed in a straightforward flow.
- The system implements clean CRUD operations, and a well-structured architecture that supports scalability, maintainability, and a reliable user experience.
- It includes simple user authentication using browser local-storage.

## 🧱 Database

### I am using browser storage (Local Storage) to store all of data in the application

## 🚀 Features

- Fully typed TypeScript codebase for reliability and maintainability.
- Modern React.js architecture with full support for TypeScript using Vite.
- Interactive and accessible UI built with Tailwind CSS and shadcn-ui components.
- React Hook Form combined with Zod schemas for end-to-end form validation.
- Zustand for lightweight and predictable client-side state management.
- React Router for accessing / navigating throughout the application
- Clear separation of concerns between UI components, state, business logic, and "database" operations.
- Fully responsive interface optimized for both desktop and mobile users.
- Middleware supported for authenticated & unauthenticated pages.
- Simple authentication mechanism using Zustand + Browser Local Storage

## 🛠️ Tech Stack

This project uses these following main technologies:

- [TypeScript](https://www.typescriptlang.org/) — Main programming language.
- [React.js](https://github.com/facebook/react) — Library for building User Interface.
- [Tailwind CSS](https://tailwindcss.com/) — A utility-first CSS framework.
- [Shadcn UI](https://github.com/shadcn-ui/ui) — A set of beautifully-designed, accessible components and a code distribution platform.
- [Zod](https://github.com/colinhacks/zod) — TypeScript-first schema validation with static type inference.
- [Zustand](https://github.com/pmndrs/zustand) — Bear necessities for state management in React inference.
- [React Hook Form](https://github.com/react-hook-form/react-hook-form) — React Hooks for form state management and validation.
- [React Router](https://github.com/remix-run/react-router) — Declarative routing for React

---

## 🧰 How to Run the Application

- The easiest way to run this application is simply by accessing the Demo Application at: https://mini-taskboard.vercel.app.
- However, if you prefer to run it locally, you only need to clone this repo and run on your machine.

---

## 🔐 Authentication

- This application uses a simple authentication method powered by Zustand + Browser Local Storage.
- We supports two types of users: Authenticated and Unauthenticated.
- Becoming an Authenticated user requires signing up or signing in first. Authenticated user have their own dedicated pages and menus, such as creating task, marking task as complete, and deleting their task.
- Anyone can be an Unauthenticated user, as this role is public. Unauthenticated users are only allowed to access the landing page.

## 🔐 Authenticated Pages

#### When using this application as an Authenticated user, several authenticated pages become accessible, including:

- Home Page ([/home](/home)): Displays an overview of pending task and completed task.
- Tasks Page ([/tasks](/tasks)): Shows the list of pending task and several actions, include creating new task, marking task as complete, and deleting task.
- Sign-Out Menu: To sign-out from the application.

## 🔐 Unauthenticated Pages

#### For guests, the only available page is:

- Landing Page: Displays a brief description of the Task Management app and its main purpose.
