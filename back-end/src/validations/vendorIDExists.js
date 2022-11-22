const service = require("../vendor/vendor.service");

async function vendorIDExists(req, res, next) {
  const vendor = await service.read(req.params.vendor_id);

  if (vendor) {
    res.locals.vendor = vendor;
    return next();
  }
  return next({ status: 404, message: `${req.params.vendor_id} not found` });
}

module.exports = vendorIDExists;
