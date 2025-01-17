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
const bodyParser = require('body-parser');
 const mongodb = require('./data/database');
 const app = express();

 const port = process.env.PORT || 5173;

 app.use(bodyParser.json());
 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
 });

 app.use('/', require('./routes'));
 
 mongodb.initDb((err) => {
     if(err) {
         console.log(err);
     }
     else {
     app.listen(port, () => (console.log(`Database is listening and Node running on port ${port}`)));
 }})


