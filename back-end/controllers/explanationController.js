const Explanation = require('../models/Explanation');

const explanationController = {
  listByContent: (req, res) => {
    const contentId = req.params.contentId;
    Explanation.getByContentId(contentId, (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao listar explicações.' });
      } else {
        res.json(rows);
      }
    });
  },

  create: (req, res) => {
    const data = req.body;
    Explanation.create(data, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao criar explicação.' });
      } else {
        res.status(201).json({ message: 'Explicação criada com sucesso.', id: result.id });
      }
    });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Explanation.delete(id, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao excluir explicação.' });
      } else {
        res.json({ message: 'Explicação excluída com sucesso.' });
      }
    });
  }
};

module.exports = explanationController;
