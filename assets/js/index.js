let btnCardDiscount = document.querySelectorAll(".cardDiscount__selected-item");

btnCardDiscount.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Xóa tất cả thẻ có class là cardDiscount__selected-item--isSelect
        btnCardDiscount.forEach((btn) => {
            btn.classList.remove("cardDiscount__selected-item--isSelect");
        });
        btn.classList.toggle("cardDiscount__selected-item--isSelect");
    });
});


// Hiển thị thông báo 
function notiCardSuccess() {
    let notiPutCard = document.querySelector(".notiPutCard");
    notiPutCard.classList.add('active');
    setTimeout(() => {
        notiPutCard.classList.remove('active');
    }, 5000);
    notiPutCard.addEventListener('click', () => {
        notiPutCard.classList.remove('active');
        return;
    })
}

// Gửi thẻ
let redeemCard = document.querySelector("#js-RedeemCard");
let isCardGood = false;

redeemCard.addEventListener("click", () => {
    let maThe = document.querySelector('input[name="maThe"]').value;
    let seriThe = document.querySelector('input[name="serialThe"]').value;
    //    Lấy value option người dùng chọn loại thẻ
    let loaiThe = document.querySelector('select[name="loaiThe"]').value;
    let menhGia = document.querySelector('select[name="menhGia"]').value;

    // Kiểm tra loại thẻ
    if (loaiThe == "default") {
        alert("Vui lòng chọn loại thẻ");
        return;
    }

    // Kiểm tra mệnh giá
    if (menhGia == "default") {
        alert("Vui lòng chọn mệnh giá");
        return;
    }

    // Kiểm tra có rỗng hay không
    if (maThe == "" || seriThe == "") {
        alert("Mã thẻ & Serial không được để trống");
        return;
    }

    // Kiểm tra input có phải là số không nếu có bất kỳ ký tự nào khác số thì trả về false
    if (isNaN(maThe) || isNaN(seriThe)) {
        alert("Mã thẻ & Serial phải là số");
        return;
    }

    // Kiểm tra người dùng có chắc chắn muốn gửi thẻ
    let isConfirm = confirm("Bạn có chắc chắn muốn gửi thẻ?");
    if (!isConfirm) {
        return;
    }

    isCardGood = true;

    if (isCardGood) {
        document.querySelector('input[name="maThe"]').value = "";
        document.querySelector('input[name="serialThe"]').value = "";
        return notiCardSuccess();
    }
});

