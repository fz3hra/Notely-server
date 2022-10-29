const User = require("../models/user");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

async function signIn_controller(req, res) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({msg: 'User with this email does not exist'});
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(400).json({msg: 'Incorrect password'});
        }
        const token = jwt.sign({id: user._id}, "passwordKey");
        // token will reside in app memory
        res.json({token, ...user._doc});
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports = {signIn_controller};