import { useState, useEffect, useContext, createContext } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'

export const UserContext = createContext({})
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toast = useToast();
    const router = useRouter();

    useEffect(() => {
        const check = localStorage.getItem('swiftshop-email');
        if (!check || !check.length) return;
        setEmail(check);
        setIsLoggedIn(true);
    }, [])

    const LoginAsGuest = () => {
        try {
            if (!email.length) throw new Error('Must enter an email address');
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) throw new Error('Invalid email address');

            localStorage.setItem('swiftshop-email', email);
            setIsLoggedIn(true);

            router.push('/shop', undefined, { shallow: true });
        }
        catch (err) {
            setIsEmailWrong(true);
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const protectLoginPage = () => {
        if (isLoggedIn) {
            router.push('/', undefined, { shallow: true });
        }
    }

    const Logout = () => {
        localStorage.removeItem('swiftshop-email');
        setIsLoggedIn(false);
        router.push('/', undefined, { shallow: true });
    }

    const controllers = {
        email,
        setEmail,
        isLoggedIn,
        setIsLoggedIn,
        LoginAsGuest,
        isEmailWrong,
        protectLoginPage,
        Logout,
    }

    return (
		<UserContext.Provider
			value={controllers}
		>
			{ children }
		</UserContext.Provider>
	)
}