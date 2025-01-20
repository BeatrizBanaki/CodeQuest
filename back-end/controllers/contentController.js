const Content = require('../models/Content');
const path = require('path');
const fs = require('fs');

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

  getVideo: (req, res) => {
    const id = req.params.id;

    const videoPath = path.join(__dirname, '../videos', id + '.mp4');
    if (!fs.existsSync(videoPath)) {
      return res.status(404).send('Vídeo não encontrado.');
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(videoPath, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };

      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };

      res.writeHead(200, head);
      fs.createReadStream(videoPath).pipe(res);
    }
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
