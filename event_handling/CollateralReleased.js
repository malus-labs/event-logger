const Store = require('../models/store');

async function CollateralReleased(store_id, collateral, availableFunds) {
    try {

        //Update the collateral, and availableFunds in the database.
        await Store.update(
            { 
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
}

module.exports = CollateralReleased;