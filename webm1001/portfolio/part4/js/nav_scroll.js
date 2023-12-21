function scroll() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');

  const biography = document.querySelector('.bio-icon');
  const education = document.querySelector('.edu-icon');
  const portfolio = document.querySelector('.port-icon');
  const work = document.querySelector('.work-icon');
  const contact = document.querySelector('.contact-icon');

  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 750)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');

    if (lastScrollPosition < 450)
      biography.classList.add('grow');
    else
      biography.classList.remove('grow');

    if (lastScrollPosition > 250 & lastScrollPosition < 810)
      education.classList.add('grow');
    else
      education.classList.remove('grow');
  });
}