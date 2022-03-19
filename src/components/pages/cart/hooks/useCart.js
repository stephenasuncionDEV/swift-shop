import { useState, useEffect } from 'react'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'

export const useCart = () => {
    const { getCart, cart } = useCore();
    const { protectPage } = useUser();
    const [total, setTotal] = useState();

    useEffect(() => {
        protectPage();

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