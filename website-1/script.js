const sidebar  = document.querySelector('.sidebar');
const fries = document.querySelector('.fries');
const drink = document.querySelector('.drink');
const burger = document.querySelector('.burger');
const heading = document.querySelector('.heading');
 

function openSidebar() {
    sidebar.style.display = "flex";
}
function hideSidebar() {
    sidebar.style.display = "none";
}

document.addEventListener('scroll', () => {
    let value = scrollY;

    if (value < 240) {
        heading.style.top = (value + 40) * 2 + 'px'  
    } 
    if (value < 100) {
        fries.style.left = (value + 350) * 1.1 + 'px';
        burger.style.left = (value + 250) * 2 + 'px';
        drink.style.right = (value + 250) * 1.5 + 'px';
    } else {
        value = 100;
    }
   console.log(value)
})