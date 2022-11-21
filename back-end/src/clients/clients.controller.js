const service = require("./clients.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");
const clientIDExists = require("../validations/clientIDExists");

const REQUIRED_PROPERTIES = [

]

async function list(req, res){
    const client = await service.list();
    res.json({ data: client })
}

function read(req, res){
    res.json({ data: res.locals.client })
}

async function create(req, res){
    const client = await service.create(req.body.data)
    res.status(201).json({ data: client})
}

async function update(req, res){
    const client = await service.update(req.body.data);
    res.json({ data: client })
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(clientIDExists), read],
    create: [asyncErrorBoundary(create)],
    update: [asyncErrorBoundary(clientIDExists), asyncErrorBoundary(update)]
}