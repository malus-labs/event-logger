const Store = require('../models/store');

async function MetaDataUpdated(store_id, metaData) {
    try {

        //Update the metaData in the database.
        await Store.update(
            {
                country: metaData[0],
                city: metaData[1],
                street: metaData[2],
                store_type: metaData[3],
                website: metaData[4]
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

module.exports = MetaDataUpdated;