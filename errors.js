exports.serverInRequest = (req, res, next) => {
  if ("server" in req.query) {
    const { server } = req.query
    if (typeof server == "string") {
      if (server.startsWith("http://") || server.startsWith("https://")) {
        next()
      } else {
        return res
          .status(400)
          .json({
            error: {
              message: "The server has to start with 'http://' or 'https://'.",
            },
          })
      }
    } else {
      return res
        .status(400)
        .json({ error: { message: "The server has to be a string." } })
    }
  } else {
    return res
      .status(400)
      .json({
        error: { message: "You have to provide a server in your request." },
      })
  }
}

exports.wrongEndpoint = (req, res) => {
  return res.status(404).json({
    error: {
      message:
        "The endpoint you selected does not exist. Please refer the the manual.",
    },
  })
}
