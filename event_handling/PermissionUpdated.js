const User_Store = require('../models/user_store');

async function PermissionUpdated(store_id, approvalAddress, permissionType, isApproved) {
    try {


        if(permissionType == 0) {
            
        }
        else if (permissionType == 1) {

        }
        else {

        }

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = PermissionUpdated;