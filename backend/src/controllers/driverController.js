const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  // Listar Motoristas
  async index(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const allDrivers = await connection('drivers')
        .where('pin', pin)
        .select('*');

      return res.status(200).json(allDrivers);
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Listar Viagens do motorista
  async indexTravels(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const { id_driver } = req.params;
      if (!id_driver) return res.status(401).json({ error: 'A driver was not informed' });

      const allTravels = await connection('travels')
        .Where('cd_driver', id_driver)
        .select('*');

      return res.status(200).json(allTravels);
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Listar 1 Motorista
  async show(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const { id_driver } = req.params;
      if (!id_driver) return res.status(401).json({ error: 'A driver was not informed' });

      const oneDriver = await connection('drivers')
        .where('pin', pin)
        .andWhere('id_driver', id_driver)
        .first();

      return res.status(200).json(oneDriver);
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Criar Motoristas
  async create(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const {
        name, contact, cpf, entrance, exit,
      } = req.body;

      const id_driver = crypto.randomBytes(5).toString('HEX');

      const checksExistence = await connection('drivers')
        .where('pin', pin)
        .andWhere('contact', contact)
        .orWhere('cpf', cpf)
        .first();

      if (checksExistence) return res.status(401).json({ error: 'This driver already exists' });

      await connection('drivers').insert({
        id_driver,
        name,
        contact,
        cpf,
        entrance,
        exit,
        pin,
      });

      return res.status(201).json({
        id_driver,
        msg: `${name} Registered successfully`,
      });
    } catch (e) {
      return res.status(404).json({ error: "We couldn't find what you were looking for" });
    }
  },

  // Editar Motorista
  async put(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const { id_driver } = req.params;
      if (!id_driver) return res.status(401).json({ error: 'A driver was not informed' });

      const putInformation = req.body;

      await connection('drivers')
        .where('id_driver', id_driver)
        .update(putInformation);

      return res.status(200).json({ msg: 'Successfully updated' });
    } catch (e) {
      return (
        console.log(e),
        res.status(404).json({ error: "We couldn't find what you were looking for" })
      );
    }
  },

  // Deletar Motorista
  async delete(req, res) {
    try {
      const pin = req.userId;
      if (!pin) return res.status(401).json({ error: 'Unauthorized access' });

      const { id_driver } = req.params;
      if (!id_driver) return res.status(401).json({ error: 'A driver was not informed' });

      await connection('drivers')
        .where('id_driver', id_driver)
        .delete();
      return res.status(200).json({ msg: 'Driver successfully deleted' });
    } catch (e) {
      return (
        res.status(404).json({ error: "We couldn't find what you were looking for" })
      );
    }
  },
};
