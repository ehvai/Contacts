const knex = require("../db/connection");

function list() {
  return knex("contact").select("*");
}

function read(contact_id) {
  return knex("contact").select("*").where({ contact_id }).first();
}

function create(contact) {
  return knex("contact")
    .insert(contact, "*")
    .then((createdContact) => createdContact[0]);
}

function update(contact) {
  return knex("contact")
    .select("*")
    .where({ contact_id: contact.contact_id })
    .update(contact, "*")
    .then((updatedContact) => updatedContact[0]);
}

module.exports = {
  list,
  read,
  create,
  update,
};
