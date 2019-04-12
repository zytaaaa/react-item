export const addtocart=(data)=>{
    return {
        type:'ADDTOCART',
        payload:data
    }
}

export const decrease=(data)=>{
    return {
        type:'DECREASE',
        payload:data
    }
}
export const increase=(data)=>{
    return {
        type:'INCREASE',
        payload:data
    }
}

