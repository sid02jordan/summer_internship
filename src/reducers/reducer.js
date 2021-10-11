const initialState={
    searchedField : ""
}

export default function reducer(state=initialState,action){
    if(action.type==="change"){
        console.log('Value going to be changed by redux',action.payload)
        console.log('state.searchfield= ',state.searchedField)
        return {searchedField: action.payload};
    }
    else{
        return state;
    }
}