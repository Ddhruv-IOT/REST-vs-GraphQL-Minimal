# Todo List Application - REST and GraphQL

## Overview

This project is a Todo List application that provides CRUD (Create, Read, Update, Delete) functionality through both a REST API and a GraphQL API. The frontend is built using React with Vite as the package tool. The application displays two Todo lists side by side, one connected over REST and the other over GraphQL.

## Frontend Setup

1. **Create a Vite app:**
   ```bash
   npx create-vite my-todo-app
   ```

2. **Place the app files:**
   Place the app files, including `main`, `app.jsx`, and components in the src folder, and add the `.env` file in the parent folder.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the app in development mode:**
   ```bash
   npm run dev
   ```

5. **Build the production version:**
   ```bash
   npm run build
   ```

6. **Deploy using Netlify:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

## Backend Setup - REST API

1. **Navigate to the REST API source code directory.**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```

4. **Provide the frontend link in the `.env` file for CORS.**

## Backend Setup - GraphQL API

1. **Navigate to the GraphQL API source code directory.**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```

4. **Provide the frontend link in the `.env` file for CORS.**

## Environment Variables

### Frontend (.env file in frontend folder)

- `REACT_APP_GRAPHQL_API`: URL for the GraphQL API server.
- `REACT_APP_REST_API_GET`, `REACT_APP_REST_API_PUT`, `REACT_APP_REST_API_POST`, `REACT_APP_REST_API_DELETE`: URLs for REST API operations.
- `REACT_APP_PORT`: Port number if required.

### Backend (.env file in both backend folders)

- `FRONTEND_URL`: URL of the frontend application for CORS.

## Deployment

The application is hosted on Netlify: [REST-GQL Todo App](https://rest-gql-todo-app.netlify.app/)

Please note that the servers go into deep sleep mode after 5 minutes of inactivity.

## Note

The Todos are stored in a JavaScript object, as MongoDB is not yet connected in this demonstration.

## Acknowledgments

This application is created to demonstrate the working of GraphQL and REST API side by side, with a focus on monitoring network-based performance.

## Known Bugs
 - UI is not tuned up for small devices
 - Scroll bar is not appearing, even after auto scroll
 - Spaces are still a vaild input
 - There is no character limit per item input 