const express = require('express');
const app = express();

const contentRoutes = require('./routes/contents');
const explanationRoutes = require('./routes/explanations');

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api/contents', contentRoutes);
app.use('/api/explanations', explanationRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
