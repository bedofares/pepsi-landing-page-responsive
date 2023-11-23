function imgSlider(img) {
  document.querySelector(".pepsi").src = img;
}

function changeBgColor(Color) {
  const sec = (document.querySelector(".sec").style.backgroundColor = Color);
}

/* Menu Responsive */
function menuToggle() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
