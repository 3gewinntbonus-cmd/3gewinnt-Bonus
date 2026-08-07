let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 80) {
        header.classList.add('hide-header');
    } else {
        header.classList.remove('hide-header');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
