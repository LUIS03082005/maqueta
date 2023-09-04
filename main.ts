basic.forever(function () {
    if (input.temperature() >= 30) {
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (input.temperature() <= 28) {
        pins.digitalWritePin(DigitalPin.P1, 2)
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 5000, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
})
