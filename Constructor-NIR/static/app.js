// все input
const peopleInput = document.querySelector ('#people-input')
const salaryInput = document.querySelector ('#salary-input')
const timeInput = document.querySelector ('#time-input')
const otherInput = document.querySelector ('#other-input')


// стоимость
const basePrice = document.querySelector('#base-price')
const totalPrice = document.querySelector('#total-price')

//коэффы

const selectNew =  document.querySelector('#new')
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

selectNyr.addEventListener ('change', function (){

    if (this.value === 'expert-analyse' || this.value === 'expert-dev-structure'  ){
        selectNew.value = selectSpace.value = selectUnification.value = selectScience.value = 1
        selectNew.disabled = selectSpace.disabled =  selectUnification.disabled = selectScience.disabled =  true
        selectDifficult.disabled =  selectSpecialists.disabled = false
        }
        
        else if (this.value === 'expert-dev-original' || this.value === 'expert-dev-educate'|| this.value === 'expert-dev-usable' || this.value === 'search-gave' ){
        selectSpace.value = selectUnification.value = selectScience.value = 1
        selectSpace.disabled =  selectUnification.disabled = selectScience.disabled =  true
        selectNew.disabled = selectDifficult.disabled = selectSpecialists.disabled= false
        
    }
        else if (this.value === 'publish-electric' ){
        selectNew.value = selectSpecialists.value = selectUnification.value = selectScience.value = 1
        selectNew.disabled= selectSpecialists.disabled= selectUnification.disabled= selectScience.disabled = true
        selectSpace.disabled =  selectDifficult.disabled = false
        
    }
        else if (this.value === 'search-nyr' ){
        selectSpace.value = selectUnification.value = 1
        selectSpace.disabled = selectUnification.disabled = true
        selectNew.disabled = selectDifficult.disabled = selectSpecialists.disabled = selectScience.disabled= false
        
    }
        else if (this.value === 'computer-set' ){
        selectNew.disabled = selectDifficult.disabled = selectSpace.disabled = selectSpecialists.disabled = selectUnification.disabled= selectScience.disabled = true
        selectDifficult.value = selectSpace.value = selectSpecialists.value = selectUnification.value = selectScience.value = 1
        selectNew.value = 1.1
    }
        else if (this.value === 'control-electric-doc' ){
        selectNew.disabled = selectDifficult.disabled = selectSpace.disabled = selectSpecialists.disabled = selectUnification.disabled= selectScience.disabled = true
        selectNew.value = selectDifficult.value = selectSpace.value = selectSpecialists.value = selectUnification.value = selectScience.value = 1
    }
   
})

//расчет стоимости
function calculate () { 
    
    let coefWork = parseFloat(selectNew.value) * parseFloat(selectDifficult.value) * parseFloat(selectSpace.value) * parseFloat(selectSpecialists.value) * parseFloat(selectUnification.value) * parseFloat(selectScience.value)
    
    let basePriceElement = parseInt(peopleInput.value) * parseInt(salaryInput.value) * parseFloat(timeInput.value) * coefWork
    const formatter = new Intl. NumberFormat('ru')
    basePrice.innerText = `${formatter.format(basePriceElement)} ₽` 

    let totalPriceElement = basePriceElement + parseInt(otherInput.value) 
    const formatterTotal = new Intl. NumberFormat('ru')
    totalPrice.innerText = `${formatterTotal.format(totalPriceElement)} ₽`
   
   
}

// запуск расчета
const calcButton = document.querySelector('#calc-button')
calcButton.addEventListener('click', function () {
  calculate()
})