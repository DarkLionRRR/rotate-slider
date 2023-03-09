'use strict'

class RotateSliderError extends Error {
    constructor(message) {
        super(message)
        this.name = 'RotateSliderError'
    }
}

export default RotateSliderError