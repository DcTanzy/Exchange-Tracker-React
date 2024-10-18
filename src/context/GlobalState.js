import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";

//initial State

const initialState = {
    transactions: [
      
    ]
}

//Create Context 

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);

    //Actions 

    function deleteTransaction(id) {
        dispatch({
            type: 'DElETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}