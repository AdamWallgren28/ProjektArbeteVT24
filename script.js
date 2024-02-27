
// toggleMeny
let nav = document.querySelector('.navBox');
let burgerMenu = document.getElementById('burgerMenu');
let burgerIcon = document.querySelector('.burgarMeny');
let hemKnapp = document.getElementById('hemKnapp');
let skillsKnapp = document.getElementById('skillsKnapp');
let projectsKnapp = document.getElementById('projectsKnapp');
let contactKnapp = document.getElementById('contactKnapp');
// samlar knappar
let elements = [burgerMenu, hemKnapp, skillsKnapp, projectsKnapp, contactKnapp];

function showHide() {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
        burgerIcon.innerHTML = 'X';
    } else {
        nav.style.display = 'none';
        burgerIcon.innerHTML = '&#9776;';
        
    }
}
// ittererar över samlade knappar
elements.forEach(element => {
    element.addEventListener('click', showHide);
});

// mailKnappar
function openMail() {
    var emailAddress = "mattef91@hotmail.com"; 
    window.location.href = "mailto:" + emailAddress;
}


