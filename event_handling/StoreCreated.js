const db = require('../database/db');

function StoreCreated(store_id, wallet_address, owner) {
    console.log(store_id);
    console.log(wallet_address);
    console.log(owner);
}

module.exports = StoreCreated;