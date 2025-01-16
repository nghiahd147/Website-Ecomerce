import { get, post, patch, deletes } from "../Utils/request"

export const CategoryServices = async () => {
    const result = await get('category')
    return result
}

export const CategoryIdUpdate = async (id) => {
    const result = await get (`category/${id}`)
    return result
}

export const createCategory = async (data) => {
    const result = await post(data, 'category')
    return result
}

export const editCategory = async (data, id) => {
    const result = await patch(data, `category/${id}`)
    return result
}

export const deleteCategory = async (id) => {
    const result = await deletes(`category/${id}`) 
    return result
}