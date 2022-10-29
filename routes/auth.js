const express = require('express');
const signIn_callback = require("../controllers/signIn_controller");
const signUp_callback = require("../controllers/signUp_controller");

const authRouter = express.Router();

    // get data from client
    // post that data in database
    // return data to the user
authRouter.post('/api/signup', signUp_callback.signUp_controller);

// Create sign in route.
authRouter.post('/api/signin', signIn_callback.signIn_controller);

module.exports = authRouter;