import { createArrayInt } from './utils.js'


export const add = (a, b) => a + b

export const subtract = (a, b) => a -b

export const multiply = (a, b) => {
    return createArrayInt(b)
        .reduce((c,n) => add(c,a),0)
}

/**
 * Division Entera
 * @param {number} num
 * @param {number} den
 * @returns {number}
 */
export const divide = (num, den) => {
    if(den === 0) return 0

    return createArrayInt(den)
        .reduce((acum, number) =>
            multiply(number, den) <= num ? acum +1 : acum )

}