const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

const routes = require('./controllers/index');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3000;

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// I commented the db stuff out b/c it wouldn't let me run the server with the database commands without the database
const sess = {
    secret: 'Super secret secret',
    cooke: {},
    resave: false,
    saveUninitialize: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
})
// app.listen(PORT, () => console.log(`Now listening on ${PORT}`))

