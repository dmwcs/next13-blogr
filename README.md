## Setup

1. **Clone the repository**:

   ```sh
   git clone <your-repository-url>
   cd <your-project-directory>
   ```

2. **Create a new `.env` file and configure environment variables**:

   Copy the `.env.example` file to `.env` and update with your actual credentials:

   ```sh
   cp .env.example .env
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Run the Prisma migration to set up the database schema**:

   ```sh
   npx prisma migrate dev --name init
   ```

5. **Start the local development server**:

   ```sh
   npm run dev
   ```

By default, the development server will be running at `http://localhost:3000`.
