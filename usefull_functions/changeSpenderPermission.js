const getUserId = require('../usefull_functions/getUserId');
const User_Store = require('../models/user_store');

async function changeSpenderPermission(store_id, approvalAddress, isApproved) {

    ////wrap in async to get result from async function.
    (async () => {
        //Get userId of new Store owner.
        var UserId = await getUserId(approvalAddress);

        //Check if user was associated with store in the past.
        const newSpender = await User_Store.findAll({  
            where: {
                user_id: UserId,
                store_id: store_id,
            }
        });

        //If owner was never associated with store add to User_Store table.
        if(newSpender == '') {
            await User_Store.create({
                user_id: UserId,
                store_id: store_id,
                is_owner: false,
                is_spender: isApproved,
            });
        }
        else {
            
            //If owner was associated with the store update to User_Store table.
            await User_Store.update(
                {
                    is_spender: isApproved
                },
                {
                    where: {
                        user_id: UserId,
                        store_id: store_id,
                    }
                }
            )
        }
    })()
}

module.exports = changeSpenderPermission;