// payload is added for thunk middleware
export function increment(){
    return{
        type:'INCREMENT',
        payload:'send data'
    }
}

export function decrement(){
    return{
        type:'DECREMENT'
    }
}