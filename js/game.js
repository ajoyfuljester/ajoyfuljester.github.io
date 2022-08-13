const game = document.querySelector('#game')
const player = document.querySelector('#player')

player.style.left = '50%'
player.style.bottom = '0%'

let playerX = player.style.left
let playerY = player.style.bottom

document.onkeydown = (event) => {
    if (event.code == 'Space') {
        moveEntity(0, 5)
    }
}

function moveEntity(dx, dy, entity = player) {
    let currentPositionX = parseFloat(entity.style.left.slice(0, -1));
    let currentPositionY = parseFloat(entity.style.bottom.slice(0, -1));

    entity.style.left = `${currentPositionX + dx}%`
    entity.style.bottom = `${currentPositionY + dy}%`
}