const Store = require('../models/store');

async function StakeUpdated(store_id, amount, availableFunds, expireTime) {
    try {

        //Update the available_funds, stake, and stake_expiration in the database.
        await Store.update(
            { 
                available_funds: availableFunds,
                stake: amount,
                stake_expiration: expireTime
            },
            {
                where: {
                    store_id: store_id
                }
            }
        )
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = StakeUpdated;