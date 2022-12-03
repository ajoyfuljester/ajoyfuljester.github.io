document.querySelectorAll('.shard').forEach((shard) => {
    shard.addEventListener('click', () => {
        let bellSound = new Audio(`/media/sounds/bell_${shard.id.slice(1)}.mp3`);
        bellSound.play()
    })

    shard.addEventListener('click', () => {
        document.querySelector('#jester').style.filter = 'none';
        shard.animate([{}, {
            scale: 0,
            zIndex: 100,
        }, {
            clipPath: 'circle(0%)',
            position: 'fixed',
            zIndex: 100,
        }, {
            scale: 1,
            position: 'fixed',
            zIndex: 100,

        }, {
            clipPath: 'circle(100%)',
            position: 'fixed',
            zIndex: 100,
            inset: 0,
            backgroundColor: '#fff'

        }], {
            duration: 3000,
            fill: 'forwards',
        }).finished.then(() => document.location.assign(`${document.querySelector(`#${shard.id} > iframe`).src}`))

        document.querySelectorAll(`#${shard.id} > .shard-piece`).forEach((shardPiece) => {
            shardPiece.style.backgroundColor = 'transparent';
        })

        
        
        
    })
})