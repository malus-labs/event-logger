const User = require('../models/user');
const Store = require('../models/store');
const User_Store = require('../models/user_store');

async function StoreCreated(store_id, wallet_address, owner) {
    try {

        //Insert into store table
        await Store.create({
              store_id: store_id,
              wallet_address: wallet_address,
              available_funds: 0,
              stake: 0,
              stake_expiration: 0,
              collateral: 0,
              collateral_relief: 0,
              collateral_acceptance_rate: 0,
              ens_name: "",
              country: "",
              city: "",
              street: "",
              store_type: "",
              website: "",
        });

        //Check if user exist.
        var userID;
        const user = await User.findAll({
            where: {
                wallet_address: owner
            }
        });

        if(user == '') {
            await User.create({wallet_address: owner});

            const user = await User.findAll({
                where: {
                    wallet_address: owner
                }
            });
            
            userID = user[0].dataValues.user_id;
        }
        else {
            userID = user[0].dataValues.user_id;
        }

        
        //Insert into users_stores table
        await User_Store.create({
            user_id: userID,
            store_id: store_id,
            is_owner: true,
            is_spender: false,
        });
        

    } catch (err) {
        console.log(err);
    }
}

module.exports = StoreCreated;