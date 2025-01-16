export const nameCategory = (name) => {
    return {
        type: 'queryCate',
        status: name
    }
}

export const resetCategory = () => {
    return {
        type: 'reset',
        resetStatus: ""
    }
}