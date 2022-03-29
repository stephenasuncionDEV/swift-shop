import { useState, useEffect } from 'react'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'

export const useCart = () => {
    const { getCart, cart, setPaymentModalState } = useCore();
    const { protectPage } = useUser();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        protectPage();
        setPaymentModalState(false);
        (async () => {
            await getCart();
		})()
    }, [])

    useEffect(() => {
        if (!cart) return;
        
        // Get total
        const total = cart.map(c => {
            return c.price.raw;
        }).reduce((sum, a) => sum + a, 0);

        setTotal(total);

    }, [cart])

    return {
        total
    }
}