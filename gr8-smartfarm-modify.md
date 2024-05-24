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

## Modify Step 1
Let’s take a look at the instructions (aka the code!) that we’ve added to our smart farming system. Think about the following questions:
- When do you think the water pump will turn on? When will it turn off?
- What happens when you press B?


## Modify Step 2
Let’s test it out! Make sure the pump is in a cup with water, the moisture sensor is in an empty cup, and the tubing is secure. 


Press A and watch what happens! Were your predictions right?


~hint Tell me more!
- Pressing A is an **event** that triggers the code below it in order.
- As long as the moisture level remains below 50%, the pump stays on to water the plant. We do this using a ``||loops:while||`` loop. A ``||loops:while||`` loop repeats a series of instructions until a certain condition is met.
- When the moisture level reaches 50% or more, the code *after* the ``||loops:while||`` loop is executed. This turns the pump off.
hint~


```block
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        // @highlight
        fwdMotors.pump.fwdSetActive(true)
        basic.pause(500)
    }
    // @highlight
    fwdMotors.pump.fwdSetActive(false)
```


## Modify Step 3
Once the pump has stopped, press B. What happened? Was your prediction right?


~hint Tell me more!
- When you press B, you see a clock on the micro:bit’s LEDs. Then, you see a number. 
- The number is how long the pump was running (in seconds). 
- This was calculated by keeping track of the time the pump turned on and off using ``||variables:Variables||``. We subtracted the ``||variables:pumpStart||`` time from the ``||variables:pumpStop||`` time and divided it by 1000 to convert to seconds.
hint~


```blocks
let pumpStart = 0
let pumpStop = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    pumpStart = input.runningTime()
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdSetActive(true)
        basic.pause(500)
    }
    fwdMotors.pump.fwdSetActive(false)
    // @highlight
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
    // @highlight
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Modify Step 4
What do you think will happen if you liftthe bottom part of your moisture sensor back out of the water and hold it there? Try it now.


Was this what you expected?


~hint Tell me more!
- You might have noticed that nothing happened! That’s because the ``||loops:while||`` loop is within the ``||input:on A pressed||`` block.
- This means the sensor only checks the moisture once when is A pressed.
hint~


```blocks
let pumpStart = 0
let pumpStop = 0
// @highlight
input.onButtonPressed(Button.A, function () {
    pumpStart = input.runningTime()
    // @highlight
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdSetActive(true)
        basic.pause(500)
    }
    fwdMotors.pump.fwdSetActive(false)
    pumpStop = input.runningTime()
})
```


## Modify Step 5
We want our smart farming system to _automatically_ check the moisture levels _regularly_. Try moving this segment of code into a ``||basic:forever||`` loop from the ``||basic:Basic||`` category. Download the new code. <br>
Now move the bottom of the moisture sensor in and out of the water. What has changed? What happens when you press B?


~hint Tell me more!
- The sensor is now measuring moisture levels *constantly*. The pump should start *any time* the moisture is below 50%.
- Using a ``||basic:forever||`` loop breaks the pump timer, though. If you press B, you’ll only ever see ‘0’ on the LEDs. Why do you think this is happening?
- Can you think of another loop we could use instead of ``||basic:forever||`` that might not break the timer?
hint~


```blocks
let pumpStop = 0
let pumpStart = 0
// @highlight
basic.forever(function () {
    pumpStart = input.runningTime()
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdSetActive(true)
        basic.pause(500)
    }
    fwdMotors.pump.fwdSetActive(false)
    pumpStop = input.runningTime()
})
```


## Modify Step 6
Let's try moving the code into an ``||loops: every 500 ms||`` loop. Let's say we want to check the moisture every 2 minutes. How many milliseconds is that?

Try out your new code!

~hint Tell me more!
- Change '500 ms' to '120000 ms' to run the loop every 2 minutes.
hint~


```blocks
let pumpStop = 0
let pumpStart = 0
// @highlight
loops.everyInterval(120000, function () {
    pumpStart = input.runningTime()
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdSetActive(true)
        basic.pause(500)
    }
    fwdMotors.pump.fwdSetActive(false)
    pumpStop = input.runningTime()
})
```


