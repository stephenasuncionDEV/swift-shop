import { useState, useEffect, useContext, createContext } from 'react'

export const UserContext = createContext({})
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [account, setAccount] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const controllers = {
        account
    }

    return (
		<UserContext.Provider
			value={controllers}
		>
			{ children }
		</UserContext.Provider>
	)
}