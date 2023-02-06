/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("service", (table) => {
    table.increments("service_id").primary();
    table.bool("service_AV");
    table.bool("service_security");
    table.bool("service_camera");
    table.bool("service_lighting");
    table.bool("service_network");
    table.bool("service_other");
    table.text("service_other_text");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("service");
};
