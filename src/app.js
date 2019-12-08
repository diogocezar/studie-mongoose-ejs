const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');

const routes = require("./routes");

const connectMongoose = () => {
  mongoose.connect('mongodb://localhost:27017/resthub', { useNewUrlParser: true,  useUnifiedTopology: true  });
}

const configureEjs = () => {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '..', '/public', 'views'));
  app.use(express.static(path.join(__dirname, '..', '/public')));
  app.use(express.static(path.join(__dirname, '..', '/images')));
  app.use(express.static(path.join(__dirname, '..', '/css')));
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });
  app.get('/contact/list', (req, res) => {
    res.render('contact/list.ejs');
  });
  app.get('/contact/register', (req, res) => {
    res.render('contact/register.ejs');
  })
}

const configureRoutes = () => {
  app.use(cors());
  app.use(express.json())
  app.use('/api', routes);
}

const startServer = () => {
  const port = 8080;
  app.listen(port, function () {
    console.log(`Server listening on port ${port}.`);
  });
}

connectMongoose()
configureRoutes()
configureEjs()
startServer()