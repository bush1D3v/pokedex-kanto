const botaoAlterarTema = document.getElementById('botao-alterar-tema')
const body = document.querySelector('body')
const imagemBotaoAlterarTema = document.querySelector('.imagem-botao')
const imagem = document.querySelector('img.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {
    if (body.classList.contains('modo-escuro')) {
        body.classList.remove('modo-escuro')
        imagemBotaoAlterarTema.setAttribute('src', './src/imagens/sun.png')
    } else {
    body.classList.add('modo-escuro')
    imagemBotaoAlterarTema.setAttribute('src', './src/imagens/moon.png')
    }
})