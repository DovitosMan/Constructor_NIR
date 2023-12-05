// все input
const peopleInput = document.querySelector ('#people-input')
const salaryInput = document.querySelector ('#salary-input')
const timeInput = document.querySelector ('#time-input')
const otherInput = document.querySelector ('#other-input')


// стоимость
const basePrice = document.querySelector('#base-price')
const totalPrice = document.querySelector('#total-price')


// расчет базовой стоимости без кэффов

function calculate () { 
    
    let basePriceElement = parseInt(peopleInput.value) * parseInt(salaryInput.value) * parseFloat(timeInput.value)
    const formatter = new Intl. NumberFormat('ru')
    basePrice.innerText = formatter.format(basePriceElement)
    console.log(basePriceElement)

}
   

//расчет стоимости с учетом накладных расходов без кэффов
function calculateTotal() {
    let totalPriceElement = parseInt(peopleInput.value) * parseInt(salaryInput.value) * parseInt(timeInput.value) + parseInt(otherInput.value) 
    const formatterTotal = new Intl. NumberFormat('ru')
    console.log(totalPriceElement)
    totalPrice.innerText = formatterTotal.format(totalPriceElement)

}


// запуск расчета 
const calcButton = document.querySelector('#calc-button')
calcButton.addEventListener('click', function () {
  calculate()
  calculateTotal()
 
})


//коэффы

const selectNew =  document.querySelector('#new')
// selectNew.onchange = function () {
//     console.log(selectNew.value)
// }
selectNew.onchange = parseFloat(selectNew.value)

const selectDifficult = document.querySelector('#difficult')
selectDifficult.onchange = parseFloat(selectDifficult.value)

const selectSpace = document.querySelector('#space')
selectSpace.onchange = parseFloat(selectSpace.value)


const selectSpecialists = document.querySelector('#specialists')
selectSpecialists.onchange = parseFloat(selectSpecialists.value)

const selectUnification = document.querySelector('#unification')
selectUnification.onchange = parseFloat(selectUnification.value)


const selectScience = document.querySelector('#science')
selectScience.onchange = parseFloat(selectScience.value)


// выбор вида НИР и вычисление Ктр
 
const selectNyr = document.querySelector('#nyr-select')

selectNyr.addEventListener ('change', function nyrSelect (){
let coefWork = parseFloat(selectNew.value) * parseFloat(selectDifficult.value) * parseFloat(selectSpace.value) * parseFloat(selectSpecialists.value) * parseFloat(selectUnification.value) * parseFloat(selectScience.value)
    
    if (this.value === 'expert-analyse' || this.value === 'expert-dev-structure'  ){
        selectNew.value = selectSpace.value = selectUnification.value = selectScience.value = 1
        selectNew.disabled = selectSpace.disabled =  selectUnification.disabled = selectScience.disabled =  true
        selectDifficult.disabled =  selectSpecialists.disabled = false
        console.log(coefWork)
        
        }
        
        else if (this.value === 'expert-dev-original' || this.value === 'expert-dev-educate'|| this.value === 'expert-dev-usable' || this.value === 'search-gave' ){
        selectSpace.value = selectUnification.value = selectScience.value = 1
        selectSpace.disabled =  selectUnification.disabled = selectScience.disabled =  true
        selectNew.disabled = selectDifficult.disabled = selectSpecialists.disabled= false
        console.log (coefWork)
    }
        else if (this.value === 'publish-electric' ){
        selectNew.value = selectSpecialists.value = selectUnification.value = selectScience.value = 1
        selectNew.disabled= selectSpecialists.disabled= selectUnification.disabled= selectScience.disabled = true
        selectSpace.disabled =  selectDifficult.disabled = false
        console.log (coefWork)
    }
        else if (this.value === 'search-nyr' ){
        selectSpace.value = selectUnification.value = 1
        selectSpace.disabled = selectUnification.disabled = true
        selectNew.disabled = selectDifficult.disabled = selectSpecialists.disabled = selectScience.disabled= false
        console.log (coefWork)
    }
        else if (this.value === 'computer-set' ){
        let coefWork = 1.1
        selectNew.disabled = selectDifficult.disabled = selectSpace.disabled = selectSpecialists.disabled = selectUnification.disabled= selectScience.disabled = true
        console.log(coefWork)
    }
        else if (this.value === 'control-electric-doc' ){
        let coefWork = 1
        selectNew.disabled = selectDifficult.disabled = selectSpace.disabled = selectSpecialists.disabled = selectUnification.disabled= selectScience.disabled = true
        console.log(coefWork)
    }
   
})


