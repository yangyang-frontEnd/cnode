function reducer(state={
    data:[],
    load:false
},action) {
    switch(action.type){
        case "load_start":
            return {
                data:[],
                load:true
            }

        case "load_end":
            return {
                data:action.data,
                load:false
            }
    }
    return state
}

export default reducer