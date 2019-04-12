var defaultState=[];

function product(state = defaultState ,action){
    switch(action.type){
        case 'GETLISTS':
           return [...state,...action.payload]
        default:
            return state;
    }
}
export default product;