const knex = require("../db/connection")

function list(){
    return knex("projects")
    .select("*")
}

function read(project_id){
    return knex("projects")
    .select("*")
    .where({project_id})
    .first();
}

function create(project){
    return knex("projects")
    .insert(project, "*")
    .then(createdProject => createdProject[0])
}

function update(project){
    return knex("projects")
    .select("*")
    .where({project_id: project.project_id})
    .update(project, "*")
    .then(updatedProject => updatedProject[0])
}

module.exports = {
    list,
    read,
    create,
    update
}