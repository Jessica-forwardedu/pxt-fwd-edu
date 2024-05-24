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
## Activity 1: Build Your Project @showdialog
Let's build a smart hydroponic farming system! We are going to do this in 3 parts: 
1. **Build** our smart farming system
2. **Add code** to bring it to life
3. **Modify** the system's code to learn how it works

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
*Note: For now, you may place the moisture sensor in an empty cup.*

![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs09.webp)

## Build Step 10 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs10.webp)


## Build Step 11 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs11.webp)


## Build Step 12 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs12.webp)


## Build Step 13 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs13.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.


## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.
<br><img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" width="400">


## Code Step 2 @showdialog
Click the three dots beside the  ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)


## Code Step 3
Click the ``|Download|`` button to download the starter code.

## Activity 3: Modify Your Project @showdialog
We are ready to **modify** the code of our smart farming system!

**Tips**
1. Follow the instructions at the top of the screen.
2. Whenever you are ready for more information, click **‘Tell me more!’**
3. If you need help with the code, click the lightbulb!


