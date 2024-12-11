const db = require('../database/db');

const Explanation = {
  // Retorna todas as explicações de um conteúdo específico
  getByContentId: (contentId, callback) => {
    const query = 'SELECT * FROM explanations WHERE content_id = ?';
    db.all(query, [contentId], (err, rows) => {
      if (err) {
        console.error(`Erro ao listar explicações para o conteúdo ${contentId}:`, err.message);
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  },

  // Cria uma nova explicação
  create: (data, callback) => {
    const query = `
      INSERT INTO explanations (content_id, explanation)
      VALUES (?, ?)
    `;
    const { content_id, explanation } = data;
    db.run(query, [content_id, explanation], function (err) {
      if (err) {
        console.error('Erro ao criar explicação:', err.message);
        callback(err);
      } else {
        callback(null, { id: this.lastID });
      }
    });
  },

  // Exclui uma explicação
  delete: (id, callback) => {
    const query = 'DELETE FROM explanations WHERE id = ?';
    db.run(query, [id], function (err) {
      if (err) {
        console.error(`Erro ao excluir explicação com ID ${id}:`, err.message);
        callback(err);
      } else {
        callback(null, { changes: this.changes });
      }
    });
  }
};

module.exports = Explanation;
