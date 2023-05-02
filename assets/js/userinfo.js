const menu = document.getElementById("js-menuProfile");
const [thongtin, doiMatKhau] = menu.querySelectorAll('div');

const infoThongtincoban = document.getElementById("js-thongTinCoBan");
const infoDoimatkhau = document.getElementById("js-doiMatKhau");

const handleClick = (selected, unselected) => {
    selected.classList.add('menuProfile__item-isSelect');
    unselected.classList.remove('menuProfile__item-isSelect');
}

thongtin.addEventListener("click", () => {
    infoDoimatkhau.classList.add('unactive');
    infoThongtincoban.classList.remove('unactive');

    handleClick(thongtin, doiMatKhau);
});

doiMatKhau.addEventListener("click", () => {
    infoDoimatkhau.classList.remove('unactive');
    infoThongtincoban.classList.add('unactive');

    handleClick(doiMatKhau, thongtin);
});