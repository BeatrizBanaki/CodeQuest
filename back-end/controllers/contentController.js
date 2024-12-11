const Content = require('../models/Content');

const contentController = {
  list: (req, res) => {
    Content.getAll((err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao listar os conteúdos.' });
      } else {
        res.json(rows);
      }
    });
  },

  get: (req, res) => {
    const id = req.params.id;
    Content.getById(id, (err, content) => {
      if (err || !content) {
        res.status(404).json({ error: 'Conteúdo não encontrado.' });
      } else {
        res.json(content);
      }
    });
  },

  create: (req, res) => {
    const data = req.body;
    Content.create(data, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao criar o conteúdo.' });
      } else {
        res.status(201).json({ message: 'Conteúdo criado com sucesso.' });
      }
    });
  },

  update: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Content.update(id, data, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao atualizar o conteúdo.' });
      } else {
        res.json({ message: 'Conteúdo atualizado com sucesso.' });
      }
    });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Content.delete(id, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao excluir o conteúdo.' });
      } else {
        res.json({ message: 'Conteúdo excluído com sucesso.' });
      }
    });
  }
};

module.exports = contentController;
