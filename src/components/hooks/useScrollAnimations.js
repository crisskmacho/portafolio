import { useEffect } from 'react';

function useScrollAnimations() {
  useEffect(() => {
    // toggle icon navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    const handleMenuIconClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuIconClick);

    //scroll sections
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 450;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
          });

          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      //sticky header
      let header = document.querySelector('header');

      header.classList.toggle('sticky', window.scrollY > 100);

      //remove toggle icon and navbar when click navbar links(scroll)
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');

      //animation footer on scroll
      let footer = document.querySelector('footer');

      footer.classList.toggle(
        'show-animate',
        this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuIcon.removeEventListener('click', handleMenuIconClick);
    };
  }, []);
}

export default useScrollAnimations;
