const db = require('../database/db');

function StakeUpdated(store_id, amount, expireTime) {
    console.log(store_id);
    console.log(amount);
    console.log(expireTime);
}

module.exports = StakeUpdated;