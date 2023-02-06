/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("company_type", (table) => {
    table.increments("company_type_id").primary();
    table.bool("company_type_builder");
    table.bool("company_type_designer");
    table.bool("company_type_vendor");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("company_type");
};
