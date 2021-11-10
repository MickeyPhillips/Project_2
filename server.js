const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const session = require('express-session');


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}!`);
})
'hello'