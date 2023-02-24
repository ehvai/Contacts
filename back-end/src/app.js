const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const clientsRouter = require("./client/client.router");
const companyRouter = require("./company/company.router");
const contactRouter = require("./contact/contact.router");
const personRouter = require("./person/person.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/client", clientsRouter);
app.use("/company", companyRouter);
app.use("/contact", contactRouter);
app.use("/person", personRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
