// Tạo 1 file helpers

// Hàm để đặt cookie
// name, giá trị, số ngày muốn tồn tại trong cookie
export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Hàm để lấy giá trị của cookie
export function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Hàm để xóa cookie
export function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Hàm để xóa tất cả
export function deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
}

// Hàm để sửa cookie (thực chất là đặt lại cookie với giá trị mới)
export function editCookie(name, value, days) {
    setCookie(name, value, days);
}
