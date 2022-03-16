export const add = (a, b) => a + b

export const subtract = (a, b) => a -b

export const multiply = (a, b) => {
    return new Array(b)
        .fill(a)
        .reduce((c,n) => add(c,n), 0)
}

/**
 * Division Entera
 * @param {number} num
 * @param {number} den
 * @returns {number}
 */
export const divide = (num, den) => {
    if(den === 0) return 0

    return new Array(den)
        .fill(den)
        .reduce((acum, number) =>
            multiply(acum, number) < num - 1  ? acum + 1 : acum,0)
}
