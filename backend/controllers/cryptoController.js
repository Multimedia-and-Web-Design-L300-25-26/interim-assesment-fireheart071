const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
exports.getAllCrypto = async (req, res) => {
    try {
        const cryptos = await Crypto.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: cryptos.length, data: cryptos });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
exports.getGainers = async (req, res) => {
    try {
        const gainers = await Crypto.find().sort({ change24h: -1 });
        res.status(200).json({ success: true, count: gainers.length, data: gainers });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
exports.getNewListings = async (req, res) => {
    try {
        const newListings = await Crypto.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: newListings.length, data: newListings });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Add new cryptocurrency
// @route   POST /api/crypto
// @access  Private/Admin (for now just Private)
exports.addCrypto = async (req, res) => {
    try {
        const crypto = await Crypto.create(req.body);
        res.status(201).json({ success: true, data: crypto });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
