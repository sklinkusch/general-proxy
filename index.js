const express = require("express")
const app = express()
const port = 3000
const { getData } = require("./requests/get")
const { postData } = require("./requests/post")
const { putData } = require("./requests/put")
const { patchData } = require("./requests/patch")
const { deleteData } = require("./requests/delete")
const {
  wrongEndpoint,
  serverInRequest,
  wrongArgType,
  checkAddress,
} = require("./errors")

app.use("/", (req, res, next) => serverInRequest(req, res, next))
app.use("/", (req, res, next) => wrongArgType(req, res, next))
app.use("/", (req, res, next) => checkAddress(req, res, next))
app.get("/", (req, res) => getData(req, res))
app.post("/", (req, res) => postData(req, res))
app.put("/", (req, res) => putData(req, res))
app.patch("/", (req, res) => patchData(req, res))
app.delete("/", (req, res) => deleteData(req, res))
app.all("*", (req, res) => wrongEndpoint(req, res))

app.listen(port)
