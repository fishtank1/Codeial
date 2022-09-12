const express = require('express');
const port = 8000;
const app = express();




app.listen(port, (err) => {
    if(err) {
        console.log(`Error occured starting server: ${err}`);
        return;
    } 
    console.log(`Server is up and running on port: ${port}`);
});