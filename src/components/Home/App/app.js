export const handlerClickMenu = () => {
  const menunav = document.querySelector(".nav_menu");
  const menuList = document.querySelector(".nav_list");
  const links = document.querySelectorAll(".nav_link");

  menunav.addEventListener("click", function () {
    menuList.classList.toggle("nav_list--show");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menuList.classList.remove("nav_list--show");
    });
  });
}
export default handlerClickMenu;