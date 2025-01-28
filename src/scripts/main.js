// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel

let mug = makePottery("Mug", 2, 4)
let saucer = makePottery("Saucer", 5, 1)
let cup = makePottery("Cup", 7, 6)
let plate = makePottery("Plate", 10, 1)
let bowl = makePottery("Bowl", 9, 2)


// Fire each piece of pottery in the kiln
debugger
mug = firePottery(mug, 2300)
saucer = firePottery(saucer, 2000)
cup = firePottery(cup, 1800)
plate = firePottery(plate, 2500)
bowl = firePottery(bowl, 2200)  


// Determine which ones should be sold, and their price

toSellOrNotToSell(mug)
toSellOrNotToSell(saucer)
toSellOrNotToSell(cup)
toSellOrNotToSell(plate)
toSellOrNotToSell(bowl)

let printList = PotteryList()

// Invoke the component function that renders the HTML list
const renderHTML = (html) =>{
    const list = document.getElementById("potteryListId")
    if(list){
        list.innerHTML = html
    }else{
        console.log('Could not find element with id "PotteryListId')
    }
}

renderHTML(printList)
