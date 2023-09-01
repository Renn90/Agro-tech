import React from "react";
import { useReducer } from "react";
import { AllProducts } from "./productsStore";

const Cartcontext = React.createContext({
    cart: [],
    searchArray: [],
    searchValue: '',
    cartModal: false,
    totalAmount: 0,
    productCategory: AllProducts,
  });

const reducer = (state, action) => {
    if(action.type   === 'ADDTOCART'){
      const amount = 1
      const alreadyInCart = state.cart.find((item)=>item.id === action.value.id)
      const item = {...action.value, amount}
      if(alreadyInCart){
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.value.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        })
        return { ...state, cart: updatedCart, totalAmount: state.totalAmount + action.value.price };
      }else{
        return {...state, cart: [...state.cart, item], totalAmount: state.totalAmount + action.value.price}
      }
    }
    if(action.type === 'INCREASE'){
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.value.id && item.amount < item.quantity) {
            return { ...item, amount: item.amount + 1 };
        }
        return item;
      })
      return { ...state, cart: updatedCart, totalAmount: state.totalAmount + action.value.price };
    }
    if(action.type === 'REDUCE'){
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.value.id && item.amount >  1) {
            return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      return { ...state, cart: updatedCart, totalAmount: state.totalAmount - action.value.price };
    }
    if(action.type === 'CLEAR'){
      const filterCart = state.cart.filter((item) => 
         item.id !== action.value.id
      ) 
      console.log(filterCart)
      return {...state, cart: filterCart,totalAmount: state.totalAmount - (action.value.price * action.value.amount)}
    }
    if(action.type === 'SEARCH'){
      const filterSearch = AllProducts.filter(item=> item.name.replace(/\s/g, '').toLowerCase().includes(action.value.replace(/\s/g, '').toLowerCase()) || item.description.replace(/\s/g, '').toLowerCase().includes(action.value.replace(/\s/g, '').toLowerCase()))
     return {...state, searchArray: filterSearch, cartModal: true, searchValue: action.value}
    }
    if(action.type === 'CLOSEMODAL'){
      return {...state, cartModal: false}
    }
    if(action.type === 'FILTEREQUIPMENTS'){
      const kitCart = AllProducts.filter((item)=> item.category === 'equipment')
      return {...state, productCategory: kitCart}
    }
    if(action.type === 'FILTERTOOLS'){
      const kitCart = AllProducts.filter((item)=> item.category === 'tools')
      return {...state, productCategory: kitCart}
    }
    if(action.type === 'FILTERSYSTEMS'){
      const kitCart = AllProducts.filter((item)=> item.category === 'systems')
      return {...state, productCategory: kitCart}
    }
    if(action.type === 'RESET'){
      return {...state, productCategory: AllProducts}
    }

    return state;
}

export const CartReducer = (props) => {
    const [state, dispatchfn] = useReducer(reducer, {
      cart: [],
      searchArray: [],
      searchValue: '',
      cartModal: false,
      totalAmount: 0,
      productCategory: AllProducts,
    })
  return (
    <Cartcontext.Provider value={
        {state, dispatchfn}
    }>
      {props.children}
    </Cartcontext.Provider>
  )
}

export default Cartcontext
