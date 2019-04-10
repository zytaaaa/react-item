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
       default:
            return state;
    }
}