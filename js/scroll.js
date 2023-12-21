function scroll() {
  let lastScrollPosition = 0;
  let viewportWidth = window.innerWidth;

  var isTouchDevice = function() {  return 'ontouchstart' in window || 'onmsgesturechange' in window; };
  var isDesktop = window.screenX != 0 && !isTouchDevice() ? true : false;
  console.log(isDesktop);

  const navbar = document.querySelector('.navbar');

  const biography = document.querySelector('.bio-icon');
  const education = document.querySelector('.edu-icon');
  const portfolio = document.querySelector('.port-icon');
  const work = document.querySelector('.work-icon');
  const contact = document.querySelector('.contact-icon');

  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    if (isDesktop == true) {
      if (lastScrollPosition > 750)
        navbar.classList.add('navbar-dark');
      else
        navbar.classList.remove('navbar-dark');

      if (lastScrollPosition < 450)
        biography.classList.add('grow');
      else
        biography.classList.remove('grow');

      if (lastScrollPosition > 250 & lastScrollPosition < 890)
        education.classList.add('grow');
      else
        education.classList.remove('grow');

      if (lastScrollPosition > 890 & lastScrollPosition < 1480)
        portfolio.classList.add('grow');
      else
        portfolio.classList.remove('grow');

      if (lastScrollPosition > 1620 & lastScrollPosition < 2250)
        work.classList.add('grow');
      else
        work.classList.remove('grow');

        
      if (lastScrollPosition > 2520)
        contact.classList.add('grow');
      else
        contact.classList.remove('grow');
    }
    else {
        if (lastScrollPosition > 750)
          navbar.classList.add('navbar-dark');
        else
          navbar.classList.remove('navbar-dark');
    }
  });
}

