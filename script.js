document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => section.style.display = 'none');
            targetSection.style.display = 'block';
        });
    });

    // Display the home section by default
    document.getElementById('home').style.display = 'block';
});
