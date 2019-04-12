var defaultState={};

function user(state = defaultState ,action){
    switch(action.type){
        case 'GETUSER':
           var userdata={};
           return Object.assign(userdata,state,...action.payload);
        default:
            return state;
    }
}
export default user;