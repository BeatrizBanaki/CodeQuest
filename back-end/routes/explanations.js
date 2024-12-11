const express = require('express');
const router = express.Router();
const explanationController = require('../controllers/explanationController');

// Listar explicações de um conteúdo
router.get('/content/:contentId', explanationController.listByContent);

// Criar uma nova explicação
router.post('/', explanationController.create);

// Excluir uma explicação
router.delete('/:id', explanationController.delete);

module.exports = router;
