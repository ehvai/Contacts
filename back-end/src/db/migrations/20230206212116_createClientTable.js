/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("client", (table) => {
    table.increments("client_id").primary();
    table.integer("person_primary_id").unsigned().notNullable();
    table
      .foreign("person_primary_id")
      .references("person_id")
      .inTable("person")
      .onDelete("CASCADE");

    table.integer("person_secondary_id").unsigned();
    table
      .foreign("person_secondary_id")
      .references("person_id")
      .inTable("person")
      .onDelete("CASCADE");

    table.integer("person_caretaker_id").unsigned();
    table
      .foreign("person_caretaker_id")
      .references("person_id")
      .inTable("person")
      .onDelete("CASCADE");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("client");
};
