window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSectionId = section.getAttribute('id') || '';
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});
document.querySelectorAll('nav ul li a').forEach((anchor: HTMLAnchorElement) => {
    anchor.addEventListener('click', function (e: MouseEvent) {
        e.preventDefault();

        const targetId = (this as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Ajuste conforme a altura do cabeçalho
                behavior: 'smooth'
            });
        }
    });
});
