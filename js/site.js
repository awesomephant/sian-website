let dishes;

let state = {
    recipeActive: true
}

function gra(min, max) {
    return Math.random() * (max - min) + min;
}

function handleDishClick() {
    let p = this.parentElement.querySelector('.dish-recipe');
    try {
        document.querySelector('.dish-recipe.active').classList.remove('active')
    } catch (e){

    }
    
    state.recipeActive = true;
    p.classList.add("active")
}

function handleCardClose() {
    document.querySelector('.card.active').classList.remove("active")
}

function init() {
    dishes = document.querySelectorAll('.dish-toggle')
    introToggle = document.querySelector('.intro-toggle')
    intro = document.querySelector('.site-intro')
    // dishes[0].parentNode.querySelector('.card').classList.add('active')
    let closeButttons = document.querySelectorAll('.card-close')
    closeButttons.forEach((b) => {
        b.addEventListener('click', handleCardClose)
    })
    dishes.forEach((d) => {
        d.addEventListener('click', handleDishClick)
        let x = gra(-20, 20)
        let y = gra(-20, 20)
        d.style.transform = `translateX(${x}%) translateY(${y}%)`

    })

    introToggle.addEventListener('click', () => {
        intro.classList.toggle('active')
    })
}
window.addEventListener('DOMContentLoaded', function () {
    init()
})