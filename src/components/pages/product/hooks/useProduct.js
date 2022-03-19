import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'

export const useProduct = () => {
    const { getProduct } = useCore();
    const { protectPage } = useUser();
    const router = useRouter();
    const [product, setProduct] = useState();
    const { productId } = router.query;

    useEffect(() => {
        protectPage();
        
        if (!productId) return;

        (async () => {
            const res = await getProduct(productId);
            setProduct(res);
		})()

    }, [productId])

    return {
        product,
    }
}