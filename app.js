// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euroAmount) {
    const dollarAmount = euroAmount * oneEuroIs.USD;
    return dollarAmount;
}



function fromDollarToYen(dollarAmount) {
    const yenAmount = dollarAmount * oneEuroIs.JPY / oneEuroIs.USD;
    return yenAmount;
}

function fromYenToPound(yenAmount) {
    const poundAmount = yenAmount * oneEuroIs.GBP / oneEuroIs.JPY;
    return poundAmount;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}