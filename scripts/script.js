document.querySelectorAll('.shard').forEach((shard) => {
    shard.onclick = playBellSound;
})

function playBellSound() {
    let bellSound = new Audio('/media/sounds/bell.mp3');
    console.log(bellSound.volume = 1)
    bellSound.play()
}