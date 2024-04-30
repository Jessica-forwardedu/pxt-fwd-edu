# Tracking Pollinators with a Bee Counter 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1:Build your Project @showdialog 
Welcome to the Bee Counter Project!  We are going to do this in 4 steps 
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
We are ready to modify our bee counter! Follow the instructions at the top of the screen. When you are ready for more information, click 'Tell me more!'

After each change, you will need to download your updated code to your project.

## Modify Step 1 
In this project, we are tracking the number of bees that visit our flower - like a scientist!
We are going to use something called a ``||Variables:Variables||`` to track this number. In this program, our variable is named 'bugVisits'.

~hint Tell me More!
- In coding, we can store information using Variables
- think of a variable like your piggy bank. Money can go in and out, but you have to open it up to see the amount inside!
  hint~

## Modify Step 2 
Let's look at variables in action.
What number do you see on the micro:bit right now? What do you think this number means?

~hint Tell me More!
    - The number we see on the micro:bit  is '0'. It is the number of bees that have visited our flower so far. We set this number to '0' by putting the ||variables:set bugVisits to 0|| block inside the ``||basic:on start||`` event.
hint~

```blocks
let bugVisits = 0
```

## Modify Step 3 
Try changing the number inside the ``||variables:set bugVisits to 0||`` block to something between 1 and 5. What happens? 

~hint Tell me More! 
- The number we see on the Mirco:bit changes too.
 hint~

## Modify Step 4 
Let's press the touch sensor a couple of times. What do you see? 
~hint 
- Our touch is like a bee landing on the sensor. Each time you press the touch sensor, the number shown on the micro:bit goes up by 1. \This means our variable is changing by 1.
- We use a conditional statements in our code to make this work. 

```block
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
```



