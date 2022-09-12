const express = require('express');
const port = 8000;
const app = express();

// use express router
app.use('/', require('./routes'));

app.listen(port, (err) => {
    if(err) {
        console.log(`Error occured starting server: ${err}`);
        return;
    } 
    console.log(`Server is up and running on port: ${port}`);
});

// Many actions in one file is called a controller. 