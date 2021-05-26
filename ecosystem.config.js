require('dotenv').config();
module.exports = {
  apps: [
    {
      name: "JustCook",
      script: "src/server/server.js",
      watch: "false",
      env: {
        NODE_ENV: "development",
        PORT: process.env.PORT,
        API_KEY: process.env.API_KEY,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT,
        API_KEY: process.env.API_KEY,
      },
    },
  ],
};
