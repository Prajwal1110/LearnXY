// config/database.js

module.exports = {
    // MongoDB URI. This should point to your MongoDB database.
    // Example for a local MongoDB server:
    // uri: 'mongodb://localhost:27017/your-database-name',
    uri: 'mongodb://<username>:<password>@<mongodb-host>:<mongodb-port>/<your-database-name>',
  
    // Additional database connection options (optional)
    options: {
      useNewUrlParser: true, // Use new URL parser
      useUnifiedTopology: true, // Use new Server Discovery and Monitoring engine
    },
  };
  