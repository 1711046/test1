input.onButtonPressed(Button.A, function () {
    sprite.delete()
})
input.onButtonPressed(Button.AB, function () {
    sprite.delete()
})
input.onButtonPressed(Button.B, function () {
    sprite.delete()
})
let sprite: game.LedSprite = null
music.playMelody("B B C5 A F B G G ", 110)
basic.showString("321")
for (let index = 0; index < 5; index++) {
    sprite = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(1000)
}
for (let index = 0; index < 8; index++) {
    sprite = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(700)
}
for (let index = 0; index < 12; index++) {
    sprite = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(500)
}
for (let index = 0; index < 24; index++) {
    sprite = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(350)
}
basic.clearScreen()
basic.showLeds(`
    # # # # #
    . # # # .
    . # # # .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . # # # .
    . # # # .
    . . # . .
    # # # # #
    `)
