
exports.up = function(knex) {
  return knex.schema.createTable("clients", (table) =>{
    table.increments("client_id").primary()
    table.string("primary_first_name").notNullable()
    table.string("primary_last_name").notNullable()
    table.string("primary_work_email").notNullable()
    table.string("primary_home_email").notNullable()
    table.string("primary_street").notNullable()
    table.string("primary_city").notNullable()
    table.string("primary_state").notNullable()
    table.string("primary_zipcode").notNullable()
    table.string("primary_home_phone").notNullable()
    table.string("primary_work_phone").notNullable()
    table.string("primary_mobile_phone").notNullable()
    table.string("secondary_first_name").notNullable()
    table.string("secondary_last_name").notNullable()
    table.string("secondary_work_email").notNullable()
    table.string("secondary_home_email").notNullable()
    table.string("secondary_street").notNullable()
    table.string("secondary_city").notNullable()
    table.string("secondary_state").notNullable()
    table.string("secondary_zipcode").notNullable()
    table.string("secondary_home_phone").notNullable()
    table.string("secondary_work_phone").notNullable()
    table.string("secondary_mobile_phone").notNullable()
    table.string("caretaker_first_name").notNullable()
    table.string("caretaker_last_name").notNullable()
    table.string("caretaker_work_email").notNullable()
    table.string("caretaker_work_phone").notNullable()
    table.timestamps(true, true)
  })
};


exports.down = function(knex) {
    return knex.schema.dropTable("clients");  
};
