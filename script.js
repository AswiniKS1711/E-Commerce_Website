const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}




// Project by Aswini Kumar Sahoo
// aks.aswini1999@gmail.com
// Linkedin : https://www.linkedin.com/in/aswini-kumar-sahoo-75a9421a0/
// Basic UI of an E-commerce websiteS
