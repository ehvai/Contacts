/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contact", (table) => {
    table.increments("contact_id").primary();

    table.integer("company_id").unsigned().notNullable();
    table
      .foreign("company_id")
      .references("company_id")
      .inTable("company")
      .onDelete("CASCADE");

    table.integer("person_id").unsigned().notNullable();
    table
      .foreign("person_id")
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
  return knex.schema.dropTable("contact");
};
