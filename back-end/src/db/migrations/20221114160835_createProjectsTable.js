
exports.up = function(knex) {
    return knex.schema.createTable("projects", table =>{
        table.increments("project_id").primary();
        table.string("project_name");
        table.string("project_url");
        table.string("project_repo");
        table.string("project_image_url");
        table.text("description")
        table.text("comments");
        table.timestamps(true, true);
    })
  
};


exports.down = function(knex) {
    return knex.schema.dropTable("projects");
};
