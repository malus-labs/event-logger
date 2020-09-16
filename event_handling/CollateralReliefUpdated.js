const Store = require('../models/store');

async function CollateralReliefUpdated(store_id, collateralRelief, availableFunds, rate) {
    try {

        //Update the available_funds, collateral_relief, and collateral_acceptance_rate in the database.
        await Store.update(
            {
                available_funds: availableFunds,
                collateral_relief: collateralRelief,
                collateral_acceptance_rate: rate
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

module.exports = CollateralReliefUpdated;