import { get, post, patch, deletes } from "../Utils/request"

export const PayServices = async () => {
    const result = await get('payment')
    return result
}

export const PayInfo = async (token) => {
    const result = await get(`payment?token=${token}`)
    return result
}

export const PayIdUpdate = async (id) => {
    const result = await get (`payment/${id}`)
    return result
}

export const createPay = async (data) => {
    const result = await post(data, 'payment')
    return result
}

export const editPay = async (data, id) => {
    const result = await patch(data, `payment/${id}`)
    return result
}

export const deletePay = async (id) => {
    const result = await deletes(`payment/${id}`) 
    return result
}

export const updatePayStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:3000/payment/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: status }),
      });
      return await response.json();
    } catch (error) {
      console.error("Failed to update selection:", error);
    }
  };