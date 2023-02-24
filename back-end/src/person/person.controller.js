const service = require("./person.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");
const personIDExists = require("../validations/personIDExists");

const REQUIRED_PROPERTIES = [];

async function list(req, res) {
  const person = await service.list();
  res.json({ data: person });
}

function read(req, res) {
  res.json({ data: res.locals.person });
}

async function create(req, res) {
  const person = await service.create(req.body.data);
  res.status(201).json({ data: person });
}

async function update(req, res) {
  const person = await service.update(req.body.data);
  res.json({ data: person });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(personIDExists), read],
  create: [asyncErrorBoundary(create)],
  update: [asyncErrorBoundary(personIDExists), asyncErrorBoundary(update)],
};
