const User = require("../models/user");
const bcryptjs = require('bcryptjs');

async function signUp_controller(req, res)  {
    try {
        const {name, email, password} = req.body;
    // findOne is a promise
    const existingUser = await User.findOne({
        email
    });
    if(existingUser){
        return res.status(400).json({msg: 'User with same email already exists'});
    }

    const hashPassword = await bcryptjs.hash(password, 8);

    let user = new User({
        email,
        password: hashPassword, 
        name
    });
    user = await user.save();
    res.json(user);
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports = {signUp_controller};