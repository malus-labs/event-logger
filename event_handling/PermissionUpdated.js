const getUserId = require('../usefull_functions/getUserId');
const User_Store = require('../models/user_store');

async function PermissionUpdated(store_id, approvalAddress, permissionType, isApproved) {
    try {

        if(permissionType == 0) { //Store owner getting updated. 
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

                    //
                    if(newOwner == '') {
                        await User_Store.create({
                            user_id: UserId,
                            store_id: store_id,
                            is_owner: true,
                            is_spender: false,
                        });
                    }
                    else {
                        await User_Store.update(
                            {
                                is_owner: isApproved
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
        else if (permissionType == 1) { //New store spender being added.

        }
        else { //New store spender being added.

        }

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = PermissionUpdated;