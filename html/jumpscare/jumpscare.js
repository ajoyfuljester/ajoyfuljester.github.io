function jumpscare() {
    let jumpscare = document.createElement('div')
    jumpscare.classList.add('jumpscare')
    document.body.appendChild(jumpscare)
    jumpscare.requestFullscreen()
    let sound = new Audio('/html/jumpscare/jumpscare.mp3')
    sound.play();
    
    setTimeout(async () => {
        await document.exitFullscreen()
        jumpscare.remove()
    }, 3000)
    
}

document.querySelector('body').onclick = jumpscare