let time = 0
input.onLoudSound(() => {
    light.photonFlip()
    light.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        music.playTone(262, 300)
        pause(700)
        light.photonForward(1)
    }
    for (let i = 0; i < 3; i++) {
        music.playTone(523, 100)
        pause(100)
        music.playTone(523, 100)
        light.showAnimation(light.sparkleAnimation, 700)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.photonForward(1)
        time += 1
    }
})
time = 1
light.photonForward(0)
