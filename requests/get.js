const axios = require("axios")

exports.getData = async (req, res) => {
  try {
    const { server } = req.query
    const response = await axios.get(server)
    const { headers, data } = await response
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}
