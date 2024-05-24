#  Data-driven Smart Farming - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```




```template
let pumpStart = 0
let pumpStop = 0
input.onButtonPressed(Button.A, function () {
    pumpStart = input.runningTime()
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdSetActive(true)
        basic.pause(500)
    }
    fwdMotors.pump.fwdSetActive(false)
    pumpStop = input.runningTime()
})


// @collapsed
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

## Data-driven Smart Farming Project @showdialog
Let's build a smart hydroponic farming system! We are going to do this in 3 parts:
1. **Build** our smart farming system
2. **Add code** to bring it to life
3. **Use** the system to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-projectrender.webp" width="300" height="300" alt="Project Render">




