export const NEXT='NEXT'
export const JUMP='JUMP'

export const next =(index)=>{
    return {
        type:NEXT,
        index
    }
}

export const jump= (index) =>{
    return {
        type:JUMP,
        index
    }
}