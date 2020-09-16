const Store = require('../models/store');

async function CollateralUpdated(store_id, collateral, stake, availableFunds) {
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

module.exports = CollateralUpdated;