let jumpscareElement = document.createElement('div')
jumpscareElement.classList.add('jumpscare')

jumpscareElement.onfullscreenchange = () => {
    if (document.fullscreenElement === null) {
        jumpscareElement.remove()
    }
}

function jumpscare() {
    document.body.appendChild(jumpscareElement)
    jumpscareElement.requestFullscreen()
    let sound = new Audio('/html/jumpscare/jumpscare.mp3')
    sound.play();
    
    setTimeout(() => {
        jumpscareElement.onfullscreenchange()
    }, 3000)
    
}

document.querySelector('body > div').onclick = jumpscare