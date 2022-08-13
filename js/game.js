const game = document.querySelector('#game')
const player = document.querySelector('#player')

player.style.left = '50%'
player.style.bottom = '0%'

let playerX = player.style.left
let playerY = player.style.bottom

document.onkeydown = (event) => {
    let previousPosition = parseFloat(playerY.slice(0, -1))
    if (event.code == 'Space') {
        playerY = `${previousPosition + 10}%`
    }
    player.style.bottom = playerY
}