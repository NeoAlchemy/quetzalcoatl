namespace SpriteKind {
    export const PowerUp = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.greenInnerSouthEast, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.greenInnerNorthWest, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    info.changeCountdownBy(10)
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.greenInnerNorthEast, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
})
info.onScore(3, function () {
    powerup = sprites.create(assets.image`sword`, SpriteKind.PowerUp)
    powerup.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    powerup.follow(tamale, 25)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
})
info.onScore(20, function () {
    info.startCountdown(60)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.cameraFollowSprite(quetzalcoatl)
})
info.onScore(40, function () {
    game.setGameOverEffect(true, effects.clouds)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.greenInnerSouthWest, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
})
let powerup: Sprite = null
let tamale: Sprite = null
let quetzalcoatl: Sprite = null
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`level1`)
quetzalcoatl = sprites.create(assets.image`left-facing-queztalcoatl`, SpriteKind.Player)
quetzalcoatl.setScale(0.5, ScaleAnchor.Middle)
controller.moveSprite(quetzalcoatl)
tamale = sprites.create(assets.image`tamales`, SpriteKind.Food)
tamale.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
info.startCountdown(30)
