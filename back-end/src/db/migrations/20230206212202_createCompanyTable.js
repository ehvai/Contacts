/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("company", (table) => {
    table.increments("company_id").primary();
    table.string("company_name").notNullable();
    table.string("company_account_number");

    table.integer("company_type_id").unsigned().notNullable();
    table
      .foreign("company_type_id")
      .references("company_type_id")
      .inTable("company_type")
      .onDelete("CASCADE");

    table.integer("address_id").unsigned();
    table
      .foreign("address_id")
      .references("address_id")
      .inTable("address")
      .onDelete("CASCADE");

    table.integer("service_id").unsigned();
    table
      .foreign("service_id")
      .references("service_id")
      .inTable("service")
      .onDelete("CASCADE");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("company");
};
