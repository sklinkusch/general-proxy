const axios = require("axios")

exports.getData = async (req, res) => {
  try {
    const { server } = req.query
    const { headers, body } = req
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    const response = await axios.get(server, { headers, body })
    const { headers: responseHeaders, data: responseData } = await response
    return res.status(200).json(responseData)
  } catch (error) {
    return res.status(500).json(error)
  }
}
