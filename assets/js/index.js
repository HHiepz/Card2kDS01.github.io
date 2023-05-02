function checkBoxNoti(messager, isStatus = 'warning', title = 'Bạn có chắc chắn chứ?') {
    let icon = {
        'warning': 'fa-solid fa-triangle-exclamation',
        'success': 'fa-solid fa-circle-check',
        'error': 'fa-solid fa-circle-xmark'
    }
    let boxNoti = `
    <div class="notiPutCard">
        <div class="notiPutCard__container">
            <div class="notiPutCard__container-title">
                <i class="notiPutCard__container-title-icon notiPutCard__container-title-icon-${isStatus} ${icon[isStatus]}"></i>
                <h3 class="notiPutCard__container-title-text">${title}</h3>
            </div>
            <div class="notiPutCard__container-content">
                <p class="notiPutCard__container-content-text">
                    ${messager}
                </p>
            </div>
            <div class="notiPutCard__container-selected">
                <button id="js-checkBoxNoti-true" class="notiPutCard__container-selected-item notiPutCard__container-selected-active">Xác nhận</button>
                <button id="js-checkBoxNoti-false" class="notiPutCard__container-selected-item notiPutCard__container-selected-cancel">Hủy</button>
            </div>
        </div>
    </div>
    `
    document.querySelector("body").insertAdjacentHTML("beforeend", boxNoti);
    let checkBoxNotiTrue = document.getElementById('js-checkBoxNoti-true');
    let checkBoxNotiFalse = document.getElementById('js-checkBoxNoti-false');
    return new Promise((resolve, reject) => {
        checkBoxNotiTrue.addEventListener('click', () => {
            document.querySelector('.notiPutCard').remove();
            resolve(true);
        })

        checkBoxNotiFalse.addEventListener('click', () => {
            document.querySelector('.notiPutCard').remove();
            resolve(false);
        })
    })
}

checkBoxNoti('Các giao diện đã xong gồm <br>"Đổi thẻ, lịch sử, rút tiền, thông tin người dùng" <br> <br> Cập nhật lần cuối 03/05/2023 04:54AM ', 'warning', 'Đang làm giao diện');
