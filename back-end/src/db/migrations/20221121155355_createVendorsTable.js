exports.up = function (knex) {
  return knex.schema.createTable("vendor", (table) => {
    table.increments("vendor_id").primary();
    table.string("vendor_first_name").notNullable();
    table.string("vendor_last_name").notNullable();
    table.string("vendor_work_phone").notNullable();
    table.string("vendor_email");
    table.integer("company_id").unsigned();
    table
      .foreign("company_id")
      .references("company_id")
      .inTable("company")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("vendor");
};
