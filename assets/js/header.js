let subMenu = document.querySelector("#js-headerSubMenu");

subMenu.addEventListener('click', () => {
    let subMenuUl = subMenu.querySelector('ul');
    subMenuUl.classList.toggle('active');
});