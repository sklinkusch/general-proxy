const axios = require("axios")

exports.getData = async (req, res) => {
  try {
    const { server } = req.query
    console.log(server)
    const { headers } = req
    console.log(headers)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    const response = await axios.get(server, { headers })
    console.log(response)
    const { headers: responseHeaders, data: responseData } = await response
    console.log(responseHeaders)
    console.log(responseData)
    return res.status(200).json(responseData)
  } catch (error) {
    return res.status(500).json(error)
  }
}
