let dishes;

let state = {
    recipeActive: true
}

function gra(min, max) {
    return Math.random() * (max - min) + min;
}

function handleDishClick() {
    let p = this.parentElement;
    dishes.forEach((d) => {
        d.parentNode.classList.remove('active')
    })
    state.recipeActive = true;
    p.classList.add("active")
}

function handleRecipeClose() {
    let p = this.parentElement.parentElement;
    state.recipeActive = false;
    p.classList.remove("active")
}

function init() {
   dishes = document.querySelectorAll('.dish-toggle')
//    dishes[0].parentNode.classList.add('active')
    dishes.forEach((d) => {
        d.addEventListener('click', handleDishClick)
        let closeButtton = d.parentElement.querySelector('.recipe-close')
        closeButtton.addEventListener('click', handleRecipeClose)

        let x = gra(-100, 100)
        let y = gra(-100, 100)
        d.style.transform = `translateX(${x}px) translateY(${y}px)`

    })
}
window.addEventListener('DOMContentLoaded', function () {
    init()
})