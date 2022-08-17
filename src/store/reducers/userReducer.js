// common/global states = 2-users,loading
// action returns an object : type and payload

const initialState = {
    users:[],
    loading:true
}

function userReducer(state = initialState,action){
    switch(action.type){
        case 'GET_USER':
            return {
                users:action.payload,
                loading:false
            }
        case 'GET_INITIAL_STATE':
            return{
                users:initialState.users,
                loading:initialState.loading
            }
        default:
            return state
    }
}
export default userReducer;