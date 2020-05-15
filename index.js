const express = require("express")
const app = express()
const port = 3000
const { getData } = require("./requests/get")
const { postData } = require("./requests/post")
const { wrongEndpoint } = require("./errors")

app.get("/", (req, res) => getData(req, res))
app.post("/", (req, res) => postData(req, res))
app.put("/", (req, res) => putData(req, res))
app.patch("/", (req, res) => patchData(req, res))
app.delete("/", (req, res) => deleteData(req, res))
app.all("*", (req, res) => wrongEndpoint(req, res))

app.listen(port)
