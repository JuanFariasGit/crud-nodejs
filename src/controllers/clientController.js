const Client = require('../models/Client');

const getClients = async (req, res) => {
  const clients = await Client.findAll();
  const dataClientsToDataTable = clients.map(client => {
    data = {
      'DT_RowId': client.id,
      'id': client.id,
      'fullname': client.fullname,
      'email': client.email,
      'cpf': client.cpf
    }
    return data;
  });
  res.json({data: dataClientsToDataTable});
}

module.exports = {getClients}