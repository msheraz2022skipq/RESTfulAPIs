// Get the config either from environment variables or pick the default
const config = {
  PORT: process.env.PORT || "3000",
  CLIENT_ID: process.env.CLIENT_ID || "68a1b63e44e581d96078",
  CLIENT_SECRET: process.env.CLIENT_SECRET || "8402e20037a1c718e8c9d070d926ffed23c41d1e"  
}

module.exports = config;
