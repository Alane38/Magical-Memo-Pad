# Magical Memo Pad Project

## Getting Started

# Environment Variable Configuration

## Project Setup

To configure your Magical Memo Pad project, update the `.env` file with the necessary environment variables.

## Example `.env` File

```dotenv
# Backend URL
PATH_URL_BACKEND=http://127.0.0.1:8000

# PostgreSQL connection URL for Prisma
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db-magical-memo-pad"

# PostgreSQL configuration
POSTGRES_DB=db-magical-memo-pad
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

1. **Start Docker**: `docker-compose up --build`

If Docker doesn't work you can run with the following commands:
   ```bash
   npm run dev
   # or
   yarn && yarn dev
   # or
   pnpm dev
   # or
   bun dev
