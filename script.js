const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener("click", wrapperHandler);

function wrapperHandler(e) {
    if (e.target.closest("a") && !e.target.closest(".header__scroll")) {
        e.preventDefault();
    }
}