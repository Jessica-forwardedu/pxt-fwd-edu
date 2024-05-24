#  Data-Driven Smart Farm - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```








```template
let pumpStop = 0
let pumpStart = 0
input.onButtonPressed(Button.A, function () {
    pumpStart = input.runningTime()
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdSetActive(true)
        basic.pause(500)
    }
    fwdMotors.pump.fwdSetActive(false)
    pumpStop = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```
