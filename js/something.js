document.querySelectorAll('body > div > div').forEach((element) => {
    element.onclick = () => {
        element.classList.toggle('fullscreen')
        // JUMPSCARE
        let jumpscare = document.createElement('div')
        jumpscare.classList.add('jumpscare')
        document.body.appendChild(jumpscare)
        jumpscare.requestFullscreen()
        let sound = new Audio('/jumpscare.mp3')
        sound.play()
        
        setTimeout(() => {
            jumpscare.remove()
        }, 3000)
    }
})
