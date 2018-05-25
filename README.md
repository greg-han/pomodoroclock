# Pomodoro Clock

Pretty much a glorified stopwatch. The counter will count down from your desired "pomodoro" and then count down from your desired break time. The idea is to use spaced repetition learning. You learn during the time you set, and take a break. Breaks are supposed to increase as you do more intervals.
It will loop until you press the refresh button which resets the entire timer.
Everything should resize itself correctly without shifting elements (even as the numbers grow), but this has been finicky.

Link to site: https://greg-han.github.io/pomodoroclock/
If the github page is down the project is viewable on codepen:
https://codepen.io/greg-han/pen/NMBgQj

## Features

* break: Sets the break interval (in minutes).
* time: Sets the time interval (in minutes).
* play-button: Starts the "pomodoro loop" until you press refresh.
* pause-button: Literally pauses the timer. Press play again to pick up where you left off.
* refresh-button: Resets everything. All data will be cleared, all loops will stop running, and you will need to input new interval lengths in order to start again.
