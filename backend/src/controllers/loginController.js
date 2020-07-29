const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  // Listar todos logins
  async index(req, res) {
    try {
      const login = await connection('login').select('*');
      return res.status(200).json(login);
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Recuperação do Login
  async forgot(req, res) {
    try {
      const { email } = req.body;
      if (!email) return res.status(401).json({ error: 'Email not informed' });

      const forgot = await connection('login')
        .where('email', email)
        .select(['pin'])
        .first();

      if (!forgot) return res.status(401).json({ error: 'This user does not exist' });
      return res.json({ pin: forgot.pin });
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Criar um login
  async create(req, res) {
    try {
      const { nome, email } = req.body;
      const pin = crypto.randomBytes(8).toString('HEX');

      await connection('login').insert({ pin, nome, email });

      return res.status(201).json({ pin, nome });
    } catch (e) {
      return res.status(404).json({ error: 'Sorry, unable to register' });
    }
  },

  // Deletar Login
  async delete(req, res) {
    try {
      const { id_login } = req.params;
      if (!id_login) return res.status(401).json({ error: 'A login was not informed' });

      await connection('login')
        .where('pin', id_login)
        .delete();
      return res.status(200).json({ msg: 'login successfully deleted' });
    } catch (e) {
      return (
        console.log(e),
        res.status(404).json({ error: "We couldn't find what you were looking for" })
      );
    }
  },
};
