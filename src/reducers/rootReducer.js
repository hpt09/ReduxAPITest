const initState = {
    albums: [],
    pics: [],
    name: ''
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "DISPLAYALBUMS":
           return {...state,
           albums: action.payload
           }

           case "DISPLAYPICS":
            return {...state,
            pics: action.payload
            }

            case "DISPLAYNAME":
                return {...state,
                name: action.payload
                }
          default:
            return state;
      }
}

export default rootReducer;