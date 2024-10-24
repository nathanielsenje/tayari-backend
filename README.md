# Tayari Backend

Tayari Backend is a Sails.js application that provides the server-side functionality for the Tayari platform, a healthcare appointment booking and management system.

## Technical Specifications

- **Framework**: Sails.js
- **Database**: PostgreSQL
- **ORM**: Waterline (built into Sails.js)
- **Authentication**: [To be implemented]
- **API**: RESTful

## Features

- Doctor management
- Client management
- Appointment booking
- Forum functionality
- Article management

## Installation Instructions

1. Clone the repository:   ```
   git clone [repository-url]
   cd tayari-backend   ```

2. Install dependencies:   ```
   npm install   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:   ```
   DATABASE_URL=postgresql://admin:9Uelc1h3USBAa5aHbbXPabHr3UnEimGR@dpg-csccr70gph6c73br05sg-a.oregon-postgres.render.com/hidoc   ```

4. Start the server:   ```
   npm start   ```

## API Endpoints

- **Clients**
  - GET /api/v1/clients
  - GET /api/v1/clients/:id
  - POST /api/v1/clients
  - PUT /api/v1/clients/:id
  - DELETE /api/v1/clients/:id

- **Doctors**
  - GET /api/v1/doctors
  - GET /api/v1/doctors/:id
  - POST /api/v1/doctors
  - PUT /api/v1/doctors/:id
  - DELETE /api/v1/doctors/:id

- **Bookings**
  - GET /api/v1/bookings
  - GET /api/v1/bookings/:id
  - POST /api/v1/bookings
  - PUT /api/v1/bookings/:id
  - DELETE /api/v1/bookings/:id

- **Forum Posts**
  - GET /api/v1/forum-posts
  - GET /api/v1/forum-posts/:id
  - POST /api/v1/forum-posts
  - PUT /api/v1/forum-posts/:id
  - DELETE /api/v1/forum-posts/:id

- **Forum Replies**
  - GET /api/v1/forum-replies
  - GET /api/v1/forum-replies/:id
  - POST /api/v1/forum-replies
  - PUT /api/v1/forum-replies/:id
  - DELETE /api/v1/forum-replies/:id

- **Articles**
  - GET /api/v1/articles
  - GET /api/v1/articles/:id
  - POST /api/v1/articles
  - PUT /api/v1/articles/:id
  - DELETE /api/v1/articles/:id

## Development

To run the application in development mode with auto-reloading:
