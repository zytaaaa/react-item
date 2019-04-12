var initialState=[];
var _ =require('lodash');
export const cart=(state=initialState,action)=>{
    switch(action.type){
       case 'ADDTOCART':
                var pos=_.findIndex(state,{id:action.payload.id});
                if(pos!=-1){
                    state[pos].quantity=state[pos].quantity+1;
                    state[pos].allprice=state[pos].quantity*state[pos].newprice.number2;
                    return [...state];
                }else{
                    action.payload.quantity=1;
                    action.payload.allprice=action.payload.newprice.number2;
                    return [...state,action.payload]
                }
        case 'DECREASE':
            var pos1=_.findIndex(state,{id:action.payload.id});
            var target=state[pos1];
                if(action.payload.quantity>1){
                    target.quantity=target.quantity-1;
                    target.allprice=target.newprice.number2*target.quantity;
                    return [...state];
                }else{
                    target.quantity=1;
                    target.allprice=target.newprice.number2;
                    return [...state];
                }
        case 'INCREASE':
            var pos1=_.findIndex(state,{id:action.payload.id});
            var target=state[pos1];
            if(action.payload.quantity<10){
                    target.quantity=target.quantity+1;
                    target.allprice=target.newprice.number2*target.quantity;
                    return [...state];
           }
       default:
            return state;
    }
}