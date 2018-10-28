// Test asm containing valid syntax

:main
    call waitForKey
    call play
    jp main

:waitForKey
    // Wait for key 5 to be pressed
    ld v0, 5
    skp v0
    jp waitForKey
    ret

:play
    ld v1, 0xFF // 255
    ld dt, v1
    ld st, v1
    call wait
    ret

:wait
    ld v1, dt
    se v1, 0x00
    jp wait
    ret