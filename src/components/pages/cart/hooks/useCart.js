import { useState, useEffect } from 'react'
import { useCore } from '@/providers/CoreProvider'

export const useCart = () => {
    const { getCart, cart } = useCore();
    const [total, setTotal] = useState();

    useEffect(() => {
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