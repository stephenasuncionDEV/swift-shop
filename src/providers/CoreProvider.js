import { useState, useEffect, useContext, createContext } from 'react'
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_test_398294a9de672ab31322d419feef940b471fbaf308968');

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    

    useEffect(() => {

    }, [])

    const controllers = {
        
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}