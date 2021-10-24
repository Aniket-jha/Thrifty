
import * as actionTypes from '../constants/cartConstant.js';
import axios from 'axios';

export const addMensTopToCart = (id, quantity,productName) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/mensTop/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};
export const addMensBottomToCart = (id, quantity,productName) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/mensBottom/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};
export const addWomensTopToCart = (id, quantity,productName) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/womensTop/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};
export const addWomensBottomToCart = (id, quantity,productName) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/womensBottom/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};
export const addMensEthinicToCart = (id, quantity,productName) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/mensEthinic/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};
export const addWomensEthinicToCart = (id, quantity,productName) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/womensEthinic/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};