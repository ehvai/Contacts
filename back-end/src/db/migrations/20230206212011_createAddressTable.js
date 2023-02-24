/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("address", (table) => {
    table.increments("address_id").primary();
    table.string("address_street");
    table.string("address_city");
    table.string("address_state");
    table.string("address_zipcode");
    table.string("address_gate_code");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("address");
};
