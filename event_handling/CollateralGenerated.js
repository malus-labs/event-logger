const Store = require('../models/store');

async function CollateralGenerated(store_id, amount, availableFunds) {
    /*
    try {
        await Store.update(
            { 
                available_funds: availableFunds,
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
    */
}

module.exports = CollateralGenerated;