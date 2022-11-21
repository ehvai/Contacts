exports.up = function (knex) {
  return knex.schema.createTable("jobs", (table) => {
    table.increments("job_id").primary();
    table.integer("client_id").unsigned();
    table
      .foreign("client_id")
      .references("client_id")
      .inTable("clients")
      .onDelete("CASCADE");
    table.integer("company_id").unsigned();
    table
      .foreign("company_id")
      .references("company_id")
      .inTable("company")
      .onDelete("CASCADE");
    table.integer("system_id").unsigned();
    table
      .foreign("system_id")
      .references("system_id")
      .inTable("systems")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("jobs")
};
