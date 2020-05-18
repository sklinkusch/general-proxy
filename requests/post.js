const axios = require("axios")

exports.postData = async (req, res) => {
  try {
    console.log("entering routine for post requests")
    const { server } = req.query
    console.log(`server is set to ${server}`)
    const { headers, data } = req
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    console.log("headers are set")
    const response = await axios.post({ url: server, headers, data })
    const { headers: responseHeaders, data: responseData } = await response
    console.log("successful request")
    return res.status(200).json(responseData)
  } catch (error) {
    console.log("unsuccessful request")
    return res.status(500).json(error)
  }
}
