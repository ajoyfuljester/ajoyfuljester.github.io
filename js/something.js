//FULLSCREEN ONCLICK
document.querySelectorAll('body > div > div').forEach((element) => {
    element.onclick = () => {
        element.classList.toggle('fullscreen')
    }
})