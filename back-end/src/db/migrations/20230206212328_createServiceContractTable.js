/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("service_contract", (table) => {
    table.increments("service_contract_id").primary();
    table.integer("client_id").unsigned().notNullable();
    table
      .foreign("client_id")
      .references("client_id")
      .inTable("client")
      .onDelete("CASCADE");

    table.integer("AV_id").unsigned();
    table
      .foreign("AV_id")
      .references("service_info_id")
      .inTable("service_info")
      .onDelete("CASCADE");

    table.integer("security_id").unsigned();
    table
      .foreign("security_id")
      .references("service_info_id")
      .inTable("service_info")
      .onDelete("CASCADE");

    table.integer("camera_id").unsigned();
    table
      .foreign("camera_id")
      .references("service_info_id")
      .inTable("service_info")
      .onDelete("CASCADE");

    table.integer("lighting_id").unsigned();
    table
      .foreign("lighting_id")
      .references("service_info_id")
      .inTable("service_info")
      .onDelete("CASCADE");

    table.integer("network_id").unsigned();
    table
      .foreign("network_id")
      .references("service_info_id")
      .inTable("service_info")
      .onDelete("CASCADE");

    table.integer("other_id").unsigned();
    table
      .foreign("other_id")
      .references("service_info_id")
      .inTable("service_info")
      .onDelete("CASCADE");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("service_contract");
};
