
exports.up = function(knex) {
  return knex.schema.createTable("clients", (table) =>{
    table.increments("client_id").primary()
    table.string("client_first_name").notNullable()
    table.string("client_last_name").notNullable()
    table.string("client_work_email").notNullable()
    table.string("client_home_email").notNullable()
    table.string("client_street").notNullable()
    table.string("client_city").notNullable()
    table.string("client_state").notNullable()
    table.string("client_zipcode").notNullable()
    table.string("client_home_phone").notNullable()
    table.string("client_work_phone").notNullable()
    table.string("client_mobile_phone").notNullable()
    table.bool("secondary").default(false)
    table.bool("caretaker").default(false)
    table.integer("primary_client_id").unsigned()
    table
    .foreign("primary_client_id")
    .references("client_id")
    .inTable("clients")
    .onDelete("CASCADE");
    table.timestamps(true, true)
  })
};


exports.down = function(knex) {
    return knex.schema.dropTable("clients");  
};
