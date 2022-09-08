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
        console.log('exiting fullscreen after 3 seconds')
        console.log(jumpscareElement.onfullscreenchange.toString())
        if (document.fullscreenElement !== null) {
            document.exitFullscreen()
        }
    }, 3000)
    
}

document.querySelector('body > div').onclick = jumpscare