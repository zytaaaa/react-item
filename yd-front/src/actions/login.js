import axios from 'axios';
export const getUserData = (data)=>{
    return {
        type   : 'GETUSER',
        payload: data
    }
}

export function fetchUser(tel){
    return dispatch=>{
        var url = `${GLOBALURL}user?tel=${tel}`;
        return axios({
            url   : url,
            method: 'get',
        }).then(res=>{
            if(res.data){
              return dispatch(getUserData(res.data));
            }else{
                return dispatch(getUserData(null))
            }
        })
    }
}

export const getUserOut = ()=>{
    return {
        type   : 'DELETEUSER'
    }
}