# OneStop

OneStop is a full-stack real estate web platform for South Korea. It lets users browse and manage property listings, view agent profiles, write community posts, chat in real time, and use role-based admin tools.

## Features

- Property listing, search, detail, favorites, comments, and recently viewed flows
- Agent/member profiles with follows, reviews, and agent-owned properties
- Community board with article creation, rich text editing, likes, views, and comments
- Admin pages for users, properties, community articles, notices, FAQs, and inquiries
- Real-time chat over native WebSocket support using NestJS WebSocket Gateway and `ws`
- GraphQL API with Apollo and MongoDB persistence through Mongoose
- Multilingual client setup with `next-i18next`

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | Next.js, React, TypeScript, Apollo Client, MUI, SCSS |
| Backend | Node.js, NestJS, GraphQL, Apollo Server |
| Real-time | WebSocket, NestJS WebSocket Gateway, `ws` |
| Database | MongoDB, Mongoose |
| Auth | JWT with NestJS JWT |
| Tooling | npm/yarn, ESLint, Prettier, Jest |

## Project Structure

```text
onestop/
├── client/                         # Next.js frontend
│   ├── pages/                      # Page routes, including admin pages
│   ├── apollo/                     # Apollo client, GraphQL operations, reactive vars
│   ├── libs/                       # Components, auth helpers, types, enums, utilities
│   ├── public/                     # Images, videos, locales, static assets
│   └── scss/                       # Desktop/mobile SCSS styles
├── server/                         # NestJS backend workspace
│   ├── apps/
│   │   ├── onestop-api/            # Main API, GraphQL, auth, uploads, WebSocket chat
│   │   └── onestop-batch/          # Batch/scheduled NestJS application
│   ├── nest-cli.json               # Nest monorepo configuration
│   └── package.json
└── README.md
```

## Environment Variables

The app uses local environment files in `client/` and `server/`. Configure these before running the apps.

Client variables:

```bash
REACT_APP_API_URL=http://localhost:3007
REACT_APP_API_GRAPHQL_URL=http://localhost:3007/graphql
REACT_APP_API_WS=ws://localhost:3007
```

Server variables:

```bash
PORT_API=3007
PORT_BATCH=3008
MONGO_DEV=mongodb://localhost:27017/onestop
MONGO_PROD=
SECRET_TOKEN=your-jwt-secret
```

Adjust ports and database URLs to match your local setup.

## Getting Started

Install and run the backend:

```bash
cd server
npm install
npm run start:dev
```

In a second terminal, install and run the frontend:

```bash
cd client
npm install
npm run dev
```

Open the client at:

```text
http://localhost:3000
```

The backend listens on `PORT_API` or falls back to `3000` if `PORT_API` is not set. In local development, using a dedicated API port such as `3007` avoids conflicting with the Next.js dev server.

## Useful Scripts

Client:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Server:

```bash
npm run start:dev
npm run start:dev:batch
npm run build
npm run test
npm run test:e2e
npm run lint
```

## Author

**Aysuliu Bakhieva** - [GitHub](https://github.com/Aysuliu) · [Portfolio](https://portfolio-aysulu.my.canva.site/)
