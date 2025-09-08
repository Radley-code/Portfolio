// Mobile menu from html by using its id
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click', () => { //add event listener to the mobile menu
    const desktopMenu = document.getElementById('desktop-menu'); // gets the desktop menu
    // Swap class mames of mobile and desktop menus
    mobileMenu.classList.toggle('active');
    desktopMenu.classList.toggle('active');
});

