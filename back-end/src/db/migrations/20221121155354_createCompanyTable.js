
exports.up = function(knex) {
    return knex.schema.createTable("company", (table)=>{
        table.increments("company_id").primary()
        table.string("company_name").notNullable()
        table.string("company_street")
        table.string("company_city")
        table.string("company_state")
        table.string("company_zipcode")
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("company");  
};
