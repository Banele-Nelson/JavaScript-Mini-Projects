const burger = document.querySelector('.burger');
const fries = document.querySelector('.fries');
const drink = document.querySelector('.drink');
const heading = document.querySelector('.heading');


window.addEventListener('scroll', () => {
    let valueY = window.scrollY;

    if (valueY < 100) {
        heading.style.marginTop = valueY * 1.5 + "px";
        fries.style.left = (valueY + 500) * 1.1 + "px"
        drink.style.right = (valueY + 100) * 2.5 + "px"

    } else {
        valueY = 100;
    }

})