
// toggleMeny
let nav = document.querySelector('.navBox');
let burgerMenu = document.getElementById('burgerMenu');
let hemKnapp = document.getElementById('hemKnapp');
let skillsKnapp = document.getElementById('skillsKnapp');
let projectsKnapp = document.getElementById('projectsKnapp');
let contactKnapp = document.getElementById('contactKnapp');
let elements = [burgerMenu, hemKnapp, skillsKnapp, projectsKnapp, contactKnapp];

function showHide() {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

elements.forEach(element => {
    element.addEventListener('click', showHide);
});

// mailKnappar
function openMail() {
    var emailAddress = "mattef91@hotmail.com"; 
    window.location.href = "mailto:" + emailAddress;
}
