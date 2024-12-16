const moongose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 3,
        maxlength: 30,
        trim: true,
    },
Email: String,
Password: String,
cart: [],
Isadmin: Boolean,
Orders: [],
Contact: Number,
picture: String,
})

module.exports = mongoose.model('user', userSchema);
