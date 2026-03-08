const login = (req, res, next) => {
  res.json({
    status: "Success",
    message: "User has successfully logged in",
  });
};

module.exports = { login };
