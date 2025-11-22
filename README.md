# Simple MERN Backend

A minimal, production-ready backend for MERN apps providing REST endpoints, user authentication, and MongoDB persistence.

## Features
- Express + Node.js API
- MongoDB via Mongoose
- JWT authentication (register / login)
- Environment-based config
- Simple folder structure, ready for extension

## Tech stack
- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Optional: nodemon for development

## Prerequisites
- Node.js (>= 14)
- MongoDB (local or Atlas)
- npm or yarn

## Quick install
1. Clone and install
    - git clone <repo>
    - cd <repo>
    - npm install

2. Create a `.env` file (example below) and add credentials.

3. Run
    - npm run dev  (development)
    - npm start     (production)

## Example .env
MONGO_URI=mongodb+srv://user:pass@cluster0.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
PORT=4000

## Available scripts (package.json)
- "start": node dist/server.js
- "dev": nodemon src/server.js
- "build": transpile (optional)

## Basic API
- GET /api/health
  - Response: { status: "ok" }

- POST /api/auth/register
  - Body: { name, email, password }
  - Response: { user, token }

- POST /api/auth/login
  - Body: { email, password }
  - Response: { user, token }

- GET /api/users (protected)
  - Header: Authorization: Bearer <token>
  - Response: [users]

Example curl:
curl -X GET http://localhost:4000/api/health

## Suggested folder structure
src/
- config/      (db, env)
- models/      (User.js, ...)
- controllers/ (auth, user)
- routes/      (auth.js, users.js)
- middleware/  (auth, errorHandler)
- server.js

## Testing
- Use Postman / Insomnia or curl for endpoints. Extend with Jest/Supertest for automated tests.

## Contributing
Keep PRs small, document new endpoints, add tests for new logic.

## License
MIT