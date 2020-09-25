const initialState = {
    developersData: {},
  }
  
  // Types
  export const SAVE_DATA = 'saveData';
  export const DELETE_DATA = 'deleteData'
  
  // Reducer
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_DATA:
        const data = action.payload;
        
        if(!Array.isArray(data)){
          //Find index of specific object using findIndex method.    
          const objIndex = state.developersData.findIndex((obj => obj.id === data.id));

          if(objIndex){
            return state.developersData[objIndex] = data;
          }else{
            return state.developersData.push(data);
          }
        }else{
          return { ...state, developersData: action.payload }
        }

      case DELETE_DATA:{
        const objIndex = state.developersData.findIndex((obj => obj.id === data.id));
        return state.developersData.splice(objIndex,1);
      }
        
      default:
        return state
    }
  }
  
  // Action creators
  export const saveResponseData = (response) => ({
    type: SAVE_DATA,
    payload: response,
  })

  // Action creators
  export const deleteResponseData = (response) => ({
    type: DELETE_DATA,
    payload: response,
  })
  
  export const saveResponseError = (response) => ({
    type: SAVE_DATA,
    payload: {},
  })
  
  // Selectors
  export const getDevelopersData = (state) => state.developersReducer.developersData;

  export const getItemDetail = (state, itemId) => {
      const { developersData } = state.developersReducer;
      return developersData?.length && developersData.filter(item => item.id.toString() === itemId)[0]
  };
  