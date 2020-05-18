const axios = require("axios")

exports.getData = async (req, res) => {
  try {
    console.log("entering routine for get requests")
    const { server } = req.query
    console.log(`server is set to ${server}`)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    console.log("set headers")
    const response = await axios.get(server)
    const { headers, data } = await response
    console.log("successful request")
    return res.status(200).json(data)
  } catch (error) {
    console.log("unsuccessful request")
    return res.status(500).json(error)
  }
}
