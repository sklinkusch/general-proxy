const axios = require("axios")

exports.deleteData = async (req, res) => {
  try {
    const { server } = req.query
    const { headers } = req
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    const response = await axios.delete(server)
    const { headers: responseHeaders, data: responseData } = await response
    return res.status(200).json(responseData)
  } catch (error) {
    return res.status(500).json(error)
  }
}
