const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String, 
        trim: true,
    },
    email: {
        required: true,
        type: String, 
        trim: true, 
        validate: {
            validator: (value) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        require: true, 
        type: String,
        validate: {
            validator: (value) =>{
                return value.length > 6;
            },
            message: "Please enter a long password"
        }
    },
    images: {
        type: Schema.Types.ObjectId, ref: 'Image',
    },
    type: {
        type: String,
        default: "user"
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;