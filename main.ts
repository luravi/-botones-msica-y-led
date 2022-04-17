input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("A F E F D G E F ", 500)
})
input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    for (let index = 0; index < 10; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playTone(784, music.beat(BeatFraction.Breve))
        music.playTone(880, music.beat(BeatFraction.Breve))
        music.playTone(988, music.beat(BeatFraction.Breve))
        music.playTone(523, music.beat(BeatFraction.Breve))
        music.playTone(784, music.beat(BeatFraction.Breve))
        music.playTone(698, music.beat(BeatFraction.Breve))
        music.playTone(659, music.beat(BeatFraction.Breve))
        music.playTone(587, music.beat(BeatFraction.Breve))
        music.playTone(523, music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
