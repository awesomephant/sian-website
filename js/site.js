let dishes;

let state = {
    recipeActive: true
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
        console.log(closeButtton)
        closeButtton.addEventListener('click', handleRecipeClose)
    })
}
window.addEventListener('DOMContentLoaded', function () {
    init()
})