import axios from 'axios';
export const getUserData = (data)=>{
    return {
        type   : 'GETUSER',
        payload: data
    }
}

export function fetchUser(tel){
    return dispatch=>{
        var url = `http://localhost:3000/user?tel.regexp=${tel}`;
        return axios({
            url   : url,
            method: 'get',
        }).then(res=>{
            dispatch(getUserData(res.data));
        })
    }
}