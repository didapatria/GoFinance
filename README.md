# Next.js + Prisma Auth and Transaction CRUD App with Tailwind CSS

This is a [Next.js](https://nextjs.org) project implementing authentication (Login, Register) and CRUD operations for transactions using Prisma ORM and SQLite, with Tailwind CSS for styling.

---

## Getting Started

### Prerequisites

Ensure you have Node.js installed. Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm i
# or
bun install
```

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Prisma Setup

To interact with the database:

1. Run Prisma migrations:

   ```bash
   npx prisma migrate dev --name create_user_and_transaction_table
   ```

2. Start Prisma Studio to view and manage your database:

   ```bash
   npx prisma studio
   ```

Visit [http://localhost:5555](http://localhost:5555) to access Prisma Studio.

### Features

- User Registration and Login.
- Profile Management (CRUD).
- Transaction CRUD.

### Learn More

For more information, see the [Next.js documentation](https://nextjs.org/docs).
