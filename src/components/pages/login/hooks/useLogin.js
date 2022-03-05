import { useState } from 'react'

export const useLogin = () => {
    const [email, setEmail] = useState('');

    return {
        email,
        setEmail,
    }
}