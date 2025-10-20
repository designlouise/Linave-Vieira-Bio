// Apenas para logar os cliques e futura interatividade
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Botão clicado: ${button.textContent.trim()}`);
  });
});
