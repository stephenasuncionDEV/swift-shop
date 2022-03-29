import { useState, useEffect, useContext, createContext } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import { useCore } from '@/providers/CoreProvider'

export const UserContext = createContext({})
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const { addCustomer } = useCore();
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
    }, [email])

    const LoginAsGuest = async () => {
        try {
            if (!email.length) throw new Error('Must enter an email address');
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) throw new Error('Invalid email address');

            localStorage.setItem('swiftshop-email', email);
            setIsLoggedIn(true);

            await addCustomer(email);
            
            router.push('/shop', undefined, { shallow: true });

            toast({
                title: 'Success',
                description: `Successfully logged in as ${email}`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
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

    const protectPage = () => {
        if (!isLoggedIn) {
            router.push('/', undefined, { shallow: true });
            //location.href = '/';
        }
    }

    const Logout = () => {
        localStorage.removeItem('swiftshop-email');
        localStorage.removeItem('swiftshop-token');
        setIsLoggedIn(false);
        router.push('/', undefined, { shallow: true });
    }

    const CopyEmail = () => {
        navigator.clipboard.writeText(email);
        toast({
            title: 'Success',
            description: 'Copied email to clipboard',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
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
        CopyEmail,
        protectPage,
    }

    return (
		<UserContext.Provider
			value={controllers}
		>
			{ children }
		</UserContext.Provider>
	)
}