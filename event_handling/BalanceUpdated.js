const Store = require('../models/store');

async function BalanceUpdated(store_id, amount) {
    try {

        //Update the amount in the database.
        await Store.update(
            {
                available_funds: amount
    
            },
            {
                where: {
                    store_id: store_id
                }
            }
        )

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = BalanceUpdated;