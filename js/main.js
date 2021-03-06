window.onload = function() {
  //Select DOM Items
  const pageStatus = document.querySelector('.status');
  const pageTitle = document.querySelector('title');

  const headingsLg = document.querySelectorAll('.lg-heaading');

  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
  const menuBranding = document.querySelector('.menu-branding');
  const navItems = document.querySelectorAll('.nav-item');

  //Set Initial State Of Menu

  let showMenu = false;
  // animateHeadings();

  menuBtn.addEventListener('click', toggleMenu);
  if (pageStatus.dataset.status === 'false')  {
    alert(`Please note that the ${pageTitle.innerHTML} page is still under construction`);
  }

  // function animateHeadings() {
  //   headingsLg.forEach(heading => heading.classList.add("animated", "slideInLeft"));
  // }

  function toggleMenu() {
    if (!showMenu) { 
      //if showMenu =false and the button is clicked, then you need to show the things
      menuBtn.classList.add('close')
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(navItem => navItem.classList.add('show'));

      //Set Menu State
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));

      showMenu = false;
    }
  }
}

