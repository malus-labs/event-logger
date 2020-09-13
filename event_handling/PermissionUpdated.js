const changeStoreOwner = require('../usefull_functions/changeStoreOwner');

async function PermissionUpdated(store_id, approvalAddress, permissionType, isApproved) {
    try {

        if(permissionType == 0) { //Store owner getting updated. 
            changeStoreOwner(store_id, approvalAddress)
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