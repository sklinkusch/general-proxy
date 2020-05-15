exports.wrongEndpoint = (req, res) => {
  return res.status(404).json({
    error: {
      message:
        "The endpoint you selected does not exist. Please refer the the manual.",
    },
  })
}
