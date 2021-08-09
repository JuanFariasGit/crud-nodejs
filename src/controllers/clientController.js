const Client = require('../models/Client');

const getClients = async (req, res) => {
  const clients = await Client.findAll();
  const dataClientsToDataTable = clients.map(client => {
    let data = {
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

const pageClientForm = async (req, res) => {
  let client;
  if (req.query.id) {
    client = await Client.findAll({ where: { id: parseInt(req.query.id) } });  
  }
  res.render('clientForm', { client });
} 

const saveClient = async (req, res) => {
  const { fullname, email, cpf, id } = req.body;
  
  data = {
    fullname: fullname,
    email: email,
    cpf: cpf
  }

  if (!id) {
    try {
      await Client.create(data);
      req.flash('success', 'Cliente adicionado com sucesso.')
      res.redirect('/');
    } catch (ex) {
      ex.errors.forEach(error => {
        req.flash('error', `${error.message} (${error.value})`);
      });
      res.redirect('/cliente');
    }
  } else {
    try {
      await Client.update(data, { where: { id: parseInt(id) } })
      req.flash('success', 'Cliente atualizado com sucesso.')
      res.redirect('/');
    } catch (ex) {
      ex.errors.forEach(error => {
        req.flash('error', error.message);
      });
      res.redirect('/cliente?id=' + id);
    }
  }
}

module.exports = {
  getClients,
  pageClientForm,
  saveClient
}