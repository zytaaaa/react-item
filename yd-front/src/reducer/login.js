var defaultState={};

function user(state = defaultState ,action){
    switch(action.type){
        case 'GETUSER':
           var userdata={};
           return Object.assign(userdata,state,...action.payload);
        case 'DELETEUSER':
            state={};
            return {...state};
        default:
            return state;
    }
}
export default user;