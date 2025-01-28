export let toSell = []

export const toSellOrNotToSell = (pottery) => {
    if(pottery.weight >= 6 && pottery.cracked == false) {
        pottery.price = 40
        toSell.push(pottery)
    }else if(pottery.weight < 6 && pottery.cracked == false){
        pottery.price = 20
        toSell.push(pottery)
    }
    return pottery
}

export const usePottery = () => {
    let toSellCopy = [...toSell]
    return toSellCopy
}