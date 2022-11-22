const service = require("./vendors.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");
const vendorIDExists = require("../validations/vendorIDExists");

const REQUIRED_PROPERTIES = [

]

async function list(req, res){
    const vendor = await service.list();
    res.json({ data: vendor })
}

function read(req, res){
    res.json({ data: res.locals.vendor })
}

async function create(req, res){
    const vendor = await service.create(req.body.data)
    res.status(201).json({ data: vendor})
}

async function update(req, res){
    const vendor = await service.update(req.body.data);
    res.json({ data: vendor })
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(vendorIDExists), read],
    create: [asyncErrorBoundary(create)],
    update: [asyncErrorBoundary(vendorIDExists), asyncErrorBoundary(update)]
}