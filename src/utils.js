export const createArrayInt = (n) => {
    let arr = []

    for (let index = 0; index < n; index++) {
        arr = arr.concat(index)
    }

    return arr
}
