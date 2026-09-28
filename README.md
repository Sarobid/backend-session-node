[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?style=flat-square\&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.x-lightgrey?style=flat-square\&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?style=flat-square\&logo=mongodb)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-blue?style=flat-square\&logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

# Session API

REST API built with **Node.js, Express.js, MongoDB, and Docker**.

## Tech Stack

* Node.js (ES Modules)
* Express.js
* MongoDB & Mongoose
* Docker & Docker Compose

## Architecture

```text
src/
├── config/
├── controllers/
├── helpers/
├── models/
├── repositories/
├── routes/
├── services/
└── index.js
```

Layered architecture with separation of concerns:

`Routes → Controllers → Services → Repositories → Models`

## API Endpoints

Base URL: `/api/session`

| Method | Endpoint                 | Description                                |
| ------ | ------------------------ | ------------------------------------------ |
| `POST` | `/api/session/:deviceId` | Create a session for a device              |
| `GET`  | `/api/session/:deviceId` | Retrieve sessions associated with a device |

## Getting Started

### Prerequisites

* Node.js 18+
* npm
* Docker
* Docker Compose

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sarobid/backend-session-node.git
   cd backend-session-node
   ```

2. Create the environment configuration:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Build the application:

   ```bash
   npm run build
   ```

5. Start the application and MongoDB:

   ```bash
   docker compose up --build
   ```

The API is available at `http://localhost:8090` by default.

## License

This project is licensed under the [MIT License](LICENSE).
