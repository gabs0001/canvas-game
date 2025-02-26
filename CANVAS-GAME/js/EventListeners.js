addEventListener('click', ({ clientX, clientY }) => {
    const angle = Math.atan2(
        clientY - canvas.height / 2, 
        clientX - canvas.width / 2
    )

    projectiles.push(
        new Projectile({
            position: {
                x: canvas.width / 2,
                y: canvas.height / 2
            },
            radius: 5,
            color: 'white',
            velocity: {
                x: Math.cos(angle) * 4,
                y: Math.sin(angle) * 4
            }
        })
    )
})