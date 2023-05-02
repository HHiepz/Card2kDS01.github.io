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

function boxNoti(messager, isStatus = 'warning', title = 'Hệ thống') {
    let icon = {
        'warning': 'fa-solid fa-triangle-exclamation',
        'success': 'fa-solid fa-check',
        'error': 'fa-solid fa-times'
    }
    let boxNoti = ` 
    <div class="notiPutCard"> 
        <div class="notiPutCard__container"> 
            <div class="notiPutCard__container-title"> 
            <i class="notiPutCard__container-title-icon notiPutCard__container-title-icon-${isStatus} ${icon[isStatus]}"></i> 
                <h3 class="notiPutCard__container-title-text">${title}</h3> 
            </div> 
            <div class="notiPutCard__container-content"> 
                <p class="notiPutCard__container-content-text"> ${messager} </p> 
            </div> 
        </div>
    </div>`;

    // Thêm boxNoti vào cuối body
    document.querySelector("body").insertAdjacentHTML("beforeend", boxNoti);

    // Nhấn ra ngoài box noti thì tự động tắt thông báo
    let notiPutCard = document.querySelector('.notiPutCard');
    notiPutCard.addEventListener('click', () => {
        return document.querySelector(".notiPutCard").remove();
    })
    let notiPutCardContainer = document.querySelector('.notiPutCard__container');
    notiPutCardContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    // Xóa boxNoti sau 5s
    setTimeout(() => {
        document.querySelector(".notiPutCard").remove();
    }, 5000)
}

function checkBoxNoti(messager, isStatus = 'warning', title = 'Bạn có chắc chắn chứ?') {
    
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
        return boxNoti('Vui lòng chọn loại thẻ.', 'error');
    }

    // Kiểm tra mệnh giá
    if (menhGia == "default") {
        return boxNoti('Vui lòng chọn mệnh giá.', 'error');
    }

    // Kiểm tra có rỗng hay không
    if (maThe == "" || seriThe == "") {
        return boxNoti('Vui lòng điền đầy đủ thông tin mã thẻ & serial.', 'error');
    }

    // Kiểm tra input có phải là số không nếu có bất kỳ ký tự nào khác số thì trả về false
    if (isNaN(maThe) || isNaN(seriThe)) {
        return boxNoti('Mã thẻ & Serial phải là số.', 'error');
    }

    // Kiểm tra người dùng có chắc chắn muốn gửi thẻ
    isCardGood = true;
    if (confirm("Bạn có chắc chắn muốn gửi thẻ?")) {
        if (isCardGood) {
            document.querySelector('input[name="maThe"]').value = "";
            document.querySelector('input[name="serialThe"]').value = "";
            boxNoti('Bạn đã gửi thẻ thành công! Hệ thống đang duyệt...', 'success');
        }
    }
});