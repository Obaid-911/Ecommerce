const moongose = require('mongoose');

const productSchema = mongoose.Schema({
    Image: String,
    Name: String,
    Price: Number,
    Discount: {
        type: Number,
        default: 0,
    },
    bgcolor: Number,
    panelcolor: String,
    textcolor: String,
})

module.exports = mongoose.model('product', productSchema);
