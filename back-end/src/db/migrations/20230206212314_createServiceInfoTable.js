/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("service_info", (table) => {
    table.increments("service_info_id").primary();
    table.date("service_info_join");
    table.date("service_info_ready");
    table.string("service_info_email");
    table.string("service_info_package");
    table.string("service_info_panel");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("service_info");
};
