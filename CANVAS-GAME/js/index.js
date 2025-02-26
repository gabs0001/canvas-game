// setup inicial
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

//novo player
const player = new Player({
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    radius: 15,
    color: 'white'
})

const projectiles = []
const enemies = []

let animationId
const animate = () => {
    animationId = requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0, 0, 0, 0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    
    projectiles.forEach((projectile, p) => {
        projectile.update()

        //verificando se os projéteis sairam da tela e removendo
        if(
            projectile.position.x + projectile.radius < 0 || 
            projectile.position.x - projectile.radius > canvas.width ||
            projectile.position.y + projectile.radius < 0 ||
            projectile.position.y - projectile.radius > canvas.height
        ) {
            setTimeout(() => projectiles.splice(p, 1), 0)
        }
    })

    enemies.forEach((enemy, e) => {
        enemy.update()

        //colisão dos inimigos com o player
        const dist = Math.hypot
        (
            player.position.x - enemy.position.x,
            player.position.y - enemy.position.y
        )

        //fim de jogo
        if(dist - enemy.radius - player.radius < 1) {
            /* 
             implementar mensagem de fim de jogo!
            */
            cancelAnimationFrame(animationId)
        }

        //colisão dos projeteis com o inimigo
        projectiles.forEach((projectile, p) => {
            //Math.hypot() = calcula a distância entre dois pontos
            const dist = Math.hypot
            (
                projectile.position.x - enemy.position.x,
                projectile.position.y - enemy.position.y
            )
            
            //removendo os elementos da tela
            if(dist - enemy.radius - projectile.radius < 1) {
                setTimeout(() => {
                    enemies.splice(e, 1)
                    projectiles.splice(p, 1)
                }, 0)
            }
        })
    })
}

animate()
spawnEnemies()