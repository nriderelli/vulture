/* eslint consistent-return:0 import/order:0 */

//  import npm packages
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

var bodyParser = require('body-parser')
var cors = require('cors');
var session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');


const config = require('./config');
const logger = require('./logger');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

// db part
mongoose.Promise = require('bluebird');

// Setup Database Connection
mongoose.set('useCreateIndex', true);
mongoose.connect(config.mongoUrl, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json({limit: '10000mb'}));
app.use(bodyParser.urlencoded({limit: '10000mb', extended: true}));
app.use(cors());
// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: false,
  cookie: {secure: true,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
  }
}));  

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

// Applications APIs
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use('/api/v1/', require('./apis'))

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
