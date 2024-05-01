document.querySelector('.hamburger-menu').addEventListener('click', function() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu.style.left === '0px') {
    mobileMenu.style.left = '-300px';
    document.querySelectorAll('.bar').forEach(bar => bar.classList.remove('change'));
  } else {
    mobileMenu.style.left = '0';
    document.querySelectorAll('.bar').forEach(bar => bar.classList.add('change'));
  }
});

var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}