const knex = require("../db/connection");

function list() {
  return knex("person").select("*");
}

function read(person_id) {
  return knex("person").select("*").where({ person_id }).first();
}

function create(person) {
  return knex("person")
    .insert(person, "*")
    .then((createdPerson) => createdPerson[0]);
}

function update(person) {
  return knex("person")
    .select("*")
    .where({ person_id: person.person_id })
    .update(person, "*")
    .then((updatedPerson) => updatedPerson[0]);
}

module.exports = {
  list,
  read,
  create,
  update,
};
