import axios from 'axios';
import {connect} from 'react-redux';
import { getUserData } from '../store/actions/userAction';
import GetUserComponent from './GetUserComponent'
const mapStateToProps=(state)=>{
    return{
        users:state.users,
        isLoading:state.loading
    }
}
// const mapDisptachToProps=async (dispatch)=>{
//     try{
//         const res = await axios.get(
//             'https://jsonholder.typicode.com/users'
//         )
//         return {
//             getData:()=>dispatch(getUserData(res))
//         }
//     }
//     catch(e){
//         console.log(e);
//     }
    
// }
export default connect(mapStateToProps,{getUserData})(GetUserComponent)
// export default connect(mapStateToProps,mapDisptachToProps)