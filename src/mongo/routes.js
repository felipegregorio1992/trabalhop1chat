const express = require('express');
const router = express.Router();
const Lives = require('./mongodb'); // Importe o modelo 'Lives' que você definiu

// Rota para inserir um novo registro de Live
router.post('/logado', async (req, res) => {
  try {
    const { nome, data, categoria, descricao } = req.body;

    // Crie um novo objeto Live com os dados recebidos
    const novaLive = new Lives({ nome, data, categoria, descricao });

    // Salve a nova live no banco de dados
    await novaLive.save();

    // Redirecione para a página de listagem de lives
    res.redirect('/logado');

  } catch (error) {
    console.error('Erro ao inserir a live:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


router.get('/editarlive/:id', async (req, res) => {
  try {
    const live = await LivesModel.findById(req.params.id);
    if (!live) {
      return res.status(404).send('Live não encontrada');
    }
    res.render('edicao', { live }); // Renderize a página HTML de edição com os dados da live
  } catch (error) {
    console.error('Erro ao carregar a live para edição:', error);
    res.status(500).send('Erro interno do servidor');
  }
});


router.post('/editarlive/:id', async (req, res) => {
  try {
    const { nome, data, categoria, descricao } = req.body;
    await LivesModel.findByIdAndUpdate(req.params.id, { nome, data, categoria, descricao });
    res.redirect('/lista'); // Redirecione para a lista de lives após a atualização
  } catch (error) {
    console.error('Erro ao atualizar a live:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/excluirlive/:id', async (req, res) => {
  try {
    await LivesModel.findByIdAndDelete(req.params.id);
    res.redirect('/lista'); // Redirecione para a lista de lives após a exclusão
  } catch (error) {
    console.error('Erro ao excluir a live:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;
