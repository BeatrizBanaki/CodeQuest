const express = require('express');
const app = express();
const cors = require('cors');

const contentRoutes = require('./routes/contents');
const explanationRoutes = require('./routes/explanations');

const allowedOrigins = [
  'http://localhost:3000',
  'https://beatrizbanaki.github.io',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

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
