const hamburger_menu = document.querySelector('.hamburger-menu');
const small_screen_nav = document.querySelector('.small-screen-nav');

hamburger_menu.addEventListener('click', function() {
  small_screen_nav.classList.toggle('active');
})

const scrollDownTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}