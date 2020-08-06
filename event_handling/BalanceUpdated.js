const db = require('../database/db');

function BalanceUpdated(store_id, amount) {
    console.log(store_id);
    console.log(amount);
}

module.exports = BalanceUpdated;