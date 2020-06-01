const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

// Import DB methods
const { getUserByAuthId, createUserByAuthId } = require('./dbMethods');

// Passport & Auth0
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const {
  AUTH_DOMAIN,
  AUTH_CLIENT_ID,
  AUTH_CLIENT_SECRET,
  YOUR_API_IDENTIFIER,
} = process.env;

// Sequelize.js
const Sequelize = require('sequelize');

// Middleware
// const checkForSession = require('./middlewares/checkForSession');

// Controllers
const userCtrl = require('./controllers/userCtrl');
const carCtrl = require('./controllers/carCtrl');

const app = express();

// Database Connection
const URI = process.env.CONNECTION_STRING;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Server build files
app.use(express.static(`${__dirname}/../build`));

// Middlewares
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
// app.use(checkForSession);

// Auth
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: AUTH_DOMAIN,
      clientID: AUTH_CLIENT_ID,
      clientSecret: AUTH_CLIENT_SECRET,
      callbackURL: '/login',
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
      getUserByAuthId(profile._json.user_id).then((res) => {
        if (!res) {
          createUserByAuthId(profile._json.user_id, profile._json.email).then(
            (created) => {
              return done(null, created);
            }
          );
        }
      });
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Set up Auth0 configuration
const authConfig = {
  domain: 'dev-s-yisldm.eu.auth0.com',
  audience: YOUR_API_IDENTIFIER,
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-s-yisldm.eu.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ['RS256'],
});

// Define an endpoint that must be called with an access token
app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your Access Token was successfully validated!',
  });
});

// AUTH endpoints

// AUTH0 LOGIN
app.get(
  '/login',
  passport.authenticate('auth0', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

// LOGOUT
app.get('/logout', userCtrl.logout);

// GET USER PASSPORT INFO
app.get('http://localhost:3001/me', userCtrl.getUserPassportInfo);

// GET SESSION OBJECT
app.get('/api/logstatus', userCtrl.getLogStatus);

// GET USER INFO FROM DB
app.get('http://localhost:3001/api/user', userCtrl.getUser);

// GET USER INFO
app.get('/api/user/:id', userCtrl.getUserById);

// CREATE USER
app.post('/api/user/add', userCtrl.createUser);

// GET ALL USERS
app.get('/api/users', userCtrl.getUsers);

// GET ALL USER CARS
app.get('/api/:id/cars', userCtrl.getUserCars);

// CARS ENDPOINTS

// GET ALL CARS
app.get('/api/cars', carCtrl.getCars);

// GET CAR BY ID
app.get('/api/cars/:id', carCtrl.getCarById);

// CREATE CAR
app.post('/api/cars', carCtrl.createCar);

// EDIT CAR
app.put('/api/cars/:id', carCtrl.updateCar);

// DELETE CAR
app.delete('/api/cars/:id', carCtrl.deleteCar);

// const path = require('path');
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// })

app.get('*', (req, res) => res.status(200).send('Server is up'));

// Server port
const port = 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
