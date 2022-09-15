const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

// use express router

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes'));

// Initializing DB
const db = require('./config/mongoose');
const User = require('./models/user');

// importing static files
app.use(express.static('./assets'));

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