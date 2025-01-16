import { get, post, deletes, patch } from '../Utils/request'

// Tối ưu tiếp bên file Utils
// Ở bên file này chỉ cần gọi phương thức và truyền tên api vào là được

export const ProductServices = async () =>  {
    const result = await get('products')    
    return result // có kết quả của data
}

export const ProductServicesId = async (id) =>  {
    const result = await get(`products?category=${id}`)
    return result // có kết quả của data
}

export const ProductId = async (id) => {
    const result = await get ('products/' + id)
    return result
}

export const ProductIdUpdate = async (id) => {
    const result = await get ('products/' + id)
    return result
}

export const createProduct = async (data) => {
    const result = await post(data, 'products')
    return result
}

export const deleteProduct = async (id) => {
    const result = await deletes(`products/${id}`) 
    return result
}

export const editProduct = async (data, id) => {
    const result = await patch(data, `products/${id}`)
    return result
}