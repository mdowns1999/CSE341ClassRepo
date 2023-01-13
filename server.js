const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;

app.use('/', require('./routes'))

mongodb.initDb((err) => {
    if(err){
        console.log("SOMETHING IS WRONG");
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Server is running on port ${port}`);
    }
})
