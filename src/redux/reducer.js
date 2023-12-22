const initialState= {
    allTexts: [],
    modalState:{}
}
const manageData=(state=initialState,action)=>{
 switch(action.type){
    case "ADD_TEXT": {
        if (action.payload.id){
            const updatedArray = state.allTexts.map(obj =>
                obj.id === action.payload.id ? action.payload : obj
              );
            return {
                ...state, 
                allTexts: updatedArray
               }
        }
        return {
         ...state, 
         allTexts: [...state.allTexts,{...action.payload, id:state.allTexts.length+1}] 
        }
    }
    
    case "MODAL_STATE": {
        return {
         ...state, 
         modalState: {...action.payload}
        }
    }
    case "DELETE_TEXT": {
        const updatedArray = state.allTexts.filter(obj =>
            obj.id !== action.payload.id
          );
          return {
            ...state, 
            allTexts: updatedArray
           }
    }

    case "ADD_ALL_TEXT": {
        return {
            ...state,
            modalState: [...action.payload]
        }
    }
    default: return state
 }
}
export default manageData;