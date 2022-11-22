const service = require("./company.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");
const companyIDExists = require("../validations/companyIDExists");

const REQUIRED_PROPERTIES = [

]

async function list(req, res){
    const company = await service.list();
    res.json({ data: company })
}

function read(req, res){
    res.json({ data: res.locals.company })
}

async function create(req, res){
    const company = await service.create(req.body.data)
    res.status(201).json({ data: company})
}

async function update(req, res){
    const company = await service.update(req.body.data);
    res.json({ data: company })
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(companyIDExists), read],
    create: [asyncErrorBoundary(create)],
    update: [asyncErrorBoundary(companyIDExists), asyncErrorBoundary(update)]
}