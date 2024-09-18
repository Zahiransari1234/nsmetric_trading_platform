# NSMetric Trading Platform Backend and Frontend

This repository contains both the backend and frontend code for the NSMetric Crypto Trading Platform. The backend is built with Node.js, Express, and MongoDB for database management. The frontend is built with React using Vite, TailwindCSS, and Flowy for UI, and Redux Toolkit for state management.

## Project Structure

### Backend

- **Language**: JavaScript (ES6+)
- **Framework**: Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Dependencies**:
  - Express
  - Mongoose
  - CORS
  - Cookie-parser
  - Bcrypt
  - Dotenv
  - JSON Web Token (JWT)
- **Dev Dependencies**:
  - Nodemon
  - Prettier

### Frontend

- **Framework**: React (with Vite)
- **UI**: TailwindCSS and Flowy
- **State Management**: Redux Toolkit

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

### Installation

#### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/theabhisheksrivastav/nsmetric_trading_platform.git

## Navigate to the backend directory:

    bash
    cd nsmetric_trading_platform/backend
## Install the backend dependencies:

    bash
    npm install
## Create a .env file in the backend folder and configure your environment variables:

    makefile

    PORT=8000
    MONGODB_URI=your_mongo_db_uri
    CORS_ORIGIN=*
    ACCESS_TOKEN_SECRET=your_access_token_secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    REFRESH_TOKEN_EXPIRY=7d
### Run the backend in development mode:

    bash
    npm run dev
## Frontend
Navigate to the frontend directory:

    bash
    cd ../frontend
## Install the frontend dependencies:

    bash
    npm install
## Run the frontend in development mode:

    bash
    npm run dev
Scripts
## Backend
npm run dev: Starts the server in development mode with live-reloading using Nodemon.
## Frontend
npm run dev: Starts the Vite development server for the frontend.
## Code Style
This project uses Prettier for code formatting. You can apply the formatting rules by running:

    bash
    npx prettier --write .

## The Prettier config:

    {
    "singleQuote": false,
    "tabWidth": 2,
    "semi": true,
    "bracketSpacing": true,
    "trailingComma": "es5"
    }
## Repository
Type : Git

URL: GitHub Repository

## Issues
If you find any bugs or have feature requests, please file them here.

## Author
Abhishek
## License
This project is licensed under the ISC License.