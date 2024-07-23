# My Blog Platform

**My Blog Platform** is a full-stack blogging application built with Next.js and TypeScript. The frontend uses Tailwind CSS, and both frontend and backend are integrated using Next.js API Router. PostgreSQL is used for the database, with Prisma handling database migrations, and user authentication is managed with `next-auth`.

## Core Features

- **User Authentication**: Users must log in to access the platform.
- **Draft Section**: Create, edit, and delete posts in Draft. Unpublished posts are stored here.
- **Post Section**: Published posts are displayed in this section. Users can move posts from Post back to Draft for further editing.
- **Post Management**: Manage (view, publish, delete) your posts. Each post displays the name of the user who published it.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Next.js API Router
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: next-auth

## Installation and Usage

## Setup

1. **Clone the repository**:

2. **Create a new `.env` file and configure environment variables**:

   Copy the `.env.example` file to `.env` and update with your actual credentials:

   ```sh
   cp .env.example .env
   ```

3. **Install dependencies**:

   ```sh
   npm ci
   ```

4. **Run the Prisma migration to set up the database schema**:

   ```sh
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Start the local development server**:

   ```sh
   npm run dev
   ```

By default, the development server will be running at `http://localhost:3000`.
