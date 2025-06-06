document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("on__top");

  // Показывать кнопку при прокрутке более 100px
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });

  // Плавный переход вверх при клике
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
