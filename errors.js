exports.serverInRequest = (req, res, next) => {
  if ("server" in req.query) {
    next()
  } else {
    return res.status(400).json({
      error: { message: "You have to provide a server in your request." },
    })
  }
}

exports.wrongArgType = (req, res, next) => {
  const { server } = req.query
  if (typeof server == "string") {
    next()
  } else {
    return res
      .status(400)
      .json({ error: { message: "The server has to be a string." } })
  }
}

exports.checkAddress = (req, res, next) => {
  const { server } = req.query
  if (server.startsWith("http://") || server.startsWith("https://")) {
    next()
  } else {
    return res.status(400).json({
      error: {
        message: "The server has to start with 'http://' or 'https://'.",
      },
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
