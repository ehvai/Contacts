const service = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");
const projectIDExists = require("../validations/projectIDExists");

const REQUIRED_PROPERTIES = [
    "project_name",
    "project_url",
    "project_repo",
    "project_image_url",
    "comments"
]

async function list(req, res){
    const projects = await service.list();
    res.json({ data: projects })
}

function read(req, res){
    res.json({ data: res.locals.project })
}

async function create(req, res){
    const project = await service.create(req.body.data)
    res.status(201).json({ data: project})
}

async function update(req, res){
    const project = await service.update(req.body.data);
    res.json({ data: project })
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(projectIDExists), read],
    create: [asyncErrorBoundary(create)],
    update: [asyncErrorBoundary(projectIDExists), asyncErrorBoundary(update)]
}