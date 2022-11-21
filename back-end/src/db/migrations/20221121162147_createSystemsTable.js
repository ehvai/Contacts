
exports.up = function(knex) {
  return knex.schema.createTable("systems", (table)=>{
    table.increments("system_id").primary()
    table.bool("system_av").default(false)
    table.bool("system_camera").default(false)
    table.bool("system_lighting_control").default(false)
    table.bool("system_network").default(false)
    table.bool("system_other").default(false)
    table.text("system_other_text")
    table.timestamps(true, true)
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable("systems");
};
