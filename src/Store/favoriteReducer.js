export const initialStateFavorite  ={
    products : []
}

export const favoriteReducer   = (state ,action) =>{ 
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_FAVORITE' :
            console.log("ADD_TO_FAVORITE", payload);

            return {
                ...state ,
                products :payload.products
            }
        
        case 'REMOVE_FROM_FAVORITE' :
            console.log("REMOVE_FROM_FAVORITE", payload);
        return {
            ...state ,
            products : payload.products
        }
        default:
      throw new Error(`No case for type ${type} found in favorite reducer.`);
    } 
}