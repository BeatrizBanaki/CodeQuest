const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Listar todos os conteúdos
router.get('/', contentController.list);

// Obter um conteúdo pelo ID
router.get('/video/:id', contentController.getVideo);
router.get('/:id', contentController.get);

// Criar um novo conteúdo
router.post('/', contentController.create);

// Atualizar um conteúdo existente
router.put('/:id', contentController.update);

// Excluir um conteúdo
router.delete('/:id', contentController.delete);

module.exports = router;
