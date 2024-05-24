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


## Build Step 1 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs01.webp)


## Build Step 2 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs02.webp)



## Build Step 3 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs03.webp)



## Build Step 4 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs04.webp)



## Build Step 5 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs05.webp)



## Build Step 6 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs06.webp)



## Build Step 7 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs07.webp)


## Build Step 8 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs08.webp)


## Build Step 9 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs09.webp)


*Note: For now, you may place the moisture sensor in an empty cup.*

## Build Step 10 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs10.webp)


## Build Step 11 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs11.webp)


## Build Step 12 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs12.webp)


## Build Step 13 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs13.webp)






