const currencyElOne = document.querySelector('#currency-one')
const currencyElTwo = document.querySelector('#currency-two')
const amountElOne = document.querySelector('#amount-one')
const amountElTwo = document.querySelector('#amount-two')

const rateEl = document.querySelector('#rate')
const swap = document.querySelector('#swap')



//Fetch rates and make updates
function calculate() {
    const currencyOne = currencyElOne.value
    const currencyTwo = currencyElTwo.value
    fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.rates[currencyTwo])
            const rate = data.rates[currencyTwo]
            rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`

            amountElTwo.value = (amountElOne.value * rate).toFixed(2)
        })
}

//Event listeners
currencyElOne.addEventListener('change', calculate)
currencyElTwo.addEventListener('change', calculate)
amountElOne.addEventListener('input', calculate)
amountElTwo.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    const temp = currencyElOne.value
    currencyElOne.value = currencyElTwo.value
    currencyElTwo.value = temp
    calculate()
})

calculate()