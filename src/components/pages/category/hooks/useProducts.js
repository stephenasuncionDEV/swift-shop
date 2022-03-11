import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCore } from '@/providers/CoreProvider'

const useProducts = () => {
    const { getCategoryProducts } = useCore();
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        if (!category) return;
        getCategoryProducts(category);
    }, [category])
}

export default useProducts