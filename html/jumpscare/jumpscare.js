function jumpscare() {
    let jumpscare = document.createElement('div')
    jumpscare.onfullscreenchange = () => {
        if (document.fullscreenElement === null) {
            jumpscare.remove()
        }
    }

    jumpscare.classList.add('jumpscare')
    document.body.appendChild(jumpscare)
    jumpscare.requestFullscreen()
    let sound = new Audio('/html/jumpscare/jumpscare.mp3')
    sound.play();
    
    setTimeout(() => {
        document.exitFullscreen()
    }, 3000)
    
}

document.querySelector('body > div').onclick = jumpscare