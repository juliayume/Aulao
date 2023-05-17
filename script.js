// Importação da biblioteca lodash
const throttle = _.throttle 

const players = 
    Array.from(document.querySelectorAll('.js-animate-on-screen'));

function isOnScreen(el) {
    let rect = el.getBoundingClientRect() 
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

function playAnimation(el) {
    if(isOnScreen(el)) el.style.animationPlayState = 'running';
}

// Executa apenas uma vez a cada 150ms
const render = throttle(() => players.forEach(playAnimation), 150);

// Exibe os elementos que já estão na tela antes do primeiro scroll
render();

window.addEventListener('scroll', render);

const btnScrollToTop = document.getElementById("btnscrollToTop");

btnScrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})