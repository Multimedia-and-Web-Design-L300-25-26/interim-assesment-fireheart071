const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a cryptocurrency name'],
        unique: true,
        trim: true
    },
    symbol: {
        type: String,
        required: [true, 'Please provide a symbol'],
        uppercase: true,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price']
    },
    image: {
        type: String,
        required: [true, 'Please provide an image URL']
    },
    change24h: {
        type: Number,
        required: [true, 'Please provide a 24h change percentage']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Crypto', cryptoSchema);
