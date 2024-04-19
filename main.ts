Andee.WidgetEvent(WidgetId.Widget_5, function () {
    turn_right(Andee.getSlider(), 100)
})
function Stand () {
    motor.servo(motor.Servos.S1, 90)
    motor.servo(motor.Servos.S2, 90)
    motor.servo(motor.Servos.S3, 90)
    motor.servo(motor.Servos.S4, 90)
    motor.servo(motor.Servos.S5, 180)
    motor.servo(motor.Servos.S6, 0)
    motor.servo(motor.Servos.S7, 190)
    motor.servo(motor.Servos.S8, 0)
}
function turn_right (times: number, speed: number) {
    for (let index = 0; index < times; index++) {
        motor.servo(motor.Servos.S5, 160)
        basic.pause(speed)
        motor.servo(motor.Servos.S1, 135)
        basic.pause(speed)
        motor.servo(motor.Servos.S5, 180)
        basic.pause(speed)
        motor.servo(motor.Servos.S7, 160)
        basic.pause(speed)
        motor.servo(motor.Servos.S3, 135)
        basic.pause(speed)
        motor.servo(motor.Servos.S7, 180)
        basic.pause(speed)
        motor.servo(motor.Servos.S6, 20)
        basic.pause(speed)
        motor.servo(motor.Servos.S2, 135)
        basic.pause(speed)
        motor.servo(motor.Servos.S6, 0)
        basic.pause(speed)
        motor.servo(motor.Servos.S8, 20)
        basic.pause(speed)
        motor.servo(motor.Servos.S4, 135)
        basic.pause(speed)
        motor.servo(motor.Servos.S8, 0)
        basic.pause(speed)
        motor.servo(motor.Servos.S1, 90)
        motor.servo(motor.Servos.S2, 90)
        motor.servo(motor.Servos.S3, 90)
        motor.servo(motor.Servos.S4, 90)
    }
}
function Sleep () {
    full = 180
    zero = 0
    motor.servo(motor.Servos.S1, 90)
    motor.servo(motor.Servos.S2, 90)
    motor.servo(motor.Servos.S3, 90)
    motor.servo(motor.Servos.S4, 90)
    motor.servo(motor.Servos.S5, 180)
    motor.servo(motor.Servos.S6, 0)
    motor.servo(motor.Servos.S7, 180)
    motor.servo(motor.Servos.S8, 0)
    basic.pause(1000)
    for (let index = 0; index < 12; index++) {
        full = full - 5
        zero = zero + 5
        basic.pause(100)
        motor.servo(motor.Servos.S5, full)
        motor.servo(motor.Servos.S6, zero)
        motor.servo(motor.Servos.S7, full)
        motor.servo(motor.Servos.S8, zero)
    }
}
Andee.WidgetEvent(WidgetId.Widget_4, function () {
    turn_left(Andee.getSlider(), 100)
})
Andee.WidgetEvent(WidgetId.Widget_1, function () {
    Stand()
})
Andee.WidgetEvent(WidgetId.Widget_3, function () {
    wakeUp()
})
function wakeUp () {
    for (let index = 0; index < 4; index++) {
        motor.servo(motor.Servos.S1, 45)
        motor.servo(motor.Servos.S2, 135)
        motor.servo(motor.Servos.S3, 45)
        motor.servo(motor.Servos.S4, 135)
        basic.pause(200)
        motor.servo(motor.Servos.S1, 135)
        motor.servo(motor.Servos.S2, 45)
        motor.servo(motor.Servos.S3, 135)
        motor.servo(motor.Servos.S4, 45)
        basic.pause(200)
    }
    degree_steps = 5
    leftUp = 90
    rightUp = 90
    for (let index = 0; index < 15; index++) {
        rightUp = rightUp + degree_steps
        leftUp = leftUp - degree_steps
        motor.servo(motor.Servos.S5, rightUp)
        motor.servo(motor.Servos.S8, leftUp)
        basic.pause(100)
    }
    rightUp = 90
    leftUp = 90
    for (let index = 0; index < 15; index++) {
        rightUp = rightUp + degree_steps
        leftUp = leftUp - degree_steps
        motor.servo(motor.Servos.S6, leftUp - degree_steps)
        motor.servo(motor.Servos.S7, rightUp + degree_steps)
        basic.pause(100)
    }
}
Andee.WidgetEvent(WidgetId.Widget_2, function () {
    Sleep()
})
function turn_left (times: number, speed: number) {
    for (let index = 0; index < times; index++) {
        motor.servo(motor.Servos.S5, 160)
        basic.pause(speed)
        motor.servo(motor.Servos.S1, 45)
        basic.pause(speed)
        motor.servo(motor.Servos.S5, 180)
        basic.pause(speed)
        motor.servo(motor.Servos.S7, 160)
        basic.pause(speed)
        motor.servo(motor.Servos.S3, 45)
        basic.pause(speed)
        motor.servo(motor.Servos.S7, 180)
        basic.pause(speed)
        motor.servo(motor.Servos.S6, 20)
        basic.pause(speed)
        motor.servo(motor.Servos.S2, 45)
        basic.pause(speed)
        motor.servo(motor.Servos.S6, 0)
        basic.pause(speed)
        motor.servo(motor.Servos.S8, 20)
        basic.pause(speed)
        motor.servo(motor.Servos.S4, 45)
        basic.pause(speed)
        motor.servo(motor.Servos.S8, 0)
        basic.pause(speed)
        motor.servo(motor.Servos.S1, 90)
        motor.servo(motor.Servos.S2, 90)
        motor.servo(motor.Servos.S3, 90)
        motor.servo(motor.Servos.S4, 90)
    }
}
let rightUp = 0
let leftUp = 0
let degree_steps = 0
let full = 0
let zero = 0
Andee.begin()
let liftFeet = 0
zero = 0
let centre = 90
full = 180
let AndeeButton_Stand = Andee.createWidget(
WidgetId.Widget_1,
WidgetType.Button,
WidgetPosition.Row0_Column0,
WidgetLength.Half,
WidgetColour.Green,
"Stand",
"stand",
"stand"
)
let AndeeButton_Sleep = Andee.createWidget(
WidgetId.Widget_2,
WidgetType.Button,
WidgetPosition.Row0_Column2,
WidgetLength.Half,
WidgetColour.Red,
"Sleep",
"sleep",
"sleep"
)
let AndeeButton_Wakeup = Andee.createWidget(
WidgetId.Widget_3,
WidgetType.Button,
WidgetPosition.Row1_Column1,
WidgetLength.Half,
WidgetColour.Dark_Yellow,
"Wakeup",
"up",
"up"
)
let AndeeButton_Left = Andee.createSliderWidget(
WidgetId.Widget_4,
WidgetTypeInput.Slider,
WidgetPosition.Row2_Column0,
WidgetLength.Half,
WidgetColour.Red,
"Left",
"left",
"0",
100,
0,
100
)
let AndeeButton_Right = Andee.createSliderWidget(
WidgetId.Widget_5,
WidgetTypeInput.Slider,
WidgetPosition.Row2_Column2,
WidgetLength.Half,
WidgetColour.Dark_Magenta,
"Right",
"right",
"0",
100,
0,
100
)
basic.forever(function () {
    AndeeButton_Sleep.update()
    AndeeButton_Stand.update()
    AndeeButton_Wakeup.update()
    AndeeButton_Left.update()
    AndeeButton_Right.update()
})
