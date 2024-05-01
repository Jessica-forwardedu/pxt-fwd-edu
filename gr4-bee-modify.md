# Tracking Pollinators with a Bee Counter 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1:Build your Project @showdialog 
Welcome to the Bee Counter Project!  We are going to do this in 4 steps! 
1. Build your Project
2. Code your project
3. Modify your project 
4. Complete a small coding challenge



## Build Step 1 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bee-sbs1.png)

## Build Step 2 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs2.png)

## Build Step 3 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs3.png)

## Build Step 4 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs4.png)

## Build Step 5 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs5.png)

## Build Step 6 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs6.png)

## Build Step 7 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs7.png)

## Build Step 8 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs8.png)

## Build Step 9 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs9.png)

## Build Step 10 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs10.png)

## Build Step 11 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs11.png)

## Build Step 12 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs12.png)

## Build Step 13 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs13.png)

## Build Step 14 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs14.png)

## Build Step 15 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs15.png)

## Activity 2: Code your Project @showdialog
We need to connect our project to the computer to make it come to life with code! The code will be the instructions that tell our micro:bit what to do.

```template
let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})


```
## Code Step 1 @showdialog
 Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![breakout board](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp)

## Code Step 2 @showdialog
Click three dots beside the ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Code Step 3 
Next, click the ``|Download|`` button to download code to your project.

## Activity 3: Modify your Project @showdialog 
We are ready to modify our bee counter!

Follow the instructions at the top of the screen. When you are ready for more information, click 'Tell me more!'
After each change, you will need to download your updated code to your project.

## Modify Step 1 
In this project, we are tracking the number of bees that visit our flower - like a scientist!
We are going to use something called a ``||Variables:Variables||`` to track this number. In this program, our variable is named 'bugVisits'.

~hint Tell me More!
- In coding, we can store information using **Variables** 
- Think of a variable like your piggy bank.
- Money can go in and out, but you have to open it up to see the amount inside!
  hint~

## Modify Step 2 
Let's look at variables in action.


What number do you see on the micro:bit right now?
What do you think this number means?

~hint Tell me More!
    - The number we see on the micro:bit  is '0'. 
    - It is the number of bees that have visited our flower so far. 
    - We set this number to '0' by putting the set bugVisits to 0
      block inside the On Start event.
hint~

```blocks
let bugVisits = 0
```

## Modify Step 3 
Try changing the number inside the ``||variables:set bugVisits to 1||`` block to something between 1 and 5. What happens? 

~hint Tell me More! 
- The number we see on the Mirco:bit changes too.
 hint~

## Modify Step 4 
Let's press the touch sensor a couple of times. 


What do you see? 

~hint Tell me More!
- Our touch is like a bee landing on the sensor.
- Each time you press the touch sensor, the number shown on the micro:bit goes up by 1.
- This means our variable is changing by 1.
- We use a **conditional statements** in our code to make this work. 
hint~

```block
let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})

```

## Modify Step 5 
Conditional statements tell our micro:bit what to do when some condition is met. <br> We use conditional statements in our own lives. <br> For example, "If the bell rings at recess, then I line up to go inside!" <br> Can you find the conditional statement in our code?

```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
```

## Modify Step 6 

What happens when you increase the number in ``||Variables:change bugVisits by 1||``?  <br> Try changing it to '3' now, ``|download|`` the new code.  Then press the touch sensor.

~hint Tell me More 
- Now each time you press the touch sensor, the number on the micro:bit goes up by 3.
- This block changes the number in out variable.
- Remember the piggy bank? It's like when we add money to it!
  hint~

```blocks
let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 3
        basic.showNumber(bugVisits)
    }
})

```

# Activity 4: Challenge @showdialog 
Let's try and use the LED lights! Can you make the LED lights turn on each time a bee lands? 

## Challenge Step 1 
First, we need to control the LED lights. Go to ``||fwdSensors:Sensors||`` and drag  and drop ``||fwdSensors:set all ledRing LEDs to||`` block into the workspace.

~hint Tell me More 
- Just like a painter picks the right brush for a stroke, we need the right block to control our LED lights.
- This block is like the switch that turns on your room's light—it tells all the LEDs what to do at once!
hint~

```blocks
let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 3
        basic.showNumber(bugVisits)
    }
})
```

## Challenge Step 2 

Now, think about when you want these lights to turn on. After a bee lands, right? <br>Where should we put this block to make that happen?<br> Can you make the light turn green?<br> Use the lightbulb icon to check your work! 

~hint 
- Remember, the order in which we place our blocks is very important, just like the steps in a dance routine!
hint~

```blocks
let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        basic.showNumber(bugVisits)
    }
})
```



