const db = require('../database/db');

const Content = {
  getAll: (callback) => {
    const query = 'SELECT id, name FROM contents';
    db.all(query, callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM contents WHERE id = ?';
    db.get(query, [id], callback);
  },

  create: (data, callback) => {
    const query = 'INSERT INTO contents (name, explanation, example, resources) VALUES (?, ?, ?, ?)';
    const { name, explanation, example, resources } = data;
    db.run(query, [name, explanation, example, resources], callback);
  },

  update: (id, data, callback) => {
    const query = 'UPDATE contents SET name = ?, explanation = ?, example = ?, resources = ? WHERE id = ?';
    const { name, explanation, example, resources } = data;
    db.run(query, [name, explanation, example, resources, id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM contents WHERE id = ?';
    db.run(query, [id], callback);
  }
};

module.exports = Content;
