let idCount = 1

export const makePottery = (s, w, h) => {
    return {
        shape: s,
        weight: w,
        height: h,
        //idCount increments after the id is stored
        id: idCount++
    }
}