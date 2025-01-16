// File này đã chuẩn không cần phải chỉnh sửa gì nếu có chỉ cần chỉnh sửa API_DOMAIN

const API_DOMAIN = 'http://localhost:3000/'

// Đối số patch nhận giá trị tên api + API_DOMAIN sẽ lấy được api đó
export const get = async (patch) => {
    const res = await fetch(API_DOMAIN + patch)
    // Chuyển về dạng js rồi trả về kết quả
    const result = await res.json()
    return result
}

export const post = async (data, patch) => {
    const res = await fetch(API_DOMAIN + patch, {
        method: "POST", // phg thức
        headers: {
            "Content-Type" : "application/app" // cặp key value bắt buộc để post
        },
        body: JSON.stringify(data) // chuyển từ js sang json để post vào db
    })
    const result = await res.json()
    return result
}

export const deletes = async (patch) => {
    const res = await fetch(API_DOMAIN + patch, {
        method: "DELETE", // phg thức
    })
    const result = await res.json()
    return result
}

export const patch = async (data, patch) => {
    const res = await fetch(API_DOMAIN + patch, {
        method: "PATCH", // phg thức
        headers: {
            "Content-Type": "application/app" // cặp key value bắt buộc để post
        },
        body: JSON.stringify(data) // chuyển từ js sang json để post vào db
    })
    //(4)
    const result = res.json(data)
    return result
}