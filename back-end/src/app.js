const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".." , ".env") });
const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const clientsRouter = require("./clients/clients.router");
const companyRouter = require("./company/company.router");
const vendorRouter = require("./vendors/vendors.router")

const app=express();

app.use(cors());
app.use(express.json());

app.use("/clients", clientsRouter);
app.use("/company", companyRouter);
app.use("/vendor", vendorRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;