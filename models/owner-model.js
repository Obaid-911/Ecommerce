const moongose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-commerce');

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 3,
        maxlength: 30,
        trim: true,
    },
Email: String,
Password: String,
products: [],
picture: String,
gstin: String,

})

module.exports = mongoose.model('owner', ownerSchema);
