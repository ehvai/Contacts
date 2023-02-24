const knex = require("../db/connection");

function list() {
  return knex("client").select("*");
}

function read(client_id) {
  return knex("client").select("*").where({ client_id }).first();
}

function create(client) {
  return knex("client")
    .insert(client, "*")
    .then((createdClient) => createdClient[0]);
}

function update(client) {
  return knex("client")
    .select("*")
    .where({ client_id: client.client_id })
    .update(client, "*")
    .then((updatedClient) => updatedClient[0]);
}

module.exports = {
  list,
  read,
  create,
  update,
};
