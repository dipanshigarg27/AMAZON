const slider = document.querySelector(".slider");

document.querySelector(".left-btn").onclick = function () {
    slider.scrollBy(-480, 0);
};

document.querySelector(".right-btn").onclick = function () {
    slider.scrollBy(480, 0);
};