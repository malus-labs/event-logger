const Store = require('../models/store');

async function CollateralGenerated(store_id, collateral, stake, availableFunds) {
    /*
    try {
        await Store.update(
            { 
                stake: stake,
                collateral: collateral,
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