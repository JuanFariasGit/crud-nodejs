const User = require('../models/User');

const getClients = async (req, res) => {
  let users = await User.findAll();
  res.json({data: users});
}

module.exports = {getClients}