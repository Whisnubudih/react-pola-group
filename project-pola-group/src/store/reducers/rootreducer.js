import { ITEM_FETCH_SUCCESS,ITEMID_FETCH_SUCCESS, ITEMID_DELETE_SUCCESS,CATEGORY_FETCH_SUCCESS,CATEGORY_DELETE_SUCCESS,SET_ERROR,SET_LOADING } from '../actionTypes'

const initialState = {
    items: [],
    itemsId: [],
    categories: []
}

function rootReducer(state = initialState,action) {
    switch (action.type) {
        case ITEM_FETCH_SUCCESS :
            return {
                ...state,
                items: action.payload
            }
        case ITEMID_FETCH_SUCCESS :
            return {
                ...state,
                    itemsId: action.payload
            } 
        case ITEMID_DELETE_SUCCESS :
            const id =action.payload
            const items = state.items.filter((item) => item.id !== id)
            return {
                ...state,
                    items,
            }
        case CATEGORY_FETCH_SUCCESS :
            return {
                ...state,
                categories: action.payload
            }       
         case CATEGORY_DELETE_SUCCESS:
            const categoryid =action.payload
            const categories = state.categories.filter((category) => category.id !== categoryid)
            return {
                ...state,
                     categories,
            }
        case SET_LOADING :
            return {
                ...state,
                    loading: action.payload
            } 
        case SET_ERROR :
            return {
                ...state,
                    error: action.payload
            }
        default:
            return state
    }
}


export default rootReducer