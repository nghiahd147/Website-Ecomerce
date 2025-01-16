import { get, post, patch, deletes } from "../Utils/request"

export const CartServices = async (token) => {
    const result = await get(`cart?token=${token}`)
    return result
}

export const CartIdUpdate = async (id) => {
    const result = await get (`cart/${id}`)
    return result
}

export const createCart = async (data) => {
    const result = await post(data, 'cart')
    return result
}

export const editCart = async (data, id) => {
    const result = await patch(data, `cart/${id}`)
    return result
}

export const deleteCart = async (id) => {
    const result = await deletes(`cart/${id}`) 
    return result
}

export const deleteCartAll = async () => {
    const result = await deletes('cart') 
    return result
}

export const updateCartSelection = async (id, selected) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selected }),
      });
      return await response.json();
    } catch (error) {
      console.error("Failed to update selection:", error);
    }
  };
  