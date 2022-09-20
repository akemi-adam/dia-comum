const button1 = document.getElementById('no-click-button-1')
const button2 = document.getElementById('no-click-button-2')
const button3 = document.getElementById('click-button')
const title = document.getElementById('title')
const img = document.getElementById('img')
const p = document.getElementById('prfg')

button1.addEventListener('click', () => {
    button1.style.display = "none"
    button2.style.display = "block"
})

button2.addEventListener('click', () => {
    button2.style.display = "none"
    button3.style.display = "block"
})

button3.addEventListener('click', () => {
    button3.style.display = "none"
    title.innerHTML = "Parabéns, Glau Glau!!!!🥳🎉🪅🥳🎉"
    img.style.display = "inline-block";
    p.innerHTML = "Parabéns Glaucyrlei! Espero que você tenha muitos anos de vida que tenha um excelente dia!</br>Tudo de bom para você meu amigo!";
})