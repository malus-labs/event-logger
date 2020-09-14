const Store = require('../models/store')
const Partner = require('../models/partner');


async function changePartnerPermission(store_id, approvalAddress, isApproved) {

    //Getting store_id of partner to store in partnerId.
    var partnerId;
    const storePartner = await Store.findAll({
        where: {
            wallet_address: approvalAddress
        }
    })
    partnerId = storePartner[0].dataValues.store_id;

    //If partner permission denied remove from partners table that has relationship with store_id.
    if(isApproved == true) {
        await Partner.create({
            store_id: store_id,
            partner_id: partnerId,
        });
    }
    else {
        await Partner.destroy({
            where: {
                store_id: store_id,
                partner_id: partnerId,
            }
        });
    }
}

module.exports = changePartnerPermission;