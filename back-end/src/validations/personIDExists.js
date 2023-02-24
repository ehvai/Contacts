const service = require("../person/person.service");

async function personIDExists(req, res, next) {
  const person = await service.read(req.params.person_id);

  if (person) {
    res.locals.person = person;
    return next();
  }
  return next({ status: 404, message: `${req.params.person_id} not found` });
}

module.exports = personIDExists;
