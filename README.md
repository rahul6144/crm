# Real Estate CRM

A full-stack real estate CRM system inspired by Zoho CRM, built with React, Node.js, Express, and MongoDB.

## Features

- User authentication with JWT and OAuth
- Role-based access control (Admin, Manager, Agent)
- Property management with geolocation
- Lead and client management
- Transaction tracking
- Analytics and reporting
- Responsive design with Tailwind CSS

## Technologies

- **Frontend**: React, Tailwind CSS, Chart.js
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT, OAuth (Google, Microsoft)
- **APIs**: Google Maps, Twilio, Google Calendar

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```
3. Create a `.env` file in the root directory (use `.env.example` as reference)
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

See `.env.example` for required environment variables.

## Deployment

For production deployment:

1. Build the React app:
   ```bash
   cd client
   npm run build
   ```
2. Set NODE_ENV to production
3. Start the server:
   ```bash
   npm start
   ```

## License

MIT