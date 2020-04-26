let nav;
let navOpen = false;
let navWidth = 0;

function toggleMenu() {
  navOpen = !navOpen;
  nav.style.left = navOpen ? 0 : '-' + navWidth + 'px';
  nav;
}

window.onload = () => {
  nav = document.querySelector('nav');
  navWidth = nav.getBoundingClientRect().width;
  // Set a CSS variable so the nav width is available in holy-grail.css.
  nav.style.setProperty('--width', navWidth);

  // Maybe the nav start out hidden in mobile view.
  nav.style.left = `-${navWidth}px`;

  let selectedAnchor;

  const anchors = nav.querySelectorAll('a');
  Array.from(anchors).forEach(anchor => {
    anchor.addEventListener('click', () => {
      // If there was a previously selected anchor, unselect it.
      if (selectedAnchor) selectedAnchor.classList.toggle('selected');

      // Select the new anchor.
      anchor.classList.toggle('selected');
      selectedAnchor = anchor;

      // Close the nav in mobile view.
      toggleMenu();
    });
  });

  // Safari hack
  const {userAgent} = navigator;
  const isSafari =
    userAgent.includes('Safari/') &&
    !userAgent.includes('Chrome/') &&
    !userAgent.includes('Chromium/');
  console.log('holy-grail.js: isSafari =', isSafari);
  if (isSafari) {
    // Set nav CSS property max-height so nav scrolling works.
    header = document.querySelector('header');
    headerHeight = Math.ceil(header.getBoundingClientRect().height) + 'px';
    footer = document.querySelector('footer');
    footerHeight = Math.ceil(footer.getBoundingClientRect().height) + 'px';
    const fudge = '24px';
    nav.style.maxHeight = `calc(100vh - ${headerHeight} - ${footerHeight} - ${fudge})`;
    console.log('holy-grail.js: nav.style.maxHeight =', nav.style.maxHeight);
  }
};
