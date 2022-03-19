import { useState, useEffect } from 'react'
import { useCore } from '@/providers/CoreProvider'

export const useCart = () => {
    const { getCart } = useCore();
    useEffect(() => {
        (async () => {
            await getCart();
		})()
    }, [])
}