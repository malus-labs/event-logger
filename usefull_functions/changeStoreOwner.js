const getUserId = require('../usefull_functions/getUserId');
const User_Store = require('../models/user_store');

async function changeStoreOwner(store_id, approvalAddress) {
    ////wrap in async to get result from async function.
    (async () => {
        //Get userId of new Store owner.
        var UserId = await getUserId(approvalAddress);
        
        //Update permission of previous store owner.
        await User_Store.update(
            {
                is_owner: false
            },
            {
                where: {
                    store_id: store_id,
                    is_owner: true
                }
            }
        ).then(async function() { //Change permission of new store owner.

            //Check if user was associated with store in the past.
            const newOwner = await User_Store.findAll({  
                where: {
                    user_id: UserId,
                    store_id: store_id,
                }
            });

            //If owner was never associated with store add to User_Store table.
            if(newOwner == '') {
                await User_Store.create({
                    user_id: UserId,
                    store_id: store_id,
                    is_owner: true,
                    is_spender: false,
                });
            }
            else {
                
                //If owner was associated with the store add to User_Store table.
                await User_Store.update(
                    {
                        is_owner: true
                    },
                    {
                        where: {
                            user_id: UserId,
                            store_id: store_id,
                        }
                    }
                )
            }
        })
    })()
}

module.exports = changeStoreOwner;