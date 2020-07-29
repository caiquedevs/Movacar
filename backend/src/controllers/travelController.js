const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  // Listar Viagens
  async index(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const travels = await connection('travels')
        .where('pin', pin)
        .select('*');

      return res.status(200).json(travels);
    } catch (e) {
      return (
        console.log(e),
        res.status(404).json({ error: "We couldn't find what you were looking for" })
      );
    }
  },

  // Criar Viagem
  async create(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const {
        created, status,
        address, number, description, date, hour, cep, city, state,
        id_driver, name_driver,
      } = req.body;

      if (!id_driver) return res.status(401).json({ error: 'A driver was not informed' });

      const id_travel = crypto.randomBytes(8).toString('HEX');
      const newDate = new Date();

      await connection('travels').insert({
        id_travel,
        created: `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()} - ${newDate.getHours()}:${newDate.getMinutes()}`,
        status: 'pending',
        pin,

        address,
        number,
        description,
        date,
        hour,
        cep,
        city,
        state,

        id_driver,
        name_driver,
      });

      return res.status(201).json({
        id_travel,
        created,
        status,
        description,
        address,
        date,
        hour,
        id_driver,
        name_driver,
        msg: 'Travel registered successfully',
      });
    } catch (e) {
      console.log(e);
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Editar Viagem
  async put(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const { id_travel } = req.params;
      if (!id_travel) return res.status(401).json({ error: 'A travel was not informed' });

      const putInformation = req.body;

      await connection('travels')
        .where('id_travel', id_travel)
        .update(putInformation);

      return res.status(200).json({ msg: 'Successfully updated' });
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Deletar Viagem
  async delete(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const { id_travel } = req.params;
      if (!id_travel) return res.status(401).json({ error: 'A travel was not informed' });

      await connection('travels')
        .where('id_travel', id_travel)
        .delete();
      return res.status(200).json({ msg: 'Travel successfully deleted' });
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },
};
