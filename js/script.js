const menubar = document.querySelector('.menubar i');
const ul = document.querySelector('ul');

// menubar click function
menubar.addEventListener("click", () => {
    ul.classList.toggle('active')

})