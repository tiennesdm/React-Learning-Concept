export const initialState = 0;



export const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT':  return  state+1
        case 'DECREMENT': return state-1;
        case 'DIVIDE' : return  state/2;
        case 'MULTIPLY' : return  state*2
        default: return initialState
    }
}