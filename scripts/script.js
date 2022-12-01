document.querySelectorAll('.shard').forEach((shard) => {
    shard.onclick = () => {
        let bellSound = new Audio(`/media/sounds/bell_${shard.id.slice(1)}.mp3`);
        bellSound.play()
    };
})