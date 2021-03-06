const path = require('path');

const express = require('express');
const nofevicon = require('express-no-favicons');
const bodyParser = require('body-parser');

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

const homeData = require('./routes/home');

app.use(nofevicon());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeData.routes);

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000);