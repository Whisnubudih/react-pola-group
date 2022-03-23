import { ITEM_FETCH_SUCCESS,ITEMID_FETCH_SUCCESS, ITEMID_DELETE_SUCCESS,CATEGORY_FETCH_SUCCESS,CATEGORY_DELETE_SUCCESS,SET_ERROR,SET_LOADING } from "../actionTypes";

// export const setItems = (payload) => {
//     return {type : ITEM_FETCH_SUCCESS, payload}
// }

// export const setItemsId = (payload) => {
//     return {type : ITEMID_FETCH_SUCCESS, payload}
// }

export const itemDeleteSucces = (payload) => {
    return {type : ITEMID_DELETE_SUCCESS, payload}
}

export const categoryDeleteSucces = (payload) => {
    return {type : CATEGORY_DELETE_SUCCESS, payload}
}

export const setItems = () => {
    return (dispatch,getState) => {
        dispatch({type:SET_LOADING,payload:true })
        dispatch({type:SET_ERROR,payload:null })
        fetch('https://warmindo-top1.herokuapp.com/items')
        .then(response => response.json())
        .then(result => 
            dispatch ({
                type:ITEM_FETCH_SUCCESS,
                payload: result
            }))
        .catch((err) =>{
            dispatch ({
                type:SET_ERROR,
                payload: err
            })
        })
        .finally(() =>{
            dispatch ({
                type:SET_LOADING,
                payload: false
            })
        })
        
    }
}

export const setCategory = () => {
    return (dispatch,getState) => {
        dispatch({type:SET_LOADING,payload:true })
        dispatch({type:SET_ERROR,payload:null })
        fetch('https://warmindo-top1.herokuapp.com/category', {
            method: 'GET', // or 'PUT'
            headers: {

              access_token: localStorage.getItem('access_token')
            },
           
          })
        .then(response => response.json())
        .then(result => 
            
            dispatch ({
                type:CATEGORY_FETCH_SUCCESS,
                payload: result
            })
            )
            
        .catch((err) =>{
            dispatch ({
                type:SET_ERROR,
                payload: err
            })
        })
        .finally(() =>{
            dispatch ({
                type:SET_LOADING,
                payload: false
            })
        })
        
    }
}

export const setItemsId = (id) => {
    return (dispatch,getState) => {
        dispatch({type:SET_LOADING,payload:true })
        dispatch({type:SET_ERROR,payload:null })
        fetch(`https://warmindo-top1.herokuapp.com/items/${id}`)
        .then(response => response.json())
        .then(result => 
            dispatch ({
                type:ITEMID_FETCH_SUCCESS,
                payload: result
            })
            )
        .catch((err) =>{
            dispatch ({
                type:SET_ERROR,
                payload: err
            })
        })
        .finally(() =>{
            dispatch ({
                type:SET_LOADING,
                payload: false
            })
        })
        
    }
}