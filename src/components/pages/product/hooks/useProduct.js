import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCore } from '@/providers/CoreProvider'

export const useProduct = () => {
    const { getProduct } = useCore();
    const router = useRouter();
    const [product, setProduct] = useState({});
    const { productId } = router.query;

    useEffect(() => {
        if (!productId) return;

        (async () => {
            const res = await getProduct(productId);
            console.log(res)
            setProduct(res);
		})()

    }, [productId])

    return {
        product,
    }
}