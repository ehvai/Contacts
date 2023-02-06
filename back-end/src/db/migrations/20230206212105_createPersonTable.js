/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("person", (table) => {
    table.increments("person_id").primary();
    table.string("person_first_name");
    table.string("person_last_name");
    table.string("person_home_email");
    table.string("person_work_email");
    table.string("person_mobile_number");
    table.string("person_home_number");
    table.string("person_work_number");
    table.integer("address_id").unsigned();
    table
      .foreign("address_id")
      .references("address_id")
      .inTable("address")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("person");
};
