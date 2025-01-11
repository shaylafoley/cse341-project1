// const express = require('express');
// const mongodb = require('./data/database');
// const app = express();

// const port = process.env.PORT || 5173;

// // Use routes
// app.use('/', require('./routes'));

// // Initialize database and start the server
// mongodb.initDb((err) => {
//     if (err) {
//         console.error('Failed to initialize database:', err);
//         process.exit(1); // Exit if database initialization fails
//     } else {
//         app.listen(port, () => {
//             console.log(`Database is connected and Node is running on port ${port}`);
//         });
//     }
// });


 const express = require('express');

 const mongodb = require('./data/database');
 const app = express();

 const port = process.env.PORT || 5173;

 app.use('/', require('./routes'));



 mongodb.initDb((err) => {
     if(err) {
         console.log(err);
     }
     else {
     app.listen(port, () => (console.log(`Datbase is listening and Node running on port ${port}`)));
 }})


