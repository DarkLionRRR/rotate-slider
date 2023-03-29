'use strict'

import RotateSlider from "./plugins/rotate-slider"

document.addEventListener('DOMContentLoaded', () => {
    try {
        // плашки с текстом
        const sliderOptions = {
            startSlide: 2,
            scroll: false,
        }

        if (document.documentElement.clientWidth < 575)
            sliderOptions.effect = 'fade'

        const slider = new RotateSlider('#rotateSlide', sliderOptions)

        // кружки
        const circleOptions = {
            startSlide: 2,
            thumb: slider,
            scroll: false,
        }

        if (document.documentElement.clientWidth < 575)
            circleOptions.direction = 'horizontal'

        const circleSlider = new RotateSlider('#rotateCircle', circleOptions)

        // даты
        const dateOptions = {
            startSlide: 2,
            thumb: circleSlider,
            scroll: false,
        }

        if (document.documentElement.clientWidth < 575)
            dateOptions.direction = 'horizontal'

        const dateSlider = new RotateSlider('#rotateDate', dateOptions)
    } catch (e) {
        console.error(e)
    }
})