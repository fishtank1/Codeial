const express = require('express');
const port = 8000;
const app = express();

// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
    if(err) {
        console.log(`Error occured starting server: ${err}`);
        return;
    } 
    console.log(`Server is up and running on port: ${port}`);
});

// Many actions in one file is called a controller. 