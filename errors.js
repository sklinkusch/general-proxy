exports.serverInRequest = (req, res, next) => {
  if ("server" in req.query) {
    console.log("server is in request")
    next()
  } else {
    console.log("server is not in request")
    return res.status(400).json({
      error: { message: "You have to provide a server in your request." },
    })
  }
}

exports.wrongArgType = (req, res, next) => {
  const { server } = req.query
  if (typeof server == "string") {
    console.log("server is a string")
    next()
  } else {
    console.log("server is not a string")
    return res
      .status(400)
      .json({ error: { message: "The server has to be a string." } })
  }
}

exports.checkAddress = (req, res, next) => {
  const { server } = req.query
  if (server.startsWith("http://") || server.startsWith("https://")) {
    console.log("server starts with http or https")
    next()
  } else {
    console.log("server is malformed")
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
