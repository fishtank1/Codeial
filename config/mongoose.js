const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/codeial_development");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to the database'));

db.once('open', function() {
    console.log('Connected to the Databse :: MongoDB');
});

module.exports = db;