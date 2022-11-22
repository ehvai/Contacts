const knex = require("../db/connection")

function list(){
    return knex("vendors")
    .select("*")
}

function read(vendor_id){
    return knex("vendors")
    .select("*")
    .where({vendor_id})
    .first();
}

function create(vendor){
    return knex("vendors")
    .insert(vendor, "*")
    .then(createdVendor => createdVendor[0])
}

function update(vendor){
    return knex("vendors")
    .select("*")
    .where({vendor_id: vendor.vendor_id})
    .update(vendor, "*")
    .then(updatedVendor => updatedVendor[0])
}

module.exports = {
    list,
    read,
    create,
    update
}