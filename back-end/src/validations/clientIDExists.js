const service = require("../clients/clients.service");

async function clientIDExists(req, res, next) {
  const client = await service.read(req.params.client_id);

  if (client) {
    res.locals.client = client;
    return next();
  }
  return next({ status: 404, message: `${req.params.client_id} not found` });
}

module.exports = clientIDExists;
