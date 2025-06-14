const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const PORT = 3000;

// Serve tudo da raiz do projeto (HTML, CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, '..')));

// API fake em /api
const api = jsonServer.router(path.join(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, api);

// Redireciona qualquer rota desconhecida para o index.html (caso use SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
