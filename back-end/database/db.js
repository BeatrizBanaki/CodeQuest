const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Cria ou conecta ao banco de dados
const dbPath = path.resolve(__dirname, 'CodeQuest.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco SQLite:', err.message);
  } else {
    console.log('Conectado ao banco SQLite.');
  }
});

module.exports = db;
