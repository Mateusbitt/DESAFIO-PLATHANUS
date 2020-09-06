const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
    link: {
        type : String,
        required: true
    }
});

module.exports = mongoose.model('Banners', bannerSchema);
