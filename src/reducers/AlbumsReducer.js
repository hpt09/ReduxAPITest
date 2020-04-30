const AlbumsReducer = (state = [], action) => {
    switch(action.type){
      case "DISPLAYALBUMS":
         return action.payload;
        default:
          return state;
    }
  }
  
  export default AlbumsReducer;