const service = require("./contact.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");
const contactIDExists = require("../validations/contactIDExists");

const REQUIRED_PROPERTIES = [];

async function list(req, res) {
  const contact = await service.list();
  res.json({ data: contact });
}

function read(req, res) {
  res.json({ data: res.locals.contact });
}

async function create(req, res) {
  const contact = await service.create(req.body.data);
  res.status(201).json({ data: contact });
}

async function update(req, res) {
  const contact = await service.update(req.body.data);
  res.json({ data: contact });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(contactIDExists), read],
  create: [asyncErrorBoundary(create)],
  update: [asyncErrorBoundary(contactIDExists), asyncErrorBoundary(update)],
};
