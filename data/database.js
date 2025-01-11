// const dotenv = require('dotenv');
// dotenv.config();

// const { MongoClient } = require('mongodb');

// let database;

// // Initialize the database connection
// const initDb = (callback) => {
//     if (database) {
//         console.log('Database is already initialized');
//         return callback(null, database);
//     }

//     MongoClient.connect(process.env.MONGODB_URL)
//         .then((client) => {
//             database = client.db('project1'); // Use your actual database name here
//             console.log('Database connection established');
//             callback(null, database);
//         })
//         .catch((err) => {
//             console.error('Failed to connect to the database', err);
//             callback(err);
//         });
// };

// // Retrieve the initialized database
// const getDatabase = () => {
//     if (!database) {
//         throw new Error('Database not initialized');
//     }
//     return database; // This should directly return the database instance
// };

// module.exports = {
//     initDb,
//     getDatabase,
// };


 const dotenv = require('dotenv');
 dotenv.config();

 const MongoClient = require('mongodb').MongoClient;

 let database;

 const initDb = (callback) => {
     if (database) {
         console.log('Db is already initialized');
         return callback(null, database);
     }
     MongoClient.connect(process.env.MONGODB_URL)
         .then((client) => {
             database = client;
         callback(null, database);
         })
         .catch((err) => {
             callback(err);
         });
 };

 const getDatabase = () => {
     if (database) {
         throw Error('Database not initialized')
     }
     return database;
 };

 module.exports = {
     initDb,
     getDatabase
 };