import * as actionTypes from '../constants/productConstant';


export const getMensTopReducer = (state = {mensTop: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { mensTop: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getMensBottomReducer = (state = {mensBottom: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { mensBottom: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getWomensTopReducer = (state = {womensTop: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { womensTop: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getWomensBottomReducer = (state = {womensBottom: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { womensBottom: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getMensEthinicReducer = (state = {mensEthinic: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { mensEthinic: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getWomensEthinicReducer = (state = {womensEthinic: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { womensEthinic: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getMensTopDetailReducer = (state = { mensTopId: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, menTopId: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                mensTopId: {}
            }
        default:
            return state
    }
}
export const getMensBottomDetailReducer = (state = { mensBottomId: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, menBottomId: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                mensBottomId: {}
            }
        default:
            return state
    }
}
export const getWomensTopDetailReducer = (state = { womensTopId: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false,womensTopId: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                womensTopId: {}
            }
        default:
            return state
    }
}
export const getWomensBottomDetailReducer = (state = { womensBottomId: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false,womensBottomId: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                womensBottomId: {}
            }
        default:
            return state
    }
}
export const getMensEthinicDetailReducer = (state = { mensEthinicId: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false,mensEthinicId: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                mensEthinicId: {}
            }
        default:
            return state
    }
}
export const getWomensEthinicDetailReducer = (state = { womensEthinicId: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false,womensEthinicId: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                womensEthinicId: {}
            }
        default:
            return state
    }
}