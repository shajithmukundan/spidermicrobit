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
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        motor.servo(motor.Servos.S1, 135)
        motor.servo(motor.Servos.S2, 45)
        motor.servo(motor.Servos.S3, 135)
        motor.servo(motor.Servos.S4, 45)
        basic.pause(100)
        motor.servo(motor.Servos.S1, 45)
        motor.servo(motor.Servos.S2, 135)
        motor.servo(motor.Servos.S3, 45)
        motor.servo(motor.Servos.S4, 135)
        basic.pause(100)
    }
})
function Sleep () {
    motor.servo(motor.Servos.S1, centre)
    motor.servo(motor.Servos.S2, centre)
    motor.servo(motor.Servos.S3, centre)
    motor.servo(motor.Servos.S4, centre)
    motor.servo(motor.Servos.S5, centre)
    motor.servo(motor.Servos.S6, centre)
    motor.servo(motor.Servos.S7, centre)
    motor.servo(motor.Servos.S8, centre)
}
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Stand()
    turn_right(10, 50)
    turn_left(10, 50)
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
let centre = 0
let liftFeet = 0
let zero = 0
centre = 90
let full = 180
basic.forever(function () {
	
})
