let nav;
let navOpen = false;
let navWidth = 0;

function toggleMenu() {
  navOpen = !navOpen;
  console.log('holy-grail.js toggleMenu: navOpen =', navOpen);
  nav.style.left = navOpen ? 0 : '-' + navWidth;
  console.log('holy-grail.js toggleMenu: nav.style.left =', nav.style.left);
}

window.onload = () => {
  nav = document.querySelector('nav');
  navWidth = getComputedStyle(nav).getPropertyValue('--nav-width').trim();
  console.log('holy-grail.js x: navWidth = "' + navWidth + '"');

  // The nav starts out hidden in mobile view.
  nav.style.left = `-${navWidth}`;
  console.log('holy-grail.js toggleMenu: nav.style.left =', nav.style.left);

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
};
