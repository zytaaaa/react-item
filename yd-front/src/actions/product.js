import axios from 'axios';
export const getListData = (data)=>{
    return {
        type   : 'GETLISTS',
        payload: data
    }
}

export function fetchList(){
    return dispatch=>{
        var url = `${GLOBALURL}product`;
        return axios({
            url   : url,
            method: 'get'
        }).then(res=>{
            dispatch(getListData(res.data));
        })
    }
}