const service = require("../projects/projects.service");

async function projectIDExists(req, res, next) {
  const project = await service.read(req.params.project_id);

  if (project) {
    res.locals.project = project;
    return next();
  }
  return next({ status: 404, message: `${req.params.project_id} not found` });
}

module.exports = projectIDExists;
