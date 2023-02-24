const service = require("../contact/contact.service");

async function contactIDExists(req, res, next) {
  const contact = await service.read(req.params.contact_id);

  if (contact) {
    res.locals.contact = contact;
    return next();
  }
  return next({ status: 404, message: `${req.params.contact_id} not found` });
}

module.exports = contactIDExists;
