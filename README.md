# NSMetric Trading Platform Backend

This repository contains the backend code for the NSMetric Crypto Trading Platform. It is built with Node.js, Express, and TypeScript to handle the API endpoints and core logic.

## Project Structure

- **Language**: TypeScript
- **Framework**: Express
- **Dependencies**:
  - Express
  - CORS
- **Dev Dependencies**:
  - TypeScript
  - Nodemon
  - Prettier
  - Ts-node

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/) (if you are contributing to TypeScript code)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/theabhisheksrivastav/nsmetric_trading_platform.git

2. Navigate to the project directory:

    ```bash
    cd nsmetric_trading_platform

3. Install the dependencies:

    ```bash
    npm install

4. Running the Project

## In Development Mode
To start the backend in development mode with file watching and automatic restarts:

   
    npm run dev

## Building the Project
To compile TypeScript to JavaScript and create the production-ready files:


    npm run build


## Running the Project in Production
After building the project, you can run the compiled version with:

 
    npm run start


## Environment Variables
Make sure to create a .env file in the project root and configure your environment variables. Example:

    PORT=3000
    DB_HOST=localhost
    DB_USER=username
    DB_PASS=password
    JWT_SECRET=your_secret_key
## Scripts
npm run dev: Starts the server in development mode with live-reloading using Nodemon.
npm run build: Compiles TypeScript to JavaScript.
npm run start: Starts the compiled server in production mode.
Code Style
This project uses Prettier for code formatting. You can apply the formatting rules by running:


    npx prettier --write .
## The Prettier config:

        json

        {
        "singleQuote": false,
        "tabWidth": true,
        "semi": true,
        "bracketSpacing": true,
        "trailingComma": "es5"
        }
## Repository
Type: Git
URL: GitHub Repository
Issues
If you find any bugs or have feature requests, please file them here.

Author
Abhishek
License
This project is licensed under the ISC License.