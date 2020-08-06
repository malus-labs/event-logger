const db = require('../database/db');

function PermissionUpdated(store_id, approvalAddress, permissionType, isApproved) {
    console.log(store_id);
    console.log(approvalAddress);
    console.log(permissionType);
    console.log(isApproved);
}

module.exports = PermissionUpdated;