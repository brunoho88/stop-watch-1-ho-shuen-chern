let START = 0
let Elapsed = 0
input.onButtonPressed(Button.A, function () {
    START = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    Elapsed = input.runningTime() - START
    basic.showNumber(Math.round(Elapsed / 1000))
})
