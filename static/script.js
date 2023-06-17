function changeColor() {
    let para = document.getElementById('colorParagraph');
    para.style.color = 'blue';
}

document.getElementById('nav-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
});
