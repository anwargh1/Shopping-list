
export const initialStateFilter  ={
    sort:[],
    byColor: [],
    byCategory:[],
    searchQuery: "",
}

export const filterReducer =(state, action) => {
    const { type, payload } = action;
    console.log(payload);
    switch(type){
        case 'SORT_BY_PRICE' :{
            console.log("SORT_BY_PRICE", payload);

            return {
                byColor: [],
                byCategory:[],
                searchQuery: "",
                sort :payload.sort
            }
        }
        case "FILTER_BY_SEARCH":
            console.log("FILTER_BY_SEARCH", payload);
      
            return {
                sort:[],
                byColor: [],
                byCategory:[],
              searchQuery: payload.searchQuery
            };

            case "FILTER_BY_COLOR":
                console.log("FILTER_BY_COLOR", payload);
          
                return {
                    sort:[],
                    searchQuery:"",
                    byCategory:[],
                  byColor: payload.byColor
                };

                case "FILTER_BY_CATEGORY":
                    console.log("FILTER_BY_CATEGORY", payload);
              
                    return {
                        sort:[],
                    searchQuery:"",
                     byColor: payload.byColor,
                      byCategory: payload.byCategory
                    };

                    case "CLEAR_FILTERS":
                        return {
                          byColor: [],
                          byCategory: [],
                          searchQuery: "",
                        };
                default:
      throw new Error(`No case for type ${type} found in filter reducer.`);
    }
}
