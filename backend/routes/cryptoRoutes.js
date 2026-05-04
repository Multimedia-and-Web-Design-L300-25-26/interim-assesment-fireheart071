const express = require('express');
const router = express.Router();
const { getAllCrypto, getGainers, getNewListings, addCrypto } = require('../controllers/cryptoController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllCrypto);
router.get('/gainers', getGainers);
router.get('/new', getNewListings);
router.post('/', protect, addCrypto); // Protected to allow only authenticated users to add crypto

module.exports = router;
