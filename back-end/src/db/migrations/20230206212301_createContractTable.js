/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contract", (table) => {
    table.increments("contract_id").primary();

    table.integer("company_id").unsigned().notNullable();
    table
      .foreign("company_id")
      .references("company_id")
      .inTable("company")
      .onDelete("CASCADE");

    table.integer("client_id").unsigned().notNullable();
    table
      .foreign("client_id")
      .references("client_id")
      .inTable("client")
      .onDelete("CASCADE");

    table.integer("service_id").unsigned().notNullable();
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
  return knex.schema.dropTable("contract");
};
