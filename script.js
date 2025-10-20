// Exemplo de função para adicionar interatividade futura
// (pode incluir animações ou contadores de cliques, se desejar)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Botão clicado: ${button.textContent.trim()}`);
  });
});
