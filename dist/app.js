window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');
    var currentSectionId = '';
    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSectionId = section.getAttribute('id') || '';
        }
    });
    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === "#".concat(currentSectionId)) {
            link.classList.add('active');
        }
    });
});
