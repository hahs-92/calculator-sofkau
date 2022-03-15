import { createArrayInt } from './utils.js'


export const add = (a, b) => a + b

export const subtract = (a, b) => a -b

export const multiply = (a, b) => {
    return createArrayInt(b)
        .reduce((c,n) => add(c,a),0)
}
