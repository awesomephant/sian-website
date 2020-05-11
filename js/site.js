let dishes;

function gra(min, max) {
    return Math.random() * (max - min) + min;
}

function init() {
    const book = document.querySelector('.book')
    const rectos = document.querySelectorAll('.recto')
    const versos = document.querySelectorAll('.verso')
    const spreads = document.querySelectorAll('.spread')
    book.setAttribute('data-currentSpread', 5)

    rectos.forEach((d) => {
        d.addEventListener('click', function (e) {
            let p = book.getAttribute('data-currentSpread') * 1 + 1;
            if (p < spreads.length + 1){
                book.setAttribute('data-currentSpread', p)
            }
        })
    })
    versos.forEach((d) => {
        d.addEventListener('click', function (e) {
            let p = book.getAttribute('data-currentSpread') * 1 - 1;
            if (p > 0){
                book.setAttribute('data-currentSpread', p)
            }
        })
    })

}
window.addEventListener('DOMContentLoaded', function () {
    init()
})