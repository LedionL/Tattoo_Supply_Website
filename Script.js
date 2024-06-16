new Glide('.glide', {
    type: 'carousel',
    startAt: 2,
    perView: 5,
    focusAt: 'center',
    breakpoints: {
        1200: {
            perView: 5 
        },
        992: {
            perView: 3 
        },
        768: {
            perView: 2 
        },
        576: {
            perView: 1 
        }
    }
}).mount();


    document.addEventListener('DOMContentLoaded', function () {
    const bullets = document.querySelectorAll('.glide__bullet');

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', function () {
            bullets.forEach(b => b.classList.remove('active'));

            this.classList.add('active');
        });
    });
});