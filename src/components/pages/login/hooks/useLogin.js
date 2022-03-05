import { useState } from 'react'

export const useLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return {
        showPassword,
        setShowPassword,
        email,
        setEmail,
        password,
        setPassword,
    }
}