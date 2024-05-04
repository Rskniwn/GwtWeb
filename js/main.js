window.ScrollOut({
    scrollingElement: ".section-container",
    targets: "h1,h4,span,.leftlantern,div"
});

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });


window.ScrollOut({
    scrollingElement: ".section-container",
    onShown: function(el) {
        el.classList.add('animate__slow', 'animate__delay');

        animateCSS('.leftlantern', 'swing');
    },
    targets: ".leftlantern"
});

window.ScrollOut({
    scrollingElement: ".section-container",
    onShown: function(el) {
        el.classList.add('animate__slow', 'animate__delay');

        animateCSS('.rightlantern', 'rightswing');
    },
    targets: ".rightlantern"
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});