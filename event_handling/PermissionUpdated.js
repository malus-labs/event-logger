const changeStoreOwner = require('../usefull_functions/changeStoreOwner');
const changeSpenderPermission = require('../usefull_functions/changeSpenderPermission')
const changePartnerPermission = require('../usefull_functions/changePartnerPermission')

async function PermissionUpdated(store_id, approvalAddress, permissionType, isApproved) {
    try {

        if(permissionType == 0) { //Store owner getting updated. 
            changeStoreOwner(store_id, approvalAddress)
        }
        else if (permissionType == 1) { //New store spender being added.
            changePartnerPermission(store_id, approvalAddress, isApproved)
        }
        else { //New store spender being added.
            changeSpenderPermission(store_id, approvalAddress, isApproved)
        }

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = PermissionUpdated;