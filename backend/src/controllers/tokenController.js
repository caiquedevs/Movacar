const jwt = require('jsonwebtoken');
const connection = require('../database/connection');

const tokenSecret = 'adaD01230A021Avb099123cpao00234';
const tokenExpiration = '2d';

module.exports = {
  async store(req, res) {
    try {
      const key = req.body.pin;
      if (!key) return res.status(401).json({ error: 'Unauthorized access' });

      const user = await connection('login')
        .where('pin', key)
        .first();

      if (!user) return res.status(401).json({ error: 'This user does not exist' });

      const { pin, email } = user;
      const token = jwt.sign({ pin, email }, tokenSecret, {
        expiresIn: tokenExpiration,
      });

      return res.json({ token, user: { pin, nome: user.nome, email: user.email } });
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

};
