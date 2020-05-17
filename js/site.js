let dishes;
let mousePos = {
    x: 0,
    y: 0,
}
let cursor = {
    width: {
        target:  20,
        current: 20
    },
    height: {
        target:  20,
        current: 20
    },
    textOpacity: {
        target: 0,
        current: 0
    },
    default: {
        r: 20
    }
}
let cursorText = '';

function gra(min, max) {
    return Math.random() * (max - min) + min;
}

function animate() {
    requestAnimationFrame(animate);
    drawCursor(mousePos)
};

function drawCursor(mouse) {
    cursor.width.current += (cursor.width.target - cursor.width.current) * .2;
    cursor.height.current += (cursor.height.target - cursor.height.current) * .2;
    cursor.textOpacity.current += (cursor.textOpacity.target - cursor.textOpacity.current) * .15;

    cursorCtx.clearRect(0, 0, cursorCtx.canvas.width, cursorCtx.canvas.height)

    let x = mouse.x - cursor.width.current / 2;
    let y = mouse.y - cursor.height.current / 2;
    cursorCtx.fillStyle = '#f36cff';
    cursorCtx.roundRect(x, y, cursor.width.current, cursor.height.current, 12)
    cursorCtx.fill()

    cursorCtx.fillStyle = `rgba(0,0,0,${cursor.textOpacity.current})`;
    cursorCtx.fillText(cursorText, x + 5, y + 5 + cursor.height.current / 2)
}

function initCursor() {
    cursorCanvas = document.querySelector('#cursor')
    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;

    cursorCtx = cursorCanvas.getContext('2d')
    cursorCtx.font = '500 18px Work Sans, sans-serif'
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
    }

    let links = document.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function () {
            cursor.height.target = 20;
            let href = this.getAttribute('href');
            if (href.includes('instagram')) {
                cursorText = 'Instagram'
            } else {
                cursorText = href.replace(/(https?:\/\/|www\.|\/$)/g, '')
            }
            cursor.width.target = cursorCtx.measureText(cursorText).width + 10;
            window.setTimeout(function () {
                cursor.textOpacity.target = 1;
            }, 70)

        })
        links[i].addEventListener('mouseout', function () {
            cursor.width.target  = cursor.default.r;
            cursor.height.target = cursor.default.r;
            cursor.textOpacity.target = 0;
            cursorText = ''
        })
    }
}

function init() {
    const book = document.querySelector('.book')
    const rectos = document.querySelectorAll('.recto')
    const versos = document.querySelectorAll('.verso')
    const spreads = document.querySelectorAll('.spread')
    //    book.setAttribute('data-currentSpread', 8)

    rectos.forEach((d) => {
        d.addEventListener('mouseover', function () {
            cursorText = 'next'
            cursor.width.target = cursorCtx.measureText(cursorText).width + 15;
            window.setTimeout(function () {
                cursor.textOpacity.target = 1;
            }, 70)
        })
        d.addEventListener('mouseout', function () {
            cursorText = ''
            cursor.width.target = cursor.default.r;
            window.setTimeout(function () {
                cursor.textOpacity.target = 0;
            }, 70)
        })
        d.addEventListener('click', function (e) {
            let p = book.getAttribute('data-currentSpread') * 1 + 1;
            if (p < spreads.length + 1) {
                book.setAttribute('data-currentSpread', p)
            }
        })
    })

    versos.forEach((d) => {
        d.addEventListener('mouseover', function () {
            cursorText = 'previous'
            cursor.width.target = cursorCtx.measureText(cursorText).width + 10;
            window.setTimeout(function () {
                cursor.textOpacity.target = 1;
            }, 70)
        })
        d.addEventListener('mouseout', function () {
            cursorText = ''
            cursor.width.target = cursor.default.r;
            window.setTimeout(function () {
                cursor.textOpacity.target = 0;
            }, 70)
        })
        d.addEventListener('click', function (e) {
            let p = book.getAttribute('data-currentSpread') * 1 - 1;
            if (p > 0) {
                book.setAttribute('data-currentSpread', p)
            }
        })
    })

}
window.addEventListener('DOMContentLoaded', function () {
    init()
    initCursor()
    animate()
    window.addEventListener('resize', e => {
        initCursor()
    })
    window.addEventListener('mousemove', e => {
        mousePos = {
            x: e.clientX,
            y: e.clientY,
        }
    })
})