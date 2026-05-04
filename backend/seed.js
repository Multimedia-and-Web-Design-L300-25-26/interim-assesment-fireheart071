const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Crypto = require('./models/Crypto');

dotenv.config();

const cryptos = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 64120.50,
        image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        change24h: 2.45
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        price: 3450.20,
        image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        change24h: -1.20
    },
    {
        name: 'Tether',
        symbol: 'USDT',
        price: 1.00,
        image: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
        change24h: 0.01
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        price: 145.80,
        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
        change24h: 5.67
    },
    {
        name: 'Cardano',
        symbol: 'ADA',
        price: 0.45,
        image: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
        change24h: -0.34
    }
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        await Crypto.deleteMany();
        console.log('Cleared existing cryptos');

        await Crypto.insertMany(cryptos);
        console.log('Seed data inserted successfully');

        process.exit();
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};

seedData();
