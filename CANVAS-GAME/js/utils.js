//gerando inimigos na tela
const spawnEnemies = () => {
    setInterval(() => {
        const radius = Math.random() * (30 - 4) + 4
        let px
        let py

        if(Math.random() < 0.5) {
            px = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            py = Math.random() * canvas.height
        }else {
            px = Math.random() * canvas.width
            py = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }

        const angle = Math.atan2(
            canvas.height / 2 - py,
            canvas.width / 2 - px
        )

        enemies.push(
            new Enemy({
                position: {
                    x: px,
                    y: py
                },
                radius: radius,
                color: 'green',
                velocity: {
                    x: Math.cos(angle),
                    y: Math.sin(angle)
                }
            })
        )
    }, 1000)
}