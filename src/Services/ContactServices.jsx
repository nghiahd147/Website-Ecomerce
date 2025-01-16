import { get, post, patch, deletes } from "../Utils/request"

export const ContactServices = async () => {
    const result = await get('contact')
    return result
}

export const ContactIdUpdate = async (id) => {
    const result = await get (`contact/${id}`)
    return result
}

export const createContact = async (data) => {
    const result = await post(data, 'contact')
    return result
}

export const editContact = async (data, id) => {
    const result = await patch(data, `contact/${id}`)
    return result
}

export const deleteContact = async (id) => {
    const result = await deletes(`contact/${id}`) 
    return result
}